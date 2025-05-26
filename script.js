
// Complete and accurate English to Sinhala mapping based on the provided keymap
const englishToSinhala = {
    // === VOWELS ===
    'a': 'අ', 'aa': 'ආ', 'A': 'ඇ', 'Aa': 'ඈ', 'ae': 'ඇ', 'aae': 'ඈ',
    'i': 'ඉ', 'ii': 'ඊ', 'I': 'ඊ', 'ee': 'ඊ',
    'u': 'උ', 'uu': 'ඌ', 'U': 'ඌ', 'oo': 'ඌ',
    'e': 'එ', 'E': 'ඒ', 'ai': 'ඓ',
    'o': 'ඔ', 'O': 'ඕ', 'au': 'ඖ',
    'R': 'ඍ', 'RR': 'ඎ', 'L': 'ඏ', 'LL': 'ඐ',

    // === CONSONANTS ===
    'ka': 'ක', 'kha': 'ඛ', 'ga': 'ග', 'gha': 'ඝ', 'nga': 'ඞ', 'nnga': 'ඟ',
    'cha': 'ච', 'chha': 'ඡ', 'ja': 'ජ', 'jha': 'ඣ', 'nja': 'ඤ', 'jnja': 'ඥ', 'nnja': 'ඦ',
    'Ta': 'ට', 'Tha': 'ඨ', 'Da': 'ඩ', 'Dha': 'ඪ', 'Na': 'ණ', 'nndda': 'ඬ',
    'ta': 'ත', 'tha': 'ථ', 'da': 'ද', 'dha': 'ධ', 'na': 'න', 'ndha': 'ඳ',
    'pa': 'ප', 'pha': 'ඵ', 'ba': 'බ', 'bha': 'භ', 'ma': 'ම', 'mba': 'ඹ',
    'ya': 'ය', 'ra': 'ර', 'la': 'ල', 'wa': 'ව', 'va': 'ව',
    'sha': 'ශ', 'Sha': 'ෂ', 'sa': 'ස', 'ha': 'හ',
    'lla': 'ළ', 'fa': 'ෆ',

    // === CONSONANT + VOWEL COMBINATIONS ===
    // Ka group
    'kaa': 'කා', 'ki': 'කි', 'kii': 'කී', 'ku': 'කු', 'kuu': 'කූ', 'ke': 'කෙ', 'kee': 'කේ',
    'kai': 'කෛ', 'ko': 'කො', 'koo': 'කෝ', 'kau': 'කෞ', 'kA': 'කැ', 'kAa': 'කෑ',
    'kR': 'කෘ', 'kRR': 'කෲ', 'kL': 'කෟ',

    // Kha group
    'khaa': 'ඛා', 'khi': 'ඛි', 'khii': 'ඛී', 'khu': 'ඛු', 'khuu': 'ඛූ', 'khe': 'ඛෙ', 'khee': 'ඛේ',
    'khai': 'ඛෛ', 'kho': 'ඛො', 'khoo': 'ඛෝ', 'khau': 'ඛෞ', 'khA': 'ඛැ', 'khAa': 'ඛෑ',

    // Ga group
    'gaa': 'ගා', 'gi': 'ගි', 'gii': 'ගී', 'gu': 'ගු', 'guu': 'ගූ', 'ge': 'ගෙ', 'gee': 'ගේ',
    'gai': 'ගෛ', 'go': 'ගො', 'goo': 'ගෝ', 'gau': 'ගෞ', 'gA': 'ගැ', 'gAa': 'ගෑ',
    'gR': 'ගෘ', 'gRR': 'ගෲ', 'gL': 'ගෟ',

    // Gha group
    'ghaa': 'ඝා', 'ghi': 'ඝි', 'ghii': 'ඝී', 'ghu': 'ඝු', 'ghuu': 'ඝූ', 'ghe': 'ඝෙ', 'ghee': 'ඝේ',

    // Nga group
    'ngaa': 'ඞා', 'ngi': 'ඞි', 'ngii': 'ඞී', 'ngu': 'ඞු', 'nguu': 'ඞූ', 'nge': 'ඞෙ', 'ngee': 'ඞේ',

    // Cha group
    'chaa': 'චා', 'chi': 'චි', 'chii': 'චී', 'chu': 'චු', 'chuu': 'චූ', 'che': 'චෙ', 'chee': 'චේ',
    'chai': 'චෛ', 'cho': 'චො', 'choo': 'චෝ', 'chau': 'චෞ', 'chA': 'චැ', 'chAa': 'චෑ',

    // Chha group
    'chhaa': 'ඡා', 'chhi': 'ඡි', 'chhii': 'ඡී', 'chhu': 'ඡු', 'chhuu': 'ඡූ', 'chhe': 'ඡෙ', 'chhee': 'ඡේ',

    // Ja group
    'jaa': 'ජා', 'ji': 'ජි', 'jii': 'ජී', 'ju': 'ජු', 'juu': 'ජූ', 'je': 'ජෙ', 'jee': 'ජේ',
    'jai': 'ජෛ', 'jo': 'ජො', 'joo': 'ජෝ', 'jau': 'ජෞ', 'jA': 'ජැ', 'jAa': 'ජෑ',

    // Jha group
    'jhaa': 'ඣා', 'jhi': 'ඣි', 'jhii': 'ඣී', 'jhu': 'ඣු', 'jhuu': 'ඣූ', 'jhe': 'ඣෙ', 'jhee': 'ඣේ',

    // Nja group
    'njaa': 'ඤා', 'nji': 'ඤි', 'njii': 'ඤී', 'nju': 'ඤු', 'njuu': 'ඤූ', 'nje': 'ඤෙ', 'njee': 'ඤේ',

    // Ta (retroflex) group
    'Taa': 'ටා', 'Ti': 'ටි', 'Tii': 'ටී', 'Tu': 'ටු', 'Tuu': 'ටූ', 'Te': 'ටෙ', 'Tee': 'ටේ',
    'Tai': 'ටෛ', 'To': 'ටො', 'Too': 'ටෝ', 'Tau': 'ටෞ', 'TA': 'ටැ', 'TAa': 'ටෑ',
    'TR': 'ටෘ', 'TRR': 'ටෲ', 'TL': 'ටෟ',

    // Tha (retroflex) group
    'Thaa': 'ඨා', 'Thi': 'ඨි', 'Thii': 'ඨී', 'Thu': 'ඨු', 'Thuu': 'ඨූ', 'The': 'ඨෙ', 'Thee': 'ඨේ',

    // Da (retroflex) group
    'Daa': 'ඩා', 'Di': 'ඩි', 'Dii': 'ඩී', 'Du': 'ඩු', 'Duu': 'ඩූ', 'De': 'ඩෙ', 'Dee': 'ඩේ',

    // Dha (retroflex) group
    'Dhaa': 'ඪා', 'Dhi': 'ඪි', 'Dhii': 'ඪී', 'Dhu': 'ඪු', 'Dhuu': 'ඪූ', 'Dhe': 'ඪෙ', 'Dhee': 'ඪේ',

    // Na (retroflex) group
    'Naa': 'ණා', 'Ni': 'ණි', 'Nii': 'ණී', 'Nu': 'ණු', 'Nuu': 'ණූ', 'Ne': 'ණෙ', 'Nee': 'ණේ',

    // Ta (dental) group
    'taa': 'තා', 'ti': 'ති', 'tii': 'තී', 'tu': 'තු', 'tuu': 'තූ', 'te': 'තෙ', 'tee': 'තේ',
    'tai': 'තෛ', 'to': 'තො', 'too': 'තෝ', 'tau': 'තෞ', 'tA': 'තැ', 'tAa': 'තෑ',
    'tR': 'තෘ', 'tRR': 'තෲ', 'tL': 'තෟ',

    // Tha (dental) group
    'thaa': 'ථා', 'thi': 'ථි', 'thii': 'ථී', 'thu': 'ථු', 'thuu': 'ථූ', 'the': 'ථෙ', 'thee': 'ථේ',

    // Da (dental) group
    'daa': 'දා', 'di': 'දි', 'dii': 'දී', 'du': 'දු', 'duu': 'දූ', 'de': 'දෙ', 'dee': 'දේ',
    'dai': 'දෛ', 'do': 'දො', 'doo': 'දෝ', 'dau': 'දෞ', 'dA': 'දැ', 'dAa': 'දෑ',

    // Dha (dental) group
    'dhaa': 'ධා', 'dhi': 'ධි', 'dhii': 'ධී', 'dhu': 'ධු', 'dhuu': 'ධූ', 'dhe': 'ධෙ', 'dhee': 'ධේ',

    // Na (dental) group
    'naa': 'නා', 'ni': 'නි', 'nii': 'නී', 'nu': 'නු', 'nuu': 'නූ', 'ne': 'නෙ', 'nee': 'නේ',
    'nai': 'නෛ', 'no': 'නො', 'noo': 'නෝ', 'nau': 'නෞ', 'nA': 'නැ', 'nAa': 'නෑ',
    'nR': 'නෘ', 'nRR': 'නෲ', 'nL': 'නෟ',

    // Pa group
    'paa': 'පා', 'pi': 'පි', 'pii': 'පී', 'pu': 'පු', 'puu': 'පූ', 'pe': 'පෙ', 'pee': 'පේ',
    'pai': 'පෛ', 'po': 'පො', 'poo': 'පෝ', 'pau': 'පෞ', 'pA': 'පැ', 'pAa': 'පෑ',

    // Pha group
    'phaa': 'ඵා', 'phi': 'ඵි', 'phii': 'ඵී', 'phu': 'ඵු', 'phuu': 'ඵූ', 'phe': 'ඵෙ', 'phee': 'ඵේ',

    // Ba group
    'baa': 'බා', 'bi': 'බි', 'bii': 'බී', 'bu': 'බු', 'buu': 'බූ', 'be': 'බෙ', 'bee': 'බේ',
    'bai': 'බෛ', 'bo': 'බො', 'boo': 'බෝ', 'bau': 'බෞ', 'bA': 'බැ', 'bAa': 'බෑ',

    // Bha group
    'bhaa': 'භා', 'bhi': 'භි', 'bhii': 'භී', 'bhu': 'භු', 'bhuu': 'භූ', 'bhe': 'භෙ', 'bhee': 'භේ',

    // Ma group
    'maa': 'මා', 'mi': 'මි', 'mii': 'මී', 'mu': 'මු', 'muu': 'මූ', 'me': 'මෙ', 'mee': 'මේ',
    'mai': 'මෛ', 'mo': 'මො', 'moo': 'මෝ', 'mau': 'මෞ', 'mA': 'මැ', 'mAa': 'මෑ',

    // Ya group
    'yaa': 'යා', 'yi': 'යි', 'yii': 'යී', 'yu': 'යු', 'yuu': 'යූ', 'ye': 'යෙ', 'yee': 'යේ',
    'yai': 'යෛ', 'yo': 'යො', 'yoo': 'යෝ', 'yau': 'යෞ', 'yA': 'යැ', 'yAa': 'යෑ',

    // Ra group
    'raa': 'රා', 'ri': 'රි', 'rii': 'රී', 'ru': 'රු', 'ruu': 'රූ', 're': 'රෙ', 'ree': 'රේ',
    'rai': 'රෛ', 'ro': 'රො', 'roo': 'රෝ', 'rau': 'රෞ', 'rA': 'රැ', 'rAa': 'රෑ',

    // La group
    'laa': 'ලා', 'li': 'ලි', 'lii': 'ලී', 'lu': 'ලු', 'luu': 'ලූ', 'le': 'ලෙ', 'lee': 'ලේ',
    'lai': 'ලෛ', 'lo': 'ලො', 'loo': 'ලෝ', 'lau': 'ලෞ', 'lA': 'ලැ', 'lAa': 'ලෑ',

    // Wa/Va group
    'waa': 'වා', 'wi': 'වි', 'wii': 'වී', 'wu': 'වු', 'wuu': 'වූ', 'we': 'වෙ', 'wee': 'වේ',
    'wai': 'වෛ', 'wo': 'වො', 'woo': 'වෝ', 'wau': 'වෞ', 'wA': 'වැ', 'wAa': 'වෑ',
    'vaa': 'වා', 'vi': 'වි', 'vii': 'වී', 'vu': 'වු', 'vuu': 'වූ', 've': 'වෙ', 'vee': 'වේ',
    'vai': 'වෛ', 'vo': 'වො', 'voo': 'වෝ', 'vau': 'වෞ', 'vA': 'වැ', 'vAa': 'වෑ',

    // Sha group
    'shaa': 'ශා', 'shi': 'ශි', 'shii': 'ශී', 'shu': 'ශු', 'shuu': 'ශූ', 'she': 'ශෙ', 'shee': 'ශේ',
    'shai': 'ශෛ', 'sho': 'ශො', 'shoo': 'ශෝ', 'shau': 'ශෞ', 'shA': 'ශැ', 'shAa': 'ශෑ',

    // Sha (retroflex) group
    'Shaa': 'ෂා', 'Shi': 'ෂි', 'Shii': 'ෂී', 'Shu': 'ෂු', 'Shuu': 'ෂූ', 'She': 'ෂෙ', 'Shee': 'ෂේ',

    // Sa group
    'saa': 'සා', 'si': 'සි', 'sii': 'සී', 'su': 'සු', 'suu': 'සූ', 'se': 'සෙ', 'see': 'සේ',
    'sai': 'සෛ', 'so': 'සො', 'soo': 'සෝ', 'sau': 'සෞ', 'sA': 'සැ', 'sAa': 'සෑ',

    // Ha group
    'haa': 'හා', 'hi': 'හි', 'hii': 'හී', 'hu': 'හු', 'huu': 'හූ', 'he': 'හෙ', 'hee': 'හේ',
    'hai': 'හෛ', 'ho': 'හො', 'hoo': 'හෝ', 'hau': 'හෞ', 'hA': 'හැ', 'hAa': 'හෑ',

    // Lla group
    'llaa': 'ළා', 'lli': 'ළි', 'llii': 'ළී', 'llu': 'ළු', 'lluu': 'ළූ', 'lle': 'ළෙ', 'llee': 'ළේ',
    'llai': 'ළෛ', 'llo': 'ළො', 'lloo': 'ළෝ', 'llau': 'ළෞ', 'llA': 'ළැ', 'llAa': 'ළෑ',

    // Fa group
    'faa': 'ෆා', 'fi': 'ෆි', 'fii': 'ෆී', 'fu': 'ෆු', 'fuu': 'ෆූ', 'fe': 'ෆෙ', 'fee': 'ෆේ',
    'fai': 'ෆෛ', 'fo': 'ෆො', 'foo': 'ෆෝ', 'fau': 'ෆෞ', 'fA': 'ෆැ', 'fAa': 'ෆෑ',

    // === CONSONANT CLUSTERS ===
    'ksha': 'ක්ෂ', 'gnya': 'ඥ', 'shri': 'ශ්‍රී', 'sri': 'ශ්‍රී',
    'kr': 'ක්‍ර', 'kri': 'ක්‍රි', 'krii': 'ක්‍රී', 'kru': 'ක්‍රු', 'kruu': 'ක්‍රූ', 'kre': 'ක්‍රෙ', 'kree': 'ක්‍රේ',
    'gr': 'ග්‍ර', 'gri': 'ග්‍රි', 'grii': 'ග්‍රී', 'gru': 'ග්‍රු', 'gruu': 'ග්‍රූ', 'gre': 'ග්‍රෙ', 'gree': 'ග්‍රේ',
    'tr': 'ත්‍ර', 'tri': 'ත්‍රි', 'trii': 'ත්‍රී', 'tru': 'ත්‍රු', 'truu': 'ත්‍රූ', 'tre': 'ත්‍රෙ', 'tree': 'ත්‍රේ',
    'dr': 'ද්‍ර', 'dri': 'ද්‍රි', 'drii': 'ද්‍රී', 'dru': 'ද්‍රු', 'druu': 'ද්‍රූ', 'dre': 'ද්‍රෙ', 'dree': 'ද්‍රේ',
    'nr': 'න්‍ර', 'nri': 'න්‍රි', 'nrii': 'න්‍රී', 'nru': 'න්‍රු', 'nruu': 'න්‍රූ', 'nre': 'න්‍රෙ', 'nree': 'න්‍රේ',
    'pr': 'ප්‍ර', 'pri': 'ප්‍රි', 'prii': 'ප්‍රී', 'pru': 'ප්‍රු', 'pruu': 'ප්‍රූ', 'pre': 'ප්‍රෙ', 'pree': 'ප්‍රේ',
    'br': 'බ්‍ර', 'bri': 'බ්‍රි', 'brii': 'බ්‍රී', 'bru': 'බ්‍රු', 'bruu': 'බ්‍රූ', 'bre': 'බ්‍රෙ', 'bree': 'බ්‍රේ',
    'mr': 'ම්‍ර', 'mri': 'ම්‍රි', 'mrii': 'ම්‍රී', 'mru': 'ම්‍රු', 'mruu': 'ම්‍රූ', 'mre': 'ම්‍රෙ', 'mree': 'ම්‍රේ',

    // === SPECIAL CHARACTERS ===
    'ng': 'ං', 'H': 'ඃ', 'M': 'ං', 'anuswara': 'ං', 'visarga': 'ඃ',

    // === COMMON SRI LANKAN NAMES ===
    // Male names
    'nimal': 'නිමල්', 'kamal': 'කමල්', 'sunil': 'සුනිල්', 'anil': 'අනිල්', 'gayan': 'ගයාන්',
    'ruwan': 'රුවන්', 'chamara': 'චමර', 'nuwan': 'නුවන්', 'kasun': 'කසුන්', 'lahiru': 'ලහිරු',
    'saman': 'සමන්', 'dilan': 'දිලාන්', 'tharindu': 'තරිඳු', 'chathura': 'චතුර', 'dinesh': 'දිනේශ්',
    'pradeep': 'ප්‍රදීප්', 'mahesh': 'මහේශ්', 'rajesh': 'රාජේශ්', 'sandun': 'සඳුන්', 'janaka': 'ජනක',
    'kumara': 'කුමාර', 'bandula': 'බන්දුල', 'upul': 'උපුල්', 'asanka': 'අසංක', 'thilina': 'තිලින',
    'indika': 'ඉන්දික', 'roshan': 'රෝෂාන්', 'damitha': 'දමිත', 'samitha': 'සමිත', 'amitha': 'අමිත',
    'buddhika': 'බුද්ධික', 'sachitha': 'සචිත', 'ruchira': 'රුචිර', 'manjula': 'මඤ්ජුල',
    'chamathka': 'චමත්ක', 'dhanushka': 'ධනුෂ්ක', 'tharaka': 'තාරක', 'charaka': 'චරක',
    'maduranga': 'මධුරංග', 'thisara': 'තිසර', 'isuru': 'ඉසුරු', 'danushka': 'දනුෂ්ක',
    
    // Female names
    'kamala': 'කමලා', 'sunila': 'සුනිලා', 'nirmala': 'නිර්මලා', 'chandrika': 'චන්ද්‍රිකා', 'malini': 'මාලිනී',
    'dilani': 'දිලානි', 'shyamali': 'ශ්‍යාමලී', 'kumari': 'කුමාරි', 'sandya': 'සන්ධ්‍යා', 'madhuri': 'මධුරි',
    'yashodha': 'යශෝධා', 'shirani': 'ශිරානි', 'padma': 'පද්ම', 'lalitha': 'ලලිතා', 'geethika': 'ගීතිකා',
    'priyanka': 'ප්‍රියංකා', 'chathurika': 'චතුරිකා', 'thilini': 'තිලිනි', 'kavitha': 'කවිතා',
    'sachini': 'සචිනි', 'madhushani': 'මධුශානි', 'tharushi': 'තරුෂි', 'kaveesha': 'කවීශා',
    'dinusha': 'දිනුෂා', 'charuni': 'චරුණි', 'ishara': 'ඉශරා', 'nimasha': 'නිමාශා',
    'hiruni': 'හිරුණි', 'sewwandi': 'සෙව්වන්දි', 'chathurani': 'චතුරාණි', 'madushika': 'මධුෂිකා',

    // === SUBJECTS ===
    'mathematics': 'ගණිතය', 'math': 'ගණිතය', 'ganithaya': 'ගණිතය', 'ganitha': 'ගණිත',
    'science': 'විද්‍යාව', 'vidyawa': 'විද්‍යාව', 'vidya': 'විද්‍යා',
    'sinhala': 'සිංහල', 'english': 'ඉංග්‍රීසි', 'ingrisi': 'ඉංග්‍රීසි',
    'history': 'ඉතිහාසය', 'ithihasaya': 'ඉතිහාසය', 'ithihasa': 'ඉතිහාස',
    'geography': 'භූගෝල විද්‍යාව', 'bhugola': 'භූගෝල', 'bhugolavidyawa': 'භූගෝල විද්‍යාව',
    'buddhism': 'බුද්ධ ධර්මය', 'buddha dharmaya': 'බුද්ධ ධර්මය', 'religion': 'ආගම', 'agama': 'ආගම',
    'art': 'කලාව', 'kalawa': 'කලාව', 'kala': 'කලා',
    'music': 'සංගීතය', 'sangithaya': 'සංගීතය', 'sangitha': 'සංගීත',
    'dance': 'නර්තනය', 'narthanaya': 'නර්තනය', 'narthana': 'නර්තන',
    'sports': 'ක්‍රීඩා', 'kreeda': 'ක්‍රීඩා', 'physical education': 'ශාරීරික අධ්‍යාපනය',
    'biology': 'ජීව විද්‍යාව', 'jeewa vidyawa': 'ජීව විද්‍යාව', 'jeewa': 'ජීව',
    'physics': 'භෞතික විද්‍යාව', 'bhouthika vidyawa': 'භෞතික විද්‍යාව', 'bhouthika': 'භෞතික',
    'chemistry': 'රසායන විද්‍යාව', 'rasayana vidyawa': 'රසායන විද්‍යාව', 'rasayana': 'රසායන',
    'economics': 'ආර්ථික විද්‍යාව', 'arthika vidyawa': 'ආර්ථික විද්‍යාව', 'arthika': 'ආර්ථික',

    // === EXAM NAMES ===
    'first term': '1වන වාර පරීක්ෂණය', 'prathama wara': '1වන වාර',
    'second term': '2වන වාර පරීක්ෂණය', 'dwiteeya wara': '2වන වාර',
    'third term': '3වන වාර පරීක්ෂණය', 'thritheeya wara': '3වන වාර',
    'annual exam': 'වාර්ෂික පරීක්ෂණය', 'warshika parikshana': 'වාර්ෂික පරීක්ෂණය', 'warshika': 'වාර්ෂික',
    'mid year': 'අර්ධ වාර්ෂික පරීක්ෂණය', 'ardha warshika': 'අර්ධ වාර්ෂික',
    'final exam': 'අවසන් පරීක්ෂණය', 'awasana parikshana': 'අවසන් පරීක්ෂණය', 'awasana': 'අවසන්',
    'progress test': 'ප්‍රගති පරීක්ෂණය', 'pragathi parikshana': 'ප්‍රගති පරීක්ෂණය', 'pragathi': 'ප්‍රගති',
    'unit test': 'ඒකක පරීක්ෂණය', 'ekaka parikshana': 'ඒකක පරීක්ෂණය', 'pragathi': 'ප්‍රගති',
    'unit test': 'ඒකක පරීක්ෂණය', 'ekaka parikshana': 'ඒකක පරීක්ෂණය', 'ekaka': 'ඒකක',
    'monthly test': 'මාසික පරීක්ෂණය', 'masika parikshana': 'මාසික පරීක්ෂණය', 'masika': 'මාසික',
    'weekly test': 'සතිපතා පරීක්ෂණය', 'sathipatha parikshana': 'සතිපතා පරීක්ෂණය', 'sathipatha': 'සතිපතා',
    'class test': 'පන්ති පරීක්ෂණය', 'panthi parikshana': 'පන්ති පරීක්ෂණය', 'panthi': 'පන්ති',
    'assessment': 'ඇගයීම', 'agayeema': 'ඇගයීම',

    // === SCHOOL RELATED TERMS ===
    'school': 'පාසල', 'pasala': 'පාසල', 'viduhala': 'විදුහල', 'vidyalaya': 'විද්‍යාලය',
    'student': 'ශිෂ්‍යයා', 'shishyaya': 'ශිෂ්‍යයා', 'shishya': 'ශිෂ්‍ය',
    'teacher': 'ගුරුවරයා', 'guruwaraya': 'ගුරුවරයා', 'guru': 'ගුරු', 'adhyapaka': 'අධ්‍යාපක',
    'principal': 'විදුහල්පති', 'viduhalpathi': 'විදුහල්පති', 'pramukha': 'ප්‍රමුඛ',
    'class': 'පන්තිය', 'panthiya': 'පන්තිය', 'grade': 'ශ්‍රේණිය', 'shreniya': 'ශ්‍රේණිය',
    'marks': 'ලකුණු', 'lakunu': 'ලකුණු', 'anka': 'අංක', 'result': 'ප්‍රතිඵලය', 'prathiphalaya': 'ප්‍රතිඵලය',
    'report': 'වාර්තාව', 'warthawa': 'වාර්තාව', 'wartha': 'වාර්තා',

    // === COMMON WORDS ===
    'name': 'නම', 'nama': 'නම', 'address': 'ලිපිනය', 'lipinaya': 'ලිපිනය',
    'phone': 'දුරකථනය', 'durakathana': 'දුරකථන', 'telephone': 'දුරකථනය',
    'date': 'දිනය', 'dinaya': 'දිනය', 'dina': 'දින', 'time': 'වේලාව', 'welawa': 'වේලාව',
    'place': 'ස්ථානය', 'sthanaya': 'ස්ථානය', 'sthana': 'ස්ථාන', 'number': 'අංකය', 'ankaya': 'අංකය',
    'total': 'මුළු', 'mulu': 'මුළු', 'average': 'සාමාන්‍යය', 'samanyaya': 'සාමාන්‍යය',

    // === SINGLE CONSONANTS (HAL KIRIMA) ===
    'k': 'ක්', 'kh': 'ඛ්', 'g': 'ග්', 'gh': 'ඝ්',
    'ch': 'ච්', 'chh': 'ඡ්', 'j': 'ජ්', 'jh': 'ඣ්', 'nj': 'ඤ්',
    'T': 'ට්', 'Th': 'ඨ්', 'D': 'ඩ්', 'Dh': 'ඪ්', 'N': 'ණ්',
    't': 'ත්', 'th': 'ථ්', 'd': 'ද්', 'dh': 'ධ්', 'n': 'න්',
    'p': 'ප්', 'ph': 'ඵ්', 'b': 'බ්', 'bh': 'භ්', 'm': 'ම්',
    'y': 'ය්', 'r': 'ර්', 'l': 'ල්', 'w': 'ව්', 'v': 'ව්',
    'sh': 'ශ්', 'Sh': 'ෂ්', 's': 'ස්', 'h': 'හ්', 'll': 'ළ්', 'f': 'ෆ්',

    // === NUMBERS ===
    'eka': 'එක', 'deka': 'දෙක', 'thuna': 'තුන', 'hathara': 'හතර', 'paha': 'පහ',
    'haya': 'හය', 'hatha': 'හත', 'ata': 'අට', 'namaya': 'නමය', 'dahaya': 'දහය',
    'one': 'එක', 'two': 'දෙක', 'three': 'තුන', 'four': 'හතර', 'five': 'පහ',
    'six': 'හය', 'seven': 'හත', 'eight': 'අට', 'nine': 'නමය', 'ten': 'දහය',

    // === COLORS ===
    'sudu': 'සුදු', 'kalu': 'කළු', 'rathu': 'රතු', 'kola': 'කොළ', 'nil': 'නිල්', 'kaha': 'කහ',
    'white': 'සුදු', 'black': 'කළු', 'red': 'රතු', 'green': 'කොළ', 'blue': 'නිල්', 'yellow': 'කහ',

    // === DAYS OF THE WEEK ===
    'irida': 'ඉරිදා', 'sanduda': 'සඳුදා', 'angaharuwada': 'අඟහරුවාදා', 'badada': 'බදාදා',
    'brahaspathindhada': 'බ්‍රහස්පතින්දාදා', 'sikurada': 'සිකුරාදා', 'senasurada': 'සෙනසුරාදා',
    'sunday': 'ඉරිදා', 'monday': 'සඳුදා', 'tuesday': 'අඟහරුවාදා', 'wednesday': 'බදාදා',
    'thursday': 'බ්‍රහස්පතින්දාදා', 'friday': 'සිකුරාදා', 'saturday': 'සෙනසුරාදා'
};

