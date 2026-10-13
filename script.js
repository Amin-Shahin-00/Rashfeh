/* =========================================================
   Rashfeh | رشفة — interactions, motion, Arabic/English
   ========================================================= */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Shopify checkout ----------
   To connect your Shopify store later:
   1. Set SHOPIFY.domain to your store domain, e.g. 'rashfeh.myshopify.com'
   2. Fill the `shopify` field of every product variant and package below with
      its Shopify *variant ID* (Shopify admin → Products → a variant → the number at the end of the URL).
   Checkout then sends the whole cart to Shopify's secure checkout using a cart permalink:
   https://<domain>/cart/<variantId>:<qty>,<variantId>:<qty> */
const SHOPIFY = { domain: '' };

/* ---------- Product art (inline SVG illustrations) ---------- */
const STEEL = '#d8d2c8';
const DARK = '#1c120c';

const ART = {
  machine({ color = '#8a5a3a', groups = 2 }) {
    let heads = '';
    for (let i = 0; i < groups; i++) {
      const cx = 24 + 112 * (i + 0.5) / groups;
      heads += `
        <rect x="${cx - 9}" y="72" width="18" height="7" rx="2" fill="${STEEL}"/>
        <rect x="${cx - 11}" y="79" width="22" height="5" rx="2" fill="${DARK}"/>
        <rect x="${cx + 6}" y="80" width="${groups === 3 ? 11 : 18}" height="4" rx="2" fill="${DARK}"/>
        <rect x="${cx - 1}" y="84" width="2" height="12" fill="#b07a4f" class="p-stream"/>
        <rect x="${cx - 6}" y="95" width="12" height="11" rx="2" fill="#f4ead9"/>`;
    }
    return `
      <rect x="14" y="14" width="132" height="6" rx="2" fill="${STEEL}"/>
      <rect x="10" y="20" width="140" height="56" rx="8" fill="${color}"/>
      <rect x="10" y="62" width="140" height="10" fill="rgba(255,255,255,.2)"/>
      <circle cx="30" cy="40" r="9" fill="#f4ead9" stroke="${STEEL}" stroke-width="2"/>
      <line x1="30" y1="40" x2="30" y2="33" stroke="#a8322a" stroke-width="1.6" class="p-needle"/>
      <circle cx="130" cy="40" r="9" fill="#f4ead9" stroke="${STEEL}" stroke-width="2"/>
      <line x1="130" y1="40" x2="135" y2="35" stroke="#a8322a" stroke-width="1.6"/>
      <text x="80" y="46" text-anchor="middle" font-family="Aref Ruqaa, serif" font-size="15" font-weight="700" fill="#deaa6a">رشفة</text>
      <rect x="10" y="72" width="14" height="44" fill="${color}"/>
      <rect x="136" y="72" width="14" height="44" fill="${color}"/>
      <rect x="24" y="72" width="112" height="36" fill="rgba(0,0,0,.35)"/>
      ${heads}
      <rect x="18" y="106" width="124" height="7" rx="2" fill="#bdb5aa"/>
      <rect x="16" y="113" width="10" height="5" fill="${DARK}"/><rect x="134" y="113" width="10" height="5" fill="${DARK}"/>`;
  },
  lever({ color = '#6b4430' }) {
    return `
      <ellipse cx="80" cy="30" rx="30" ry="9" fill="${STEEL}"/>
      <circle cx="80" cy="19" r="6" fill="#deaa6a"/>
      <rect x="50" y="30" width="60" height="62" rx="8" fill="${color}"/>
      <text x="80" y="66" text-anchor="middle" font-family="Aref Ruqaa, serif" font-size="14" font-weight="700" fill="#deaa6a">رشفة</text>
      <rect x="70" y="92" width="20" height="7" fill="${STEEL}"/>
      <rect x="66" y="99" width="28" height="5" rx="2" fill="${DARK}"/>
      <rect x="79" y="104" width="2" height="6" fill="#b07a4f" class="p-stream"/>
      <line x1="80" y1="95" x2="120" y2="36" stroke="${DARK}" stroke-width="5" stroke-linecap="round" class="p-lever"/>
      <rect x="72" y="108" width="16" height="9" rx="2" fill="#f4ead9"/>
      <rect x="40" y="117" width="80" height="6" rx="2" fill="#bdb5aa"/>`;
  },
  grinder({ color = '#8a5a3a' }) {
    return `
      <path d="M56 8h48l-12 34H68Z" fill="rgba(244,234,217,.3)" stroke="rgba(244,234,217,.6)" stroke-width="1.5"/>
      <g fill="#4a2e1f" class="p-beans">
        <ellipse cx="70" cy="30" rx="4" ry="5"/><ellipse cx="80" cy="34" rx="4" ry="5"/><ellipse cx="90" cy="30" rx="4" ry="5"/>
        <ellipse cx="75" cy="22" rx="4" ry="5"/><ellipse cx="86" cy="22" rx="4" ry="5"/><ellipse cx="80" cy="16" rx="4" ry="5"/>
      </g>
      <rect x="62" y="42" width="36" height="8" fill="${DARK}"/>
      <rect x="56" y="50" width="48" height="58" rx="8" fill="${color}"/>
      <rect x="66" y="57" width="28" height="12" rx="2" fill="#0d0907"/>
      <text x="80" y="66" text-anchor="middle" font-family="monospace" font-size="7" fill="#deaa6a">18.0g</text>
      <rect x="74" y="74" width="12" height="7" fill="${STEEL}"/>
      <rect x="78" y="81" width="4" height="8" fill="#6b4430" class="p-stream"/>
      <rect x="64" y="90" width="32" height="4" rx="2" fill="${STEEL}"/>
      <rect x="48" y="108" width="64" height="12" rx="4" fill="${DARK}"/>`;
  },
  pitcher({ color = STEEL }) {
    return `
      <path d="M54 46 C28 46 28 92 58 94" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
      <path d="M52 30 H104 L120 22 L112 38 L106 108 Q80 116 56 108 Z" fill="${color}"/>
      <path d="M62 36 L64 104" stroke="rgba(255,255,255,.5)" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="80" cy="30" rx="26" ry="4" fill="rgba(0,0,0,.25)"/>
      <path d="M70 70 q10 -10 20 0 q-10 8 -20 0Z M74 80 q6 -6 12 0 q-6 5 -12 0Z" fill="rgba(0,0,0,.12)"/>`;
  },
  tamper({ color = '#8a5a3a' }) {
    return `
      <path d="M71 54 C58 42 62 12 80 12 C98 12 102 42 89 54 Z" fill="${color}"/>
      <path d="M72 24 C72 18 76 16 78 16" stroke="rgba(255,255,255,.35)" stroke-width="3" fill="none" stroke-linecap="round"/>
      <rect x="74" y="54" width="12" height="20" fill="${STEEL}"/>
      <rect x="48" y="74" width="64" height="30" rx="4" fill="${STEEL}"/>
      <rect x="48" y="74" width="64" height="7" rx="3" fill="rgba(255,255,255,.45)"/>
      <rect x="48" y="100" width="64" height="4" fill="rgba(0,0,0,.2)"/>`;
  },
  scale({ color = DARK }) {
    return `
      <rect x="66" y="30" width="28" height="24" rx="3" fill="#f4ead9"/>
      <path d="M94 36a6 6 0 0 1 0 12" fill="none" stroke="#f4ead9" stroke-width="3"/>
      <rect x="28" y="54" width="104" height="12" rx="5" fill="${STEEL}"/>
      <rect x="20" y="64" width="120" height="40" rx="8" fill="${color}"/>
      <rect x="56" y="76" width="48" height="16" rx="3" fill="#0d0907"/>
      <text x="80" y="88" text-anchor="middle" font-family="monospace" font-size="10" fill="#deaa6a" class="p-read">36.0g</text>
      <circle cx="40" cy="84" r="4" fill="#deaa6a"/><circle cx="120" cy="84" r="4" fill="#6b4430"/>`;
  },
  knockbox({ color = '#6b4430' }) {
    return `
      <rect x="42" y="48" width="76" height="64" rx="10" fill="${color}"/>
      <rect x="42" y="84" width="76" height="4" fill="rgba(255,255,255,.15)"/>
      <rect x="36" y="40" width="88" height="11" rx="5.5" fill="${DARK}" class="p-bar"/>
      <text x="80" y="76" text-anchor="middle" font-family="Aref Ruqaa, serif" font-size="14" font-weight="700" fill="#deaa6a">رشفة</text>
      <rect x="48" y="112" width="64" height="5" rx="2" fill="${DARK}"/>`;
  },
  kettle({ color = DARK }) {
    return `
      <path d="M52 98 C34 92 34 62 22 40 L14 34" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
      <path d="M112 58 C138 58 138 98 114 100" fill="none" stroke="#6b4430" stroke-width="8" stroke-linecap="round"/>
      <path d="M48 62 Q48 46 80 46 Q112 46 112 62 L116 108 Q80 116 44 108 Z" fill="${color}"/>
      <path d="M56 64 L54 104" stroke="rgba(255,255,255,.2)" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="80" cy="46" rx="20" ry="4" fill="rgba(255,255,255,.12)"/>
      <circle cx="80" cy="40" r="5" fill="#6b4430"/>
      <path d="M12 26c-3-4 3-6 0-10M18 24c-3-4 3-6 0-10" fill="none" stroke="#f4ead9" stroke-width="1.5" stroke-linecap="round" class="p-steam"/>`;
  },
  dripper({ color = '#f4ead9' }) {
    return `
      <path d="M48 24 H112 L92 62 H68 Z" fill="${color}"/>
      <path d="M58 30 L72 58" stroke="rgba(0,0,0,.1)" stroke-width="3"/><path d="M80 30 V58" stroke="rgba(0,0,0,.1)" stroke-width="3"/><path d="M102 30 L88 58" stroke="rgba(0,0,0,.1)" stroke-width="3"/>
      <rect x="58" y="62" width="44" height="6" rx="2" fill="${color}"/>
      <rect x="79" y="68" width="2" height="16" fill="#6b4430" class="p-stream"/>
      <path d="M58 74 H102 L98 114 Q80 120 62 114 Z" fill="rgba(244,234,217,.22)" stroke="rgba(244,234,217,.6)" stroke-width="1.5"/>
      <path d="M61 98 H99 L98 114 Q80 120 62 114 Z" fill="#6b4430" opacity=".85"/>`;
  },
  brewer({ color = DARK }) {
    return `
      <rect x="40" y="12" width="80" height="32" rx="6" fill="${color}"/>
      <rect x="50" y="20" width="26" height="10" rx="2" fill="#0d0907"/>
      <text x="63" y="28" text-anchor="middle" font-family="monospace" font-size="7" fill="#deaa6a">1.9L</text>
      <circle cx="100" cy="26" r="4" fill="#deaa6a" class="p-led"/>
      <rect x="98" y="44" width="22" height="70" fill="${color}"/>
      <rect x="48" y="44" width="42" height="12" rx="3" fill="#6b4430"/>
      <rect x="68" y="56" width="3" height="12" fill="#6b4430" class="p-stream"/>
      <path d="M50 66 h40 v42 q-20 7 -40 0Z" fill="rgba(244,234,217,.22)" stroke="rgba(244,234,217,.6)" stroke-width="1.5"/>
      <path d="M51 88 h38 v20 q-19 6 -38 0Z" fill="#6b4430" opacity=".85"/>
      <rect x="34" y="112" width="92" height="8" rx="3" fill="${color}"/>`;
  },
};

