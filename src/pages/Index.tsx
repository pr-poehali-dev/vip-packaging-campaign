import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

type ArtIcon = "Phone" | "Mail" | "MapPin" | "Clock" | "MessageCircle" | "ChevronDown" | "ChevronLeft" | "ChevronRight" | "Menu" | "X" | "Plus" | "Minus" | "Search" | "User" | "Layers" | "Fingerprint" | "Package" | "Truck" | "Award" | "CheckCircle" | "Star";

const IMG_HERO    = "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/3a4bf924-9453-4b60-86c0-a6d21e410f25.jpg";
const IMG_CATALOG = "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/e2fd5be6-8a23-470d-9c07-43f7b62bdc1c.jpg";
const IMG_OPEN    = "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/a65bbf27-23e4-47af-830c-882229b1d650.jpg";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, vis };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, vis } = useInView();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} ${className}`}
    >
      {children}
    </div>
  );
}

const promos = [
  { badge: "ХИТ СЕЗОНА", title: "Бархатные коробки с тиснением", desc: "Именное тиснение золотой фольгой + шёлковый наполнитель. Минимальный заказ 50 шт.", tag: "–20% при заказе от 100 шт." },
  { badge: "НОВИНКА", title: "Magnetic Box Exclusive", desc: "Магнитные крышки, матовое покрытие soft-touch, тиснение серебром. Люкс-сегмент.", tag: "Доставка за 14 дней" },
  { badge: "ДЛЯ БРЕНДОВ", title: "Корпоративные наборы", desc: "Полный брендинг: лого, фирменные цвета, брендбук на упаковке. От 200 комплектов.", tag: "Брендинг в подарок" },
  { badge: "БЛОГЕРАМ", title: "Unboxing-упаковка", desc: "Создаём wow-эффект при распаковке. Идеально для коллабораций и запусков.", tag: "Пробная партия от 10 шт." },
];

const catalog = [
  { name: "Velvet Black Box",    cat: "Премиум",          desc: "Бархатное покрытие, золотое тиснение, магнитная крышка",           price: "от 890 ₽/шт",   tag: "Бестселлер", img: IMG_HERO },
  { name: "Crystal White",       cat: "Свадьбы / Events", desc: "Белая перламутровая бумага, серебряная лента, атласный наполнитель", price: "от 650 ₽/шт",   tag: "Новинка",    img: IMG_CATALOG },
  { name: "Obsidian Corporate",  cat: "Корпоративный",    desc: "Матовый чёрный картон, тиснение логотипа, встроенная ложемент",      price: "от 1 200 ₽/шт", tag: "Топ B2B",    img: IMG_OPEN },
  { name: "Rose Gold Edition",   cat: "Блогеры",          desc: "Розово-золотой металлик, wow-крышка, идеально для unboxing",         price: "от 780 ₽/шт",   tag: null,         img: IMG_HERO },
  { name: "Midnight Navy",       cat: "Запуск продукции", desc: "Глубокий синий с золотым тиснением, luxury-ощущение",               price: "от 950 ₽/шт",   tag: null,         img: IMG_CATALOG },
  { name: "Emerald Prestige",    cat: "VIP подарки",      desc: "Изумрудный бархат, серебряные акценты, ручная отделка",             price: "от 1 800 ₽/шт", tag: "Эксклюзив",  img: IMG_OPEN },
];

const services = [
  { icon: "Layers",       title: "Дизайн под ключ",       desc: "Разрабатываем уникальный дизайн с нуля: от брифа до финального макета." },
  { icon: "Fingerprint",  title: "Именное тиснение",      desc: "Горячее тиснение золотой и серебряной фольгой, UV-лак, дебоссинг." },
  { icon: "Package",      title: "Полный комплект",       desc: "Коробка + наполнитель + лента + открытка + фирменная бумага." },
  { icon: "Truck",        title: "Срочное производство",  desc: "Экспресс-изготовление от 7 дней. Доставка по всей России и СНГ." },
  { icon: "Award",        title: "Контроль качества",     desc: "Каждая партия проходит 3-этапный контроль. Фотоотчёт до отгрузки." },
  { icon: "MessageCircle", title: "Персональный менеджер", desc: "Ведёт заказ от брифа до доставки. Ответ в течение 1 часа." },
];

const portfolio = [
  { brand: "MIXIT",           cat: "Бьюти-бренд",              result: "+340% engagement при unboxing",    desc: "Лимитированная новогодняя серия коробок. 50 000 единиц за 21 день.",           metric: "50 000", label: "Коробок" },
  { brand: "Сбербанк Премиум", cat: "Корпоративный сегмент",   result: "NPS +28 пунктов среди VIP-клиентов", desc: "Эксклюзивные подарочные наборы. Тиснение золотом, бархат, именные открытки.", metric: "12 000", label: "Комплектов" },
  { brand: "Nastya / LIKE",   cat: "Блогер 80M+ подписчиков",  result: "15M+ просмотров unboxing видео",   desc: "Wow-упаковка для коллаборации. Магнитная крышка, конфетти, золотые инициалы.", metric: "15M+",   label: "Просмотров" },
  { brand: "STONE ISLAND RU", cat: "Fashion-ритейл",           result: "Рост повторных покупок на 22%",    desc: "Сезонная упаковка для сертификатов и лимитированных дропов.",                metric: "22%",    label: "Рост продаж" },
];

const reviews = [
  { name: "Анастасия Р.", role: "Директор по маркетингу, бьюти-бренд",  text: "Работаем уже 3 года. Качество стабильно высокое, сроки соблюдают всегда. Наши клиенты в восторге — упаковка стала отдельной точкой контакта с брендом." },
  { name: "Михаил К.",    role: "CEO, корпоративные подарки",            text: "Заказывали 8000 наборов для партнёров на Новый год. Результат превзошёл ожидания. Партнёры присылали фото и благодарили отдельно." },
  { name: "Valeria M.",   role: "Блогер, 2.4M подписчиков",             text: "Упаковка для мерча получилась просто огонь. Подписчики сошли с ума от unboxing. Уже планирую третий заказ." },
  { name: "Дмитрий Ш.",   role: "Основатель fashion-бренда",            text: "Наконец нашли партнёра, который понимает слово «люкс». Никаких компромиссов, чёткие сроки, проактивная коммуникация." },
];

const galleryImgs = [IMG_HERO, IMG_CATALOG, IMG_OPEN, IMG_HERO, IMG_CATALOG, IMG_OPEN];
const galleryLabels = ["Velvet Collection", "Silver Edition", "Corporate Suite", "Unboxing Series", "Wedding Luxury", "Limited Drop"];

const steps = [
  { num: "01", title: "Бриф",         desc: "Обсуждаем цели, тираж, сроки и бюджет." },
  { num: "02", title: "Концепция",    desc: "2–3 варианта дизайна за 48 часов." },
  { num: "03", title: "Утверждение",  desc: "Согласуем макет. Физический образец по запросу." },
  { num: "04", title: "Производство", desc: "Запускаем тираж с фотоотчётом." },
  { num: "05", title: "Доставка",     desc: "Отгружаем по России и СНГ. Страхование включено." },
];

const faqs = [
  { q: "Какой минимальный тираж?",                        a: "От 50 шт для стандартных моделей, от 100 шт для эксклюзива. Пробные образцы — от 10 штук." },
  { q: "Сколько стоит разработка дизайна?",               a: "Включена в стоимость при заказе от 200 шт. При меньших тиражах — от 5 000 ₽." },
  { q: "Какие сроки производства?",                       a: "Стандарт: 14–21 рабочий день. Экспресс: от 7 дней (наценка 30%). Образец: 5 дней." },
  { q: "Можно ли сделать под мой фирменный стиль?",       a: "Да — работаем с брендбуком, Pantone, корпоративными шрифтами." },
  { q: "Есть ли доставка в регионы и СНГ?",               a: "Доставляем по всей России, Казахстану, Беларуси. СДЭК, Деловые линии, своя логистика." },
  { q: "Как происходит оплата?",                          a: "50% предоплата при старте, 50% перед отгрузкой. Работаем по договору." },
];

const navLinks = ["Новинки", "Каталог", "Услуги", "Прайс", "Отзывы", "О компании", "Контакты"];

export default function Index() {
  const [heroSlide, setHeroSlide]   = useState(0);
  const [activeFaq, setActiveFaq]   = useState<number | null>(null);
  const [menuOpen, setMenuOpen]     = useState(false);

  const heroSlides = [
    { title: "Премиальные коробки на заказ для брендов и бизнеса", sub: "Упаковка, которую запоминают", img: IMG_HERO },
    { title: "Производство подарочной упаковки в Москве",          sub: "От идеи и 3D-визуализации до готового тиража", img: IMG_CATALOG },
    { title: "1000+ конструкций · 5000+ проектов · от 1 штуки",   sub: "Любой тираж, любая сложность", img: IMG_OPEN },
  ];

  useEffect(() => {
    const t = setInterval(() => setHeroSlide(s => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-ink font-body">

      {/* ── TOP BAR ── */}
      <div className="bg-ink text-white text-center py-2 text-[11px] font-semibold tracking-[0.2em] uppercase">
        Минимальная сумма заказа от 35 000 рублей
      </div>

      {/* ── HEADER ── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="font-display text-2xl font-bold tracking-tight leading-none">
              ART‑<span className="italic font-normal">DiZo</span>
            </div>
            <div className="hidden lg:block text-[10px] text-gray-400 leading-tight max-w-[120px]">
              Производство подарочных<br/>коробок в Москве
            </div>
          </div>

          {/* Contacts */}
          <div className="hidden md:flex flex-col items-center gap-0.5">
            <a href="tel:+74951616873" className="font-display text-xl font-semibold hover:text-warm transition-colors">+7 (495) 161-68-73</a>
            <a href="mailto:online@art-dizo.ru" className="text-[11px] text-gray-400 hover:text-warm transition-colors">online@art-dizo.ru</a>
          </div>

          {/* Address */}
          <div className="hidden lg:flex flex-col gap-0.5 text-[11px] text-gray-500">
            <div className="flex items-center gap-1"><Icon name={"MapPin" as ArtIcon} size={11} className="shrink-0" /> г. Москва, ул. Шеногина 4, корп. 1</div>
            <div className="flex items-center gap-1"><Icon name={"Clock" as ArtIcon} size={11} className="shrink-0" /> Пн – Пт: с 9:00 до 18:00</div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-ink transition-colors">
              <Icon name={"Search" as ArtIcon} size={15} />
            </button>
            <button className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-ink transition-colors">
              <Icon name={"User" as ArtIcon} size={15} />
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(v => !v)}>
            <Icon name={(menuOpen ? "X" : "Menu") as ArtIcon} size={22} />
          </button>
        </div>

        {/* NAV BAR */}
        <nav className="bg-ink hidden md:block">
          <div className="max-w-7xl mx-auto px-6">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block px-5 py-3.5 text-white font-display font-medium text-[13px] tracking-[0.1em] uppercase hover:bg-white/10 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-ink">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-white font-display text-[13px] tracking-widest uppercase border-b border-white/10 hover:bg-white/10"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO SLIDER ── */}
      <section className="relative overflow-hidden" style={{ height: 480 }}>
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: heroSlide === i ? 1 : 0 }}
          >
            <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-transparent" />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="max-w-xl">
              <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight text-ink uppercase mb-4 anim-fade-up">
                {heroSlides[heroSlide].title}
              </h1>
              <p className="text-[13px] text-gray-600 mb-3 anim-fade-up d200">{heroSlides[heroSlide].sub}</p>
              <p className="text-[13px] text-gray-600 mb-3 anim-fade-up d300">От идеи и 3D-визуализации до готового тиража</p>
              <p className="text-[13px] text-gray-600 mb-8 anim-fade-up d400">1000+ конструкций · 5000+ проектов · от 1 штуки</p>
              <a href="#контакты" className="btn-primary anim-fade-up d500">Рассчитать проект</a>
            </div>
          </div>
        </div>
        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${heroSlide === i ? "bg-ink scale-110" : "bg-ink/30"}`}
            />
          ))}
        </div>
        {/* Arrows */}
        <button
          onClick={() => setHeroSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
        >
          <Icon name={"ChevronLeft" as ArtIcon} size={18} />
        </button>
        <button
          onClick={() => setHeroSlide(s => (s + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
        >
          <Icon name={"ChevronRight" as ArtIcon} size={18} />
        </button>
      </section>

      {/* ── PROMOS ── */}
      <section id="новинки" className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-center uppercase mb-2 tracking-wide">Акции и специальные предложения</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-10" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {promos.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-cream border border-gray-200 p-6 card-hover h-full flex flex-col">
                  <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-warm mb-3 block">{p.badge}</span>
                  <h3 className="font-display font-semibold text-lg uppercase leading-snug mb-2">{p.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed flex-1 mb-4">{p.desc}</p>
                  <div className="text-[11px] font-semibold text-ink border border-ink px-3 py-1.5 inline-block self-start">
                    {p.tag}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOG ── */}
      <section id="каталог" className="py-16 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">Производство подарочных коробок в Москве</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalog.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="bg-white border border-gray-200 card-hover group overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.tag && (
                      <div className="absolute top-3 left-3 bg-ink text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1">
                        {item.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] text-warm font-semibold tracking-wider uppercase mb-1">{item.cat}</div>
                    <h3 className="font-display font-semibold text-xl uppercase mb-2">{item.name}</h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xl">{item.price}</span>
                      <button className="btn-outline text-[10px] px-4 py-2">Подробнее</button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center mt-10">
              <button className="btn-primary px-12">Смотреть весь каталог</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="услуги" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">Наши услуги</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="flex gap-4 p-6 bg-[#F9F7F4] border border-gray-200 card-hover">
                  <div className="w-12 h-12 bg-ink flex items-center justify-center shrink-0">
                    <Icon name={s.icon as ArtIcon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base uppercase mb-1.5">{s.title}</h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="портфолио" className="py-16 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2 text-white">Кейсы с реальными результатами</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {portfolio.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border border-white/15 bg-white/5 p-8 hover:bg-white/10 transition-colors card-hover">
                  <div className="flex items-start gap-6 mb-4">
                    <div className="shrink-0">
                      <div className="font-display text-4xl font-bold text-warm leading-none">{p.metric}</div>
                      <div className="text-[9px] text-white/50 tracking-widest uppercase mt-1">{p.label}</div>
                    </div>
                    <div className="w-px bg-white/15 self-stretch shrink-0" />
                    <div>
                      <div className="text-[9px] text-white/40 tracking-widest uppercase mb-1">{p.cat}</div>
                      <div className="font-display text-xl font-semibold uppercase mb-1">{p.brand}</div>
                      <div className="text-warm text-[11px] font-semibold">{p.result}</div>
                    </div>
                  </div>
                  <p className="text-[12px] text-white/60 leading-relaxed border-t border-white/10 pt-4">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="отзывы" className="py-16 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">Отзывы клиентов</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white border border-gray-200 p-7 card-hover">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-warm text-base">★</span>
                    ))}
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed mb-5 italic">«{r.text}»</p>
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <div className="w-10 h-10 bg-ink text-white font-display font-bold flex items-center justify-center text-sm shrink-0">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-[13px]">{r.name}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{r.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="галерея" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">Галерея работ</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImgs.map((img, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="relative aspect-square overflow-hidden group cursor-pointer">
                  <img
                    src={img}
                    alt={galleryLabels[i]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-400 flex items-end p-4">
                    <span className="text-white font-display font-semibold uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {galleryLabels[i]}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="процесс" className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">Как мы работаем</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((s, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="text-center relative">
                    <div className="w-20 h-20 mx-auto bg-ink text-white font-display font-bold text-2xl flex items-center justify-center mb-5 relative z-10">
                      {s.num}
                    </div>
                    <h3 className="font-display font-semibold text-base uppercase mb-2">{s.title}</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">Часто задаваемые вопросы</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="divide-y divide-gray-200 border border-gray-200">
            {faqs.map((f, i) => (
              <Reveal key={i}>
                <div>
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="font-display font-semibold text-base uppercase tracking-wide pr-6">{f.q}</span>
                    <Icon
                      name={(activeFaq === i ? "Minus" : "Plus") as ArtIcon}
                      size={16}
                      className={`shrink-0 transition-colors ${activeFaq === i ? "text-warm" : "text-gray-400"}`}
                    />
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-5 text-[13px] text-gray-500 leading-relaxed bg-[#F9F7F4]">
                      {f.a}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="контакты" className="py-16 bg-[#F9F7F4]">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">Рассчитать стоимость заказа</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <div className="bg-white border border-gray-200 p-8">
                <div className="grid grid-cols-1 gap-4 mb-4">
                  {[
                    { label: "Ваше имя",          ph: "Александр" },
                    { label: "Телефон / Telegram", ph: "+7 (___) ___-__-__" },
                    { label: "Компания / Бренд",   ph: "Название компании" },
                    { label: "Тираж (прим.)",       ph: "от 100 штук" },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-500 block mb-1.5">{f.label}</label>
                      <input
                        className="w-full border border-gray-200 bg-[#F9F7F4] px-4 py-3 text-[13px] text-ink placeholder-gray-300 focus:outline-none focus:border-ink transition-colors"
                        placeholder={f.ph}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-500 block mb-1.5">Задача / Детали</label>
                    <textarea
                      className="w-full border border-gray-200 bg-[#F9F7F4] px-4 py-3 text-[13px] text-ink placeholder-gray-300 focus:outline-none focus:border-ink transition-colors resize-none h-24"
                      placeholder="Опишите тип упаковки, сроки, пожелания..."
                    />
                  </div>
                </div>
                <button className="btn-primary w-full">Отправить заявку</button>
                <p className="text-center text-[10px] text-gray-400 mt-3 tracking-wide">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-lg uppercase mb-4">Контактная информация</h3>
                  {[
                    { icon: "Phone" as ArtIcon,          text: "+7 (495) 161-68-73",   sub: "Бесплатно по России" },
                    { icon: "Mail" as ArtIcon,           text: "online@art-dizo.ru",   sub: "Ответ за 1 час" },
                    { icon: "MessageCircle" as ArtIcon,  text: "@artdizo_official",    sub: "Telegram / WhatsApp" },
                    { icon: "MapPin" as ArtIcon,         text: "г. Москва, ул. Шеногина 4, корп. 1, стр. 1", sub: "" },
                    { icon: "Clock" as ArtIcon,          text: "Пн – Пт: 9:00 – 18:00", sub: "" },
                  ].map(c => (
                    <div key={c.text} className="flex items-start gap-3 py-3 border-b border-gray-200">
                      <div className="w-8 h-8 bg-ink flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name={c.icon} size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[13px] font-medium">{c.text}</div>
                        {c.sub && <div className="text-[11px] text-gray-400 mt-0.5">{c.sub}</div>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-ink text-white p-6">
                  <div className="font-display font-bold text-lg uppercase mb-2">Минимальный заказ</div>
                  <div className="text-3xl font-display font-bold text-warm mb-1">35 000 ₽</div>
                  <p className="text-[12px] text-white/60">Включает разработку дизайна при тираже от 200 шт.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-ink text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display text-xl font-bold tracking-tight mb-1">ART‑<span className="italic font-normal">DiZo</span></div>
              <div className="text-[11px] text-white/40">Производство подарочных коробок в Москве</div>
            </div>
            <div className="text-[11px] text-white/40 text-center">© 2024 ART-DiZo. Производство упаковки на заказ.</div>
            <div className="flex gap-5 text-[11px] text-white/40">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING CONTACTS ── */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-2">
        <a href="https://t.me/artdizo" className="w-12 h-12 bg-[#26A5E4] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
          <Icon name={"MessageCircle" as ArtIcon} size={20} />
        </a>
        <a href="tel:+74951616873" className="w-12 h-12 bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
          <Icon name={"Phone" as ArtIcon} size={20} />
        </a>
      </div>

    </div>
  );
}