// Keymap data for help modal
const keymapData = {
    vowels: [
        {english: 'a', sinhala: 'අ'}, {english: 'aa', sinhala: 'ආ'}, {english: 'A', sinhala: 'ඇ'}, {english: 'Aa', sinhala: 'ඈ'},
        {english: 'i', sinhala: 'ඉ'}, {english: 'ii', sinhala: 'ඊ'}, {english: 'u', sinhala: 'උ'}, {english: 'uu', sinhala: 'ඌ'},
        {english: 'e', sinhala: 'එ'}, {english: 'E', sinhala: 'ඒ'}, {english: 'ai', sinhala: 'ඓ'},
        {english: 'o', sinhala: 'ඔ'}, {english: 'O', sinhala: 'ඕ'}, {english: 'au', sinhala: 'ඖ'}
    ],
    consonants: [
        {english: 'ka', sinhala: 'ක'}, {english: 'kha', sinhala: 'ඛ'}, {english: 'ga', sinhala: 'ග'}, {english: 'gha', sinhala: 'ඝ'}, {english: 'nga', sinhala: 'ඞ'},
        {english: 'cha', sinhala: 'ච'}, {english: 'chha', sinhala: 'ඡ'}, {english: 'ja', sinhala: 'ජ'}, {english: 'jha', sinhala: 'ඣ'}, {english: 'nja', sinhala: 'ඤ'},
        {english: 'Ta', sinhala: 'ට'}, {english: 'Tha', sinhala: 'ඨ'}, {english: 'Da', sinhala: 'ඩ'}, {english: 'Dha', sinhala: 'ඪ'}, {english: 'Na', sinhala: 'ණ'},
        {english: 'ta', sinhala: 'ත'}, {english: 'tha', sinhala: 'ථ'}, {english: 'da', sinhala: 'ද'}, {english: 'dha', sinhala: 'ධ'}, {english: 'na', sinhala: 'න'},
        {english: 'pa', sinhala: 'ප'}, {english: 'pha', sinhala: 'ඵ'}, {english: 'ba', sinhala: 'බ'}, {english: 'bha', sinhala: 'භ'}, {english: 'ma', sinhala: 'ම'},
        {english: 'ya', sinhala: 'ය'}, {english: 'ra', sinhala: 'ර'}, {english: 'la', sinhala: 'ල'}, {english: 'wa', sinhala: 'ව'}, {english: 'va', sinhala: 'ව'},
        {english: 'sha', sinhala: 'ශ'}, {english: 'Sha', sinhala: 'ෂ'}, {english: 'sa', sinhala: 'ස'}, {english: 'ha', sinhala: 'හ'}, {english: 'lla', sinhala: 'ළ'}, {english: 'fa', sinhala: 'ෆ'}
    ],
    combinations: [
        {english: 'kaa', sinhala: 'කා'}, {english: 'ki', sinhala: 'කි'}, {english: 'kii', sinhala: 'කී'}, {english: 'ku', sinhala: 'කු'}, {english: 'kuu', sinhala: 'කූ'},
        {english: 'ke', sinhala: 'කෙ'}, {english: 'kee', sinhala: 'කේ'}, {english: 'ko', sinhala: 'කො'}, {english: 'koo', sinhala: 'කෝ'}, {english: 'kA', sinhala: 'කැ'},
        {english: 'gaa', sinhala: 'ගා'}, {english: 'gi', sinhala: 'ගි'}, {english: 'gii', sinhala: 'ගී'}, {english: 'gu', sinhala: 'ගු'}, {english: 'guu', sinhala: 'ගූ'},
        {english: 'taa', sinhala: 'තා'}, {english: 'ti', sinhala: 'ති'}, {english: 'tii', sinhala: 'තී'}, {english: 'tu', sinhala: 'තු'}, {english: 'tuu', sinhala: 'තූ'},
        {english: 'naa', sinhala: 'නා'}, {english: 'ni', sinhala: 'නි'}, {english: 'nii', sinhala: 'නී'}, {english: 'nu', sinhala: 'නු'}, {english: 'nuu', sinhala: 'නූ'}
    ],
    clusters: [
        {english: 'ksha', sinhala: 'ක්ෂ'}, {english: 'gnya', sinhala: 'ඥ'}, {english: 'shri', sinhala: 'ශ්‍රී'}, {english: 'sri', sinhala: 'ශ්‍රී'},
        {english: 'kr', sinhala: 'ක්‍ර'}, {english: 'gr', sinhala: 'ග්‍ර'}, {english: 'tr', sinhala: 'ත්‍ර'}, {english: 'dr', sinhala: 'ද්‍ර'},
        {english: 'pr', sinhala: 'ප්‍ර'}, {english: 'br', sinhala: 'බ්‍ර'}, {english: 'mr', sinhala: 'ම්‍ර'}, {english: 'nr', sinhala: 'න්‍ර'}
    ],
    names: [
        {english: 'nimal', sinhala: 'නිමල්'}, {english: 'kamal', sinhala: 'කමල්'}, {english: 'sunil', sinhala: 'සුනිල්'}, {english: 'kamala', sinhala: 'කමලා'},
        {english: 'dilani', sinhala: 'දිලානි'}, {english: 'priyanka', sinhala: 'ප්‍රියංකා'}, {english: 'chamara', sinhala: 'චමර'}, {english: 'kasun', sinhala: 'කසුන්'},
        {english: 'lahiru', sinhala: 'ලහිරු'}, {english: 'tharindu', sinhala: 'තරිඳු'}, {english: 'chathura', sinhala: 'චතුර'}, {english: 'dinesh', sinhala: 'දිනේශ්'}
    ],
    subjects: [
        {english: 'mathematics', sinhala: 'ගණිතය'}, {english: 'science', sinhala: 'විද්‍යාව'}, {english: 'history', sinhala: 'ඉතිහාසය'},
        {english: 'geography', sinhala: 'භූගෝල විද්‍යාව'}, {english: 'english', sinhala: 'ඉංග්‍රීසි'}, {english: 'sinhala', sinhala: 'සිංහල'},
        {english: 'buddhism', sinhala: 'බුද්ධ ධර්මය'}, {english: 'art', sinhala: 'කලාව'}, {english: 'music', sinhala: 'සංගීතය'}
    ],
    exams: [
        {english: 'first term', sinhala: '1වන වාර පරීක්ෂණය'}, {english: 'second term', sinhala: '2වන වාර පරීක්ෂණය'},
        {english: 'third term', sinhala: '3වන වාර පරීක්ෂණය'}, {english: 'annual exam', sinhala: 'වාර්ෂික පරීක්ෂණය'},
        {english: 'unit test', sinhala: 'ඒකක පරීක්ෂණය'}, {english: 'monthly test', sinhala: 'මාසික පරීක්ෂණය'}
    ]
};