const artSVG = (a, cls = 'art') => `<svg class="${cls}" viewBox="0 0 160 130" aria-hidden="true">${ART[a.type](a)}</svg>`;

/* ---------- Data ---------- */
const CATS = {
  en: { machines: 'Machine', grinders: 'Grinder', milk: 'Milk', tools: 'Tool', brewing: 'Brewing' },
  ar: { machines: 'ماكينة', grinders: 'مطحنة', milk: 'حليب', tools: 'أداة', brewing: 'تحضير' },
};

const PRODUCTS = [
  { id: 'qahwa', cat: 'machines', name: 'Qahwa Pro', sub: 'Dual boiler · multi-group', badge: 'Bestseller',
    specs: ['PID per group', 'Pre-infusion', '11 L steam boiler'], bg: ['#8a5a3a', '#2a1a11'],
    art: { type: 'machine', groups: 2 },
    variants: [{ label: '2-group', price: 4850, art: { groups: 2 }, shopify: '' }, { label: '3-group', price: 6400, art: { groups: 3 }, shopify: '' }],
    ar: { name: 'قهوة برو', sub: 'غلاية مزدوجة · متعددة المجموعات', badge: 'الأكثر مبيعاً', specs: ['PID لكل مجموعة', 'تشريب مسبق', 'غلاية بخار 11 لتر'], variants: ['مجموعتان', 'ثلاث مجموعات'] } },
  { id: 'souq', cat: 'machines', name: 'Souq Compact', sub: 'Heat exchanger · 1 group',
    specs: ['58 mm group', 'Rotary pump', 'Plumb-in'], bg: ['#6b4430', '#24160e'],
    art: { type: 'machine', groups: 1, color: '#6b4430' },
    variants: [{ label: 'Walnut', price: 2150, art: { color: '#6b4430' }, shopify: '' }, { label: 'Espresso black', price: 2150, art: { color: '#3a2418' }, shopify: '' }],
    ar: { name: 'سوق كومباكت', sub: 'مبادل حراري · مجموعة واحدة', specs: ['مجموعة 58 ملم', 'مضخة دوّارة', 'توصيل مياه مباشر'], variants: ['جوزي', 'أسود إسبريسو'] } },
  { id: 'majlis', cat: 'machines', name: 'Majlis Lever', sub: 'Spring lever · 1 group', badge: 'Showpiece',
    specs: ['Manual pressure profiling', 'Copper boiler'], bg: ['#7a4b33', '#1f140d'],
    art: { type: 'lever', color: '#b07a4f' },
    variants: [{ label: 'Copper', price: 3900, shopify: '' }],
    ar: { name: 'مجلس ليفر', sub: 'ذراع بنابض · مجموعة واحدة', badge: 'قطعة مميزة', specs: ['تحكم يدوي بالضغط', 'غلاية نحاسية'], variants: ['نحاسي'] } },
  { id: 'e65', cat: 'grinders', name: 'Tahoun E65', sub: 'On-demand espresso grinder', badge: 'Café favourite',
    specs: ['65 mm flat burrs', 'Grind-by-weight', '1.2 kg hopper'], bg: ['#6b4430', '#2a1a11'],
    art: { type: 'grinder' },
    variants: [{ label: 'Standard', price: 1650, shopify: '' }],
    ar: { name: 'طاحون E65', sub: 'مطحنة إسبريسو فورية', badge: 'المفضلة للمقاهي', specs: ['شفرات مسطحة 65 ملم', 'طحن حسب الوزن', 'خزان 1.2 كغ'], variants: ['قياسي'] } },
  { id: 'bulk', cat: 'grinders', name: 'Tahoun Bulk', sub: 'Batch grinder for filter & retail',
    specs: ['98 mm burrs', '1.5 kg / min'], bg: ['#5a3726', '#1f140d'],
    art: { type: 'grinder', color: '#4a2e1f' },
    variants: [{ label: 'Standard', price: 1200, shopify: '' }],
    ar: { name: 'طاحون الجملة', sub: 'مطحنة دفعات للفلتر والبيع', specs: ['شفرات 98 ملم', '1.5 كغ / دقيقة'], variants: ['قياسي'] } },
  { id: 'sahm', cat: 'grinders', name: 'Sahm Single-dose', sub: 'Low-retention grinder',
    specs: ['64 mm burrs', 'Stepless', '<0.1 g retention'], bg: ['#8a5a3a', '#2a1a11'],
    art: { type: 'grinder', color: '#b07a4f' },
    variants: [{ label: 'Standard', price: 780, shopify: '' }],
    ar: { name: 'سهم جرعة واحدة', sub: 'مطحنة منخفضة الاحتباس', specs: ['شفرات 64 ملم', 'ضبط غير متدرج', 'احتباس أقل من 0.1 غ'], variants: ['قياسي'] } },
  { id: 'halib', cat: 'milk', name: 'Halib Latte-art Pitcher', sub: 'Stainless · sharp spout',
    specs: ['Measure lines', 'Balanced handle'], bg: ['#7a4b33', '#2c1b12'],
    art: { type: 'pitcher' },
    variants: [{ label: '350 ml', price: 15, shopify: '' }, { label: '600 ml', price: 18, shopify: '' }, { label: '1 L', price: 24, shopify: '' }],
    ar: { name: 'إبريق حليب لفن اللاتيه', sub: 'ستانلس ستيل · مصب حاد', specs: ['خطوط قياس', 'مقبض متوازن'], variants: ['350 مل', '600 مل', '1 لتر'] } },
  { id: 'halib-copper', cat: 'milk', name: 'Halib Copper Edition', sub: 'Copper-plated pitcher', badge: 'New',
    specs: ['Teflon-free', 'Round spout for hearts'], bg: ['#6b4430', '#24160e'],
    art: { type: 'pitcher', color: '#c98f55' },
    variants: [{ label: '350 ml', price: 22, shopify: '' }, { label: '600 ml', price: 26, shopify: '' }],
    ar: { name: 'إبريق حليب نحاسي', sub: 'إبريق مطلي بالنحاس', badge: 'جديد', specs: ['بدون تفلون', 'مصب دائري لرسم القلوب'], variants: ['350 مل', '600 مل'] } },
  { id: 'mizan-tamper', cat: 'tools', name: 'Mizan Precision Tamper', sub: 'Calibrated · walnut handle',
    specs: ['Flat base', '30 lb spring click'], bg: ['#8a5a3a', '#2a1a11'],
    art: { type: 'tamper' },
    variants: [{ label: '58 mm', price: 45, shopify: '' }, { label: '58.5 mm', price: 48, shopify: '' }],
    ar: { name: 'مكبس ميزان الدقيق', sub: 'معايَر · مقبض من خشب الجوز', specs: ['قاعدة مسطحة', 'نابض 30 رطل'], variants: ['58 ملم', '58.5 ملم'] } },
  { id: 'mizan-scale', cat: 'tools', name: 'Mizan Barista Scale', sub: '0.1 g · auto timer',
    specs: ['Waterproof', 'USB-C', 'Fits drip tray'], bg: ['#5a3726', '#1f140d'],
    art: { type: 'scale' },
    variants: [{ label: 'Black', price: 65, art: { color: DARK }, shopify: '' }, { label: 'Mocha', price: 65, art: { color: '#6b4430' }, shopify: '' }],
    ar: { name: 'ميزان الباريستا ميزان', sub: 'دقة 0.1 غ · مؤقت تلقائي', specs: ['مقاوم للماء', 'USB-C', 'يناسب صينية التقطير'], variants: ['أسود', 'موكا'] } },
  { id: 'knock', cat: 'tools', name: 'Knock Box', sub: 'Under-counter or standalone',
    specs: ['Rubber bar', 'Dishwasher safe'], bg: ['#7a4b33', '#2c1b12'],
    art: { type: 'knockbox' },
    variants: [{ label: 'Standard', price: 38, shopify: '' }],
    ar: { name: 'صندوق التفريغ', sub: 'تحت الكاونتر أو مستقل', specs: ['قضيب مطاطي', 'آمن لغسالة الصحون'], variants: ['قياسي'] } },
  { id: 'kit', cat: 'tools', name: 'Bar Station Kit', sub: 'Everything for one station', badge: 'Save 15%',
    specs: ['Tamper', '2 pitchers', 'Scale', 'Knock box'], bg: ['#6b4430', '#2a1a11'],
    art: { type: 'tamper', color: '#c98f55' },
    variants: [{ label: 'Complete kit', price: 179, shopify: '' }],
    ar: { name: 'طقم محطة البار', sub: 'كل ما تحتاجه لمحطة واحدة', badge: 'وفّر 15%', specs: ['مكبس', 'إبريقان', 'ميزان', 'صندوق تفريغ'], variants: ['طقم كامل'] } },
  { id: 'kettle', cat: 'brewing', name: 'Gooseneck Kettle', sub: 'Temperature control · 0.9 L',
    specs: ['±1 °C', 'Hold mode'], bg: ['#5a3726', '#1f140d'],
    art: { type: 'kettle' },
    variants: [{ label: 'Black', price: 85, art: { color: DARK }, shopify: '' }, { label: 'Steel', price: 85, art: { color: '#b9b1a6' }, shopify: '' }],
    ar: { name: 'غلاية بعنق طويل', sub: 'تحكم بالحرارة · 0.9 لتر', specs: ['دقة ±1 درجة', 'وضع الثبات'], variants: ['أسود', 'ستانلس'] } },
  { id: 'dripper', cat: 'brewing', name: 'Ceramic Dripper Set', sub: 'Dripper + glass server',
    specs: ['60° cone', '600 ml server'], bg: ['#8a5a3a', '#2a1a11'],
    art: { type: 'dripper' },
    variants: [{ label: 'Cream', price: 22, art: { color: '#f4ead9' }, shopify: '' }, { label: 'Clay', price: 22, art: { color: '#b07a4f' }, shopify: '' }],
    ar: { name: 'طقم قمع تقطير سيراميك', sub: 'قمع + إبريق زجاجي', specs: ['مخروط 60°', 'إبريق 600 مل'], variants: ['كريمي', 'طيني'] } },
  { id: 'batch', cat: 'brewing', name: 'Batch Brewer', sub: 'Filter coffee at volume',
    specs: ['1.9 L in 6 min', 'Programmable'], bg: ['#6b4430', '#24160e'],
    art: { type: 'brewer' },
    variants: [{ label: 'Single', price: 690, shopify: '' }, { label: 'Twin', price: 1150, shopify: '' }],
    ar: { name: 'مخمّر الدفعات', sub: 'قهوة فلتر بكميات كبيرة', specs: ['1.9 لتر في 6 دقائق', 'قابل للبرمجة'], variants: ['فردي', 'مزدوج'] } },
];

