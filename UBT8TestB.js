let questions = [

    // ——— ENGLISH ———

    { prompt: "We __________ (not see) our neighbor today.",
      options: ["will not seen", "haven't seen", "will not see"],
      answer: "haven't seen"
    },

    { prompt: "IUCN was created in ______",
      options: ["1975", "1964", "1982"],
      answer: "1964"
    },

    { prompt: "Endangered animal means…",
      options: [
        "an animal that is no longer lives anywhere",
        "to make smth bad happen",
        "in danger of becoming extinct"
      ],
      answer: "in danger of becoming extinct"
    },

    { prompt: "Tawus and Maral have been learning English ______ six years.",
      options: ["since", "for", "been"],
      answer: "for"
    },

    { prompt: "How many colours are there in the Red Date book?",
      options: ["2", "4", "3"],
      answer: "3"
    },

    { prompt: "Reduce means…",
      options: [
        "To use smth again",
        "Smth that is not used no longer",
        "To make smth smaller"
      ],
      answer: "To make smth smaller"
    },

    { prompt: "“Would you like something to eat?” “No thanks. We ______ already ______ (eat).”",
      options: ["have/eaten", "had/eat", "have/eating"],
      answer: "have/eaten"
    },

    { prompt: "She is keen ______ pursuing higher education in the US.",
      options: ["in", "at", "on"],
      answer: "on"
    },

    { prompt: "I hope they __________ (repair) this road by next summer.",
      options: ["will have/repaired", "had/repaired", "has/repaired"],
      answer: "will have/repaired"
    },

    { prompt: "Structure of the future perfect is ______",
      options: ["S+had+V3+O", "S+have+will+V3+O", "S+have/has+will+V3+O"],
      answer: "S+have/has+will+V3+O"
    },

    // ——— RUS DILI ———

    { prompt: "Он научился читать в 6 лет и любил книги о путешествиях. Кто это?",
      options: ["В. Распутин", "А. Грин", "М.Ю. Лермонтов"],
      answer: "А. Грин"
    },

    { prompt: "Что увидел Сафонов в шкафу учительницы?",
      options: ["стеклянную вазу", "увидел свой портрет", "шахматы"],
      answer: "увидел свой портрет"
    },

    { prompt: "Кто автор строк: «Есть в осени первоначальной...»?",
      options: ["А.С. Пушкин", "И.А. Бунин", "Ф.И. Тютчев"],
      answer: "И.А. Бунин"
    },

    { prompt: "В каком возрасте Пушкин поступил в лицей?",
      options: ["7 лет", "9 лет", "12 лет"],
      answer: "12 лет"
    },

    { prompt: "Кто автор картины «На севере диком»?",
      options: ["Левитан", "Репин", "Шишкин"],
      answer: "Левитан"
    },

    { prompt: "Кто оказал большое влияние на маленького Пушкина?",
      options: ["отец", "бабушка", "няня"],
      answer: "няня"
    },

    { prompt: "Сколько видов связи слов в словосочетании?",
      options: ["2", "4", "3"],
      answer: "3"
    },

    { prompt: "Что отправила учительница со своей родины?",
      options: ["макароны", "яблоки", "рис"],
      answer: "рис"
    },

    { prompt: "Кем был Павел Сафонов?",
      options: ["врачом", "учителем", "конструктором"],
      answer: "конструктором"
    },

    { prompt: "С кем встретился Мцыри в лесу?",
      options: ["с волком", "с медведем", "с барсом"],
      answer: "с барсом"
    },

    // ——— JAPANESE ———

    { prompt: "*ME* - ?", options: ["ネ", "メ", "ト"], answer: "メ" },

    { prompt: "se,ma,fu katakana.",
      options: ["セ・ム・ラ", "セ・フ・ヌ", "セ・マ・フ"],
      answer: "セ・マ・フ"
    },

    { prompt: "Ýene-de gelip duruň!",
      options: ["またきてください", "まだきてください", "またきいてください"],
      answer: "またきてください"
    },

    { prompt: "Kiçi balak barmy?",
      options: [
        "ちさいの　ズボンは　ありますか",
        "おおきの　ズボンは　ありますか",
        "ちさいの　ドレス　ありますか"
      ],
      answer: "ちさいの　ズボンは　ありますか"
    },

    { prompt: "Geýip görsem bolýarmy?",
      options: [
        "きてみてもいいですが",
        "きいいてみてもいいですか",
        "きてみてもいいですか"
      ],
      answer: "きてみてもいいですか"
    },

    // ——— TÜRKMEN DILI ———

    { prompt: "Söz düzümlerinde baglanyşyk tärleri?",
      options: [
        "Sanda we ýöňkemede baglanyşyk",
        "Düşümler arkaly baglanyşyk",
        "Ylalaşma, ýanaşma, eýerme arkaly"
      ],
      answer: "Ylalaşma, ýanaşma, eýerme arkaly"
    },

    { prompt: "Türkmen dilinde näçe sany aýyrgyç bar?",
      options: ["5", "7", "8"],
      answer: "8"
    },

    { prompt: "Sözlemler aýdylşyna görä toparlara bölünýär?",
      options: [
        "Habar, sorag, ýüzlenme, sorag-ýüzlenme",
        "Aýyrgyç, doldurgyç, sözlem",
        "Söz düzümi, sözlemiň eýesi"
      ],
      answer: "Habar, sorag, ýüzlenme, sorag-ýüzlenme"
    },

    { prompt: "Sözlemiň baş agzalary?",
      options: ["Eýe bilen habar", "Habar bolup gelen söze", "Aýyklaýjy agzalar"],
      answer: "Eýe bilen habar"
    },

    { prompt: "Söz düzümleri nädip toparlanýar?",
      options: [
        "Erkin söz düzümi",
        "Durnukly söz düzümi",
        "Isim we işlik söz düzümleri"
      ],
      answer: "Erkin söz düzümi"
    },

    // ——— EDEBIÝAT ———

    { prompt: "“Wagzy-Azat” eseriniň haýsy baby perzent borjy barada?",
      options: [
        "I bap – 2 bölüm",
        "II bap – 4 bölüm",
        "IV bap – 3 bölüm"
      ],
      answer: "II bap – 4 bölüm"
    },

    { prompt: "“Gorkut ata” eposy?",
      options: [
        "Meşhur edebi ýadygärlik eser",
        "Gahrymançylyk eseri",
        "Öwüt-ündew eseri"
      ],
      answer: "Meşhur edebi ýadygärlik eser"
    },

    { prompt: "“Mugallymyň gyzy” powestiniň baş gahrymany?",
      options: ["Gulnar", "Abadan", "Dursun"],
      answer: "Dursun"
    },

    { prompt: "“Görogly” şadessanyndaky bölüm?",
      options: ["Kempir", "Harman däli", "Ar alyş"],
      answer: "Harman däli"
    },

    { prompt: "“Maýagözel” powestiniň awtory?",
      options: ["B. Kerbabaýew", "S. Annasähedow", "Seýitnyýaz Ataýew"],
      answer: "Seýitnyýaz Ataýew"
    },

    // ——— TÜRKMENISTAN TARÝHY ———

    { prompt: "Ýabgu sözüň manysy?",
      options: [
        "Patyşalara dakylýan at",
        "Serkerde derejesi",
        "Ýer eýeçiligi"
      ],
      answer: "Patyşalara dakylýan at"
    },

    { prompt: "Nyzamylmülk kim?",
      options: [
        "Wizantiýanyň paýtagty",
        "Seljuk hökümdary",
        "Seljuklylaryň weziri"
      ],
      answer: "Seljuklylaryň weziri"
    },

    { prompt: "Daňdanakan söweşi haçan?",
      options: ["24.05.1040", "23.05.1940", "28.05.1040"],
      answer: "24.05.1040"
    },

    { prompt: "Togrul beg kim?",
      options: [
        "Wizantiýanyň hökümdary",
        "Seljuklaryň hökümdary",
        "Gaznaly patyşasy"
      ],
      answer: "Seljuklaryň hökümdary"
    },

    { prompt: "Malazgirt söweşi haçan?",
      options: ["26.08.1071", "23.05.1040", "26.09.1071"],
      answer: "26.08.1071"
    },

    // ——— WORLD HISTORY ———

    { prompt: "Spahi sözüň manysy?",
      options: ["Düzgün tertip", "Ýer eýeçilik ulgamy", "Halk häkimiýeti"],
      answer: "Ýer eýeçilik ulgamy"
    },

    { prompt: "Sefewileriň paýtagty?",
      options: ["Yspyhan", "Bagdat", "Tähran"],
      answer: "Yspyhan"
    },

    { prompt: "Nedir şa kim?",
      options: [
        "Sefewiler hökümdary",
        "Osman patyşasy",
        "Eýran şasy"
      ],
      answer: "Eýran şasy"
    },

    { prompt: "Binagärçiligiň akymlary?",
      options: ["Barokko, Rokoko, klassisizm", "Heýkeltaraşlyk", "Zergärçilik"],
      answer: "Barokko, Rokoko, klassisizm"
    },

    { prompt: "Wizantiýanyň paýtagty?",
      options: ["Anadoly", "Konstantinopol", "Afina"],
      answer: "Konstantinopol"
    },

    // ——— GEOGRAFIÝA ———

    { prompt: "Türkmenistanyň beýik daglary haýsylar?",
      options: [
        "Garabil, Köýtendag",
        "Köpetdag, Köýtendag, Uly Balkan, Kiçi Balkan",
        "Köpetdag, Bathyz, Uly Balkan"
      ],
      answer: "Köpetdag, Köýtendag, Uly Balkan, Kiçi Balkan"
    },

    { prompt: "Garagum çöli näçe bölek?",
      options: ["3", "2", "1"],
      answer: "3"
    },

    { prompt: "“Altyn Asyr” kölüniň I tapgyry haçan ulanylmaga berildi?",
      options: ["2008", "2007", "2009"],
      answer: "2009"
    },

    { prompt: "Türkmenistanyň meýdany?",
      options: ["370 mln km²", "491,21 müň km²", "481,2 müň km²"],
      answer: "491,21 müň km²"
    },

    { prompt: "Garagum çölüniň meýdany?",
      options: ["350 müň km²", "370 müň km²", "360 müň km²"],
      answer: "350 müň km²"
    },

    { prompt: "Türkmenistan näçe sagat zolak?",
      options: ["3", "4", "5"],
      answer: "5"
    },

    { prompt: "Iri derýalar haýsylar?",
      options: [
        "Amyderýa, Tejen, Murgap, Etrek, Sumbar, Garagum, Türkmen derýasy",
        "Garagum, Amyderýa, Tejen",
        "Murgap, Etrek, Sumbar"
      ],
      answer: "Amyderýa, Tejen, Murgap, Etrek, Sumbar, Garagum, Türkmen derýasy"
    },

    { prompt: "Il population?",
      options: ["5 mln+", "6 mln+", "7 mln+"],
      answer: "7 mln+"
    },

    { prompt: "Hazar deňziniň meýdany?",
      options: ["350 müň km²", "370 müň km²", "360 müň km²"],
      answer: "370 müň km²"
    },

    { prompt: "Toprak näme?",
      options: [
        "Ýeriň hasyl berýän gatlagy",
        "Gazylyp alynýan baýlyklaryň ýeri",
        "Suwarymly ýer"
      ],
      answer: "Ýeriň hasyl berýän gatlagy"
    },

    // ——— BIOLOGY ———

    { prompt: "Haýwanlary öwrenýän ylym?",
      options: ["mikologiýa", "zoologiýa", "stomatologiýa"],
      answer: "zoologiýa"
    },

    { prompt: "Dermanlyk ösümlikler arkaly bejerilýän keseller ylymy?",
      options: ["fitoterapiýa", "algologiýa", "sitoligiýa"],
      answer: "fitoterapiýa"
    },

    { prompt: "Ösümlikleri öwrenýän ylym?",
      options: ["anatomiýa", "biologiýa", "botanika"],
      answer: "botanika"
    },

    { prompt: "Içýanlaryň Türkmenistanda görnüşi?",
      options: ["6", "4", "8"],
      answer: "4"
    },

    { prompt: "Doly öwrülişikli mör-möjek?",
      options: ["gurjajyk", "imagolar", "uçýan haýwanlar"],
      answer: "gurjajyk"
    },

    { prompt: "K.I. Skrýabin näme öwrenýär?",
      options: ["balyk", "gurçuk", "ýyrtyjy haýwan"],
      answer: "gurçuk"
    },

    { prompt: "Medeni ösümlikleriň gelip çykyşy?",
      options: ["arça", "kerkaw", "ýabany ösümlik"],
      answer: "ýabany ösümlik"
    },

    { prompt: "Bir öýjükli haýwanlar?",
      options: [
        "ýaşyl ewglena, gidra",
        "amýoba, ssifoid",
        "wolwoks, infuzoriýa, ewglena, amýoba"
      ],
      answer: "wolwoks, infuzoriýa, ewglena, amýoba"
    },

    { prompt: "Ýapragyň daşky görnüşi?",
      options: ["plastinka", "figura", "iňňe şekilli"],
      answer: "plastinka"
    },

    { prompt: "Hormatly Arkadagymyzyň ösümlikler baradaky kitaby?",
      options: [
        "Paýhas çeşmesi",
        "Türkmenistanyň dermanlyk ösümlikleri",
        "Mertler Watany beýgeldýär"
      ],
      answer: "Türkmenistanyň dermanlyk ösümlikleri"
    },

    // ——— ALGEBRA ———

    { prompt: "Aňlatmanyň bahasy?",
      options: ["15", "225", "25"],
      answer: "25"
    },

    { prompt: "Aňlatmany ýönekeýleşdiriň.",
      options: ["42", "24", "90"],
      answer: "24"
    },

    { prompt: "Deňlemäniň çözüwi?",
      options: ["0 we …", "0 we -…", "… we 0"],
      answer: "0 we -…"
    },

    { prompt: "Kwadrat deňlemäniň kökleri?",
      options: ["… we -3", "3 we -…", "… we 3"],
      answer: "3 we -…"
    },

    { prompt: "a,b,c koeffisentleri: 17x - 15 - 4 = 0",
      options: ["17; -15; -4", "-4;17;-15", "15;-17;-4"],
      answer: "17; -15; -4"
    },

    // ——— GEOMETRY ———

    { prompt: "Gönüburçly üçburçlugyň ýiti burçlarynyň jemi?",
      options: ["180", "45", "90"],
      answer: "90"
    },

    { prompt: "Üçburçlugyň perimetri (5,12,8)?",
      options: ["48", "25", "90"],
      answer: "25"
    },

    { prompt: "ABC üçburçlugyň burçlaryny artýan tertipde ýazyň.",
      options: ["<C <B <A", "<B <C <A", "<A <B <C"],
      answer: "<A <B <C"
    },

    { prompt: "Parallelogram taraplary (P=48, tapawut=4)",
      options: ["24 we 10", "10 we 14", "24 we 24"],
      answer: "10 we 14"
    },

    { prompt: "9-burçlugyň içki burçlarynyň jemi?",
      options: ["1260", "720", "1620"],
      answer: "1260"
    },

    // ——— Himiýa ———

    { prompt: "Artykmaç berlen madda?",
      options: ["H₂SO₄, HCl, HNO₃", "Ca(OH)₂, NaOH, KOH", "KOH, HNO₃, K₂SO₄"],
      answer: "KOH, HNO₃, K₂SO₄"
    },

    { prompt: "Duzlaryň görnüşleri?",
      options: [
        "2 görnüş: turşy, orta",
        "3 görnüş: turşy, orta, ikili",
        "4 görnüş: ikili, esas, turşy, orta"
      ],
      answer: "3 görnüş: turşy, orta, ikili"
    },

    { prompt: "Kislorod haýsy birleşmelerde bar?",
      options: ["1,2,3,4", "1,3,4", "2,3"],
      answer: "1,3,4"
    },

    { prompt: "Na₂O + H₂O → 2NaOH reaksiýasy?",
      options: ["orun tutma", "birleşme", "dargama"],
      answer: "birleşme"
    },

    { prompt: "6.5 g sink bilen bölünýän gazyň göwrümi?",
      options: ["6.5", "1.12", "2.24", "4.48"],
      answer: "2.24"
    },

    { prompt: "Esas oksid?",
      options: ["CaCl₂", "SO₃", "Ca(OH)₂", "CaO"],
      answer: "CaO"
    },

    { prompt: "0.3 mol H₂SO₄ massasy?",
      options: ["9.8 g", "36.6 g", "49 g", "29.4 g"],
      answer: "29.4 g"
    },

    { prompt: "Bitaraplaşma reaksiýasy?",
      options: [
        "H₃PO₄ + 3KOH → K₃PO₄ + 3H₂O",
        "6HNO₃ + S → ...",
        "2HCl + ZnO → ZnCl₂ + H₂O"
      ],
      answer: "H₃PO₄ + 3KOH → K₃PO₄ + 3H₂O"
    },

    { prompt: "64 g kükürt mukdary?",
      options: ["1 mol", "2 mol", "3 mol", "0.2 mol"],
      answer: "2 mol"
    },

    { prompt: "“5 FeS” näme?",
      options: [
        "5 atom",
        "5 bölek",
        "5 atom Fe + 1 atom S",
        "5 molekula"
      ],
      answer: "5 molekula"
    },

    // ——— FIZIKA ———

    { prompt: "Konweksiýa nirde bolýar?",
      options: ["gaty-suwuk", "suwuk-gaz", "gaty-suwuk-gaz"],
      answer: "suwuk-gaz"
    },

    { prompt: "60 MWt hereketlendiriji 10 minutda näçe iş eder?",
      options: ["100 kJ", "1 MJ", "200 kJ"],
      answer: "1 MJ"
    },

    { prompt: "Buga öwürmek formulasy?",
      options: ["Q = qm", "Q = λm", ""],
      answer: "Q = λm"
    },

    { prompt: "Gaýnama suwuklygyň nirede bolýar?",
      options: ["üst gatlakda", "ähli göwrümde", "aşakky gatlakda"],
      answer: "ähli göwrümde"
    },

    { prompt: "Howanyň çyglylygyny ölçär enjam?",
      options: ["Termometr", "Psihrometr", "Dinamometr"],
      answer: "Psihrometr"
    },

    { prompt: "50 kg jisim 12 m galdyrylanda potência energiýasy?",
      options: ["6000 J", "3400 J", "7600 J"],
      answer: "6000 J"
    },

    { prompt: "Ýylylyk berlişiň görnüşleri?",
      options: ["2", "4", "3"],
      answer: "3"
    },

    { prompt: "“Fizika” sözini ylma girizen?",
      options: ["Aristotel", "Tomson", "Arhimed"],
      answer: "Aristotel"
    },

    { prompt: "Işiň birligi?",
      options: ["Watt", "Joul", "Nýuton"],
      answer: "Joul"
    },

    { prompt: "Buguň suwuklyga öwrülmegi?",
      options: ["konweksiýa", "kondensasiýa", "kristallaşma"],
      answer: "kondensasiýa"
    },

    // ——— INFORMATIKA ———

    { prompt: "Programmalaşdyrma dili näme?",
      options: [
        "Kompýutere düşnükli sözler we belgiler toplumy",
        "Kompýuteri dolandyrmak üçin sözler"
      ],
      answer: "Kompýutere düşnükli sözler we belgiler toplumy"
    },

    { prompt: "Pascal ABC dilinde (a + c) : 2 nädip ýazylýar?",
      options: [
        "(a + () *c)/(2)",
        "(a + *c) /2",
        "(a + c)/2"
      ],
      answer: "(a + c)/2"
    },

    { prompt: "Lokal kompýuter tory näme?",
      options: [
        "informasiýa alyşmak serişdesi",
        "ýakyn kompýuterleriň birleşmesi",
        "umumy resursly kompýuterler"
      ],
      answer: "ýakyn kompýuterleriň birleşmesi"
    },

    { prompt: "Adyna geçirmek buýrugy?",
      options: ["a =", "a :=", "a =:"],
      answer: "a :="
    },

    { prompt: "Operatiw ýat nämeden durýar?",
      options: [
        "sanlar-harplar",
        "üýtgeýänler",
        "öýjükler"
      ],
      answer: "öýjükler"
    }

];