// Demo data storage
let schoolData = {
    grades: {},
    students: {},
    subjects: {},
    marks: {},
    exams: {}
};

// Enhanced conversion function with case-sensitive accuracy
function convertToSinhala(text) {
    if (!text || typeof text !== 'string') return text;
    
    // Check if it's already Sinhala
    if (/[\u0D80-\u0DFF]/.test(text)) {
        return text; // Already contains Sinhala characters
    }
    
    const trimmedText = text.trim();
    
    // First, try exact word match (case-sensitive)
    if (englishToSinhala[trimmedText]) {
        return englishToSinhala[trimmedText];
    }
    
    // Try lowercase exact match for complete words
    const lowerText = trimmedText.toLowerCase();
    if (englishToSinhala[lowerText]) {
        return englishToSinhala[lowerText];
    }
    
    // If no exact match, try phonetic conversion with CASE SENSITIVITY
    let result = '';
    let i = 0;
    
    while (i < trimmedText.length) {
        let matched = false;
        
        // Try longer combinations first (up to 5 characters for better accuracy)
        // IMPORTANT: Try case-sensitive matches first, then case-insensitive
        for (let len = 5; len >= 1; len--) {
            if (i + len <= trimmedText.length) {
                const substr = trimmedText.substr(i, len);
                
                // First try exact case match
                if (englishToSinhala[substr]) {
                    result += englishToSinhala[substr];
                    i += len;
                    matched = true;
                    break;
                }
                
                // Then try lowercase match only if exact case didn't work
                const lowerSubstr = substr.toLowerCase();
                if (englishToSinhala[lowerSubstr]) {
                    result += englishToSinhala[lowerSubstr];
                    i += len;
                    matched = true;
                    break;
                }
            }
        }
        
        // If no match found, keep the original character
        if (!matched) {
            result += trimmedText[i];
            i++;
        }
    }
    
    return result;
}