const BUNDLES = {
  kiosk: { name: 'Kiosk Starter package', nameAr: 'باقة الكشك', price: 3150, shopify: '', art: { type: 'machine', groups: 1 } },
  cafe: { name: 'Café Pro package', nameAr: 'باقة المقهى برو', price: 8400, shopify: '', art: { type: 'machine', groups: 2 } },
  flagship: { name: 'Flagship package', nameAr: 'الباقة الرئيسية', price: 12900, shopify: '', art: { type: 'machine', groups: 3 } },
};

/* ---------- Arabic translations (English is read from the page itself) ---------- */
const AR = {
  'nav.cats': 'الفئات', 'nav.shop': 'المتجر', 'nav.cafes': 'للمقاهي', 'nav.service': 'الخدمة', 'nav.contact': 'تواصل معنا',

  'hero.eyebrow': 'معدات قهوة احترافية · عمّان',
  'hero.l1': 'معدات احترافية', 'hero.l2': 'لصنّاع القهوة', 'hero.l3': 'خلف <em>البار.</em>',
  'hero.sub': 'مكائن إسبريسو ومطاحن وأدوات باريستا مختارة للمقاهي المزدحمة. نوصلها ونركّبها ونضبطها عبر فنيّينا — ثم نخدمها طالما أنت تحضّر القهوة.',
  'hero.cta1': 'تسوّق المعدات', 'hero.cta2': 'باقات المقاهي',
  'hero.m1': 'مقهى مجهّز', 'hero.m2': 'ماكينة مركّبة', 'hero.m3': 'استجابة الصيانة',

  mq1: 'مكائن إسبريسو', mq2: 'مطاحن فورية', mq3: 'أباريق حليب', mq4: 'مكابس دقيقة',
  mq5: 'موازين باريستا', mq6: 'أدوات التقطير', mq7: 'مخمّرات دفعات', mq8: 'صناديق التفريغ',

  'cat.eyebrow': 'تسوّق حسب الفئة', 'cat.title': 'كل ما يحتاجه <em>البار</em> الخاص بك',
  'cat.sub': 'من الماكينة في قلب الكاونتر إلى المكبس في يد الباريستا.',
  'cat.machines': 'مكائن الإسبريسو', 'cat.machines.d': 'من مجموعة إلى ثلاث، غلاية مزدوجة وذراع',
  'cat.grinders': 'المطاحن', 'cat.grinders.d': 'فورية، جرعة واحدة، وبالجملة',
  'cat.milk': 'الحليب وفن اللاتيه', 'cat.milk.d': 'أباريق لكل أحجام المشروبات',
  'cat.tools': 'أدوات الباريستا', 'cat.tools.d': 'مكابس، موازين، صناديق تفريغ',
  'cat.brewing': 'أدوات التحضير', 'cat.brewing.d': 'غلايات، أقماع تقطير، مخمّرات',
  'cat.pkg': 'باقات المقاهي الكاملة', 'cat.pkg.d': 'بار متكامل مع التركيب', 'cat.pkg.c': '3 باقات ←',

  'shop.eyebrow': 'صالة العرض', 'shop.title': 'معدات <em>نثق بها</em>',
  'shop.sub': 'كل ماكينة تشمل التوصيل والتركيب وكفالة قطع وصيانة لمدة سنتين في الأردن.',
  'f.all': 'الكل', 'f.machines': 'المكائن', 'f.grinders': 'المطاحن', 'f.milk': 'الحليب', 'f.tools': 'الأدوات', 'f.brewing': 'التحضير',

  'pkg.eyebrow': 'لأصحاب المقاهي', 'pkg.title': 'باقات بار متكاملة، <em>جاهزة للتحضير</em>',
  'pkg.sub': 'فاتورة واحدة، يوم تركيب واحد، وفريق واحد تتواصل معه.',
  'pkg.tag': 'الأكثر طلباً', 'pkg.add': 'أضف الباقة', cur: 'د.أ',
  'pkg.k.name': 'باقة الكشك', 'pkg.k.desc': 'حتى 120 كوب يومياً',
  'pkg.k.1': 'ماكينة سوق كومباكت بمجموعة واحدة', 'pkg.k.2': 'مطحنة سهم بجرعة واحدة', 'pkg.k.3': 'مكبس وأباريق وميزان', 'pkg.k.4': 'نصف يوم تدريب باريستا',
  'pkg.c.name': 'المقهى برو', 'pkg.c.desc': '120 – 350 كوب يومياً',
  'pkg.c.1': 'ماكينة قهوة برو بمجموعتين وغلاية مزدوجة', 'pkg.c.2': 'مطحنتا طاحون E65 فوريتان', 'pkg.c.3': 'طقم أدوات باريستا كامل', 'pkg.c.4': 'تركيب نظام فلترة المياه', 'pkg.c.5': 'يومان تدريب في الموقع',
  'pkg.f.name': 'الباقة الرئيسية', 'pkg.f.desc': 'أكثر من 350 كوب يومياً',
  'pkg.f.1': 'ماكينة قهوة برو بثلاث مجموعات', 'pkg.f.2': '3 مطاحن منها مطحنة جملة للفلتر', 'pkg.f.3': 'مخمّر دفعات ومحطة تقطير', 'pkg.f.4': 'صيانة بأولوية خلال 4 ساعات', 'pkg.f.5': 'صيانة وقائية كل ثلاثة أشهر',

  'svc.eyebrow': 'ما بعد الشراء', 'svc.title': 'من كاونتر فارغ إلى <em>أول شوت</em>',
  'svc.1': 'الاستشارة والتصميم', 'svc.1.d': 'نزور موقعك، نفحص المياه والكهرباء، ونخطط سير العمل في البار.',
  'svc.2': 'التركيب', 'svc.2.d': 'السباكة والفلترة والكهرباء بواسطة فنيين معتمدين خلال يوم واحد.',
  'svc.3': 'الضبط والتدريب', 'svc.3.d': 'نضبط المطاحن والضغط، ثم ندرّب فريق الباريستا على المعدات.',
  'svc.4': 'خدمة مدى الحياة', 'svc.4.d': 'استجابة خلال 24 ساعة، ماكينة بديلة أثناء الإصلاح، وصيانة دورية.',

  'tst.eyebrow': 'موثوقون خلف البار', 'tst.title': 'ماذا يقول <em>أصحاب المقاهي</em>',
  'tst.1': '«خططوا البار بالكامل حسب سير العمل — تم تركيب الماكينة والمطحنتين وخط المياه وضبطها قبل افتتاحنا في صباح اليوم التالي.»',
  'tst.1.by': '<strong>ليلى ح.</strong> — صاحبة مقهى في جبل عمّان',
  'tst.2': '«تعطّلت عصا البخار يوم جمعة في وقت الذروة. وصل فنيّ خلال ساعات ومعه ماكينة بديلة. هذه هي الخدمة التي تدفع مقابلها.»',
  'tst.2.by': '<strong>عمر ك.</strong> — رئيس الباريستا',
  'tst.3': '«طلبنا باقة المقهى برو لفرعنا الثاني: توصيل واحد، يوم تركيب واحد، وفاتورة واحدة — وبدأنا التقديم بعد الظهر.»',
  'tst.3.by': '<strong>سامي أ.</strong> — مدير العمليات، مقهى بثلاثة فروع',

  'ct.eyebrow': 'زوروا صالة العرض', 'ct.title': 'احجز <em>عرضاً حياً</em> أو اطلب عرض سعر',
  'ct.sub': 'جرّب تحضير الشوتات على مكائننا قبل الشراء. أخبرنا عن مقهاك وسنجهّز لك عرض سعر مخصصاً يشمل التركيب والتدريب.',
  'ct.addr': '📍 شارع الرينبو، عمّان، الأردن',
  'ct.name': 'اسمك', 'ct.shop': 'اسم المقهى / النشاط', 'ct.email': 'البريد الإلكتروني',
  'ct.opt0': 'أنا مهتم بـ…', 'ct.opt1': 'عرض حي في صالة العرض', 'ct.opt2': 'عرض سعر لمقهى جديد', 'ct.opt3': 'تطوير معداتي الحالية', 'ct.opt4': 'الخدمة والصيانة',
  'ct.msg': 'المساحة، عدد الأكواب، المعدات الحالية…', 'ct.send': 'أرسل الطلب',

  'ft.tag': 'معدات احترافية لصنّاع القهوة خلف البار.', 'ft.shop': 'المتجر', 'ft.support': 'الدعم',
  'ft.install': 'التركيب', 'ft.maint': 'الصيانة', 'ft.demo': 'عرض في صالة العرض',
  'ft.news': 'النشرة البريدية', 'ft.news.d': 'وصول جديد، أيام تدريب، وعروض.',
  'ft.copy': '© 2026 رشفة · Rashfeh · جميع الحقوق محفوظة.',

  'cart.title': 'طلبك', 'cart.sub': 'المجموع الفرعي', 'cart.ship': 'التوصيل', 'cart.checkout': 'إتمام الشراء', 'cart.secure': '🔒 دفع آمن',
};

