// UBT 11 (6-ýaş) synp – Test A

let questions = [

  // ============== IŇLIS DILI ==============

  {
    prompt: "The word ________ came from Greek means “the study of the house”.",
    options: ["Acid rain", "Pollution", "Ecology"],
    answer: "Ecology",
  },

  {
    prompt: "Ecology is the ___ between living things and their surroundings.",
    options: ["contact", "relationship", "work"],
    answer: "relationship",
  },

  {
    prompt: "Only ______ of the world`s water supply is usable.",
    options: ["1%", "2%", "97%"],
    answer: "1%",
  },

  {
    prompt: "Can you _____ these plastic containers?",
    options: ["recycles", "recyclable", "recycle"],
    answer: "recycle",
  },

  {
    prompt: "The ways in which a person or a group of people lives and works ______.",
    options: ["lifestyles", "facility", "destroy"],
    answer: "lifestyles",
  },

  {
    prompt: "This is the city _______ has e-cars.",
    options: ["who", "which", "where"],
    answer: "which",
  },

  {
    prompt: "I want new sneakers which I saw _______ in the shop yesterday.",
    options: ["(no word)", "they", "them"],
    answer: "(no word)",
  },

  {
    prompt: "Deforestation is ______.",
    options: ["Using fossil fuels", "Riding bicycles", "Cutting down trees"],
    answer: "Cutting down trees",
  },

  {
    prompt: "What do you call the area that is inhabited by a particular species?",
    options: ["Habitat", "Environment", "Biosphere"],
    answer: "Habitat",
  },

  {
    prompt: "The process of making air, water, soil, etc. dirty; the state of being dirty.",
    options: ["Atmosphere", "Pollution", "Wildlife"],
    answer: "Pollution",
  },

  // ============== RUS DILI ==============

  {
    prompt:
      "Укажите побудительное восклицательное предложение (знаки препинания не поставлены).",
    options: [
      "Я приближался к месту моего назначения",
      "Что там такое чернеется",
      "Дорожите родной землёй",
      "Река еще не замерзла",
    ],
    answer: "Дорожите родной землёй",
  },

  {
    prompt:
      "Укажите предложение, в котором подлежащее выражено личным местоимением 2 лица единственного числа.",
    options: [
      "Я очень люблю рисовать.",
      "Ты выучил стихотворение?",
      "О нем писали в газетах.",
      "Книга учит нас быть отважными.",
    ],
    answer: "Ты выучил стихотворение?",
  },

  {
    prompt:
      "Укажите предложение, в котором есть наречие в форме сравнительной степени.",
    options: [
      "Солнце светит ярче.",
      "Здоровье дороже золота.",
      "Новый музей просторнее.",
      "Это задание труднее.",
    ],
    answer: "Солнце светит ярче.",
  },

  {
    prompt:
      "Что обязана делать душа? (Н. Заболоцкий «Не позволяй душе лениться»)",
    options: ["спать", "думать", "трудиться", "отдыхать"],
    answer: "трудиться",
  },

  {
    prompt:
      "Вставьте нужное слово (Н. Добронравов «Суровый бой ведёт ледовая дружина»):\n«...И всё в порядке, если только на площадке\nВеликолепная ... и вратарь!»",
    options: ["четвёрка", "пятёрка", "хоккеисты", "капитан"],
    answer: "пятёрка",
  },

  {
    prompt: "Закончите пословицу: «Маленькое дело лучше большого...»",
    options: ["праздника", "собрания", "безделья", "памятника"],
    answer: "безделья",
  },

  {
    prompt: "Как называется общая часть родственных слов?",
    options: ["корень", "окончание", "приставка", "суффикс"],
    answer: "корень",
  },

  // ============== ÝAPON DILI ==============

  {
    prompt: "______7時に　おきます。",
    options: ["すこし", "あさ", "よる"],
    answer: "あさ",
  },

  {
    prompt: "学校に　なんで　いきますか。",
    options: ["りんご", "バス", "ぺん"],
    answer: "バス",
  },

  {
    prompt: "はなします。 – dogry sözlük (辞書形) görnüşini saýlaň.",
    options: ["はなす", "はなせ", "はなし"],
    answer: "はなす",
  },

  {
    prompt: "日本の　食べ物は______ですか。",
    options: ["どう", "あした", "だれ"],
    answer: "どう",
  },

  {
    prompt: "私の　______　おんがくきくことです。",
    options: ["えいご", "さいご", "しゅみ"],
    answer: "しゅみ",
  },

  {
    prompt: "MAGTYMGULY söziniň katakana görnüşini saýlaň.",
    options: ["マグトムグリ", "マグドムグリ", "マグトムグル"],
    answer: "マグトムグル",
  },

  {
    prompt: "私の　うちは　とても　______　です。",
    options: ["優し", "母", "広い"],
    answer: "広い",
  },

  {
    prompt: "私は　ピアノを　　______。",
    options: ["あいます", "できます", "おしえます"],
    answer: "できます",
  },

  // ============== TÜRKMEN DILI ==============

  {
    prompt: "Türkmen dili haçan döwlet dili hukugyna eýe boldy?",
    options: [
      "27.10.1924ý.",
      "09.10.1954ý.",
      "24.05.1990ý.",
      "18.05.1996ý.",
    ],
    answer: "24.05.1990ý.",
  },

  {
    prompt: "Edebi dil näme?",
    options: [
      "şiwe dilidir",
      "diňe ýazuw dilidir",
      "söz ussatlary tarapyndan işlenen halk dilidir",
      "diňe gepleşik dilidir",
    ],
    answer: "söz ussatlary tarapyndan işlenen halk dilidir",
  },

  {
    prompt: "Haýsy sözlemde leksika-semantik taýdan näsazlyk bar?",
    options: [
      "çagalaryň sagmy?",
      "dogmalaryň sagmy?",
      "oglanlaryň sagmy?",
      "ogul-gyzlaryň sagmy?",
    ],
    answer: "dogmalaryň sagmy?",
  },

  {
    prompt: "Assimilýasiýa näme?",
    options: [
      "çekimlileriň sazlaşygy",
      "sesleriň meňzeşleşmegi",
      "goşulmalaryň goşulyş tertibi",
      "bogun sazlaşygy",
    ],
    answer: "sesleriň meňzeşleşmegi",
  },

  {
    prompt: "Haýsy jogapda dar çekimliler dogry hem doly ýazylypdyr?",
    options: ["a, y, i, ö", "a, o, u, y", "u, y, i, ü", "e, i, ü, ö, ä"],
    answer: "u, y, i, ü",
  },

  // ============== EDEBIÝAT ==============

  {
    prompt: "Agahan Durdyýewiň “Bally molla” hekaýasynyň baş gahrymany kim?",
    options: ["Annagözel", "Gözel", "Altyn", "Jaýtygül"],
    answer: "Jaýtygül",
  },

  {
    prompt:
      "Gulam bagşy bilen ýaryşynyň netijesini kesgitlemegi Şükür kime ynanýar?",
    options: [
      "köşk begzadalaryna",
      "hanyň maslahatçysyna",
      "halk köpçüligine",
      "kaza, mollalara",
    ],
    answer: "halk köpçüligine",
  },

  {
    prompt:
      "«Başymy galdyryp, bir ýakymly el,\nzenzele içine bir zat diýdi ol» – diýen setirler haýsy eserden?",
    options: [
      "“Kareliýa jeňňelinde”",
      "“Kawkaz”",
      "“Watan üçin”",
      "“Ermeni gyzy”",
    ],
    answer: "“Ermeni gyzy”",
  },

  {
    prompt: "Artygyň ýalňyş ýola düşmeginiň esasy sebäbi näme?",
    options: [
      "Aşyr bilen sözi azaşýar",
      "Eziz hanyň hajyk-hujugyna aldanýar",
      "Iwan Çernişowyň diline, sözüne düşmeýär",
      "Guly hanyň haýynlygyna, ikiýüzlüligine çydam etmeýär",
    ],
    answer: "Eziz hanyň hajyk-hujugyna aldanýar",
  },

  {
    prompt:
      "Kerim Gurbannepesowyň wysal bolmadyk ilkinji söýgi hakyndaky goşgusy haýsy?",
    options: ["“Altyň biri”", "“Söýgi”", "“Ýadygärlik surat”", "“Ýaşlyk dramasy”"],
    answer: "“Ýadygärlik surat”",
  },

  // ============== TÜRKMENISTANYŇ TARYHY ==============

  {
    prompt:
      "Türküstan Awtonom Sowet Sosialistik Respublikasy (TASSR) näçinji ýylda döredildi?",
    options: ["1921 ý.", "1918 ý.", "1924 ý.", "1922 ý."],
    answer: "1918 ý.",
  },

  {
    prompt: "Russiýada iki häkimiýetlilik haýsy aýlarda bolupdyr?",
    options: [
      "Oktýabr–noýabr",
      "fewral–mart",
      "Fewral–sentýabr",
      "Fewral–oktýabr",
    ],
    answer: "Fewral–oktýabr",
  },

  {
    prompt: "Türkmenistanda ilkinji demir-ýol gurluşygy näçinji ýylda başlandy?",
    options: ["1984 ý.", "1981 ý.", "1986 ý.", "1980 ý."],
    answer: "1984 ý.",
  },

  {
    prompt:
      "Türkmenistanyň rus patyşalygyna baglylyk (bagnalyk) döwri näçinji ýyllar?",
    options: [
      "1769–1891 ýý.",
      "1879–1917 ýý.",
      "1869–1917 ýý.",
      "1869–1991 ýý.",
    ],
    answer: "1869–1917 ýý.",
  },

  {
    prompt: "Zakaspi harby bölümi näçinji ýylda döredilýär?",
    options: ["1879 ý.", "1874 ý.", "1882 ý.", "1782 ý."],
    answer: "1882 ý.",
  },

  // ============== DÜNÝÄ TARYHY ==============

  {
    prompt: "Näçinji ýylda Sowuk uruş başlaýar diýip hasaplanylýar?",
    options: [
      "1945 ý. 4 mart",
      "1946 ý. 5 mart",
      "1947 ý. 5 fewral",
      "1945 ý. 5 mart",
    ],
    answer: "1946 ý. 5 mart",
  },

  {
    prompt: "GFR we GDR näçinji ýylda birleşdirildi?",
    options: [
      "1990 ý. 24-nji oktýabr",
      "1991 ý. 3-nji oktýabr",
      "1990 ý. 3-nji oktýabr",
      "1991 ý. 24-nji oktýabr",
    ],
    answer: "1990 ý. 3-nji oktýabr",
  },

  {
    prompt:
      "SSSR-de üýtgedip gurmak (perestroýka) syýasaty kimiň ýolbaşçylygynda bolup geçdi?",
    options: ["L. Brežnew", "Ýu. Andropow", "N. Hruşow", "M. Garbaçow"],
    answer: "M. Garbaçow",
  },

  {
    prompt: "Hytaý Halk Respublikasynyň ilkinji Prezidenti kim?",
    options: ["Çan Kaý Şi", "Sun Ýatsen", "Mao Szedun", "Ýuan Şikaý"],
    answer: "Mao Szedun",
  },

  {
    prompt:
      "Näçinji ýyllarda Margaret Tetçer Beýik Britaniýany dolandyrdy?",
    options: [
      "1978–1990",
      "1979–1990",
      "1980–1991",
      "1968–1980",
    ],
    answer: "1979–1990",
  },

  // ============== JEMGYÝET ==============

  {
    prompt: "Hakykylygyň ölçegleri näçe sany we olar haýsylar?",
    options: [
      "3 sany: Analiz, sintez, modelirleme",
      "2 sany: Rasional we duýgylaýyn",
      "3 sany: Mif, dini, sungat",
      "2 sany: Ylmy we ylmy däl",
    ],
    answer: "2 sany: Ylmy we ylmy däl",
  },

  {
    prompt:
      "Häzirki zaman türkmen jemgyýeti kärleri boýunça näçä bölünýär we olar haýsylar?",
    options: [
      "4: intellegensiýa, dellallar, telekeçiler, daýhanlar",
      "5: intellegensiýa, dellallar, telekeçiler, daýhanlar, ýokary wezipeli işgärler",
      "3: intellegensiýa, dellallar, telekeçiler",
      "3: intellegensiýa, daýhanlar, ýokary wezipeli işgärler",
    ],
    answer:
      "5: intellegensiýa, dellallar, telekeçiler, daýhanlar, ýokary wezipeli işgärler",
  },

  {
    prompt:
      "Jemgyýetçilik durmuşynyň ösüşiniň ugurlary we mümkinçilikleri haýsylar?",
    options: [
      "Ewolýusion we rewolýusion",
      "Progres we regres",
      "Industrial we postindustrial",
      "Adaty we emeli",
    ],
    answer: "Progres we regres",
  },

  {
    prompt:
      "Jemgyýeti sazlaşdyryjy kadalar näçä bölünýär we olar haýsylar?",
    options: [
      "4: dini, ahlak, hukuk, sosial",
      "3: adat-däp dessur, ahlak, hukuk",
      "2: hukuk, ahlak",
      "3: hukuk, dini, ahlak",
    ],
    answer: "4: dini, ahlak, hukuk, sosial",
  },

  {
    prompt: "Kapitalistik jemgyýet haýsy häsiýete esaslanýar?",
    options: [
      "Deňligi ündeýän jemgyýet",
      "Baýlyga ymtylýan jemgyýet",
      "Umumy bähbitli jemgyýet",
      "Agzybir, ösýän jemgyýet",
    ],
    answer: "Baýlyga ymtylýan jemgyýet",
  },

  // ============== ÝKDISADIÝET ==============

  {
    prompt: "Hümmetsizlenmäniň (inflýasiýanyň) näçe görnüşi bar?",
    options: ["5", "4", "3", "2"],
    answer: "3",
  },

  {
    prompt: "Ykdysadyýet gysgaça nämäni aňladýar?",
    options: ["Economiya", "Oba hojalygy", "Halk hojalygy", "Bazar ykdysadyýeti"],
    answer: "Halk hojalygy",
  },

  {
    prompt:
      "“Kiçi we orta telekeçiligi döwlet tarapyndan goldamak” hakyndaky kanun näçinji ýylda kabul edildi?",
    options: ["2008 ý.", "2007 ý.", "2009 ý.", "2010 ý."],
    answer: "2009 ý.",
  },

  {
    prompt: "Ykdysadyýeti ösdürýän esasy pudaklar haýsylar?",
    options: [
      "Oba hojalyk, transport, gurluşyk, elektroenergetika, nebit-gaz",
      "Himiýa senagaty, medeniýet, bilim, ylym",
      "Mikroykdysadyýet, makroykdysadyýet",
      "Döwlet, kärhanalar, firmalar",
    ],
    answer:
      "Oba hojalyk, transport, gurluşyk, elektroenergetika, nebit-gaz",
  },

  {
    prompt: "Ykdysadyýetiň esasy 3 soragy haýsylar?",
    options: [
      "Näme öndürmeli, haçan öndürmeli, nädip öndürmeli",
      "Kim öndürmeli, näme öndürmeli, haçan öndürmeli",
      "Näme öndürmeli, nädip öndürmeli, kim üçin öndürmeli",
      "Nirede öndürmeli, nädip öndürmeli, näme öndürmeli",
    ],
    answer: "Näme öndürmeli, nädip öndürmeli, kim üçin öndürmeli",
  },

  // ============== BIOLOGIÝA ==============

  {
    prompt:
      "Öýjükleriň jynsyz ýol arkaly bölünmegine näme diýilýär?",
    options: ["meýoz", "amitoz", "mitoz"],
    answer: "mitoz",
  },

  {
    prompt:
      "Aşakdakylaryň haýsy biri jynsly (jynskly) köpelişe degişli?",
    options: ["oogamiýa", "pyntyklama", "partikulýasiýa"],
    answer: "oogamiýa",
  },

  {
    prompt: "Enelik jyns öýjügi näme diýip atlandyrylýar?",
    options: ["tohumlyk", "ýumurtgalyk", "spermatazoid"],
    answer: "ýumurtgalyk",
  },

  {
    prompt:
      "Zigotanyň maýdalanma netijesinde boşlugyň emele gelmegine näme diýilýär?",
    options: ["Gastrula", "Neýrula", "Blastula"],
    answer: "Blastula",
  },

  {
    prompt:
      "Düwünçekden (embriondan) soňky ösüşi haýsy ylym öwrenýär?",
    options: ["Morfologiýa", "Embriologiýa", "Post embriologiýa"],
    answer: "Post embriologiýa",
  },

  // ============== EKOLOGIÝA ==============

  {
    prompt:
      "Organiki maddalary dargadyjy organizmlere näme diýilýär?",
    options: ["Konsumentler", "Produsentler", "Redusentler"],
    answer: "Redusentler",
  },

  {
    prompt:
      "“Ekoulgam” düşünjesini ilkinji bolup kim ylma girizdi?",
    options: ["Ý. Odum", "A. Tensli", "Ç. Elton"],
    answer: "A. Tensli",
  },

  {
    prompt:
      "Adam tarapyndan döredilen biosenozlara näme diýilýär?",
    options: ["Bizenoz", "Biogeosenoz", "Agrosenoz"],
    answer: "Agrosenoz",
  },

  {
    prompt: "Toprakdaky ýaşaýyş gurşawyna näme diýilýär?",
    options: ["Litosfera", "Gidrosfera", "Atmosfera"],
    answer: "Litosfera",
  },

  {
    prompt: "Iýmit zynjyrynyň bir halkasyna näme diýilýär?",
    options: ["Iýmit zynjyry", "Trofik dereje", "Fitoplankton"],
    answer: "Trofik dereje",
  },

  // ============== HIMIÝA ==============

  {
    prompt:
      "D.I. Mendeleýewiň periodik sistemasynyň periodlarynda we toparlarynda tertip sanynyň artmagy bilen himiki elementleriň elektrootrisatelligi nädip üýtgär?",
    options: [
      "artýar, artýar",
      "artýar, peselýär",
      "peselýär, artýar",
      "peselýär, peselýär",
    ],
    answer: "artýar, peselýär",
  },

  {
    prompt:
      "Birleşmelerinde diňe otrisatel okislenme derejäni ýüze çykarýan element haýsy?",
    options: ["kislorod", "ftor", "alýuminiý", "kükürt"],
    answer: "ftor",
  },

  {
    prompt: "Hromuň okislenme derejesi +3-e deň bolan birleşme haýsy?",
    options: ["NaCrO2", "K2Cr2O7", "CaCrO4", "CrO3"],
    answer: "NaCrO2",
  },

  {
    prompt: "Dürli metaldälleriň arasyndaky baglanyşyk haýsy görnüşe degişli?",
    options: [
      "kowalent polýar",
      "kowalent polýar däl",
      "ion",
      "metal",
    ],
    answer: "kowalent polýar",
  },

  {
    prompt:
      "Elektron gatlaklarynda elektronlary 2, 8, 8, 1 görnüşinde paýlanan elementiň atomy bilen wodorodyň arasyndaky himiki baglanyşyk haýsy?",
    options: ["kowalent polýar", "kowalent polýar däl", "ion", "metal"],
    answer: "ion",
  },

  {
    prompt: "Ion baglanyşyk saklaýan madda haýsy?",
    options: ["CO2", "HNO3", "(NH4)2SO4", "CH2Cl2"],
    answer: "(NH4)2SO4",
  },

  {
    prompt: "Himiki baglanyşygy has gowşak molekula haýsy?",
    options: ["O2", "N2", "Cl2", "F2"],
    answer: "F2",
  },

  {
    prompt:
      "Ammiagyň suw ergininde kümüş hloridiniň eremegi netijesinde emele gelýän önümiň ady näme?",
    options: [
      "diamminkümüş hloridi",
      "tetramminkümüş hloridi",
      "diaminokümüş hloridi",
      "tetraminokümüş hloridi",
    ],
    answer: "diamminkümüş hloridi",
  },

  // ============== FIZIKA ==============

  {
    prompt: "Fiziki maýatnigiň gaýtawul güýjüniň (projeksiýasynyň) burç boýunça beýany haýsy?",
    options: ["mg·sinα", "mg·cosα", "mg·ctgα"],
    answer: "mg·sinα",
  },

  {
    prompt: "Rezonans diýip näme aýdylýar?",
    options: [
      "yrgyldynyň pese düşmegine",
      "yrgyldynyň deň äheňde sazlanmagyna",
      "yrgyldynyň çürt kesik beýgelmegine",
    ],
    answer: "yrgyldynyň çürt kesik beýgelmegine",
  },

  {
    prompt: "Adamyň gulagy nähili ýygylyk aralygyndaky sesleri eşidýär?",
    options: ["16–2000 Gs", "16–20 Gs", "16–20000 Gs"],
    answer: "16–20000 Gs",
  },

  {
    prompt: "Sesiň difraksiýasy diýip näme aýdylýar?",
    options: [
      "Sesiň sazlaşykly ýaýramagyna",
      "Sesiň päsgelçiliklerden sowlup geçmegine",
      "Sesiň kogerentliligine",
    ],
    answer: "Sesiň päsgelçiliklerden sowlup geçmegine",
  },

  {
    prompt: "Gýugensiň (Hýugensiň) prinsipi nämäni aýdýar?",
    options: [
      "Ýagtylygyň düşen her bir nokadynda interferensiýa döreýär.",
      "Ýagtylygyň düşen her bir nokadynda täze sfera döreýär.",
      "Ýagtylyk düşen her bir nokadynda kogorentlik hadysa ýüze çykýar.",
    ],
    answer: "Ýagtylygyň düşen her bir nokadynda täze sfera döreýär.",
  },

  {
    prompt: "Atom düşünjesini ilkinji gezek açan (ylma girizen) alym kim hökmünde berilýär?",
    options: ["A. Rezerford", "Jon Tomson", "Awagadro"],
    answer: "Jon Tomson",
  },

  // ============== INFORMATIKA ==============

  {
    prompt: "Elektron tablisalara haýsy programma degişli?",
    options: ["Word", "Excel", "Pascal"],
    answer: "Excel",
  },

  {
    prompt: "Çyn pikir aýtma haýsy sanyň üsti bilen belgilenýär?",
    options: ["1", "0", "-1"],
    answer: "1",
  },

  {
    prompt: "Aşakdakylaryň haýsy biri netijäni ekrana çykarmak operatorydyr?",
    options: ["var", "write", "end"],
    answer: "write",
  },

  {
    prompt: "read operatory nämä hyzmat edýär?",
    options: [
      "Ululyklary indiki setire geçirýär",
      "Ululyklary ýok edýär",
      "Ululyklary klawiatura arkaly girizýär",
    ],
    answer: "Ululyklary klawiatura arkaly girizýär",
  },

  {
    prompt: "Programma üpjünçiliginiň näçe görnüşi bar?",
    options: ["3", "2", "4"],
    answer: "3",
  },

  // ============== ASTRONOMIÝA ==============

  {
    prompt: "Merkuriý planetasynyň radiusy takmynan näçe?",
    options: ["2348 km", "2438 km", "2439 km"],
    answer: "2439 km",
  },

  {
    prompt:
      "Marsyň 2 sany hemrasy bar – Fobos we Deimos. Olar näçenji ýyllarda açyldy?",
    options: [
      "Fobos we Deimos 1871–1878",
      "Fobos we Deimos 1877–1877",
      "Fobos we Deimos 1870–1870",
    ],
    answer: "Fobos we Deimos 1877–1877",
  },

  {
    prompt: "Ýupiter planetasy Günden takmynan näçe km uzaklykda ýerleşýär?",
    options: ["779,4 mln km", "776,2 mln km", "778,3 mln km"],
    answer: "778,3 mln km",
  },

  {
    prompt: "Uran planetasy haçan açylýar?",
    options: [
      "1681-nji ýylyň mart aýynyň 12-ne",
      "1781-nji жылдың mart aýynyň 13-ne",
      "1782-nji ýylyň mart aýynyň 11-ne",
    ],
    answer: "1781-nji жылдың mart aýynyň 13-ne",
  },

  {
    prompt: "Içki planetalar haýsylar?",
    options: [
      "Gün, Ýer, Ýupiter",
      "Wenera, Mars, Merkuriý, Ýer",
      "Saturn, Uran, Neptun",
    ],
    answer: "Wenera, Mars, Merkuriý, Ýer",
  },

];