// Real-time conversion preview
function showConversionPreview(inputElement) {
    const originalValue = inputElement.value;
    if (originalValue.trim() === '') {
        const preview = inputElement.parentElement.querySelector('.conversion-preview');
        if (preview) preview.style.display = 'none';
        return;
    }
    
    const convertedValue = convertToSinhala(originalValue);
    const preview = inputElement.parentElement.querySelector('.conversion-preview');
    
    if (preview && originalValue !== convertedValue) {
        preview.textContent = convertedValue;
        preview.style.display = 'block';
    } else if (preview) {
        preview.style.display = 'none';
    }
}

// Auto-convert function for input fields
function autoConvertInput(inputElement) {
    const originalValue = inputElement.value;
    const convertedValue = convertToSinhala(originalValue);
    
    if (originalValue !== convertedValue && originalValue.trim() !== '') {
        inputElement.value = convertedValue;
        showConversionFeedback(originalValue, convertedValue);
        
        // Hide preview after conversion
        const preview = inputElement.parentElement.querySelector('.conversion-preview');
        if (preview) {
            preview.style.display = 'none';
        }
    }
}

// Show conversion feedback
function showConversionFeedback(original, converted) {
    showAlert(`පරිවර්තනය: "${original}" → "${converted}"`, 'success');
}