// strings built in JavaScript
const STR = {
  en: {
    title: 'Rashfeh | رشفة — Coffee Machines & Barista Equipment',
    cur: 'JD', added: (n, v) => `☕ ${n} (${v}) added`, empty: 'Your cart is empty.<br>Time to upgrade your bar?',
    emptyToast: 'Your cart is empty', free: 'Free + installation', unlocked: '🎉 Free delivery unlocked — machines include installation.',
    addMore: amt => `Add ${amt} more for free delivery.`, remove: 'Remove', count: n => `${n} products →`,
    installed: 'Installed', soon: 'Online payment is being connected — coming very soon.',
    redirect: 'Taking you to secure checkout…', thanks: n => `Thanks ${n}! Our equipment team will contact you within 24 hours ☕`,
    subscribed: 'Subscribed — see you at the next training day!', arrow: '→',
  },
  ar: {
    title: 'رشفة | Rashfeh — مكائن القهوة ومعدات الباريستا',
    cur: 'د.أ', added: (n, v) => `☕ تمت إضافة ${n} (${v})`, empty: 'سلتك فارغة.<br>حان وقت تطوير البار؟',
    emptyToast: 'سلتك فارغة', free: 'مجاني + تركيب', unlocked: '🎉 حصلت على توصيل مجاني — المكائن تشمل التركيب.',
    addMore: amt => `أضف ${amt} للحصول على توصيل مجاني.`, remove: 'إزالة', count: n => `${n} منتجات ←`,
    installed: 'مع التركيب', soon: 'جاري ربط الدفع الإلكتروني — قريباً جداً.',
    redirect: 'جاري تحويلك إلى صفحة الدفع الآمنة…', thanks: n => `شكراً ${n}! سيتواصل معك فريق المعدات خلال 24 ساعة ☕`,
    subscribed: 'تم الاشتراك — نراك في يوم التدريب القادم!', arrow: '←',
  },
};

