let questions = [

    // ——— MATEMATIKA ———

    {
        prompt: "3² = ?",
        options: ["8", "7", "9", "5"],
        answer: "9"
    },

    {
        prompt: "Kwadratyň meýdanynyň formulasy?",
        options: ["S = 2a·b", "P = a·3", "V = a³", "S = a²"],
        answer: "S = a²"
    },

    {
        prompt: "a=15, b=10 bolanda 2·a - b aňlatmanyň bahasy?",
        options: ["20", "15", "10", "5"],
        answer: "20"
    },

    {
        prompt: "Gönüburçlugyň perimetriň formulasy?",
        options: ["P = 4a", "P = 2(a+b)", "V = a·b·c", "S = a·b"],
        answer: "P = 2(a+b)"
    },

    {
        prompt: "IKUK (3; 5) = ?",
        options: ["4", "10", "15", "9"],
        answer: "15"
    },

    // ——— INFORMATIKA ———

    {
        prompt: "Maglumaty saklamagy, işlemegi we geçirmegi öwrenýän ylym?",
        options: ["Biologiýa", "Fizika", "Informatika"],
        answer: "Informatika"
    },

    {
        prompt: "“Computer” sözi iňlisçeden näme diýmek?",
        options: ["Dokma enjamy", "Sazlaýjy enjam", "Hasaplaýjy enjam"],
        answer: "Hasaplaýjy enjam"
    },

    {
        prompt: "Algoritmiň ýazmagyň görnüşleri?",
        options: ["Başlangyjy we soňy", "Başy we yzy", "Onda, bolmasa"],
        answer: "Onda, bolmasa"
    },

    {
        prompt: "Şahalanma algoritmi haýsy sözler bilen ýazylýar?",
        options: ["Gaýtala", "Eger, onda, bolmasa", "Başlangyjy we soňy"],
        answer: "Eger, onda, bolmasa"
    },

    {
        prompt: "Operasion ulgamlaryň görnüşleri?",
        options: [
            "Windows; Linux; macOS; Android",
            "Linux; Android; kompýuter",
            "Informatika; monitor"
        ],
        answer: "Windows; Linux; macOS; Android"
    },

    // ——— ENGLISH ———

    {
        prompt: "This is … friend Sapar.",
        options: ["mine", "I", "my"],
        answer: "my"
    },

    {
        prompt: "There are …… many books about our nature.",
        options: ["there are", "there is", "a lot of"],
        answer: "there are"
    },

    {
        prompt: "May I … you?",
        options: ["can help", "help", "to help"],
        answer: "help"
    },

    {
        prompt: "What is the longest river … the world?",
        options: ["in", "from", "of"],
        answer: "in"
    },

    {
        prompt: "There are … books on the bookshelf.",
        options: ["much", "many", "more"],
        answer: "many"
    },

    {
        prompt: "I often … with my little sister.",
        options: ["play", "to play", "played"],
        answer: "play"
    },

    {
        prompt: "Maral … English very well.",
        options: ["speak", "speaks", "is speak"],
        answer: "speaks"
    },

    {
        prompt: "This is … apple.",
        options: ["a", "an", "__"],
        answer: "an"
    },

    {
        prompt: "Autumn also called …",
        options: ["Fall", "tree", "howler"],
        answer: "Fall"
    },

    {
        prompt: "We … in the garden.",
        options: ["am", "is", "are"],
        answer: "are"
    },

    // ——— TÜRKMEN DILI ———

    {
        prompt: "Sözler gurluş boýunça haýsy toparlara bölünýär?",
        options: [
            "Sada sözler, goşma sözler, tirkeş sözler",
            "Asyl söz we düýp söz",
            "Asyl söz we goşulma"
        ],
        answer: "Sada sözler, goşma sözler, tirkeş sözler"
    },

    {
        prompt: "Dar çekimlileri düşürip ýazmak üçin näçe şert gerek?",
        options: ["5 şert", "7 şert", "6 şert"],
        answer: "7 şert"
    },

    {
        prompt: "Sözlemler gurluş taýdan haýsy toparlara bölünýär?",
        options: [
            "Ýönekeý sözlem we goşma sözlem",
            "Habar, sorag, ýüzlenme sözlemler",
            "Ýygnak we ýaýraň ýönekeý sözlem"
        ],
        answer: "Ýönekeý sözlem we goşma sözlem"
    },

    {
        prompt: "Dymyk çekimsizler näçe sany?",
        options: ["4 sany", "8 sany", "13 sany"],
        answer: "4 sany"
    },

    {
        prompt: "Ýönekeý sözlemleriň görnüşleri haýsylar?",
        options: [
            "Goşma sözlem we ýönekeý sözlem",
            "Ýygnak we ýaýraň ýönekeý sözlem",
            "Habar, sorag we ýüzlenme sözlem"
        ],
        answer: "Ýygnak we ýaýraň ýönekeý sözlem"
    },

    // ——— EDEBIÝAT ———

    {
        prompt: "“Türkmen sährasy” goşgusynyň awtory?",
        options: ["Kerim Gurbannepesow", "Rehmet Seýidow", "Gurbannazar Ezizow"],
        answer: "Gurbannazar Ezizow"
    },

    {
        prompt: "Magtymguly Pyragy haçan we nirede dogulýar?",
        options: [
            "1724, Etrek – Hajygowşan",
            "1770, Sarahs",
            "1775, Garabekewül – Lamma"
        ],
        answer: "1724, Etrek – Hajygowşan"
    },

    {
        prompt: "“Garyplyk” goşgusynyň awtory?",
        options: ["Mämmetweli Kemine", "Seýitnazar Seýdi", "Mollanepes"],
        answer: "Seýitnazar Seýdi"
    },

    {
        prompt: "Seýitnazar Seýdi haçan ýaşapdyr?",
        options: ["1775–1836", "1780–1840", "1800–1852"],
        answer: "1775–1836"
    },

    {
        prompt: "“Japbaklar” ertekisini kim ýazypdyr?",
        options: ["Berdi Kerbabaýew", "Ata Gowşudow", "Aman Kekilow"],
        answer: "Aman Kekilow"
    },

    // ——— RUS DILI ———

    {
        prompt: "Как подчеркивается сказуемое?",
        options: ["одной чертой", "двумя чертами", "волнистой чертой"],
        answer: "двумя чертами"
    },

    {
        prompt: "На какие вопросы отвечает дополнение?",
        options: [
            "на вопросы косвенных падежей",
            "на вопросы кто, что",
            "на вопросы какой, какая"
        ],
        answer: "на вопросы косвенных падежей"
    },

    {
        prompt: "Что такое подлежащее?",
        options: [
            "второстепенный член предложения",
            "главный член предложения"
        ],
        answer: "главный член предложения"
    },

    {
        prompt: "Сколько падежей в русском языке?",
        options: ["3", "5", "6"],
        answer: "6"
    },

    {
        prompt: "Кто нарисовал картину «Гурбан байрам»?",
        options: ["Б. Нурали", "И. Репин", "Я. Байрамов"],
        answer: "Б. Нурали"
    },

    // ——— ÝAPON DILI ———

    {
        prompt: "ら",
        options: ["çi", "ra", "ma"],
        answer: "ra"
    },

    {
        prompt: "み",
        options: ["mu", "me", "mi"],
        answer: "mi"
    },

    {
        prompt: "け",
        options: ["ka", "ke", "te"],
        answer: "ke"
    },

    {
        prompt: "ひ",
        options: ["hi", "ho", "wa"],
        answer: "hi"
    },

    {
        prompt: "と",
        options: ["i", "tsu", "to"],
        answer: "to"
    },

    // ——— TARYH ———

    {
        prompt: "Goňurdepe haýsy döwletiň paýtagty?",
        options: ["Wizantiýa", "Parfiýa", "Marguş", "Altyndepe"],
        answer: "Marguş"
    },

    {
        prompt: "Beýik Ýüpek ýoly haýsy asyrda döräpdir?",
        options: [
            "B.e. öň III asyr",
            "B.e. öň II asyr",
            "B.e. öň I asyr",
            "B.e. öň IV asyr"
        ],
        answer: "B.e. öň II asyr"
    },

    {
        prompt: "Parfiýa döwleti haçan döräpdir?",
        options: [
            "B.e. öň 250 ý.",
            "B.e. öň 265 ý.",
            "B.e. öň 471 ý.",
            "B.e. öň 247 ý."
        ],
        answer: "B.e. öň 247 ý."
    },

    {
        prompt: "Türkmenistanyň ilkinji Prezidenti S.A.Nyýazow haçan doglan?",
        options: ["1948", "1943", "1940", "1945"],
        answer: "1940"
    },

    {
        prompt: "Köneürgenç türkmen döwleti haçan döredi?",
        options: ["1097", "1117", "1040", "1099"],
        answer: "1040"
    },

    // ——— TEBIGAT ———

    {
        prompt: "Gün ulgamynda näçe planeta bar, ýer hany?",
        options: [
            "8 planeta, ýer 4-nji",
            "710 planeta, ýer 5-nji",
            "9 planeta, ýer 3-nji"
        ],
        answer: "8 planeta, ýer 4-nji"
    },

    {
        prompt: "Türkmenistanda näçe derýa bar, ulysy haýsy?",
        options: [
            "5 derýa, Sumbar",
            "7 derýa, Amyderýa",
            "6 derýa, Etrek",
            "4 derýa, Amyderýa"
        ],
        answer: "7 derýa, Amyderýa"
    },

    {
        prompt: "Suw belli bir şekilli bolup bilýärmi?",
        options: [
            "Hawa, belli bir şekilli",
            "Ýok, asla bolup bilmez",
            "Haýsy gaba guýsaň şol şekil bolýar"
        ],
        answer: "Haýsy gaba guýsaň şol şekil bolýar"
    },

    {
        prompt: "Bugarylan suw ýene suwa gaýdyp gelýän hadysanyň ady?",
        options: [
            "Suwyň häsiýeti",
            "Suwyň aýlanşygy",
            "Suwyň howdanlary"
        ],
        answer: "Suwyň aýlanşygy"
    },

    {
        prompt: "Nähili suwlara mineral suw diýilýär?",
        options: [
            "Çeşme suwuna",
            "Ýagyş suwuna",
            "Deňiz suwuna"
        ],
        answer: "Çeşme suwuna"
    }

];
