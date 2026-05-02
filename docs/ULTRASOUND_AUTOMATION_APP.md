# Создание веб-приложения для автоматизации протокола УЗИ внутренних органов

## 1) Цель
Заменить бумажный/Word-протокол УЗИ на веб-приложение, которое:
- ускоряет ввод данных исследования;
- автоматически подставляет дату/пациента;
- валидирует значения относительно референсов;
- формирует черновик заключения по правилам;
- сохраняет протокол и отдает PDF;
- поддерживает интеграцию с МИС через FHIR/HL7.

## 2) Рекомендуемый стек
- **Frontend**: React + TypeScript, React Hook Form, Yup, MUI.
- **Backend**: Django + Django REST Framework.
- **БД**: PostgreSQL.
- **PDF**: WeasyPrint (HTML/CSS → PDF).
- **Интеграция**: FHIR (DiagnosticReport/Observation), при необходимости HL7 v2 ORU^R01.
- **Доставка**: Docker + docker-compose, Nginx.

## 3) Архитектура
```text
[Browser]
   ↕ HTTPS
[React SPA] ↔ [Django REST API] ↔ [PostgreSQL]
                      ↕
           [PDF service] [FHIR adapter]
```

## 4) Модель данных (минимальная)

### Patient
- `id`
- `external_id` (ID из МИС)
- `name`
- `birth_date`
- `gender` (`M|F`)
- `department`

### Protocol
- `id`
- `patient_id`
- `doctor_id`
- `exam_datetime`
- `technical` (JSON: датчик, частота, подготовка, ограничения)
- `organs` (JSON: печень, ЖП, ПЖ, селезенка, почки, надпочечники, сосуды, асцит, лимфоузлы)
- `notes` (text)
- `conclusion` (text)
- `status` (`draft|final|signed`)
- `created_at`, `updated_at`

### ReferenceRange
- `organ`, `parameter`
- `min_value`, `max_value`, `unit`
- `gender` (optional)
- `age_min`, `age_max`

### ConclusionRule
- `code`
- `expression` (DSL-условие, **без eval**)
- `text`
- `priority`
- `active`

## 5) REST API (MVP)

### Пациенты
- `GET /api/patients?search=`
- `GET /api/patients/{id}`

### Протоколы
- `POST /api/protocols` — создание
- `GET /api/protocols/{id}` — просмотр
- `PATCH /api/protocols/{id}` — частичное обновление
- `POST /api/protocols/{id}/validate` — проверка на референсы
- `POST /api/protocols/{id}/generate-conclusion` — генерация текста
- `GET /api/protocols/{id}/pdf` — экспорт PDF
- `GET /api/protocols/{id}/fhir` — DiagnosticReport JSON

## 6) Валидация и бизнес-правила

### UI/форма
- обязательные поля: пациент, дата, ключевые органные поля;
- маски/ограничения: числовые поля только в допустимом диапазоне;
- справочники: эхогенность, контуры, очаговые изменения, и т.д.

### Серверная валидация
- неизбыточная серверная проверка для всех чисел и enum;
- проверка согласованности (например, «асцит = нет» + объем асцита > 0 → ошибка);
- сравнение с `ReferenceRange` и возврат:
  - `normal`
  - `out_of_range_low`
  - `out_of_range_high`

## 7) Безопасная генерация заключения
Вместо `eval` рекомендуется:
1. хранить rule expression в ограниченном DSL (например: `liver.length_mm > 160 AND liver.echogenicity = "diffuse"`);
2. парсить выражения через безопасный интерпретатор;
3. применять только whitelist полей и операторов (`=`, `!=`, `>`, `<`, `>=`, `<=`, `AND`, `OR`);
4. собирать фразы по приоритету и дедупликации.

Пример итогового алгоритма:
1. нормализовать payload протокола;
2. вычислить срабатывающие правила;
3. отсортировать по `priority DESC`;
4. объединить тексты в единое заключение;
5. если нет срабатываний — вернуть фразу «эхопризнаков значимой патологии не выявлено».

## 8) Интеграция с МИС

### FHIR (рекомендуется)
- `Patient` ↔ пациент из МИС.
- `DiagnosticReport` ↔ итог УЗИ.
- `Observation` ↔ отдельные измерения (размер печени, диаметр воротной вены и пр.).

Минимальные поля в `DiagnosticReport`:
- `status = final`
- `code` (LOINC УЗИ ОБП)
- `subject` (Patient reference)
- `effectiveDateTime`
- `conclusion`
- `result[]` (ссылки на Observation)

## 9) PDF-выгрузка
- HTML-шаблон с таблицами измерений и итоговым заключением;
- генерация через WeasyPrint;
- шаблон включает данные врача, отделения, дату/время, подпись.

## 10) Развертывание
- `db` (PostgreSQL)
- `backend` (Django + Gunicorn)
- `frontend` (React build)
- `nginx` (reverse proxy + static)

Для локального старта используйте `ultrasound-app/docker-compose.yml`.

## 11) План внедрения (рекомендуемый)
1. **Sprint 1**: модели, CRUD пациентов/протоколов, базовая форма.
2. **Sprint 2**: серверная валидация и подсветка отклонений.
3. **Sprint 3**: генератор заключений и редактируемый черновик.
4. **Sprint 4**: PDF, аудит-лог, роли (врач/зав.отделением/админ).
5. **Sprint 5**: FHIR-интеграция и пилот в отделении.

## 12) Нефункциональные требования
- Аутентификация: JWT/OAuth2 + RBAC.
- Аудит: логировать изменения протокола и подпись.
- SLA: сохранение черновика < 500 мс.
- Резервирование: ежедневный backup PostgreSQL.
- Соответствие локальным требованиям по защите медданных.