/* ---------- Language ---------- */
let lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
const S = k => STR[lang][k];
const EN = {};
$$('[data-i18n]').forEach(el => { EN[el.dataset.i18n] ??= el.innerHTML; });

function setLang(l, first = false) {
  lang = l;
  const html = document.documentElement;
  // the cart drawer changes sides with direction; don't let it slide across the page
  html.classList.add('switching');
  requestAnimationFrame(() => requestAnimationFrame(() => html.classList.remove('switching')));
  html.lang = l;
  html.dir = l === 'ar' ? 'rtl' : 'ltr';
  try { localStorage.setItem('rashfeh-lang', l); } catch {}

  $$('[data-i18n]').forEach(el => {
    const v = (l === 'ar' ? AR : EN)[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  document.title = S('title');
  $('.newsletter .arrow').textContent = S('arrow');
  $$('[data-count].counted').forEach(el => { el.textContent = counterText(el, +el.dataset.count); });

  renderCatCounts();
  renderProducts();
  renderCart();
  goTo(current);
  if (!first) {
    document.body.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 450, easing: 'ease-out' });
  }
}

$('#langBtn').addEventListener('click', () => setLang(lang === 'ar' ? 'en' : 'ar'));

/* ---------- Helpers ---------- */
const fmt = n => `${n.toLocaleString('en-US', { maximumFractionDigits: 2 })} ${S('cur')}`;
const byId = id => PRODUCTS.find(p => p.id === id);
const artFor = (p, v) => ({ ...p.art, ...(p.variants[v].art || {}) });
const pName = p => lang === 'ar' ? p.ar.name : p.name;
const pSub = p => lang === 'ar' ? p.ar.sub : p.sub;
const pBadge = p => lang === 'ar' ? p.ar.badge : p.badge;
const pSpecs = p => lang === 'ar' ? p.ar.specs : p.specs;
const vLabel = (p, v) => lang === 'ar' ? p.ar.variants[v] : p.variants[v].label;

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ---------- Preloader ---------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    $('#preloader').classList.add('done');
    document.body.classList.add('loaded');
  }, reduceMotion ? 0 : 1500);
});

