# Design System we Stil Gollanmasy

Bu gollanma sahypadaky komponentleriň sazlaşygyny saklamak üçin umumy tokenleri, tipografiýa, panelleri we interaktiw ýagdaýlary kesgitleýär.

## Temany düzýän tokenler
| Token | Bahasy | Ulanylyşy |
| --- | --- | --- |
| `--ink` | `#0f172a` | Esasy tekst reňki |
| `--muted` | `#475569` | Ikiňçi tekst/ýardamçy maglumat |
| `--accent` / `--accent-strong` | `#2563eb` / `#1d4ed8` | CTA-lar, fokus, linkler |
| `--surface` / `--card` | `#f6f7fb` / `#ffffff` | Panel we fon gatlaklary |
| `--border` | `#e2e8f0` | Bölümler, kartlar, forma meýdanlary |
| `--success` / `--danger` | `#0f9d58` / `#ef4444` | Status pill/feedback |
| `--shadow-lg` / `--shadow-md` | kölege presetleri | Kart/CTA basgançaklaryny görkezýär |
| `--radius-card` / `--radius-soft` | `14px` / `10px` | Burça radius presetleri |
| `--space-1..5` | `4px`…`24px` | Spacing/boşluk modullary |
| `--max-width` | `1080px` | App-shell giňligi |

### Tipografiýa
- Şrift: `Inter`, `Segoe UI`, system-ui (global).
- Başlyk derejeleri: 800 agram, 1.2 line-height.
- Giriş/label: 600–700 agram, 0.96–1.05 rem aralyk.
- Sütükleşme üçin `font-size: clamp(...)` ulanmak responsiwligi üpjün edýär.

### Grid we breakpoint gollanmasy
- **Kolonnalar**: hero bölümi 2 kolonna (desktop), `auto-fit` gridler selector/filter üçin.
- **Breakpoints**: `1100px` (kolonnadan 1-e düşýär), `800px` (CTA/tekst stak), `640px` (forma elementleri 100% giňlik), `520px` (padding/margin azaldylýar).
- CSS Grid/Flex kompozisiýalaryny ulanyp, komponentleriň özara täsirini üýtgetmezden 1 kolonna düşýän görünüşe geçmek.

## Komponent kitapçasy
- **Buttons (`.cta-button`, `.ghost-button`)**: radius `--radius-soft`, 700–800 agram; fokus görünýän outline; disabled ýagdaýynda `opacity: 0.6`.
- **Cards (`.card`, `.panel`, `.meta-card`)**: `--shadow-md/lg`, radius `--radius-card`; içindäki başlyklar üçin `.card__header` fleks konteýneri.
- **Form kontrolleri**: `#question-set`, `#question-filter`, `#grade-filter`, `input[type=text]` umumy padding we border tokenleri; label-lar 700 agram.
- **Progress bar (`.progress-track` + `.progress-bar`)**: radiusly container, gradient dolduryş, `aria-valuenow/aria-valuemax` arkaly elýeterlilik.
- **Status pilleri (`.pill`)**: inline-flex, kölege we reňk presetleri; `.pill--status` warianty oflaýn/ýalňyş ýagdaýlaryny görkezýär.
- **Tablisalar (`.review-table`)**: 100% giňlik, zebra-fon, sticky başlyk üçin kölege; `table-wrapper` bloky horizontal scroll üpjün edýär.
- **Feedback banneri (`.feedback`)**: `aria-live` statusy bilen, success/danger reňk presetleri.

## States we interaktiwlik
- Fokus görkezilýän outline: `outline: 3px solid rgba(37, 99, 235, 0.3);` + offset.
- Hover/aktiv effektleri `prefers-reduced-motion` ýagdaýynda ýatyrylýar.
- Prognoz/ýükleme ýagdaýlary `pill` elementlerinde `aria-live="polite"` bilen bildirilýär.

## Elýeterlilik we semantika
- Baş sahypada skip-link: `href="#main-content"`, klawiatura bilen elýeterli.
- Progress bary `role="progressbar"` we `aria-valuetext` bilen maglumat berýär.
- Form elemenlerinde label/placeholder + helper-text bar; netije modulynda `aria-live` bilen status berilýär.
- Table caption (sr-only) arkaly mazmun konteksti görkezilýär.

## Faýl gurluşy we giňeldiş
- Tokenler we stil presetleri: `style.css`-iň başynda.
- Dokumena gurluşy: `docs/UX_ARCHITECTURE.md` (flow/wireframe) we bu faýl.
- Geljekde komponent goşulanda: täze klasslar/variýantlar üçin α) token ulanmagyna üns beriň, β) ARIA/keyboard aýratynlygyny goşuň, γ) grid breakpoints-e laýyk padding/spacing ulanyň.