// Setup enhanced event listeners for auto-conversion
function setupAutoConversion() {
    // Real-time preview on input
    document.addEventListener('input', function(e) {
        if (e.target.matches('input[data-convert="true"]')) {
            showConversionPreview(e.target);
        }
    });

    // Convert on blur
    document.addEventListener('blur', function(e) {
        if (e.target.matches('input[data-convert="true"]')) {
            autoConvertInput(e.target);
        }
    }, true);

    // Convert on Enter key
    document.addEventListener('keydown', function(e) {
        if (e.target.matches('input[data-convert="true"]') && e.key === 'Enter') {
            e.preventDefault();
            autoConvertInput(e.target);
        }
    });

    // Show/hide preview on focus/blur
    document.addEventListener('focus', function(e) {
        if (e.target.matches('input[data-convert="true"]')) {
            showConversionPreview(e.target);
        }
    }, true);

    document.addEventListener('blur', function(e) {
        if (e.target.matches('input[data-convert="true"]')) {
            setTimeout(() => {
                const preview = e.target.parentElement.querySelector('.conversion-preview');
                if (preview) preview.style.display = 'none';
            }, 200);
        }
    }, true);
}

// Show help modal with keymap
function showHelpModal() {
    document.getElementById('helpModal').style.display = 'block';
    loadKeymapContent();
}

function closeHelpModal() {
    document.getElementById('helpModal').style.display = 'none';
}