/* ---------- Header ---------- */
const header = $('#header');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  updateTimeline();
  highlightNav();
};
window.addEventListener('scroll', onScroll, { passive: true });

const burger = $('#burger');
const nav = $('#nav');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  document.body.classList.toggle('lock', nav.classList.contains('open'));
});
$$('.nav a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  nav.classList.remove('open');
  document.body.classList.remove('lock');
}));

function highlightNav() {
  const y = window.scrollY + window.innerHeight / 3;
  $$('.nav a').forEach(a => {
    const sec = $(a.getAttribute('href'));
    if (!sec) return;
    a.classList.toggle('active', y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight);
  });
}

/* ---------- Hero floating beans + parallax ---------- */
const beansWrap = $('#heroBeans');
const beans = [];
for (let i = 0; i < 16; i++) {
  const b = document.createElement('span');
  b.className = 'bean';
  const depth = Math.random();
  b.style.cssText = `
    left:${Math.random() * 100}%; top:${Math.random() * 100}%;
    --s:${12 + depth * 24}px; --o:${0.2 + depth * 0.55};
    --r:${Math.random() * 360}deg; --d:${5 + Math.random() * 6}s;
    animation-delay:-${Math.random() * 8}s;`;
  b.dataset.depth = depth;
  beansWrap.appendChild(b);
  beans.push(b);
}
if (!reduceMotion) {
  $('.hero').addEventListener('mousemove', e => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    beans.forEach(b => {
      const d = b.dataset.depth * 50;
      b.style.translate = `${-x * d}px ${-y * d}px`;
    });
    $('.hero-visual').style.translate = `${x * 20}px ${y * 20}px`;
  });
}

