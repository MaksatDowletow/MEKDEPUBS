let questions = [

  // ============ IŇLIS DILI ============

  {
    prompt: "They learn English (easy) ________. They think English is________ an language.",
    options: ["easy/easily", "easily/easily", "easy/easy"],
    answer: "easy/easy",
  },

  {
    prompt: "_________ to Sam. (to speak)",
    options: ["Speak", "Spoke", "To speak"],
    answer: "Speak",
  },

  {
    prompt: "Please ________ your name on paper. (to write)",
    options: ["to write", "writing", "write"],
    answer: "write",
  },

  {
    prompt: "________ some water. (not, to drink)",
    options: ["Don’t drink", "doesn’t drink", "don’t drank"],
    answer: "Don’t drink",
  },

  {
    prompt: "Gurbannazar Ezizov was born _______________ on April 1,1945 in Ashgabat.",
    options: [
      "on April 1,1945 in Ashgabat",
      "on March 1,1940 in Gokdepe",
      "on March 1, 1940, in Mary"
    ],
    answer: "on April 1,1945 in Ashgabat",
  },

  {
    prompt: "Tom is (slow) ________. He works ________.",
    options: ["slow /slowly", "slowly/ slow", "slow/slow"],
    answer: "slow /slowly",
  },

  {
    prompt: "Sue is a (careful) ________ girl. She climbed up the ladder ________.",
    options: ["carefully/ careful", "careful/carefully", "carefully /carefully"],
    answer: "careful/carefully",
  },

  {
    prompt: "I wish it _________ possible to finish the work tonight. (to be)",
    options: ["was", "were", "to be"],
    answer: "were",
  },

  {
    prompt: "He acted (excellent) ________. He's an ________ actor.",
    options: [
      "excellent/excellently",
      "excellent /excellent",
      "excellently/  excellent"
    ],
    answer: "excellently/  excellent",
  },

  {
    prompt: "Thomas Edison was born on the 11th of February, 1847, at Milan, _______.",
    options: ["USA", "Great Britain", "Canada"],
    answer: "USA",
  },

  // ============ RUS DILI ============

  {
    prompt: "Противительные союзы это?",
    options: [
      "или (иль), либо, то-то, не то",
      "и, да (в значении и; ни-ни)",
      "а, но, да (в значении но), зато, однако"
    ],
    answer: "а, но, да (в значении но), зато, однако",
  },

  {
    prompt: "На какие вопросы отвечают обстоятельства места?",
    options: [
      "почему? отчего?",
      "когда? как долго?",
      "где? куда? откуда? докуда?"
    ],
    answer: "где? куда? откуда? докуда?",
  },

  {
    prompt: "Что такое «Рассказ»?",
    options: [
      "Описание одного эпизода",
      "Небольшое произведение, повествующее о каком-либо эпизоде из жизни героя",
      "Один эпизод"
    ],
    answer: "Небольшое произведение, повествующее о каком-либо эпизоде из жизни героя",
  },

  {
    prompt: "Кто написал картину «Утро в сосновом лесу»?",
    options: ["И.И.Левитан", "И. И. Шишкин", "А. А. Саврасов"],
    answer: "И. И. Шишкин",
  },

  {
    prompt: "В рассказе «Макс» кем был Владимир Григорьевич Дуров?",
    options: ["Актёр", "Сценарист", "Дрессировщик"],
    answer: "Дрессировщик",
  },

  // ============ ÝAPON DILI ============

  {
    prompt: "かぞくは　３__　です　　__　と　__　と　__　です。",
    options: [
      "人　日本　月　私",
      "人　母　父　私",
      "人　字　私　母"
    ],
    answer: "人　母　父　私",
  },

  {
    prompt: "«Nirede ýaşaýarsyň?» diýen soragyň dogry japonesçe terjimesini saýlaň.",
    options: [
      "どこに　すんでいますか",
      "だれに　すんでいますか",
      "どこに　さんでいますか"
    ],
    answer: "どこに　すんでいますか",
  },

  {
    prompt: "まいにち　なんじに　おきますか — bu soragyň dogry terjimesi haýsy?",
    options: [
      "Her gün naçede ýatýarsyň?",
      "Her gün näçede iýip içýäň?",
      "Her gün naçede turýaň?"
    ],
    answer: "Her gün naçede turýaň?",
  },

  {
    prompt: "____は　げんきです。",
    options: ["父", "大", "学校"],
    answer: "父",
  },

  {
    prompt: "Katakana:  se   so   to",
    options: ["セ　ソ　ト", "ス　ン　タ", "ハ　セ　ト"],
    answer: "セ　ソ　ト",
  },

  // ============ TÜRKMEN DILI ============

  {
    prompt: "Sözlemler aýdylış intonasiýalary, pikir aňladyşy boýunça näçe topara bölünýär?",
    options: ["3", "4", "5"],
    answer: "4",
  },

  {
    prompt: "Durnukly söz düzümler haýsylar?",
    options: [
      "Bagyň ýapragy, ýüregi ýuka, gülüň ysy",
      "Ýüňsakgal etmek, dili uzyn, doň bagyr",
      "Tertipli okuwçy, owadan gyz, uzyn saç"
    ],
    answer: "Ýüňsakgal etmek, dili uzyn, doň bagyr",
  },

  {
    prompt: "Sözlemler gurluş aýratynlyklary boýunça haýsy toparlara bölünýär?",
    options: [
      "Ýönekeý sözlem, goşma sözlem",
      "Habar sözlemi, sorag sözlemi, ýüzlenme sözlemi",
      "Doly we doly däl sözlem"
    ],
    answer: "Ýönekeý sözlem, goşma sözlem",
  },

  {
    prompt: "Özbaşdak many aňlatmaýan söz toparlary haýsylar?",
    options: [
      "Atlar, sypatlar, sözsoňular, modal sözler",
      "Baglaýjy kömekçiler, ümlükler, sözsoňy kömekçiler ownuk bölekler",
      "Işlikler, atlar, sypatlar, soňlar, hallar, çalyşmalar"
    ],
    answer: "Baglaýjy kömekçiler, ümlükler, sözsoňy kömekçiler ownuk bölekler",
  },

  {
    prompt: "Ýaýraň ýönekeý sözlem haýsy?",
    options: [
      "Aman mekdepden geldi",
      "Gün çykdy",
      "Gün çykdy, emma howa maýlamady"
    ],
    answer: "Gün çykdy, emma howa maýlamady",
  },

  // ============ EDEBIÝAT ============

  {
    prompt: "Gadym türkmen edebiýatyna degişli dessanlar, eserler haýsylar?",
    options: [
      "“Oguznama”, “Ergenokan”, “Tumar”, “Syrak”",
      "“Oguznama”, “Asly-Kerem”, “Leýli-Mejnun”",
      "“Oguznama”, “Şaşenem-Garyp”, “Leýli- Mejnun”"
    ],
    answer: "“Oguznama”, “Ergenokan”, “Tumar”, “Syrak”",
  },

  {
    prompt: "“Garaşsyz” goşgunyň, “Dünýäniň hereketi bilimdir” poemanyň awtory kim?",
    options: [
      "Gözel Şagulyýewa",
      "Atamyrat Atabaýew",
      "Täçmämmet Jürdekow"
    ],
    answer: "Gözel Şagulyýewa",
  },

  {
    prompt: "“Bilmes men”, “Gözleriň”, “Baharyny gör” goşgularyň awtory kim?",
    options: [
      "Muhammet Baýram han",
      "Ýunus Emre",
      "Garajaoglan"
    ],
    answer: "Ýunus Emre",
  },

  {
    prompt: "“Gülpam” dessanynyň gahrymanlary kimler?",
    options: [
      "Alyşir Nowaýy, Gülpam, Soltansöýün Baykara, Elbnent",
      "Gülpam, Soltansoýün, Güljahan, Burla hatyn",
      "Gülpam, Soltansöýün, Ejekejan, Agaýunus, Köse"
    ],
    answer: "Gülpam, Soltansöýün, Ejekejan, Agaýunus, Köse",
  },

  {
    prompt: "“Görogly” eposynyň gahrymanlary kimler?",
    options: [
      "Görogly, Bezirgen, Reýhan arap, Mämmetjen, Adybeg, Mömin",
      "Görogly, Baly beg, Aman arap, Genjim beg, Kerem",
      "Görogly, Leňňer baba, Bezirgen, Kose, Şa mama Zulman"
    ],
    answer: "Görogly, Leňňer baba, Bezirgen, Kose, Şa mama Zulman",
  },

  // ============ TÜRKMENISTAN TARÝHY ============

  {
    prompt: "Beýik Mogollar döwleti kim tarapyndan dargadylýar?",
    options: ["Nedir şa", "Çingiz han", "Tahmasp şa", "Teýmirleň"],
    answer: "Nedir şa",
  },

  {
    prompt: "Baýram hanyň ýaşan ýyllary haýsy wariantda dogry?",
    options: ["1495-1547", "1496-1568", "1498-1561", "1497-1563"],
    answer: "1497-1563",
  },

  {
    prompt: "Teýmirleň näçinji ýylda we näçe ýaşynda aradan çykýar?",
    options: [
      "1407 ý. 71 ýaşynda",
      "1406 ý. 79 ýaşynda",
      "1408 ý. 73 ýaşynda",
      "1505 ý. 70 ýaşynda"
    ],
    answer: "1406 ý. 79 ýaşynda",
  },

  {
    prompt: "Beýik Mogollar döwletini kim we näçenji ýylda esaslandyrýar?",
    options: [
      "1623 ý. Baýram han",
      "1526 ý. Babyr",
      "1528 ý. Humaýun"
    ],
    answer: "1526 ý. Babyr",
  },

  {
    prompt: "Aşakdakylaryň haýsysy Deli soltanlygyna degişli däl?",
    options: [
      "Togalaklar türkmen döwleti",
      "Aýbegiler türkmen döwleti",
      "Altyn orda döwleti",
      "Halajylar döwleti"
    ],
    answer: "Altyn orda döwleti",
  },

  // ============ DÜNÝÄ TARÝHY ============

  {
    prompt: "9 synp okuwçylary dünýä taryhy dersinde näçinji asyry öwrenýärler?",
    options: ["XXI asyry", "XX  asyry", "XIX asyry", "XVIII asyry"],
    answer: "XX  asyry",
  },

  {
    prompt: "Osman imperiýasynyň Konstitusiýasy näçinji ýylda kabul edilýär?",
    options: ["1889 ý.", "1861 ý.", "1867 ý.", "1887 ý."],
    answer: "1867 ý.",
  },

  {
    prompt: "Meýdzi rewolýusiýasy näçenji ýylda, we nirede bolupdyr?",
    options: [
      "1861 ý. Russiýada",
      "1867 ý. Ýaponiýada",
      "1869 ý. Hytaýda",
      "1865 ý. ABŞ-da"
    ],
    answer: "1867 ý. Ýaponiýada",
  },

  {
    prompt: "Birinji iňlis-owgan urşy näçenji ýylda bolup geçýär?",
    options: ["1839 ý.", "1838 ý.", "1837 ý.", "1840 ý."],
    answer: "1839 ý.",
  },

  {
    prompt: "Näçinji ýylda Iňlis-Eýran urşy bolup geçýär?",
    options: ["1856 ý.", "1857 ý.", "1858 ý.", "1855 ý."],
    answer: "1856 ý.",
  },

  // ============ HUKUK ============

  {
    prompt: "Näçenji ýylda ABŞ-nyň Konstitusiýasy döredildi?",
    options: ["1791 ý.", "1885 ý.", "1787 ý.", "1889 ý."],
    answer: "1787 ý.",
  },

  {
    prompt: "Türkmenistanyň özygtyýarlylygy, Garaşsyzlyk hakyndaky jarnamasy haçan kabul edildi?",
    options: [
      "27.10.1991 ý.",
      "24.10.1990 ý.",
      "22.08.1990 ý.",
      "25.08.1991 ý."
    ],
    answer: "27.10.1991 ý.",
  },

  {
    prompt: "Aşakdakylaryň haýsysy döwletleriň meýletin birleşmesi diýip atlandyrylýar?",
    options: ["Monarhiýa", "Respublika", "Federasiýa", "Unitar"],
    answer: "Federasiýa",
  },

  {
    prompt: "Türkmenistanyň Konstitusiýasynyň näçinji bölümi Mejlise degişli?",
    options: ["VI bölümi", "IV bölümi", "VII bölümi", "VIII bölümi"],
    answer: "VII bölümi",
  },

  {
    prompt: "Konstitusiýa diýmek...",
    options: ["Latynça - gurluş", "Grekçe - kanun", "Fransuzça - hukuk"],
    answer: "Latynça - gurluş",
  },

  {
    prompt: "Saýlaw hukugy haýsylara bölünýär?",
    options: [
      "Subýektiw, obýektiw",
      "Aktiw, passiw",
      "Majoritar, barabar",
      "Pluralistik, Monosentristik"
    ],
    answer: "Aktiw, passiw",
  },

  {
    prompt: "Türkmenistanda ilkinji Prezident saýlawlary haçan geçirilýär?",
    options: ["24.10.1990 ý.", "27.10.1990 ý.", "26.09.1991 ý.", "11.02.1992 ý."],
    answer: "27.10.1990 ý.",
  },

  {
    prompt: "Türkmenistanyň Konstitusiýasy birinji gezek näçinji ýylda redaktirlenýär?",
    options: ["2009 ý.", "2010 ý.", "2007 ý.", "2008 ý."],
    answer: "2008 ý.",
  },

  {
    prompt: "Aşakdakylaryň haýsysy Türkmenistanyň döwlet dolandyryş formasy?",
    options: ["Respublika", "Monarhiýa", "Demokratiýa", "Federasiýa"],
    answer: "Respublika",
  },

  {
    prompt: "Adamyň-raýatyň hukuklary we azatlyklary näçe topara bölünýär we haýsylar?",
    options: [
      "2-e bölünýär, Ruhy-sosial",
      "3-e bölünýär, Şahsy, syýasy, sosial- ykdysady",
      "3-e bölünýär, Syýasy, maddy, sosial",
      "2-e bölünýär, dini, ahlak"
    ],
    answer: "3-e bölünýär, Şahsy, syýasy, sosial- ykdysady",
  },

  // ============ GEOGRAFIÝA ============

  {
    prompt: "Garagum çölüniň meýdany näçe?",
    options: ["370 km²", "350 km²", "340 km²"],
    answer: "350 km²",
  },

  {
    prompt: "Türkmenistan näçe welaýata bölünýär?",
    options: ["4", "6", "5"],
    answer: "5",
  },

  {
    prompt: "Türkmenistanyň ýangyç toplumy pudagy haýsylar?",
    options: [
      "Nebit, gaz, elektoenergiýa",
      "Daş, kömür, kükürt, ýod",
      "Duz, ýod, minerallar"
    ],
    answer: "Nebit, gaz, elektoenergiýa",
  },

  {
    prompt: "Türkmenistanyň ilaty näçe?",
    options: ["6 mln gowrak", "7 mln gowrak", "8 mln gowrak"],
    answer: "7 mln gowrak",
  },

  {
    prompt: "Türkmenistan näçinji sagat guşaklygynda ýerleşýär?",
    options: ["4", "3", "5"],
    answer: "5",
  },

  {
    prompt: "Maldarçylyk toplumynyň pudaklary haýsylar?",
    options: [
      "Pagtaçylyk, dowardarçylyk, atçylyk",
      "Dowardarçylyk, iri şahly mardarçylyk, balykçylyk",
      "Däneçilik, bal aryçylyk"
    ],
    answer: "Dowardarçylyk, iri şahly mardarçylyk, balykçylyk",
  },

  {
    prompt: "Kaspiý deňziniň meýdany näçe?",
    options: ["370 km²", "350 km²", "340 km²"],
    answer: "370 km²",
  },

  {
    prompt: "Türkmenistanyň paýtagty haýsy şäher?",
    options: ["Aşgabat şäheri", "Arkadag şäheri", "Türkmenbaşy şäheri"],
    answer: "Aşgabat şäheri",
  },

  {
    prompt: "Türkmenistanyň meýdany näçe?",
    options: ["491,2 müň km²", "492,2 müň km²", "493,3 müň km²"],
    answer: "491,2 müň km²",
  },

  {
    prompt: "Türkmenistan haýsy döwletler bilen araçäkleşýär?",
    options: [
      "Gazagystan, Owganystan, Eýran",
      "Azerbeýjan, Gazagystan, Owganystan",
      "Gazagystan, Owganystan, Özbekistan, Eýran, Azerberjan"
    ],
    answer: "Gazagystan, Owganystan, Özbekistan, Eýran, Azerberjan",
  },

  // ============ BIOLOGIÝA ============

  {
    prompt: "Ýarganatlar iňişlikde nädip hereket edýärler?",
    options: ["göresi boýunça", "eşidişi boýunça", "syzyşy boýunça"],
    answer: "eşidişi boýunça",
  },

  {
    prompt: "Süýdemdirijileriň ýüregi näçe kameraly?",
    options: ["3", "4", "2"],
    answer: "4",
  },

  {
    prompt: "Süýdemdirijileriň nerw ulgamy näçe bölümden durýar?",
    options: ["2", "3", "5"],
    answer: "3",
  },

  {
    prompt: "Aşakdakylaryň haýsy haýwanlar süýdemdirijiler klasyna degişli?",
    options: [
      "akula, latimeriýa",
      "bekre, kambala",
      "kaşalot, delfin"
    ],
    answer: "kaşalot, delfin",
  },

  {
    prompt: "Türkmenistanyň soňky Gyzyl kitaby näçenji ýylda çap edildi?",
    options: ["2011", "2015", "1999"],
    answer: "2011",
  },

  // ============ ALGEBRA ============

  {
    prompt: "y = x² funksiýanyň grafigi näme?",
    options: ["gönü çyzyk", "egri çyzyk", "giperbola", "parabola"],
    answer: "parabola",
  },

  {
    prompt: "Absolýut ýalňyşlygyň formulasy haýsy?",
    options: ["|x-a|", "|x-a| / |a|", "|x-a| × |a|"],
    answer: "|x-a|",
  },

  {
    prompt: "Kwadrat üçagzanyň (kwadrat deňlemä degişli üçagza) formulasy haýsy?",
    options: ["ax + b", "ax²+bx+c", "ax-c"],
    answer: "ax²+bx+c",
  },

  {
    prompt: "a^m · a^n = ?",
    options: ["a^{m:n}", "a^{m×n}", "a^{m+n}"],
    answer: "a^{m+n}",
  },

  {
    prompt: "a^(-n) = ?",
    options: ["a^n", "a^(-n)", "1 / a^n"],
    answer: "1 / a^n",
  },

  // ============ GEOMETRIÝA ============

  {
    prompt: "Ähli tarapy deň bolan parallelogram näme diýilýär?",
    options: ["Kwadrat", "romb", "parallelogram"],
    answer: "romb",
  },

  {
    prompt: "Kwadrat üçagzany köpelijilere dagatmagyň formulasy haýsy?",
    options: [
      "ax²+bx+c=0",
      "a(x-x1)(x-x2)",
      "(x-x1)(x-x2)"
    ],
    answer: "a(x-x1)(x-x2)",
  },

  {
    prompt: "Trapesiýanyň orta çyzygy näme deň?",
    options: [
      "uly esasynyň ýarsyna deň",
      "esaslarynyň jeminiň ýarsyna deň",
      "gapdal tarapynyň jemine deň"
    ],
    answer: "esaslarynyň jeminiň ýarsyna deň",
  },

  {
    prompt: "Üçburçlugyň orta çyzygy näme deň?",
    options: [
      "esasyne deň",
      "esasynyň ýarsyna deň",
      "gapdal taraplaryň jemine deň"
    ],
    answer: "esasynyň ýarsyna deň",
  },

  {
    prompt: "Otnasitel (ýagny nisbî) ýalňyşlygyň formulasy haýsy?",
    options: [
      "D = b² - 4·a·c",
      "|x-a|",
      "|x-a| / |a|"
    ],
    answer: "|x-a| / |a|",
  },

  // ============ HIMIÝA ============

  {
    prompt: "Doly ion deňlemesini görkeziň:",
    options: [
      "2NaCl + Pb(NO3)2 = PbCl2↓ + 2NaNO3",
      "2Na+ + 2Cl- + Pb2+ + 2NO3²- → PbCl2↓ + 2Na+ + 2NO3²-",
      "Pb2+ + 2Cl- → PbCl2↓"
    ],
    answer: "2Na+ + 2Cl- + Pb2+ + 2NO3²- → PbCl2↓ + 2Na+ + 2NO3²-",
  },

  {
    prompt: "Elektrolitik dissosiasiýanyň esasy teoretik düzgünlerini 1887 ýylda haýsy alym düzdi?",
    options: [
      "B. A. Kistýakowskiý",
      "J. A. Kablukow",
      "S. A. Arrenius"
    ],
    answer: "S. A. Arrenius",
  },

  {
    prompt: "Dissosiasiýa derejesini haýsy formula boýunça hasaplap bolar?",
    options: [
      "v = c/t",
      "k = [H+][OH-]/[HOH]",
      "α = n/N"
    ],
    answer: "α = n/N",
  },

  {
    prompt: "Elektrolitlere haýsylar degişli?",
    options: [
      "HCl, NaOH, NaCl",
      "O2, H2, H2O",
      "NaOH, HCl, H2"
    ],
    answer: "HCl, NaOH, NaCl",
  },

  {
    prompt: "Elektrolitleriň suwda eredilende ýa-da gyzdyrylanda ionlara dargama prosesine näme diýilýär?",
    options: ["koagulýasiýa", "gidratasiýa", "elektrolitik dissosiasiýa"],
    answer: "elektrolitik dissosiasiýa",
  },

  // ============ FIZIKA ============

  {
    prompt: "Burç tizligiň ölçeg birligi?",
    options: ["Gs", "m/s²", "rad/s"],
    answer: "rad/s",
  },

  {
    prompt: "S = v·t formulasy haýsy ululygyň formulasy?",
    options: [
      "deňtizlenýän hereketde geçilen ýoluň formulasy",
      "deňtizlenýän hereketde tizligiň formulasy",
      "gönüçyzykly deňölçegli hereketde geçilen ýoluň formulasy"
    ],
    answer: "gönüçyzykly deňölçegli hereketde geçilen ýoluň formulasy",
  },

  {
    prompt: "Fiziki ululyklaryň näçe sany görnüşi bar? Olar haýsylar?",
    options: [
      "3, Mehaniki, Wektor, Skalýar",
      "4, Wektor, Skalýar, Mehaniki, Fiziki",
      "2, Wektor, Skalýar"
    ],
    answer: "2, Wektor, Skalýar",
  },

  {
    prompt: "Gönüçyzykly deňölçegli hereketde tizligiň formulasy haýsy?",
    options: [
      "v = s / t",
      "v = t / s",
      "v = a · t"
    ],
    answer: "v = s / t",
  },

  {
    prompt: "Sesiň päsgelçiliklerden sowlup geçmegine näme diýilýär?",
    options: ["Sesiň serpikmegi", "Sesiň difraksiýasy", "Rewerberasiýa"],
    answer: "Sesiň difraksiýasy",
  },

  {
    prompt: "Sesiň gatylygynyň ölçeg birligi?",
    options: ["Desibel", "Tesla", "Nýuton"],
    answer: "Desibel",
  },

  {
    prompt: "Tizlenme haýsy harp bilen belgilenýär?",
    options: ["a", "S", "v"],
    answer: "a",
  },

  {
    prompt: "Aşakdakylaryň haýsysy skalýar ululyk?",
    options: ["Tizlik", "Massa", "Tizlenme"],
    answer: "Massa",
  },

  {
    prompt: "Töwerek boýunça bir doly aýlaw etmek üçin gerek bolan wagta näme diýilýär?",
    options: ["period", "wagt", "ýygylyk"],
    answer: "period",
  },

  {
    prompt: "Aşakdakylaryň haýsysy egri çyzykly herekete degişli?",
    options: [
      "Maşyn hemişelik tizlik bilen hereket edýär",
      "Töwerek boýunça hereket edýär",
      "Maşyn deňtizlenýän hereket edýär"
    ],
    answer: "Töwerek boýunça hereket edýär",
  },

  // ============ PROÝEKTIRLEMEGIŇ ESASLARY ============

  {
    prompt: "Aşakdakylaryň haýsysy sökülmeýän birikdirmedir?",
    options: [
      "Berçinli, nurbat, gaýka",
      "Berçinli, wintli, gaýkaly şpilkaly, kebşirlenen",
      "Berçinli, kebşirlenen, galaýylanan, ýelmenen"
    ],
    answer: "Berçinli, kebşirlenen, galaýylanan, ýelmenen",
  },

  {
    prompt: "Aşakdakylaryň haýsysy hyrly birikdirmedir?",
    options: [
      "nurbat, gaýka, şpilka, wint",
      "gaýkaly şpilkaly, kebşirlenen, şine",
      "şine, şplint, nurbat"
    ],
    answer: "şine, şplint, nurbat",
  },

  {
    prompt: "Hyryň ädimi haýsy harp bilen belgilenýär?",
    options: ["P", "S", "D"],
    answer: "P",
  },

  {
    prompt: "Jisimi emele getirijiler haýsylar?",
    options: [
      "gapyrgalar, granlar, depeler",
      "proýeksiýa, kesik",
      "proýektirleme"
    ],
    answer: "gapyrgalar, granlar, depeler",
  },

  {
    prompt: "Berçin näme?",
    options: [
      "Nurbat",
      "Bir tarapy başjagaz bilen gutarýan çüý",
      "gaýka"
    ],
    answer: "Bir tarapy başjagaz bilen gutarýan çüý",
  },

  // ============ INFORMATIKA ============

  {
    prompt: "Kompýuter grafikasy näme?",
    options: [
      "wektor görnüşindäki şekilleri ýönekeý figuarlara bölmek",
      "şekilleriň sifer görnüşinde işlenip taýýarlanmagy",
      "kompýuteriň kömegi bilen taýýarlanan şekil"
    ],
    answer: "kompýuteriň kömegi bilen taýýarlanan şekil",
  },

  {
    prompt: "Ýönekeý wektor şekiliniň döredilişi näçe tapgyrdan durýar?",
    options: ["5", "6", "4"],
    answer: "4",
  },

  {
    prompt: "Kolontitul näme?",
    options: [
      "hekaýanyň ady, baplar, bölümler, awtoryň familiýasy",
      "sahypalaryň ählisiniň ýa-da aglabasynyň ýokarsynda ýa-da aşagynda gaýtalanyp gelýän tekst",
      "Word-da döredilen dokumentiň sahypalaryny belgilemek üçin ulanylýan menýu"
    ],
    answer: "sahypalaryň ählisiniň ýa-da aglabasynyň ýokarsynda ýa-da aşagynda gaýtalanyp gelýän tekst",
  },

  {
    prompt: "Dekoratiw teksti (WordArt) goýmak üçin haýsy nusgany (menýuny) saýlamaly?",
    options: [
      "шаблон Word 97 – 2003",
      "вставка Word – Art",
      "Microsoft Word – 2016"
    ],
    answer: "вставка Word – Art",
  },

  {
    prompt: "Tekste tablisa goşmagyň dogry yzygiderliligi haýsy?",
    options: [
      "вставка – таблица - вставить таблицу – число столбцев – число строк",
      "таблица – вставка – число строк – число столбцев",
      "вставка – таблица - вставить таблицу – число строк - число столбцев"
    ],
    answer: "вставка – таблица - вставить таблицу – число столбцев – число строк",
  },

];