// Load keymap content
function loadKeymapContent() {
    const container = document.getElementById('keymapContent');
    
    let html = '';
    
    // Vowels section
    html += `
        <div class="keymap-section">
            <h4>🔤 ස්වර (Vowels)</h4>
            <div class="keymap-grid">
    `;
    keymapData.vowels.forEach(item => {
        html += `
            <div class="keymap-item">
                <div class="english">${item.english}</div>
                <div class="sinhala">${item.sinhala}</div>
            </div>
        `;
    });
    html += '</div></div>';

    // Consonants section
    html += `
        <div class="keymap-section">
            <h4>🔤 ව්‍යඤ්ජන (Consonants)</h4>
            <div class="keymap-grid">
    `;
    keymapData.consonants.forEach(item => {
        html += `
            <div class="keymap-item">
                <div class="english">${item.english}</div>
                <div class="sinhala">${item.sinhala}</div>
            </div>
        `;
    });
    html += '</div></div>';

    // Combinations section
    html += `
        <div class="keymap-section">
            <h4>🔤 ව්‍යඤ්ජන + ස්වර සංයෝජන (Consonant + Vowel Combinations)</h4>
            <div class="keymap-grid">
    `;
    keymapData.combinations.forEach(item => {
        html += `
            <div class="keymap-item">
                <div class="english">${item.english}</div>
                <div class="sinhala">${item.sinhala}</div>
            </div>
        `;
    });
    html += '</div></div>';

    // Clusters section
    html += `
        <div class="keymap-section">
            <h4>🔤 සංයුක්ත අකුරු (Consonant Clusters)</h4>
            <div class="keymap-grid">
    `;
    keymapData.clusters.forEach(item => {
        html += `
            <div class="keymap-item">
                <div class="english">${item.english}</div>
                <div class="sinhala">${item.sinhala}</div>
            </div>
        `;
    });
    html += '</div></div>';

    // Names section
    html += `
        <div class="keymap-section">
            <h4>👤 සාමාන්‍ය නම් (Common Names)</h4>
            <div class="keymap-grid">
    `;
    keymapData.names.forEach(item => {
        html += `
            <div class="keymap-item">
                <div class="english">${item.english}</div>
                <div class="sinhala">${item.sinhala}</div>
            </div>
        `;
    });
    html += '</div></div>';

    // Subjects section
    html += `
        <div class="keymap-section">
            <h4>📚 විෂයන් (Subjects)</h4>
            <div class="keymap-grid">
    `;
    keymapData.subjects.forEach(item => {
        html += `
            <div class="keymap-item">
                <div class="english">${item.english}</div>
                <div class="sinhala">${item.sinhala}</div>
            </div>
        `;
    });
    html += '</div></div>';

    // Exams section
    html += `
        <div class="keymap-section">
            <h4>📝 පරීක්ෂණ (Exams)</h4>
            <div class="keymap-grid">
    `;
    keymapData.exams.forEach(item => {
        html += `
            <div class="keymap-item">
                <div class="english">${item.english}</div>
                <div class="sinhala">${item.sinhala}</div>
            </div>
        `;
    });
    html += '</div></div>';

    container.innerHTML = html;
    
    // Setup search functionality
    setupKeymapSearch();
}

// Setup keymap search
function setupKeymapSearch() {
    const searchBox = document.getElementById('keymapSearch');
    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const keymapItems = document.querySelectorAll('.keymap-item');
        
        keymapItems.forEach(item => {
            const english = item.querySelector('.english').textContent.toLowerCase();
            const sinhala = item.querySelector('.sinhala').textContent;
            
            if (english.includes(searchTerm) || sinhala.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.backgroundColor = searchTerm ? '#fff3cd' : 'white';
            } else {
                item.style.display = searchTerm ? 'none' : 'block';
                item.style.backgroundColor = 'white';
            }
        });
    });
}

// Load data from localStorage for demo
function loadData() {
    const saved = localStorage.getItem('schoolMarksData');
    if (saved) {
        schoolData = JSON.parse(saved);
    } else {
        initializeGrades();
    }
}

// Save data to localStorage for demo
function saveData() {
    localStorage.setItem('schoolMarksData', JSON.stringify(schoolData));
}

// Initialize grades 6-14
function initializeGrades() {
    for (let i = 6; i <= 14; i++) {
        const gradeId = `grade_${i}`;
        schoolData.grades[gradeId] = {
            id: gradeId,
            name: `${i} ශ්‍රේණිය`,
            level: i
        };
        schoolData.students[gradeId] = [];
        schoolData.subjects[gradeId] = [];
        schoolData.marks[gradeId] = {};
        schoolData.exams[gradeId] = [];
    }
    saveData();
}

// Show tab function
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Hide all nav tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
    
    // Load data for the selected tab
    switch(tabName) {
        case 'grades':
            loadGrades();
            break;
        case 'students':
            loadStudentGrades();
            break;
        case 'subjects':
            loadSubjectGrades();
            break;
        case 'marks':
            loadMarksGrades();
            break;
        case 'reports':
            loadReportsGrades();
            break;
    }
}

// Load grades display
function loadGrades() {
    const gradesGrid = document.getElementById('gradesGrid');
    gradesGrid.innerHTML = '';
    
    Object.values(schoolData.grades).forEach(grade => {
        const studentCount = schoolData.students[grade.id] ? schoolData.students[grade.id].length : 0;
        const subjectCount = schoolData.subjects[grade.id] ? schoolData.subjects[grade.id].length : 0;
        
        const gradeCard = document.createElement('div');
        gradeCard.className = 'grade-card';
        gradeCard.innerHTML = `
            <h3>${grade.name}</h3>
            <p>ශිෂ්‍යයින්: ${studentCount}</p>
            <p>විෂයන්: ${subjectCount}</p>
        `;
        gradeCard.onclick = () => selectGrade(grade.id);
        gradesGrid.appendChild(gradeCard);
    });
}

function selectGrade(gradeId) {
    showAlert(`${schoolData.grades[gradeId].name} තෝරා ගන්නා ලදී`, 'success');
}

// Load student grades dropdown
function loadStudentGrades() {
    const select = document.getElementById('studentGradeSelect');
    select.innerHTML = '<option value="">ශ්‍රේණිය තෝරන්න</option>';
    
    Object.values(schoolData.grades).forEach(grade => {
        const option = document.createElement('option');
        option.value = grade.id;
        option.textContent = grade.name;
        select.appendChild(option);
    });
    
    select.onchange = function() {
        if (this.value) {
            document.getElementById('studentForm').style.display = 'block';
            loadStudentsTable(this.value);
        } else {
            document.getElementById('studentForm').style.display = 'none';
            document.getElementById('studentsTable').innerHTML = '';
        }
    };
}

// Add student
function addStudent() {
    const gradeId = document.getElementById('studentGradeSelect').value;
    const name = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    
    if (!gradeId || !name || !studentId) {
        showAlert('සියලුම කොටස් පුරවන්න', 'error');
        return;
    }
    
    const student = {
        id: studentId,
        name: name,
        gradeId: gradeId,
        dateAdded: new Date().toISOString()
    };
    
    if (!schoolData.students[gradeId]) {
        schoolData.students[gradeId] = [];
    }
    
    schoolData.students[gradeId].push(student);
    saveData();
    
    document.getElementById('studentName').value = '';
    document.getElementById('studentId').value = '';
    
    loadStudentsTable(gradeId);
    showAlert('ශිෂ්‍යයා සාර්ථකව එකතු කරන ලදී', 'success');
}