/* ---------- Counters ---------- */
const counterText = (el, n) => n.toLocaleString('en-US') + (lang === 'ar' ? el.dataset.suffixAr : el.dataset.suffix);

function countUp(el) {
  const target = +el.dataset.count;
  const start = performance.now();
  const dur = 1800;
  el.classList.add('counted');
  const tick = now => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = counterText(el, Math.round(target * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    $$('[data-count]', entry.target).forEach(countUp);
    io.unobserve(entry.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

function observeReveals() {
  $$('.cat-grid, .plans, .timeline').forEach(grid => {
    $$('.reveal', grid).forEach((el, i) => el.style.setProperty('--delay', `${i * 0.1}s`));
  });
  $$('.reveal').forEach(el => io.observe(el));
}

/* ---------- Categories ---------- */
function renderCatCounts() {
  $$('[data-cat-count]').forEach(el => {
    el.textContent = S('count')(PRODUCTS.filter(p => p.cat === el.dataset.catCount).length);
  });
}
$$('.cat[data-goto]').forEach(btn => btn.addEventListener('click', () => {
  applyFilter(btn.dataset.goto);
  $('#shop').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
}));

/* ---------- Products ---------- */
const grid = $('#productGrid');
let currentFilter = 'all';

function renderProducts() {
  // keep each card's chosen variant across language switches
  const chosen = {};
  $$('.product', grid).forEach(c => { chosen[c.dataset.id] = activeVariant(c); });
  const revealed = new Set($$('.product.in', grid).map(c => c.dataset.id));

  grid.innerHTML = PRODUCTS.map(p => {
    const v = chosen[p.id] || 0;
    const hidden = currentFilter !== 'all' && p.cat !== currentFilter;
    return `
    <article class="product ${revealed.has(p.id) ? 'in' : ''} ${hidden ? 'hide' : ''}" data-id="${p.id}" data-cat="${p.cat}">
      <div class="product-media" style="--bg1:${p.bg[0]};--bg2:${p.bg[1]}">
        ${p.badge ? `<span class="product-badge">${pBadge(p)}</span>` : ''}
        <span class="product-cat">${CATS[lang][p.cat]}</span>
        ${artSVG(artFor(p, v))}
      </div>
      <div class="product-body">
        <span class="product-sub">${pSub(p)}</span>
        <h3>${pName(p)}</h3>
        <div class="specs">${pSpecs(p).map(s => `<span>${s}</span>`).join('')}</div>
        ${p.variants.length > 1 ? `<div class="variants">
          ${p.variants.map((_, i) => `<button class="variant ${i === v ? 'active' : ''}" data-v="${i}">${vLabel(p, i)}</button>`).join('')}
        </div>` : ''}
        <div class="product-foot">
          <span class="product-price">${fmt(p.variants[v].price)}</span>
          <button class="add-btn" aria-label="Add ${p.name} to cart">+</button>
        </div>
      </div>
    </article>`;
  }).join('');

  $$('.product', grid).forEach(card => {
    attachTilt(card);
    if (!card.classList.contains('in')) io.observe(card);
  });
}

const activeVariant = card => { const b = $('.variant.active', card); return b ? +b.dataset.v : 0; };

grid.addEventListener('click', e => {
  const card = e.target.closest('.product');
  if (!card) return;
  const p = byId(card.dataset.id);

  const vBtn = e.target.closest('.variant');
  if (vBtn) {
    const v = +vBtn.dataset.v;
    $$('.variant', card).forEach(b => b.classList.toggle('active', b === vBtn));
    const priceEl = $('.product-price', card);
    priceEl.textContent = fmt(p.variants[v].price);
    priceEl.animate([{ transform: 'translateY(-8px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 400, easing: 'ease-out' });
    const media = $('.product-media', card);
    $('.art', media).outerHTML = artSVG(artFor(p, v));
    $('.art', media).animate([{ transform: 'scale(.85) rotate(-4deg)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 500, easing: 'cubic-bezier(.22,1,.36,1)' });
    return;
  }

  const addBtn = e.target.closest('.add-btn');
  if (addBtn) {
    const v = activeVariant(card);
    addToCart({ key: `${p.id}-${v}`, kind: 'product', id: p.id, v });
    toast(S('added')(pName(p), vLabel(p, v)));
    flyToCart(addBtn);
  }
});

function attachTilt(card) {
  if (reduceMotion || window.matchMedia('(hover: none)').matches) return;
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
}

/* Filters */
function applyFilter(f) {
  currentFilter = f;
  $$('.filter').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
  let shown = 0;
  $$('.product', grid).forEach(card => {
    const show = f === 'all' || card.dataset.cat === f;
    card.classList.toggle('hide', !show);
    card.classList.remove('pop');
    if (show) {
      void card.offsetWidth;
      card.style.animationDelay = `${shown++ * 0.05}s`;
      card.classList.add('pop', 'in');
    }
  });
}
$$('.filter').forEach(btn => btn.addEventListener('click', () => applyFilter(btn.dataset.filter)));

/* ---------- Cart ---------- */
const CART_KEY = 'rashfeh-cart-v2';
let cart = [];
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { cart = []; }
const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {} };
const FREE_SHIP = 150;

// resolve a cart line to its current-language display data
function lineInfo(c) {
  if (c.kind === 'bundle') {
    const b = BUNDLES[c.id];
    return { name: lang === 'ar' ? b.nameAr : b.name, variant: S('installed'), price: b.price, art: b.art, shopify: b.shopify };
  }
  const p = byId(c.id);
  return { name: pName(p), variant: vLabel(p, c.v), price: p.variants[c.v].price, art: artFor(p, c.v), shopify: p.variants[c.v].shopify };
}

function addToCart(item) {
  const existing = cart.find(c => c.key === item.key);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  saveCart();
  renderCart();
  const btn = $('#cartBtn');
  btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump');
}

function renderCart() {
  cart = cart.filter(c => (c.kind === 'bundle' ? BUNDLES[c.id] : byId(c.id)));
  const wrap = $('#cartItems');
  let subtotal = 0, count = 0;

  if (!cart.length) {
    wrap.innerHTML = `<div class="cart-empty"><span class="ar">رشفة</span>${S('empty')}</div>`;
  } else {
    wrap.innerHTML = cart.map(c => {
      const info = lineInfo(c);
      const line = info.price * c.qty;
      subtotal += line; count += c.qty;
      return `
        <div class="cart-item" data-key="${c.key}">
          <div class="thumb">${artSVG(info.art, 'mini')}</div>
          <div>
            <h4>${info.name}</h4>
            <small>${info.variant}</small>
            <div class="qty"><button data-act="dec" aria-label="Decrease">−</button><span>${c.qty}</span><button data-act="inc" aria-label="Increase">+</button></div>
          </div>
          <div><div class="line-price">${fmt(line)}</div><button class="remove" data-act="rm">${S('remove')}</button></div>
        </div>`;
    }).join('');
  }

  $('#cartCount').textContent = count;
  $('#cartSubtotal').textContent = fmt(subtotal);
  const free = subtotal >= FREE_SHIP;
  $('#cartShipping').textContent = !cart.length ? '—' : free ? S('free') : fmt(5);
  $('#freeShipBar').style.width = `${Math.min(subtotal / FREE_SHIP * 100, 100)}%`;
  $('#freeShipText').textContent = free ? S('unlocked') : S('addMore')(fmt(FREE_SHIP - subtotal));
}

$('#cartItems').addEventListener('click', e => {
  const act = e.target.dataset.act;
  if (!act) return;
  const key = e.target.closest('.cart-item').dataset.key;
  const item = cart.find(c => c.key === key);
  if (act === 'inc') item.qty++;
  if (act === 'dec') item.qty--;
  if (act === 'rm' || item.qty < 1) cart = cart.filter(c => c.key !== key);
  saveCart();
  renderCart();
});

const openCart = () => { $('#cart').classList.add('open'); $('#overlay').classList.add('show'); document.body.classList.add('lock'); };
const closeCart = () => { $('#cart').classList.remove('open'); $('#overlay').classList.remove('show'); document.body.classList.remove('lock'); };
$('#cartBtn').addEventListener('click', openCart);
$('#cartClose').addEventListener('click', closeCart);
$('#overlay').addEventListener('click', closeCart);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

/* Checkout → Shopify (see SHOPIFY config at the top of this file) */
$('#checkoutBtn').addEventListener('click', () => {
  if (!cart.length) return toast(S('emptyToast'));
  const lines = cart.map(c => ({ id: lineInfo(c).shopify, qty: c.qty }));
  if (!SHOPIFY.domain || lines.some(l => !l.id)) return toast(S('soon'));
  toast(S('redirect'));
  const permalink = lines.map(l => `${l.id}:${l.qty}`).join(',');
  window.location.href = `https://${SHOPIFY.domain}/cart/${permalink}`;
});

function flyToCart(from) {
  if (reduceMotion) return;
  const a = from.getBoundingClientRect();
  const b = $('#cartBtn').getBoundingClientRect();
  const bean = document.createElement('span');
  bean.className = 'fly-bean';
  bean.style.left = `${a.left + a.width / 2 - 9}px`;
  bean.style.top = `${a.top + a.height / 2 - 12}px`;
  document.body.appendChild(bean);
  requestAnimationFrame(() => {
    bean.style.transform = `translate(${b.left - a.left}px, ${b.top - a.top}px) rotate(540deg) scale(.5)`;
    bean.style.opacity = '.3';
  });
  setTimeout(() => bean.remove(), 850);
}

/* ---------- Café packages ---------- */
$$('.add-bundle').forEach(btn => btn.addEventListener('click', () => {
  const id = btn.closest('.plan').dataset.bundle;
  addToCart({ key: `bundle-${id}`, kind: 'bundle', id });
  toast(S('added')(lang === 'ar' ? BUNDLES[id].nameAr : BUNDLES[id].name, S('installed')));
  flyToCart(btn);
}));

/* ---------- Service timeline progress ---------- */
function updateTimeline() {
  const tl = $('.timeline');
  if (!tl) return;
  const r = tl.getBoundingClientRect();
  const p = (window.innerHeight * 0.8 - r.top) / (r.height + window.innerHeight * 0.3);
  $('#timelineProgress').style.width = `${Math.max(0, Math.min(p, 1)) * 100}%`;
}

/* ---------- Testimonials slider ---------- */
const slides = $('#slides');
const slideCount = slides.children.length;
const dots = $('#sliderDots');
let current = 0, slideTimer;
for (let i = 0; i < slideCount; i++) {
  const d = document.createElement('button');
  d.setAttribute('aria-label', `Show testimonial ${i + 1}`);
  d.addEventListener('click', () => goTo(i, true));
  dots.appendChild(d);
}
function goTo(i, user) {
  current = (i + slideCount) % slideCount;
  const dir = lang === 'ar' ? 1 : -1; // slides run right-to-left in Arabic
  slides.style.transform = `translateX(${dir * current * 100}%)`;
  $$('button', dots).forEach((d, j) => d.classList.toggle('active', j === current));
  if (user) restartSlides();
}
function restartSlides() { clearInterval(slideTimer); slideTimer = setInterval(() => goTo(current + 1), 5500); }

/* ---------- Forms ---------- */
$('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#f-name').value.trim().split(' ')[0];
  $('#formNote').textContent = S('thanks')(name);
  e.target.reset();
});
$('#newsletter').addEventListener('submit', e => {
  e.preventDefault();
  toast(S('subscribed'));
  e.target.reset();
});

/* ---------- Init ---------- */
setLang(lang, true);
restartSlides();
observeReveals();
onScroll();
