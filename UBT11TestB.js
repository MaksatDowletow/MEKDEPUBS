let questions = [

  // ============ IŇLIS DILI ============

  {
    prompt: "The ways in which a person or a group of people lives and works ______.",
    options: ["lifestyles", "facility", "destroy"],
    answer: "lifestyles",
  },

  {
    prompt: "This is the city ______ has e-cars.",
    options: ["who", "which", "where"],
    answer: "which",
  },

  {
    prompt: "The word ______ came from Greek meaning “the study of the house”.",
    options: ["Acid rain", "Pollution", "Ecology"],
    answer: "Ecology",
  },

  {
    prompt: "Ecology is the ___ between living things and their surroundings.",
    options: ["contact", "relationship", "work"],
    answer: "relationship",
  },

  {
    prompt: "Only ______ of the world’s water supply is usable.",
    options: ["1%", "2%", "97%"],
    answer: "1%",
  },

  {
    prompt: "What do you call the area that is inhabited by a particular species?",
    options: ["Habitat", "Environment", "Biosphere"],
    answer: "Habitat",
  },

  {
    prompt: "Can you _____ these plastic containers?",
    options: ["recycles", "recyclable", "recycle"],
    answer: "recycle",
  },

  {
    prompt: "The process of making air, water, soil, etc. dirty; the state of being dirty.",
    options: ["Atmosphere", "Pollution", "Wildlife"],
    answer: "Pollution",
  },

  {
    prompt: "I want new sneakers which I saw ______ in the shop yesterday.",
    options: ["*", "they", "them"],
    answer: "*",
  },

  {
    prompt: "Deforestation is ______.",
    options: ["Using fossil fuels", "Riding bicycles", "Cutting down trees"],
    answer: "Cutting down trees",
  },

  // ============ RUS DILI ============

  {
    prompt: "Укажите предложение, в котором есть наречие в форме сравнительной степени.",
    options: [
      "Солнце светит ярче.",
      "Здоровье дороже золота.",
      "Новый музей просторнее.",
      "Это задание труднее."
    ],
    answer: "Солнце светит ярче.",
  },

  {
    prompt: "Укажите побудительное восклицательное предложение.",
    options: [
      "Я приближался к месту моего назначения",
      "Что там такое чернеется",
      "Дорожите родной землёй",
      "Река ещё не замерзла"
    ],
    answer: "Дорожите родной землёй",
  },

  {
    prompt: "Что обязана делать душа? (Н. Заболоцкий)",
    options: ["спать", "думать", "трудиться", "отдыхать"],
    answer: "трудиться",
  },

  {
    prompt: "Укажите предложение, где подлежащее — местоимение 2 лица ед. числа.",
    options: [
      "Я очень люблю рисовать.",
      "Ты выучил стихотворение?",
      "О нём писали в газетах.",
      "Книга учит нас быть отважными."
    ],
    answer: "Ты выучил стихотворение?",
  },

  {
    prompt: "Вставьте слово: «Великолепная ... и вратарь!»",
    options: ["четвёрка", "пятёрка", "хоккеисты", "капитан"],
    answer: "пятёрка",
  },

  {
    prompt: "Как называется общая часть родственных слов?",
    options: ["корень", "окончание", "приставка", "суффикс"],
    answer: "корень",
  },

  {
    prompt: "Закончите пословицу: Маленькое дело лучше большого...",
    options: ["праздника", "собрания", "безделья", "памятника"],
    answer: "безделья",
  },

  // ============ ÝAPON DILI ============

  {
    prompt: "私は ピアノを ______。",
    options: ["あいます", "できます", "おしえます"],
    answer: "できます",
  },

  {
    prompt: "______7時に おきます。",
    options: ["すこし", "あさ", "よる"],
    answer: "あさ",
  },

  {
    prompt: "はなします — dogry sözlük (辞書形) görnüşi.",
    options: ["はなす", "はなせ", "はなし"],
    answer: "はなす",
  },

  {
    prompt: "学校に なんで いきますか。",
    options: ["りんご", "バス", "ぺん"],
    answer: "バス",
  },

  {
    prompt: "日本の食べ物は ______ ですか。",
    options: ["どう", "あした", "だれ"],
    answer: "どう",
  },

  {
    prompt: "私の ______ おんがくきくことです。",
    options: ["えいご", "さいご", "しゅみ"],
    answer: "しゅみ",
  },

  {
    prompt: "私の うちは とても ______ です。",
    options: ["優し", "母", "広い"],
    answer: "広い",
  },

  {
    prompt: "MAGTYMGULY sözüniň katakana görnüşi.",
    options: ["マグトムグリ", "マグドムグリ", "マグトムグル"],
    answer: "マグトムグル",
  },

  // ============ TÜRKMEN DILI ============

  {
    prompt: "Haýsy sözlemde leksika-semantik taýdan näsazlyk bar?",
    options: ["çagalaryň sagmy?", "dogmalaryň sagmy?", "oglanlaryň sagmy?", "ogul-gyzlaryň sagmy?"],
    answer: "dogmalaryň sagmy?",
  },

  {
    prompt: "Assimilýasiýa näme?",
    options: [
      "çekimlileriň sazlaşygy",
      "sesleriň meňzeşleşmegi",
      "goşulmalaryň goşulyş tertibi",
      "bogun sazlaşygy"
    ],
    answer: "sesleriň meňzeşleşmegi",
  },

  {
    prompt: "Türkmen dili haçan döwlet dili hukugyna eýe boldy?",
    options: ["27.10.1924", "09.10.1954", "24.05.1990", "18.05.1996"],
    answer: "24.05.1990",
  },

  {
    prompt: "Dar çekimlileriň dogry sanawy haýsy?",
    options: ["a,y,i,ö", "a,o,u,y", "u,y,i,ü", "e,i,ü,ö,ä"],
    answer: "u,y,i,ü",
  },

  {
    prompt: "Edebi dil nämä aýdylýar?",
    options: [
      "şiwe dilidir",
      "diňe ýazuw dilidir",
      "söz ussatlary tarapyndan işlenen halk dilidir",
      "diňe gepleşik dilidir"
    ],
    answer: "söz ussatlary tarapyndan işlenen halk dilidir",
  },

  // ============ EDEBIÝAT ============

  {
    prompt: "“Bally molla” hekaýasynyň gahrymany kim?",
    options: ["Annagözel", "Gözel", "Altyn", "Jaýtygül"],
    answer: "Jaýtygül",
  },

  {
    prompt: "Kerim Gurbannepesowyň wysal bolmadyk ilkinji söýgi goşgusy haýsy?",
    options: ["Altyň biri", "Söýgi", "Ýadygärlik surat", "Ýaşlyk dramasy"],
    answer: "Ýadygärlik surat",
  },

  {
    prompt: "«Başymy galdyryp…» setirleri haýsy eserden?",
    options: ["Kareliýa jeňňelinde", "Kawkaz", "Watan üçin", "Ermeni gyzy"],
    answer: "Ermeni gyzy",
  },

  {
    prompt: "Artygyň ýalňyş ýola düşmeginiň esasy sebäbi?",
    options: [
      "Aşyr bilen sözi azaşýar",
      "Eziz hanyň hajyk-hujugyna aldanýar",
      "Iwan Çernişowyň sözüne düşmeýär",
      "Guly hanyň haýynlygyna çydam etmeýär"
    ],
    answer: "Eziz hanyň hajyk-hujugyna aldanýar",
  },

  {
    prompt: "Gulam bagşy bilen ýaryşyň netijesini kesgitlemegi Şükür kime ynanýar?",
    options: ["köşk begzadalaryna", "hanyň maslahatçysyna", "halk köpçüligine", "kaza, mollalara"],
    answer: "halk köpçüligine",
  },

  // ============ TÜRKMENISTANYŇ TARYHY ============

  {
    prompt: "Türkmenistanda ilkinji demir ýol gurluşygy haçan başlandy?",
    options: ["1984", "1981", "1986", "1980"],
    answer: "1984",
  },

  {
    prompt: "TASSR haçan döredildi?",
    options: ["1921", "1918", "1924", "1922"],
    answer: "1918",
  },

  {
    prompt: "Russiýada iki häkimiýetlilik haýsy döwür?",
    options: ["Oktýabr-noýabr", "fewral-mart", "Fewral-sentýabr", "Fewral-oktýabr"],
    answer: "Fewral-oktýabr",
  },

  {
    prompt: "Zakaspi harby bölümi haçan döredildi?",
    options: ["1879", "1874", "1882", "1782"],
    answer: "1882",
  },

  {
    prompt: "Türkmenistanyň rus patyşalygyna baglylyk döwri haýsy ýyllar?",
    options: ["1769–1891", "1879–1917", "1869–1917", "1869–1991"],
    answer: "1869–1917",
  },

  // ============ DÜNÝÄ TARYHY ============

  {
    prompt: "GFR we GDR haçan birleşdirildi?",
    options: ["1990/24 okt", "1991/3 okt", "1990/3 okt", "1991/24 okt"],
    answer: "1990/3 okt",
  },

  {
    prompt: "Sowuk uruş haçan başlady?",
    options: ["1945/4 mart", "1946/5 mart", "1947/5 fewral", "1945/5 mart"],
    answer: "1946/5 mart",
  },

  {
    prompt: "Hytaý Halk Respublikasynyň ilkinji prezidenti kim?",
    options: ["Çan Kaý Şi", "Sun Ýatsen", "Mao Szedun", "Ýuan Şikaý"],
    answer: "Mao Szedun",
  },

  {
    prompt: "Margaret Tetçer haçan Beýik Britaniýany dolandyrdy?",
    options: ["1978–1990", "1979–1990", "1980–1991", "1968–1980"],
    answer: "1979–1990",
  },

  {
    prompt: "SSSR-de üýtgedip gurmak syýasaty kimiň döwründe?",
    options: ["Brežnew", "Andropow", "Hruşow", "Garbaçow"],
    answer: "Garbaçow",
  },

  // ============ JEMGYÝET ============

  {
    prompt: "Jemgyýetiň ösüşiniň ugurlary we mümkinçilikleri?",
    options: ["Ewolýusion–rewolýusion", "Progres–regres", "Industrial–postindustrial", "Adaty–emeli"],
    answer: "Progres–regres",
  },

  {
    prompt: "Türkmen jemgyýeti kärlerine görä näçä bölünýär?",
    options: [
      "4 — intellegensiýa, dellallar, telekeçiler, daýhanlar",
      "5 — intellegensiýa, dellallar, telekeçiler, daýhanlar, ýokary wezipeliler",
      "3 — intellegensiýa, dellallar, telekeçiler",
      "3 — intellegensiýa, daýhanlar, ýokary wezipeliler"
    ],
    answer: "5 — intellegensiýa, dellallar, telekeçiler, daýhanlar, ýokary wezipeliler",
  },

  {
    prompt: "Jemgyýeti sazlaşdyryjy kadalar näçä bölünýär?",
    options: [
      "4: dini, ahlak, hukuk, sosial",
      "3: adat–dessur, ahlak, hukuk",
      "2: hukuk, ahlak",
      "3: hukuk, dini, ahlak"
    ],
    answer: "4: dini, ahlak, hukuk, sosial",
  },

  {
    prompt: "Hakykylygyň ölçegleri?",
    options: [
      "Analiz–sintez–modelirleme",
      "Rasional we duýgylaýyn",
      "Mif–dini–sungat",
      "Ylmy we ylmy däl"
    ],
    answer: "Ylmy we ylmy däl",
  },

  {
    prompt: "Kapitalistik jemgyýet nähili jemgyýet?",
    options: [
      "Deňligi ündeýän",
      "Baýlyga ymtylýan",
      "Umumy bähbitli",
      "Agzybir, ösýän"
    ],
    answer: "Baýlyga ymtylýan",
  },

  // ============ YKDYSADYÝET ============

  {
    prompt: "Hümmetsizlenmäniň (inflýasiýanyň) näçe görnüşi bar?",
    options: ["5", "4", "3", "2"],
    answer: "3",
  },

  {
    prompt: "Ykdysadyýetiň esasy 3 soragy haýsy?",
    options: [
      "Näme öndürmeli? Haçan öndürmeli? Nädip öndürmeli?",
      "Kim öndürmeli? Näme öndürmeli? Haçan öndürmeli?",
      "Näme öndürmeli? Nädip öndürmeli? Kim üçin öndürmeli?",
      "Nirede öndürmeli? Nädip öndürmeli? Näme öndürmeli?"
    ],
    answer: "Näme öndürmeli? Nädip öndürmeli? Kim üçin öndürmeli?",
  },

  {
    prompt: "“Kiçi we orta telekeçiligi goldamak” kanuny haçan kabul edildi?",
    options: ["2008", "2007", "2009", "2010"],
    answer: "2009",
  },

  {
    prompt: "Ykdysadyýet nämäni aňladýar?",
    options: ["Economiya", "Oba hojalygy", "Halk hojalygy", "Bazar ykdysadyýeti"],
    answer: "Halk hojalygy",
  },

  {
    prompt: "Ykdysadyýeti ösdürýän esasy pudaklar?",
    options: [
      "Oba hojalyk, transport, gurluşyk, elektroenergetika, nebit-gaz",
      "Himiýa, medeniýet, bilim, ylym",
      "Mikro we makroy gospodar",
      "Döwlet, kärhana, firma"
    ],
    answer: "Oba hojalyk, transport, gurluşyk, elektroenergetika, nebit-gaz",
  },

  // ============ ALGEBRA ============

  {
    prompt: "2x = 32 deňlemäni çözüň.",
    options: ["x = 4", "x = 5", "x = 6"],
    answer: "x = 4",
  },

  {
    prompt: "5x =  ?  — x-yň bahasy.",
    options: ["x = -2", "x = 2", "x = 1"],
    answer: "x = 2",
  },

  // ============ BIOLOGIÝA ============

  {
    prompt: "Zigotanyň maýdalanmasynda boşlugyň emele gelmegi nämä diýilýär?",
    options: ["Gastrula", "Neýrula", "Blastula"],
    answer: "Blastula",
  },

  {
    prompt: "Jynskly köpelişe degişli?",
    options: ["oogamiýa", "pyntyklama"],
    answer: "oogamiýa",
  },

  {
    prompt: "Öýjükleriň jynsyz bölünmesi nämä diýilýär?",
    options: ["meýoz", "amitoz", "mitoz", "partikulýasiýa"],
    answer: "mitoz",
  },

  {
    prompt: "Düwünçekden soňky ösüş nähili ylmyň obýekti?",
    options: ["Morfologiýa", "Embriologiýa", "Post embriologiýa"],
    answer: "Post embriologiýa",
  },

  {
    prompt: "Enelik jyns öýjügi nämä diýilýär?",
    options: ["tohumlyk", "ýumurtgalyk", "spermatazoid"],
    answer: "ýumurtgalyk",
  },

  // ============ EKOLOGIÝA ============

  {
    prompt: "Adam tarapyndan döredilen biosenoz?",
    options: ["Bizenoz", "Biogeosenoz", "Agrosenoz"],
    answer: "Agrosenoz",
  },

  {
    prompt: "Organiki maddalary dargadyjylara nämä diýilýär?",
    options: ["Konsumentler", "Produsentler", "Redusentler"],
    answer: "Redusentler",
  },

  {
    prompt: "Iýmit zynjyrynyň bir halkasy nämäniň ady?",
    options: ["Iýmit zynjyry", "Trofik dereje", "Fitoplankton"],
    answer: "Trofik dereje",
  },

  {
    prompt: "“Ekoulgam” düşünjesini ilkinji kim ylma girizdi?",
    options: ["Ý. Odum", "A. Tensli", "Ç. Elton"],
    answer: "A. Tensli",
  },

  {
    prompt: "Topragyň ýaşaýyş gurşawy?",
    options: ["Litosfera", "Gidrosfera", "Atmosfera"],
    answer: "Litosfera",
  },

  // ============ HIMIÝA ============

  {
    prompt: "Hromuň +3 okislenme derejesi bolan birleşme haýsy?",
    options: ["NaCrO2", "K2Cr2O7", "CaCrO4", "CrO3"],
    answer: "NaCrO2",
  },

  {
    prompt: "Dürli metaldälleriň arasyndaky baglanyşyk?",
    options: ["kowalent polýar", "kowalent polýar däl", "ion", "metal"],
    answer: "kowalent polýar",
  },

  {
    prompt: "Elektrootrisatellik periodlarda / toparlarda nähili üýtgeýär?",
    options: [
      "artýar / artýar",
      "artýar / peselýär",
      "peselýär / artýar",
      "peselýär / peselýär"
    ],
    answer: "artýar / peselýär",
  },

  {
    prompt: "Ion baglanyşyk saklaýan madda?",
    options: ["CO2", "HNO3", "(NH4)2SO4", "CH2Cl2"],
    answer: "(NH4)2SO4",
  },

  {
    prompt: "Ammiakda AgCl eräp döreýän önüm?",
    options: [
      "diamminkümüş hloridi",
      "tetramminkümüş hloridi",
      "diaminokümüş hloridi",
      "tetraminokümüş hloridi"
    ],
    answer: "diamminkümüş hloridi",
  },

  {
    prompt: "Himiki baglanyşygy iň gowşak molekula?",
    options: ["O2", "N2", "Cl2", "F2"],
    answer: "F2",
  },

  {
    prompt: "Diňe otrisatel okislenme dereje emele getirýän element?",
    options: ["kislorod", "ftor", "alýuminiý", "kükürt"],
    answer: "ftor",
  },

  {
    prompt: "2,8,8,1 elektronly element bilen wodorodyň baglanyşygy?",
    options: ["kowalent polýar", "kowalent polýar däl", "ion", "metal"],
    answer: "ion",
  },

  // ============ FIZIKA ============

  {
    prompt: "Fiziki maýatnigiň gaýtawul güýji?",
    options: ["mg·sinα", "mg·cosα", "mg·ctgα"],
    answer: "mg·sinα",
  },

  {
    prompt: "Rezonans diýip näme aýdylýar?",
    options: [
      "yrgyldynyň pese düşmegi",
      "yrgyldynyň deň äheňde sazlanmagy",
      "yrgyldynyň çürt kesik beýgelmegi"
    ],
    answer: "yrgyldynyň çürt kesik beýgelmegi",
  },

  {
    prompt: "Gýugensiň prinsipi nämä aýdylýar?",
    options: [
      "Interferensiýa döreýär",
      "Täze sfera döreýär",
      "Kogorentlik hadysasy"
    ],
    answer: "Täze sfera döreýär",
  },

  {
    prompt: "Adamyň gulagy haýsy ýygylyklary eşidýär?",
    options: ["16–2000 Hz", "16–20 Hz", "16–20000 Hz"],
    answer: "16–20000 Hz",
  },

  {
    prompt: "Sesiň difraksiýasy nämä diýilýär?",
    options: [
      "Sazlaşykly ýaýramak",
      "Päsgelçilikden sowup geçmek",
      "Kogerentlik"
    ],
    answer: "Päsgelçilikden sowup geçmek",
  },

  {
    prompt: "Atom düşünjesini ilkinji kim öňe sürdi?",
    options: ["Rezerford", "Tomson", "Awagadro"],
    answer: "Tomson",
  },

  // ============ INFORMATIKA ============

  {
    prompt: "Programma üpjünçiliginiň näçe görnüşi bar?",
    options: ["3", "2", "4"],
    answer: "3",
  },

  {
    prompt: "Netije çykarmak operatory haýsy?",
    options: ["var", "write", "end"],
    answer: "write",
  },

  {
    prompt: "Elektron tablisalara degişli programma?",
    options: ["Word", "Excel", "Pascal"],
    answer: "Excel",
  },

  {
    prompt: "Çyn pikir haýsy sanyň üsti bilen belgilenýär?",
    options: ["1", "0", "-1"],
    answer: "1",
  },

  {
    prompt: "Read operatory nämä hyzmat edýär?",
    options: [
      "Indiki setire geçirýär",
      "Ululyklary ýok edýär",
      "Ululyklary klawiatura arkaly girizýär"
    ],
    answer: "Ululyklary klawiatura arkaly girizýär",
  },

  // ============ ASTRONOMIÝA ============

  {
    prompt: "Içki planetalar haýsylar?",
    options: [
      "Gün, Ýer, Ýupiter",
      "Wenera, Mars, Merkuriý, Ýer",
      "Saturn, Uran, Neptun"
    ],
    answer: "Wenera, Mars, Merkuriý, Ýer",
  },

  {
    prompt: "Merkuriý planetasynyň radiusy näçe?",
    options: ["2348 km", "2438 km", "2439 km"],
    answer: "2439 km",
  },

  {
    prompt: "Ýupiter Günden näçe km uzaklykda?",
    options: ["779.4 mln km", "776.2 mln km", "778.3 mln km"],
    answer: "778.3 mln km",
  },

  {
    prompt: "Fobos we Deimos haçan açyldy?",
    options: [
      "1871–1878",
      "1877–1877",
      "1870–1870"
    ],
    answer: "1877–1877",
  },

  {
    prompt: "Uran planetasy haçan açyldy?",
    options: [
      "1681/12 mart",
      "1781/13 mart",
      "1782/11 mart"
    ],
    answer: "1781/13 mart",
  }

];

registerUBSQuestions({ grade: "11", test: "B", prefix: "UBT", questions });
