// UBT 10 synp – Test A

let questions = [
  // ========== IŇLIS DILI ==========

  {
    prompt: "1. What does the word 'trash' mean?",
    options: [
      "to celebrate festivals, birthdays, etc.",
      "to collect something from a place",
      "waste food, paper, etc. that you throw away",
    ],
    answer: "waste food, paper, etc. that you throw away",
  },

  {
    prompt:
      "2. The process of making air, water, soil, etc. dirty; the state of being dirty.",
    options: ["Atmosphere", "Pollution", "Wildlife"],
    answer: "Pollution",
  },

  {
    prompt: "3. Nowruz means _______.",
    options: ["equinox", "immemorial", "new day"],
    answer: "new day",
  },

  {
    prompt: "4. During Nowruz people ___________ their souls from sins.",
    options: ["cleanse", "grievance", "celebrate"],
    answer: "cleanse",
  },

  {
    prompt:
      '5. When do we celebrate the ecological day “A drop of water is a grain of gold”?',
    options: [
      "the first Sunday in April",
      "the last Sunday in April",
      "the first Sunday in May",
    ],
    answer: "the last Sunday in April",
  },

  {
    prompt: "6. Plant a ________.",
    options: ["tree", "bird feeder", "trees"],
    answer: "tree",
  },

  {
    prompt: "7. Recycle your cans and _______________.",
    options: ["bird feeder", "bottles, newspaper", "trees"],
    answer: "bottles, newspaper",
  },

  {
    prompt: "8. Earth Day was founded in the United States in ______.",
    options: ["1950", "2000", "1970"],
    answer: "1970",
  },

  {
    prompt: "9. Deforestation is ______.",
    options: ["Using fossil fuels", "Riding bicycles", "Cutting down trees"],
    answer: "Cutting down trees",
  },

  {
    prompt:
      "10. What do you call the area that is inhabited by a particular species?",
    options: ["Habitat", "Environment", "Biosphere"],
    answer: "Habitat",
  },

  // ========== RUS DILI ==========

  {
    prompt:
      "11. Определите, чем выражено поясняемое слово в СПП с придаточным изъяснительным: «Я доволен, что я человек».",
    options: ["глаголом", "прилагательным", "наречием", "существительным"],
    answer: "прилагательным",
  },

  {
    prompt:
      "12. Укажите значение придаточного обстоятельственного: «Чтобы не заблудиться в лесу, собирая грибы, я беру с собой компас».",
    options: [
      "значение времени",
      "значение условия",
      "значение цели",
      "значение следствия",
    ],
    answer: "значение цели",
  },

  {
    prompt:
      "13. Какая конструкция используется для выражения сравнения: «Маленькая Вика была как две капли воды похожа на свою бабку».",
    options: [
      "сравнительный оборот",
      "фразеологизм",
      "сочетание глагола с существительным в творительном падеже",
      "сложноподчинённое предложение с придаточным сравнения",
    ],
    answer: "сравнительный оборот",
  },

  {
    prompt: "14. Укажите предложение с придаточным сравнения.",
    options: [
      "Я же подумал, будто я ей надоел.",
      "Чем дольше мы живём, тем и дружить с поэзией труднее.",
      "Надворные постройки обветшали и выглядели так, будто много лет не касались их заботливые руки.",
      "Всякий труд важен, ибо облагораживает человека.",
    ],
    answer:
      "Надворные постройки обветшали и выглядели так, будто много лет не касались их заботливые руки.",
  },

  {
    prompt:
      "15. Определите тип соподчинения в предложении: «Вечером, когда это облако освещено вестибюльными огнями, кажется, будто подземная станция горит, густыми клубами выбрасывая дым».",
    options: [
      "однородное соподчинение",
      "неоднородное соподчинение",
      "последовательное подчинение",
      "сочетание соподчинения и последовательного подчинения",
    ],
    answer: "однородное соподчинение",
  },

  // ========== ÝAPON DILI ==========

  {
    prompt: "16. かきます (öňten bolan hereketiň geçmiş görnüşini saýlaň).",
    options: ["かいた", "かくた", "かきた"],
    answer: "かいた",
  },

  {
    prompt:
      "17. ____　boşluklary dogry kömekçiler bilen dolduryň: あね__　うち__　　そうじ__　します",
    options: ["は・と・を", "は・で・を", "が・に・は"],
    answer: "は・で・を",
  },

  {
    prompt: "18. かいもの sözüni dogry wariantdan saýlaň.",
    options: ["飲み物", "買い物", "食べ物"],
    answer: "買い物",
  },

  {
    prompt:
      "19. «料理と　まえに　てを洗います» diýen jümleniň dogry terjimesini saýlaň.",
    options: [
      "NAHAR SÜÝJI BOLUPDYR.",
      "NAHARDAN ÖŇ ELIŇI ÝUWMALY",
      "NAHARYŇ TAGAMY DUZLY.",
    ],
    answer: "NAHARDAN ÖŇ ELIŇI ÝUWMALY",
  },

  {
    prompt: "20. «aýdym diňlemek» diýen many üçin dogry japonesçe warianty saýlaň.",
    options: ["おんがく　きく", "おんがくを　きく", "おんがくを　うたう"],
    answer: "おんがくを　きく",
  },

  {
    prompt: "21. «SURAT ÇEKMÄNI GOWY GÖRÝÄRIN» diýen many üçin dogry wariant:",
    options: [
      "しんぶんをよむことです。",
      "えをきくことです。",
      "えをかくことです",
    ],
    answer: "えをかくことです",
  },

  {
    prompt: "22. 出します söziniň dogry terjimesini saýlaň.",
    options: ["ÝITIRMEK.", "TAŞLAMAK", "GÖRKEZMEK"],
    answer: "GÖRKEZMEK",
  },

  {
    prompt:
      "23. わかりませんから　もういちど　いってください。 – diýen jümle näme diýmek?",
    options: [
      "DÜŞÜNMEÝÄNLIGIM ÜÇIN ÝENEDE BIR GEZEK GAÝTALAÝDA.",
      "ÝARAMAÝANLYGYM ÜÇIN ÖÝE GAÝTSAM BOLÝARMY",
      "GARAŇKY BOLANY ÜÇIN  ÇYRANY AÇAÝYŇ",
    ],
    answer:
      "DÜŞÜNMEÝÄNLIGIM ÜÇIN ÝENEDE BIR GEZEK GAÝTALAÝDA.",
  },

  {
    prompt: "24. «GAPJYGYŇY ÝITIRMEK» üçin dogry ýazlyşy saýlaň.",
    options: ["さいふをとし", "さいふをとす", "さいふをとつ"],
    answer: "さいふをとす",
  },

  {
    prompt:
      "25. «閉めますと忘れます» jümlesindäki işlikleriň dogry jübütlenmesini saýlaň.",
    options: ["あけます。おくれます", "しめます。わすれます", "おとします。わすれます。"],
    answer: "しめます。わすれます",
  },

  // ========== TÜRKMEN DILI ==========

  {
    prompt: "26. Özbaşdak many aňlatmaýan söz toparlary haýsylar?",
    options: [
      "söz soňy kömekçiler,baglaýjylar,ümlükler,işlikler,sanlar",
      "söz soňy kömekçiler,baglaýjylar,modal sözler,ümlükler,ownuk bölekler,ses we şekil meňzetmeleri",
      "söz soňy kömekçiler,ümlükler,sanlar,atlar,hallar",
    ],
    answer:
      "söz soňy kömekçiler,baglaýjylar,modal sözler,ümlükler,ownuk bölekler,ses we şekil meňzetmeleri",
  },

  {
    prompt: "27. Fonetika nämäni öwrenýär?",
    options: ["sesleri", "goşulmalary", "sözleri we goşulmalary"],
    answer: "sesleri",
  },

  {
    prompt: "28. Resmi iş stile haýsylar degişli?",
    options: [
      "kanunlar,arza,terjimehal,permanlar,kararlar",
      "diplom,gulluk hatlar,düşündiriş kepilnama",
      "makalalar,çeper eserler,arza",
    ],
    answer: "kanunlar,arza,terjimehal,permanlar,kararlar",
  },

  // 29-njy soragda (ýygnak ýönekeý sözlem) ýazgydaky düşündirişler birmeňzeş
  // bolany üçin, ony bu js-wersiýasyna goşmadym.

  {
    prompt:
      "30. Söz düzümlerinde birinji, merkezleşdiriji söze nähili söz diýilýär?",
    options: ["erkin söz", "esasy söz", "garaşly söz"],
    answer: "esasy söz",
  },

  // ========== EDEBIÝAT ==========

  {
    prompt: "31. “Zöhre-Tahyr” dessanynyň gahrymanlary haýsylar?",
    options: [
      "Mollanepes, Zöhre, Tahyr, Babahan, Bahyr",
      "Zöhre, Tahyr, Babahan, Gara batyr, Agaýunus",
      "Tahyr, Zöhre, Nowful, Seýit beni",
    ],
    answer: "Tahyr, Zöhre, Nowful, Seýit beni",
  },

  {
    prompt: "32. “Jeňnama” poemasynyň awtory kim?",
    options: [
      "Nurmuhammet Andalyp",
      "Abdysetdar Kazy",
      "Mätäji",
    ],
    answer: "Nurmuhammet Andalyp",
  },

  {
    prompt:
      "33. “Watanym galdy”, “Döwrandyr diýme!” goşgularyň awtory kim?",
    options: [
      "Seýitnazar Seýdi",
      "Gurbanaly Magrupy",
      "Mollanepes",
    ],
    answer: "Seýitnazar Seýdi",
  },

  {
    prompt: "34. “Ýusup-Ahmet” dessanynyň gahrymanlary kimler?",
    options: [
      "Ýusup, Ahmet, Bozoglan, Köse, Aga beg",
      "Ýusup, Ahmet, Aga beg, Baba beg,Kaýys",
      "Ýusup, Ahmet, Bozoglan, Gözel şa, Aga beg",
    ],
    answer: "Ýusup, Ahmet, Bozoglan, Gözel şa, Aga beg",
  },

  {
    prompt:
      "35. “Gelende bardyr”, “Otuz iki tohum kyssasy” goşgularyň awtory kim?",
    options: ["Magrupy", "Mahmyt Gaýyby", "Magtymguly Pyragy"],
    answer: "Mahmyt Gaýyby",
  },

  // ========== TÜRKMENISTANYŇ TARYHY ==========

  {
    prompt:
      "36. Muhammediň uly ogly Öwez Inak (Öwez Ýnak) Hywada näçenji ýyllarda hökümdarlyk sürýär?",
    options: [
      "1790-1802-nji ýyllarda",
      "1793-nji ýylda",
      "1770-1790-njy ýyllarda",
    ],
    answer: "1790-1802-nji ýyllarda",
  },

  {
    prompt:
      "37. 1715-1717-nji ýyllarda Hywa ugruna näçe gezek ekspedisiýa guralypdyr?",
    options: ["Iki gezek", "Üç gezek", "Bir gezek"],
    answer: "Bir gezek",
  },

  {
    prompt:
      "38. 1800-1826-njy ýyllarda Buhara emirligini kim dolandyrypdyr?",
    options: [
      "Şamyrat Welnamy",
      "Soltanýaz beg",
      "Seýitnazar Haýdar Töre (Mirhaýdar)",
    ],
    answer: "Seýitnazar Haýdar Töre (Mirhaýdar)",
  },

  {
    prompt: "39. Birinji rus-eýran urşy haçan bolupdyr?",
    options: [
      "1804-1813-nji ýyllarda",
      "1826-1828-nji ýyllarda",
      "1806-1825-nji ýyllarda",
    ],
    answer: "1804-1813-nji ýyllarda",
  },

  {
    prompt:
      "40. Aýdym-saz sungatynda gadymdan gelýän haýsy ýollar bolupdyr?",
    options: [
      "Tirme bagşyçylyk",
      "Tirme hem-de dessançy bagşyçylyk",
      "Dessan bagşyçylygy",
    ],
    answer: "Tirme hem-de dessançy bagşyçylyk",
  },

  // ========== DÜNÝÄ TARYHY ==========

  {
    prompt: "41. Dünýä ykdysadyýetiniň durnukly ösen döwri haýsy ýyllar?",
    options: ["1924-1929", "1913-1929", "1929-1932"],
    answer: "1924-1929",
  },

  {
    prompt:
      "42. 1928-nji ýylyň ABŞ prezident saýlawlarynda kim ýeňip, ýurdy dolandyrypdyr?",
    options: ["F. Ruzwelt", "Gerbert Guwer", "J. Keýns"],
    answer: "Gerbert Guwer",
  },

  {
    prompt: "43. “Täze ugruň” (New Deal) birinji döwri haýsy ýyllar?",
    options: ["1930-1932", "1932-1933", "1933-1934"],
    answer: "1933-1934",
  },

  {
    prompt: "44. “Täze ugruň” ikinji döwri haýsy ýyllar?",
    options: ["1935-1936", "1934-1935", "1937-1939"],
    answer: "1935-1936",
  },

  {
    prompt: "45. Beýik Britaniýanyň esasy syýasy güýçleri nämeler?",
    options: [
      "Leýboristler partiýasy",
      "Konserwatorlar we liberallar",
      "Konserwatorlar",
    ],
    answer: "Konserwatorlar we liberallar",
  },

  // ========== GEOGRAFIÝA ==========

  {
    prompt:
      "46. Dünýäniň syýasy kartasynyň emele gelşi näçe döwre bölünýär?",
    options: ["5", "6", "7"],
    answer: "6",
  },

  {
    prompt: "47. Döwlet dolandyryşynyň esasy görnüşleri nämeler?",
    options: [
      "Federasiýa, unitar",
      "Respublika, monarhiýa",
      "Demokratik respublika",
    ],
    answer: "Federasiýa, unitar",
  },

  {
    prompt: "48. Dünýäniň ilaty takmynan näçe?",
    options: ["8 milliard", "9 milliard", "7 milliard-dan gowrak"],
    answer: "8 milliard",
  },

  {
    prompt: "49. Ýer şarynda takmynan näçe döwlet bar?",
    options: ["230-dan gowrak", "250-den gowrak", "290-dan gowrak"],
    answer: "230-dan gowrak",
  },

  {
    prompt: "50. Demografiýa ylmy nämäni öwrenýär?",
    options: [
      "Tebigaty öwredýän ylym",
      "Ilaty öwredýän ylym",
      "Şäherleri öwredýän ylym",
    ],
    answer: "Ilaty öwredýän ylym",
  },

  {
    prompt: "51. Ýangyç senagatynyň haýsy pudaklary degişli?",
    options: [
      "Nebit-gaz, elektraenergetika",
      "Nebit-gaz",
      "Nebit-gaz,kömür,elektraenergetika",
    ],
    answer: "Nebit-gaz,kömür,elektraenergetika",
  },

  {
    prompt: "52. Metallurgiýa näçe topara bölünýär?",
    options: [
      "Gara we reňkli metallurgiýa",
      "Gara metallurgiýa",
      "Reňkli metallurgiýa",
    ],
    answer: "Gara we reňkli metallurgiýa",
  },

  {
    prompt:
      "53. Dünýä ulag ulgamynyň haýsy görnüşleri tapawutlandyrylýar?",
    options: [
      "Turba geçiriji,deňiz, howa",
      "Gury,derýa,deňiz, howa",
      "Howa, deňiz,gury",
    ],
    answer: "Gury,derýa,deňiz, howa",
  },

  {
    prompt: "54. Türkmenistan haýsy döwletler bilen araçäkleşýär?",
    options: [
      "Owganistan,Eýran, Gyrgyzystan,Azerbaýjan",
      "Eýran, Owganystan,Gazagystan,Täjigistan",
      "Eýran,Owganystan,Özbegistan,Gazagystan,Azerbaýjan",
    ],
    answer: "Eýran,Owganystan,Özbegistan,Gazagystan,Azerbaýjan",
  },

  {
    prompt:
      "55. Angliýa, Fransiýa, Germaniýa, Lýuksemburg döwletleri haýsy dünýä böleginde ýerleşýär?",
    options: [
      "Günbatar Ýewropa",
      "Merkezi Ýewropa",
      "Gündogar Ýewropa",
    ],
    answer: "Günbatar Ýewropa",
  },

  // ========== BIOLOGIÝA ==========

  {
    prompt: "56. Haýsy gan öýjük bedene kislorody daşaýar?",
    options: ["leýkositler", "trombositler", "eritrositler"],
    answer: "eritrositler",
  },

  {
    prompt: "57. Adamyň nerw ulgamy näçe bölekden durýar?",
    options: ["2", "3", "4"],
    answer: "3",
  },

  {
    prompt: "58. Haýsy gan damar kisloroda baý?",
    options: ["kapilýar", "wena", "arteriýa"],
    answer: "arteriýa",
  },

  {
    prompt:
      "59. Adamyň kiçi gan aýlanyşygynda gan haýsy organlara barýar?",
    options: [
      "ýürege, bagyra",
      "öýkene, ýürege",
      "ýürege, içki organlara",
    ],
    answer: "öýkene, ýürege",
  },

  {
    prompt:
      "60. Adamyň öýkeniniň içinde ganyň alyş-çalyşyny amala aşyrýan struktura näme diýilýär?",
    options: ["plewra", "diofragma", "alwiolalar"],
    answer: "alwiolalar",
  },

  {
    prompt:
      "61. Ganyň basyşynyň ýokarlanmagy bilen ýüze çykýan kesele näme diýilýär?",
    options: ["gipertoniýa", "insult", "gipotoniýa"],
    answer: "gipertoniýa",
  },

  {
    prompt: "62. Uly adamyň traheýasynyň uzynlygy takmynan näçe sm?",
    options: ["10-20 sm", "10-15 sm", "10-13 sm"],
    answer: "10-13 sm",
  },

  {
    prompt: "63. Her öýkende takmynan näçe mln alweola bolýar?",
    options: ["400-450", "300-350", "500-550"],
    answer: "300-350",
  },

  {
    prompt: "64. Öýkenleriň daşky ýüzüsi näme bilen örtülen?",
    options: ["plewra", "barda", "diofragma"],
    answer: "plewra",
  },

  {
    prompt: "65. Iň uly gan damara näme diýilýär?",
    options: ["aorta", "wena", "arteriýa"],
    answer: "aorta",
  },

  // ========== ALGEBRA ==========

  {
    prompt: "66. ctg x näme deň?",
    options: ["cos x / sin x", "sin x / cos x", "1 / tan x"],
    answer: "cos x / sin x",
  },

  {
    prompt: "67. sin(2x) näme deň?",
    options: ["2 sin x cos x", "-2 sin x cos x", "sin x · cos x"],
    answer: "2 sin x cos x",
  },

  {
    prompt: "68. sin(α+β) näme deň?",
    options: [
      "cosα·cosβ+sinα·sinβ",
      "sinα·cosβ+cosα·sinβ",
      "sinα·sinβ+cosα·cosβ",
    ],
    answer: "sinα·cosβ+cosα·sinβ",
  },

  {
    prompt: "69. tgα × tgβ = ?",
    options: ["tgα·tgβ", "1", "tg(α+β)"],
    answer: "tgα·tgβ",
  },

  {
    prompt: "70. cos(2α) üçin dogry identemikany saýlaň.",
    options: [
      "cos²α - sin²α",
      "sin²α - cos²α",
      "2 cosα",
    ],
    answer: "cos²α - sin²α",
  },

  // ========== GEOMETRIÝA ==========

  {
    prompt:
      "71. Başlangyjy bilen ahyry gabat gelýän wektora näme diýilýär?",
    options: ["kolleniar wektor", "nol wektor", "deň wektor"],
    answer: "nol wektor",
  },

  {
    prompt: "72. Sinuslar teoremasynyň dogry görnüşini saýlaň.",
    options: [
      "a/sinA = b/sinB = c/sinC",
      "sinA/a = sinB/b = sinC/c",
      "a·sinA = b·sinB = c·sinC",
    ],
    answer: "a/sinA = b/sinB = c/sinC",
  },

  {
    prompt: "73. Kosinuslar teoremasynyň dogry görnüşini saýlaň.",
    options: [
      "a² = b² + c² − 2bc·cosA",
      "a² = b² + c² + 2bc·cosA",
      "a² = b² − c² + 2bc·cosA",
    ],
    answer: "a² = b² + c² − 2bc·cosA",
  },

  {
    prompt:
      "74. Taraplary 4 sm, 6 sm, 8 sm bolan üçburçlugyň meýdany takmynan näçä deň?",
    options: ["8 sm²", "10 sm²", "12 sm²"],
    answer: "8 sm²",
  },

  {
    prompt: "75. Geronyň formulasy üçburçlugyň meýdany üçin haýsy?",
    options: [
      "S = √(p(p-a)(p-b)(p-c))",
      "S = 1/2·a·h",
      "S = a·b·c",
    ],
    answer: "S = √(p(p-a)(p-b)(p-c))",
  },

  // ========== HIMIÝA ==========

  {
    prompt:
      "80. Na₂CO₃ erginmesine näbelli gaz goýberilende NaCl öýjügi hosul boldy. Näbelli madda näme?",
    options: ["HCl", "Cl₂", "NaCl"],
    answer: "HCl",
  },

  {
    prompt:
      "82. Bugunyň kisloroda görä dykyzlygy 2,25 bolan aldehidiň formulasyny tapyň (Mk(O₂)=32 diýlip alynsyn).",
    options: ["C₂H₅OH", "C₃H₇OH", "C₅H₅O"],
    answer: "C₃H₇OH",
  },

  {
    prompt: "83. Berlen birleşmäniň adyny aýdyň: CH₃–CH₂–C≡C–CH₂–CH(CH₃)₂.",
    options: [
      "oktin-4",
      "6-metilgeptin-3",
      "6-metilgepten-3",
      "2-metilgeksin",
    ],
    answer: "6-metilgeptin-3",
  },

  {
    prompt: "84. Karbon kislotalary haýsy topary saklaýar?",
    options: ["–COOH", "–COH", "–OH", "–COOOH"],
    answer: "–COOH",
  },

  // ========== FIZIKA ==========

  {
    prompt: "86. Tebigatda näçe görnüş elektrik zarýady bar?",
    options: ["3", "4", "2"],
    answer: "2",
  },

  {
    prompt:
      "87. Hemişelik magniti polýuslarynyň ortasyndan bölsek, alnan her bir bölekde näçe polýus bolýar?",
    options: ["her birinde 3 polýus", "her birinde 4 polýus", "her birinde 2 polýus"],
    answer: "her birinde 2 polýus",
  },

  {
    prompt: "88. Magnit meýdanynyň güýjüň ugruna degişli çyzyklary nähili bolýar?",
    options: ["göni çyzykly meýdan", "kewlenmeli (egri) meýdan", "parallel meýdan"],
    answer: "kewlenmeli (egri) meýdan",
  },

  {
    prompt:
      "89. Solenoidde akýan toguň ugruny haýsy eliň barmagy boýunça kesgitleýäris?",
    options: ["çep eliň barmagy", "sag eliň barmagy", "sag eliň baş barmagy"],
    answer: "sag eliň barmagy",
  },

  {
    prompt: "90. Magnit induksiýasynyň ölçeg birligi näme?",
    options: ["1 Wb", "1 Tl", "1 N"],
    answer: "1 Tl",
  },

  {
    prompt: "91. Lorensiň güýjüniň formulasy haýsy?",
    options: [
      "F = qE",
      "F = qvB sinα",
      "F = BIL sinα",
    ],
    answer: "F = qvB sinα",
  },

  {
    prompt: "92. Amperüň güýjüniň formulasy haýsy?",
    options: [
      "F = qvB",
      "F = BIL sinα",
      "F = mv²/R",
    ],
    answer: "F = BIL sinα",
  },

  {
    prompt: "93. Magnit akymynyň formulasy haýsy?",
    options: [
      "Φ = B·S·cosα",
      "Φ = qvB",
      "Φ = I·R",
    ],
    answer: "Φ = B·S·cosα",
  },

  {
    prompt:
      "94. Beýik iňlis alymy Maýkl Faradeý «Nädip magnetizmi elektrige öwürmeli?» diýen mesele bilen takmynan näçe ýyl meşgullanypdyr?",
    options: ["6 ýyl", "8 ýyl", "10 ýyl"],
    answer: "10 ýyl",
  },

  {
    prompt:
      "95. Faradeýiň elektromagnit induksiýasy boýunça elektrik toguny almagy ilkinji gezek haçan başardygyny görkezýän ýyl haýsy wariantda dogry?",
    options: [
      "1832-nji ýylyň 28-nji awgusty",
      "1981-nji ýylyň 5-nji oktýabry",
      "1920-nji ýylyň 1-nji maýy",
    ],
    answer: "1832-nji面的 28-nji awgusty",
  },

  // ========== INFORMATIKA ==========

  {
    prompt: "96. Animasiýalar adatça haýsy programmada döredilýär?",
    options: [
      "Pascal ABC",
      "Adobe Flash",
      "Action Script",
      "Microsoft Office Word",
    ],
    answer: "Adobe Flash",
  },

  {
    prompt: "97. Onluk hasaplaýyş sistemiýasy nirede ýüze çykypdyr?",
    options: ["Hindistanda", "Rimde", "Şumerde", "Awstraliýada"],
    answer: "Hindistanda",
  },

  {
    prompt: "98. Animasiýalarda 1 sekuntda adatça näçe kadr ýerleşýär?",
    options: ["14", "20", "25", "24"],
    answer: "24",
  },

  {
    prompt:
      "99. Bir at bilen belgilenýän bir görnüşli elementleriň yzygiderligine näme diýilýär?",
    options: ["Animasiýa", "Massiw", "Programma", "Indeks"],
    answer: "Massiw",
  },

  {
    prompt: "100. “Novatio” sözi näme diýmekligi aňladýar?",
    options: ["Täzelenmek", "Özgertmek", "Rewolýusiýa", "Internet"],
    answer: "Täzelenmek",
  },
];