// Load students table
function loadStudentsTable(gradeId) {
    const container = document.getElementById('studentsTable');
    const students = schoolData.students[gradeId] || [];
    
    if (students.length === 0) {
        container.innerHTML = '<p>මෙම ශ්‍රේණියේ ශිෂ්‍යයින් නොමැත</p>';
        return;
    }
    
    let html = `
        <table class="student-table">
            <thead>
                <tr>
                    <th>ඇතුළත් වීමේ අංකය</th>
                    <th>නම</th>
                    <th>එකතු කළ දිනය</th>
                    <th>ක්‍රියාමාර්ග</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    students.forEach((student, index) => {
        html += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${new Date(student.dateAdded).toLocaleDateString('si-LK')}</td>
                <td>
                    <button class="btn btn-warning" onclick="editStudent('${gradeId}', ${index})">සංස්කරණය</button>
                    <button class="btn btn-danger" onclick="deleteStudent('${gradeId}', ${index})">මකන්න</button>
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

// Load subject grades dropdown
function loadSubjectGrades() {
    const select = document.getElementById('subjectGradeSelect');
    select.innerHTML = '<option value="">ශ්‍රේණිය තෝරන්න</option>';
    
    Object.values(schoolData.grades).forEach(grade => {
        const option = document.createElement('option');
        option.value = grade.id;
        option.textContent = grade.name;
        select.appendChild(option);
    });
    
    select.onchange = function() {
        if (this.value) {
            document.getElementById('subjectForm').style.display = 'block';
            loadSubjectsTable(this.value);
        } else {
            document.getElementById('subjectForm').style.display = 'none';
            document.getElementById('subjectsTable').innerHTML = '';
        }
    };
}

// Add subject
function addSubject() {
    const gradeId = document.getElementById('subjectGradeSelect').value;
    const subjectName = document.getElementById('subjectName').value;
    const teacherName = document.getElementById('teacherName').value;
    
    if (!gradeId || !subjectName || !teacherName) {
        showAlert('සියලුම කොටස් පුරවන්න', 'error');
        return;
    }
    
    const subject = {
        id: Date.now().toString(),
        name: subjectName,
        teacher: teacherName,
        gradeId: gradeId
    };
    
    if (!schoolData.subjects[gradeId]) {
        schoolData.subjects[gradeId] = [];
    }
    
    schoolData.subjects[gradeId].push(subject);
    saveData();
    
    document.getElementById('subjectName').value = '';
    document.getElementById('teacherName').value = '';
    
    loadSubjectsTable(gradeId);
    showAlert('විෂයය සාර්ථකව එකතු කරන ලදී', 'success');
}

// Load subjects table
function loadSubjectsTable(gradeId) {
    const container = document.getElementById('subjectsTable');
    const subjects = schoolData.subjects[gradeId] || [];
    
    if (subjects.length === 0) {
        container.innerHTML = '<p>මෙම ශ්‍රේණියේ විෂයන් නොමැත</p>';
        return;
    }
    
    let html = `
        <table class="student-table">
            <thead>
                <tr>
                    <th>විෂය නම</th>
                    <th>ගුරුවරයා</th>
                    <th>ක්‍රියාමාර්ග</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    subjects.forEach((subject, index) => {
        html += `
            <tr>
                <td>${subject.name}</td>
                <td>${subject.teacher}</td>
                <td>
                    <button class="btn btn-warning" onclick="editSubject('${gradeId}', ${index})">සංස්කරණය</button>
                    <button class="btn btn-danger" onclick="deleteSubject('${gradeId}', ${index})">මකන්න</button>
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

// Load marks grades dropdown
function loadMarksGrades() {
    const select = document.getElementById('marksGradeSelect');
    select.innerHTML = '<option value="">ශ්‍රේණිය තෝරන්න</option>';
    
    Object.values(schoolData.grades).forEach(grade => {
        const option = document.createElement('option');
        option.value = grade.id;
        option.textContent = grade.name;
        select.appendChild(option);
    });
    
    select.onchange = function() {
        loadMarksSubjects(this.value);
    };
}

function loadMarksSubjects(gradeId) {
    const select = document.getElementById('marksSubjectSelect');
    select.innerHTML = '<option value="">විෂයය තෝරන්න</option>';
    
    const subjects = schoolData.subjects[gradeId] || [];
    subjects.forEach((subject, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = subject.name;
        select.appendChild(option);
    });
    
    select.onchange = function() {
        if (this.value !== '') {
            loadMarksInput(gradeId, parseInt(this.value));
        }
    };
}

function loadMarksInput(gradeId, subjectIndex) {
    const students = schoolData.students[gradeId] || [];
    const subject = schoolData.subjects[gradeId][subjectIndex];
    const container = document.getElementById('marksInputArea');
    
    if (students.length === 0) {
        container.innerHTML = '<p>මෙම ශ්‍රේණියේ ශිෂ්‍යයින් නොමැත</p>';
        return;
    }
    
    let html = `
        <h3>${subject.name} - ලකුණු ඇතුලත් කිරීම</h3>
        <div class="marks-input-grid">
    `;
    
    students.forEach((student, studentIndex) => {
        html += `
            <div class="form-group">
                <label>${student.name} (${student.id})</label>
                <input type="number" id="marks_${studentIndex}" min="0" max="100" placeholder="ලකුණු">
            </div>
        `;
    });
    
    html += `
        </div>
        <button class="btn btn-primary" onclick="saveMarks('${gradeId}', ${subjectIndex})">ලකුණු සුරකින්න</button>
    `;
    
    container.innerHTML = html;
}

function saveMarks(gradeId, subjectIndex) {
    const examName = document.getElementById('examName').value;
    if (!examName) {
        showAlert('පරීක්ෂණයේ නම ඇතුලත් කරන්න', 'error');
        return;
    }

    const students = schoolData.students[gradeId] || [];
    const subject = schoolData.subjects[gradeId][subjectIndex];
    const marks = {};
    
    students.forEach((student, studentIndex) => {
        const markInput = document.getElementById(`marks_${studentIndex}`);
        const mark = parseInt(markInput.value) || 0;
        marks[student.id] = mark;
    });
    
    // Initialize marks structure if needed
    if (!schoolData.marks[gradeId]) {
        schoolData.marks[gradeId] = {};
    }
    if (!schoolData.marks[gradeId][examName]) {
        schoolData.marks[gradeId][examName] = {};
    }
    
    schoolData.marks[gradeId][examName][subject.id] = marks;
    
    // Add exam to exams list if not exists
    if (!schoolData.exams[gradeId].includes(examName)) {
        schoolData.exams[gradeId].push(examName);
    }
    
    saveData();
    showAlert('ලකුණු සාර්ථකව සුරකින ලදී', 'success');
    
    // Clear inputs
    students.forEach((student, studentIndex) => {
        document.getElementById(`marks_${studentIndex}`).value = '';
    });
}

// Load reports grades dropdown
function loadReportsGrades() {
    const select = document.getElementById('reportsGradeSelect');
    select.innerHTML = '<option value="">ශ්‍රේණිය තෝරන්න</option>';
    
    Object.values(schoolData.grades).forEach(grade => {
        const option = document.createElement('option');
        option.value = grade.id;
        option.textContent = grade.name;
        select.appendChild(option);
    });
    
    select.onchange = function() {
        loadReportsExams(this.value);
    };
}

function loadReportsExams(gradeId) {
    const select = document.getElementById('reportsExamSelect');
    select.innerHTML = '<option value="">පරීක්ෂණය තෝරන්න</option>';
    
    const exams = schoolData.exams[gradeId] || [];
    exams.forEach(exam => {
        const option = document.createElement('option');
        option.value = exam;
        option.textContent = exam;
        select.appendChild(option);
    });
}

function generateReport() {
    const gradeId = document.getElementById('reportsGradeSelect').value;
    const examName = document.getElementById('reportsExamSelect').value;
    
    if (!gradeId || !examName) {
        showAlert('ශ්‍රේණිය සහ පරීක්ෂණය තෝරන්න', 'error');
        return;
    }
    
    const students = schoolData.students[gradeId] || [];
    const subjects = schoolData.subjects[gradeId] || [];
    const marks = schoolData.marks[gradeId]?.[examName] || {};
    
    if (students.length === 0 || subjects.length === 0) {
        showAlert('ශිෂ්‍යයින් හෝ විෂයන් නොමැත', 'error');
        return;
    }
    
    // Calculate results for each student
    const results = students.map(student => {
        let total = 0;
        let subjectCount = 0;
        const studentMarks = {};
        
        subjects.forEach(subject => {
            const mark = marks[subject.id]?.[student.id] || 0;
            studentMarks[subject.name] = mark;
            total += mark;
            subjectCount++;
        });
        
        const average = subjectCount > 0 ? (total / subjectCount).toFixed(2) : 0;
        
        return {
            student: student,
            marks: studentMarks,
            total: total,
            average: parseFloat(average)
        };
    });
    
    // Sort by total marks for ranking
    results.sort((a, b) => b.total - a.total);
    
    // Add ranks
    results.forEach((result, index) => {
        result.rank = index + 1;
    });
    
    displayReport(results, subjects, examName, gradeId);
    generateChart(results, subjects);
}

function displayReport(results, subjects, examName, gradeId) {
    const container = document.getElementById('reportResults');
    const gradeName = schoolData.grades[gradeId].name;
    
    let html = `
        <h3>${gradeName} - ${examName} - ප්‍රතිඵල වාර්තාව</h3>
        <table class="student-table">
            <thead>
                <tr>
                    <th>ශ්‍රේණිගත කිරීම</th>
                    <th>ඇතුළත් වීමේ අංකය</th>
                    <th>නම</th>
    `;
    
    subjects.forEach(subject => {
        html += `<th>${subject.name}</th>`;
    });
    
    html += `
                    <th>මුළු ලකුණු</th>
                    <th>සාමාන්‍යය</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    results.forEach(result => {
        html += `
            <tr>
                <td><strong>${result.rank}</strong></td>
                <td>${result.student.id}</td>
                <td>${result.student.name}</td>
        `;
        
        subjects.forEach(subject => {
            const mark = result.marks[subject.name] || 0;
            html += `<td>${mark}</td>`;
        });
        
        html += `
                <td><strong>${result.total}</strong></td>
                <td><strong>${result.average}</strong></td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

function generateChart(results, subjects) {
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (window.myChart) {
        window.myChart.destroy();
    }
    
    // Get top student and comparison data
    const topStudent = results[0];
    const datasets = [];
    
    // Add top student data
    datasets.push({
        label: `${topStudent.student.name} (1වන ස්ථානය)`,
        data: subjects.map(subject => topStudent.marks[subject.name] || 0),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
    });
    
    // Add other students (up to 5 for readability)
    results.slice(1, 6).forEach((result, index) => {
        const colors = [
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
        ];
        
        datasets.push({
            label: `${result.student.name} (${result.rank}වන ස්ථානය)`,
            data: subjects.map(subject => result.marks[subject.name] || 0),
            backgroundColor: colors[index],
            borderColor: colors[index].replace('0.6', '1'),
            borderWidth: 1
        });
    });
    
    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: subjects.map(subject => subject.name),
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'ශිෂ්‍යයාගේ ප්‍රගතිය සංසන්දනය'
                },
                legend: {
                    display: true
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            }
        }
    });
}

function downloadPowerPoint() {
    const gradeId = document.getElementById('reportsGradeSelect').value;
    const examName = document.getElementById('reportsExamSelect').value;
    
    if (!gradeId || !examName) {
        showAlert('ශ්‍රේණිය සහ පරීක්ෂණය තෝරන්න', 'error');
        return;
    }
    
    try {
        const students = schoolData.students[gradeId] || [];
        const subjects = schoolData.subjects[gradeId] || [];
        const marks = schoolData.marks[gradeId]?.[examName] || {};
        const gradeName = schoolData.grades[gradeId].name;
        
        if (students.length === 0 || subjects.length === 0) {
            showAlert('ශිෂ්‍යයින් හෝ විෂයන් නොමැත', 'error');
            return;
        }
        
        // Create PowerPoint presentation
        const pptx = new PptxGenJS();
        
        // Title slide
        const slide1 = pptx.addSlide();
        slide1.addText(`${gradeName} - ${examName}`, {
            x: 1, y: 1, w: 8, h: 1.5,
            fontSize: 44, bold: true, color: '363636',
            align: 'center'
        });
        slide1.addText('ප්‍රතිඵල වාර්තාව', {
            x: 1, y: 2.5, w: 8, h: 1,
            fontSize: 24, color: '666666',
            align: 'center'
        });
        slide1.addText(new Date().toLocaleDateString('si-LK'), {
            x: 1, y: 6, w: 8, h: 0.5,
            fontSize: 16, color: '999999',
            align: 'center'
        });
        
        // Save PowerPoint
        pptx.writeFile({fileName: `${gradeName}_${examName}_Results.pptx`})
            .then(() => {
                showAlert('PowerPoint ගොනුව සාර්ථකව බාගන්නා ලදී', 'success');
            })
            .catch((error) => {
                console.error('PowerPoint generation error:', error);
                showAlert('PowerPoint ගොනුව සෑදීමේදී දෝෂයක් ඇතිවිය', 'error');
            });
            
    } catch (error) {
        console.error('PowerPoint generation error:', error);
        showAlert('PowerPoint ගොනුව සෑදීමේදී දෝෂයක් ඇතිවිය', 'error');
    }
}

// Edit and delete functions
function editStudent(gradeId, studentIndex) {
    const student = schoolData.students[gradeId][studentIndex];
    const modal = document.getElementById('editModal');
    const form = document.getElementById('editForm');
    
    form.innerHTML = `
        <div class="form-group">
            <label>ශිෂ්‍ය නම:</label>
            <div class="input-wrapper">
                <input type="text" id="editStudentName" value="${student.name}" data-convert="true">
                <div class="conversion-preview"></div>
                <button class="typing-mode-indicator sinhala">සිං</button>
            </div>
        </div>
        <div class="form-group">
            <label>ඇතුළත් වීමේ අංකය:</label>
            <input type="text" id="editStudentId" value="${student.id}">
        </div>
        <button class="btn btn-primary" onclick="updateStudent('${gradeId}', ${studentIndex})">යාවත්කාලීන කරන්න</button>
    `;
    
    modal.style.display = 'block';
}

function updateStudent(gradeId, studentIndex) {
    const name = document.getElementById('editStudentName').value;
    const id = document.getElementById('editStudentId').value;
    
    if (!name || !id) {
        showAlert('සියලුම කොටස් පුරවන්න', 'error');
        return;
    }
    
    schoolData.students[gradeId][studentIndex].name = name;
    schoolData.students[gradeId][studentIndex].id = id;
    saveData();
    
    closeModal();
    loadStudentsTable(gradeId);
    showAlert('ශිෂ්‍ය තොරතුරු යාවත්කාලීන කරන ලදී', 'success');
}

function deleteStudent(gradeId, studentIndex) {
    if (confirm('ඔබට මෙම ශිෂ්‍යයා මකා දැමීමට අවශ්‍යද?')) {
        schoolData.students[gradeId].splice(studentIndex, 1);
        saveData();
        loadStudentsTable(gradeId);
        showAlert('ශිෂ්‍යයා මකා දමන ලදී', 'success');
    }
}

function editSubject(gradeId, subjectIndex) {
    const subject = schoolData.subjects[gradeId][subjectIndex];
    const modal = document.getElementById('editModal');
    const form = document.getElementById('editForm');
    
    form.innerHTML = `
        <div class="form-group">
            <label>විෂය නම:</label>
            <div class="input-wrapper">
                <input type="text" id="editSubjectName" value="${subject.name}" data-convert="true">
                <div class="conversion-preview"></div>
                <button class="typing-mode-indicator sinhala">සිං</button>
            </div>
        </div>
        <div class="form-group">
            <label>ගුරුවරයාගේ නම:</label>
            <div class="input-wrapper">
                <input type="text" id="editTeacherName" value="${subject.teacher}" data-convert="true">
                <div class="conversion-preview"></div>
                <button class="typing-mode-indicator sinhala">සිං</button>
            </div>
        </div>
        <button class="btn btn-primary" onclick="updateSubject('${gradeId}', ${subjectIndex})">යාවත්කාලීන කරන්න</button>
    `;
    
    modal.style.display = 'block';
}

function updateSubject(gradeId, subjectIndex) {
    const name = document.getElementById('editSubjectName').value;
    const teacher = document.getElementById('editTeacherName').value;
    
    if (!name || !teacher) {
        showAlert('සියලුම කොටස් පුරවන්න', 'error');
        return;
    }
    
    schoolData.subjects[gradeId][subjectIndex].name = name;
    schoolData.subjects[gradeId][subjectIndex].teacher = teacher;
    saveData();
    
    closeModal();
    loadSubjectsTable(gradeId);
    showAlert('විෂය තොරතුරු යාවත්කාලීන කරන ලදී', 'success');
}

function deleteSubject(gradeId, subjectIndex) {
    if (confirm('ඔබට මෙම විෂයය මකා දැමීමට අවශ්‍යද?')) {
        schoolData.subjects[gradeId].splice(subjectIndex, 1);
        saveData();
        loadSubjectsTable(gradeId);
        showAlert('විෂයය මකා දමන ලදී', 'success');
    }
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

function showAlert(message, type) {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    const alert = document.createElement('div');
    alert.className = `alert alert-${type === 'success' ? 'success' : 'error'}`;
    alert.textContent = message;
    
    document.body.insertBefore(alert, document.body.firstChild);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    loadGrades();
    setupAutoConversion();
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('editModal');
        const helpModal = document.getElementById('helpModal');
        if (event.target === modal) {
            closeModal();
        }
        if (event.target === helpModal) {
            closeHelpModal();
        }
    };
});
