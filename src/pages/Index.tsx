import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

type LuxeIcon = "Layers" | "Fingerprint" | "Package" | "Truck" | "Award" | "MessageSquare" | "Phone" | "MessageCircle" | "Mail" | "ChevronDown" | "Menu" | "X" | "Plus" | "Minus";

const IMG_HERO = "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/3a4bf924-9453-4b60-86c0-a6d21e410f25.jpg";
const IMG_CATALOG = "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/e2fd5be6-8a23-470d-9c07-43f7b62bdc1c.jpg";
const IMG_OPEN = "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/a65bbf27-23e4-47af-830c-882229b1d650.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

const promos = [
  {
    badge: "ХИТ СЕЗОНА",
    title: "Бархатные коробки с тиснением",
    desc: "Именное тиснение золотой фольгой + шёлковый наполнитель. Минимальный заказ 50 шт.",
    tag: "–20% при заказе от 100 шт",
    accent: "gold",
  },
  {
    badge: "НОВИНКА",
    title: "Magnetic Box Exclusive",
    desc: "Магнитные крышки, матовое покрытие soft-touch, тиснение серебром. Люкс-сегмент.",
    tag: "Доставка за 14 дней",
    accent: "silver",
  },
  {
    badge: "ДЛЯ БРЕНДОВ",
    title: "Корпоративные наборы",
    desc: "Полный брендинг: лого, фирменные цвета, брендбук на упаковке. От 200 комплектов.",
    tag: "Брендинг в подарок",
    accent: "gold",
  },
  {
    badge: "БЛОГЕРАМ",
    title: "Unboxing-упаковка",
    desc: "Создаём wow-эффект при распаковке. Идеально для коллабораций и запусков.",
    tag: "Пробная партия от 10 шт",
    accent: "silver",
  },
];

const catalog = [
  {
    name: "Velvet Black Box",
    category: "Премиум",
    desc: "Бархатное покрытие, золотое тиснение, магнитная крышка",
    price: "от 890 ₽/шт",
    tag: "Бестселлер",
    img: IMG_HERO,
  },
  {
    name: "Crystal White",
    category: "Свадьбы / Events",
    desc: "Белая перламутровая бумага, серебряная лента, атласный наполнитель",
    price: "от 650 ₽/шт",
    tag: "Новинка",
    img: IMG_CATALOG,
  },
  {
    name: "Obsidian Corporate",
    category: "Корпоративный",
    desc: "Матовый чёрный картон, тиснение логотипа, встроенная ложемент",
    price: "от 1 200 ₽/шт",
    tag: "Топ для B2B",
    img: IMG_OPEN,
  },
  {
    name: "Rose Gold Edition",
    category: "Блогеры",
    desc: "Розово-золотой металлик, wow-крышка, идеально для unboxing",
    price: "от 780 ₽/шт",
    tag: "Instagrammable",
    img: IMG_HERO,
  },
  {
    name: "Midnight Navy",
    category: "Запуск продукции",
    desc: "Глубокий синий с золотым тиснением, luxury-ощущение",
    price: "от 950 ₽/шт",
    tag: null,
    img: IMG_CATALOG,
  },
  {
    name: "Emerald Prestige",
    category: "VIP подарки",
    desc: "Изумрудный бархат, серебряные акценты, ручная отделка",
    price: "от 1 800 ₽/шт",
    tag: "Эксклюзив",
    img: IMG_OPEN,
  },
];

const services = [
  { icon: "Layers", title: "Дизайн под ключ", desc: "Разрабатываем уникальный дизайн коробки с нуля: от брифа до финального макета." },
  { icon: "Fingerprint", title: "Именное тиснение", desc: "Горячее тиснение золотой и серебряной фольгой, UV-лак, дебоссинг логотипа." },
  { icon: "Package", title: "Полный комплект", desc: "Коробка + наполнитель + лента + открытка + фирменная бумага для упаковки." },
  { icon: "Truck", title: "Срочное производство", desc: "Экспресс-изготовление от 7 дней. Доставка по всей России и СНГ." },
  { icon: "Award", title: "Контроль качества", desc: "Каждая партия проходит 3-этапный контроль. Фотоотчёт до отгрузки." },
  { icon: "MessageSquare", title: "Персональный менеджер", desc: "Ваш менеджер ведёт заказ от брифа до доставки. Ответ в течение 1 часа." },
];

const portfolio = [
  {
    brand: "MIXIT",
    category: "Бьюти-бренд",
    result: "+340% engagement при unboxing",
    desc: "Разработали лимитированную серию праздничных коробок для новогодней коллекции. 50 000 единиц за 21 день.",
    metric: "50 000",
    label: "Коробок в тираже",
  },
  {
    brand: "Сбербанк Премиум",
    category: "Корпоративный сегмент",
    result: "NPS +28 пунктов среди VIP-клиентов",
    desc: "Эксклюзивные подарочные наборы для топ-клиентов. Тиснение золотом, бархат, именные открытки.",
    metric: "12 000",
    label: "Комплектов доставлено",
  },
  {
    brand: "Nastya / LIKE",
    category: "Блогер 80M+ подписчиков",
    result: "15M+ просмотров unboxing видео",
    desc: "Разработали wow-упаковку для коллаборации. Магнитная крышка, золотые инициалы, конфетти внутри.",
    metric: "15M+",
    label: "Просмотров видео",
  },
  {
    brand: "STONE ISLAND RU",
    category: "Fashion-ритейл",
    result: "Рост повторных покупок на 22%",
    desc: "Сезонная упаковка для подарочных сертификатов и лимитированных дропов.",
    metric: "22%",
    label: "Рост продаж",
  },
];

const reviews = [
  {
    name: "Анастасия Р.",
    role: "Директор по маркетингу, бьюти-бренд",
    text: "Работаем уже 3 года. Качество стабильно высокое, сроки соблюдают всегда. Наши клиенты в восторге от упаковки — это отдельная точка контакта с брендом.",
    stars: 5,
  },
  {
    name: "Михаил К.",
    role: "CEO, корпоративные подарки",
    text: "Заказывали 8000 подарочных наборов для партнёров на Новый год. Результат превзошёл ожидания. Партнёры присылали фото и благодарили отдельно.",
    stars: 5,
  },
  {
    name: "Valeria M.",
    role: "Блогер, 2.4M подписчиков",
    text: "Упаковка для моего мерча получилась просто огонь. Подписчики сошли с ума от unboxing. Уже планирую третий заказ.",
    stars: 5,
  },
  {
    name: "Дмитрий Ш.",
    role: "Основатель fashion-бренда",
    text: "Наконец нашли партнёра, который понимает слово «люкс». Никаких компромиссов по качеству, чёткие сроки, проактивная коммуникация.",
    stars: 5,
  },
];

const galleryItems = [
  { label: "Velvet Collection", img: IMG_HERO },
  { label: "Silver Edition", img: IMG_CATALOG },
  { label: "Corporate Suite", img: IMG_OPEN },
  { label: "Unboxing Series", img: IMG_HERO },
  { label: "Wedding Luxury", img: IMG_CATALOG },
  { label: "Limited Drop", img: IMG_OPEN },
];

const steps = [
  { num: "01", title: "Бриф", desc: "Заполняете форму или звоните менеджеру. Обсуждаем цели, тираж, сроки, бюджет." },
  { num: "02", title: "Концепция", desc: "Дизайнер готовит 2–3 варианта концепции в течение 48 часов." },
  { num: "03", title: "Утверждение", desc: "Согласовываем макет, материалы и цветовую схему. При необходимости — физический образец." },
  { num: "04", title: "Производство", desc: "Запускаем тираж. Вы получаете фотоотчёт с производства." },
  { num: "05", title: "Доставка", desc: "Отгружаем партию в удобное место. Страхование груза включено." },
];

const faqs = [
  { q: "Какой минимальный тираж?", a: "Минимальный тираж — от 50 штук для стандартных моделей. Для эксклюзивных разработок — от 100 шт. Пробные образцы доступны от 10 штук." },
  { q: "Сколько стоит разработка дизайна?", a: "Разработка дизайна включена в стоимость при заказе от 200 шт. При меньших тиражах — от 5 000 ₽ за концепцию." },
  { q: "Какие сроки производства?", a: "Стандартные сроки: 14–21 рабочий день. Экспресс-производство: от 7 дней (наценка 30%). Физический образец — 5 рабочих дней." },
  { q: "Можно ли сделать упаковку под мой фирменный стиль?", a: "Да, именно в этом наша специализация. Мы работаем с брендбуком, Pantone, корпоративными шрифтами. Любой дизайн воплощаем в жизнь." },
  { q: "Есть ли доставка в регионы и СНГ?", a: "Доставляем по всей России, Казахстану, Беларуси и другим странам СНГ. Работаем с СДЭК, Деловыми линиями и собственной логистикой." },
  { q: "Как происходит оплата?", a: "50% предоплата при старте производства, 50% — перед отгрузкой. Работаем по договору, закрывающие документы предоставляем." },
];

export default function Index() {
  const [activePromo, setActivePromo] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActivePromo(p => (p + 1) % promos.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-[#EDE8DF] font-body overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/90 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-2xl font-light tracking-[0.2em] gradient-gold-text">LUXEBOX</span>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.15em] uppercase text-silver-light/70">
            {["Каталог", "Услуги", "Портфолио", "Отзывы", "Галерея", "FAQ"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors duration-300">{item}</a>
            ))}
          </div>
          <a href="#контакты" className="hidden md:block btn-gold px-5 py-2.5 text-[11px] rounded-none">
            Заказать
          </a>
          <button className="md:hidden text-gold" onClick={() => setMenuOpen(v => !v)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-charcoal border-t border-gold/10 px-6 py-4 flex flex-col gap-4 text-[12px] tracking-widest uppercase text-silver-light/70">
            {["Каталог", "Услуги", "Портфолио", "Отзывы", "Галерея", "FAQ", "Контакты"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors">{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Premium packaging" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-transparent to-obsidian/90" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.5) 60px, rgba(201,168,76,0.5) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.5) 60px, rgba(201,168,76,0.5) 61px)' }}
        />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="section-label mb-6 animate-fade-up">Эксклюзивная подарочная упаковка</div>
          <div className="gold-line w-24 mx-auto mb-8 animate-fade-up delay-100" />
          <h1 className="font-display text-6xl md:text-8xl lg:text-[6.5rem] font-light leading-none tracking-[0.02em] mb-6 animate-fade-up delay-200">
            Упаковка,<br />
            <em className="not-italic italic gradient-gold-text">которую</em><br />
            не забудут
          </h1>
          <p className="text-silver-light/70 font-body text-sm md:text-base tracking-wider max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-300">
            Создаём премиальную упаковку для брендов, блогеров и корпоративных подарков.<br className="hidden md:block" />
            Каждая коробка — произведение искусства. Под заказ. По всей России.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-400">
            <a href="#контакты" className="btn-gold px-10 py-4 text-[11px] rounded-none">
              Получить расчёт стоимости
            </a>
            <a href="#портфолио" className="btn-outline-gold px-10 py-4 rounded-none">
              Смотреть кейсы
            </a>
          </div>
          <div className="flex items-center justify-center gap-10 md:gap-16 mt-16 animate-fade-up delay-500">
            {[["500+", "Брендов доверяют"], ["3M+", "Коробок в год"], ["14 дн", "От образца до тиража"]].map(([n, l]) => (
              <div key={n} className="text-center">
                <div className="font-display text-3xl md:text-4xl gradient-gold-text font-light">{n}</div>
                <div className="text-silver-light/50 text-[9px] tracking-[0.2em] uppercase mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={20} className="text-gold/40" />
        </div>
      </section>

      {/* PROMOS */}
      <section id="акции" className="py-8 bg-charcoal border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-label text-center mb-8">Актуальные предложения</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {promos.map((p, i) => (
              <div
                key={i}
                onClick={() => setActivePromo(i)}
                className={`luxury-card p-6 cursor-pointer transition-all duration-500 hover-gold-lift ${activePromo === i ? "ring-1 ring-gold/50 shadow-[0_0_24px_rgba(201,168,76,0.12)]" : ""}`}
              >
                <div className={`text-[9px] tracking-[0.25em] font-semibold mb-3 ${p.accent === "gold" ? "text-gold" : "text-silver"}`}>
                  {p.badge}
                </div>
                <div className="font-display text-lg font-medium leading-snug mb-2">{p.title}</div>
                <div className="text-[11px] text-silver-light/60 leading-relaxed mb-4">{p.desc}</div>
                <div className={`text-[10px] font-semibold tracking-wider px-2 py-1 inline-block border ${p.accent === "gold" ? "border-gold/30 text-gold" : "border-silver/30 text-silver"}`}>
                  {p.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="каталог" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-label mb-4">Каталог</div>
              <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
                Коллекции <em className="not-italic italic gradient-gold-text">упаковки</em>
              </h2>
              <div className="gold-line w-16 mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/8">
            {catalog.map((item, i) => (
              <AnimatedSection key={i}>
                <div className="luxury-card p-8 shimmer hover-gold-lift h-full flex flex-col bg-charcoal">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[9px] text-silver-light/50 tracking-[0.2em] uppercase">{item.category}</span>
                    {item.tag && (
                      <span className="text-[9px] text-gold border border-gold/30 px-2 py-0.5 tracking-wider">{item.tag}</span>
                    )}
                  </div>
                  <div className="w-full h-44 mb-6 relative overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 font-display text-xl italic text-gold-light">{item.name}</div>
                  </div>
                  <p className="text-silver-light/65 text-[12px] leading-relaxed flex-1 mb-5">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-gold">{item.price}</span>
                    <button className="btn-outline-gold px-4 py-2 text-[10px] rounded-none">Подробнее</button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center mt-12">
              <button className="btn-gold px-12 py-4 rounded-none">Запросить полный каталог</button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section id="услуги" className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-label mb-4">Услуги</div>
              <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
                Всё включено<br /><em className="not-italic italic gradient-gold-text">в один заказ</em>
              </h2>
              <div className="gold-line w-16 mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <AnimatedSection key={i}>
                <div className="luxury-card p-8 hover-gold-lift group h-full bg-obsidian">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/20 mb-6 group-hover:border-gold/60 transition-colors duration-300">
                    <Icon name={s.icon as LuxeIcon} size={20} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-3">{s.title}</h3>
                  <p className="text-silver-light/60 text-[12px] leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="портфолио" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-label mb-4">Портфолио</div>
              <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
                Кейсы <em className="not-italic italic gradient-gold-text">с результатами</em>
              </h2>
              <div className="gold-line w-16 mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {portfolio.map((p, i) => (
              <AnimatedSection key={i}>
                <div className="luxury-card p-10 shimmer hover-gold-lift relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 border-l border-b border-gold/8" />
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 min-w-[80px]">
                      <div className="font-display text-3xl font-light gradient-gold-text leading-tight">{p.metric}</div>
                      <div className="text-[9px] text-silver-light/50 tracking-widest uppercase mt-1 leading-tight">{p.label}</div>
                    </div>
                    <div className="gold-line-v h-16 self-center shrink-0 opacity-40" />
                    <div>
                      <div className="text-[9px] text-silver-light/50 tracking-widest uppercase mb-1">{p.category}</div>
                      <div className="font-display text-2xl font-semibold mb-2">{p.brand}</div>
                      <div className="text-gold text-[11px] font-semibold tracking-wide mb-3">{p.result}</div>
                      <p className="text-silver-light/65 text-[12px] leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="отзывы" className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-label mb-4">Отзывы</div>
              <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
                Нам <em className="not-italic italic gradient-gold-text">доверяют</em>
              </h2>
              <div className="gold-line w-16 mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((r, i) => (
              <AnimatedSection key={i}>
                <div className="luxury-card p-8 hover-gold-lift bg-obsidian">
                  <div className="flex items-center gap-0.5 mb-5">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <span key={j} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="font-display text-xl italic text-[#EDE8DF]/85 leading-relaxed mb-6">
                    «{r.text}»
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
                    <div className="w-10 h-10 gradient-gold flex items-center justify-center text-obsidian font-bold text-sm shrink-0">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold">{r.name}</div>
                      <div className="text-silver-light/50 text-[11px] mt-0.5">{r.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="галерея" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-label mb-4">Галерея</div>
              <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
                <em className="not-italic italic gradient-gold-text">Визуальная</em> эстетика
              </h2>
              <div className="gold-line w-16 mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryItems.map((g, i) => (
              <AnimatedSection key={i}>
                <div className="aspect-square border border-gold/10 flex items-end p-4 hover-gold-lift cursor-pointer group relative overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.label}
                    className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 to-transparent" />
                  <span className="relative font-display text-base italic text-gold-light/80 group-hover:text-gold-light transition-colors duration-300">{g.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="процесс" className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-label mb-4">Процесс</div>
              <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
                От идеи до <em className="not-italic italic gradient-gold-text">доставки</em>
              </h2>
              <div className="gold-line w-16 mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((s, i) => (
                <AnimatedSection key={i}>
                  <div className="text-center relative">
                    <div className="w-24 h-24 mx-auto border border-gold/25 flex items-center justify-center mb-6 bg-charcoal relative z-10">
                      <span className="font-display text-3xl gradient-gold-text font-light">{s.num}</span>
                    </div>
                    <h3 className="font-display text-xl font-medium mb-3">{s.title}</h3>
                    <p className="text-silver-light/60 text-[11px] leading-relaxed">{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-label mb-4">FAQ</div>
              <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
                Часто задаваемые <em className="not-italic italic gradient-gold-text">вопросы</em>
              </h2>
              <div className="gold-line w-16 mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <AnimatedSection key={i}>
                <div className="luxury-card overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-charcoal-mid/40 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="font-display text-xl font-medium pr-6">{f.q}</span>
                    <Icon
                      name={activeFaq === i ? "Minus" : "Plus"}
                      size={16}
                      className={`shrink-0 transition-colors ${activeFaq === i ? "text-gold" : "text-silver-light/40"}`}
                    />
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-6 text-silver-light/70 text-[13px] leading-relaxed border-t border-gold/10 pt-4">
                      {f.a}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="контакты" className="py-24 bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.5) 0%, transparent 70%)' }}
        />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="section-label mb-4">Контакты</div>
              <h2 className="font-display text-5xl md:text-6xl font-light mb-4">
                Начнём <em className="not-italic italic gradient-gold-text">создавать?</em>
              </h2>
              <p className="text-silver-light/60 text-sm tracking-wider">
                Оставьте заявку — менеджер свяжется в течение 1 часа
              </p>
              <div className="gold-line w-16 mx-auto mt-6" />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="luxury-card p-10 bg-obsidian">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {[
                  { label: "Ваше имя", placeholder: "Александр" },
                  { label: "Телефон / Telegram", placeholder: "+7 (___) ___-__-__" },
                  { label: "Бренд / Компания", placeholder: "Название компании" },
                  { label: "Тираж (прим.)", placeholder: "от 100 штук" },
                ].map(field => (
                  <div key={field.label}>
                    <label className="text-[10px] text-silver-light/50 tracking-[0.2em] uppercase block mb-2">{field.label}</label>
                    <input
                      className="w-full bg-charcoal border border-gold/15 px-4 py-3 text-[13px] text-[#EDE8DF] placeholder-silver-light/20 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <label className="text-[10px] text-silver-light/50 tracking-[0.2em] uppercase block mb-2">Задача / Детали</label>
                <textarea
                  className="w-full bg-charcoal border border-gold/15 px-4 py-3 text-[13px] text-[#EDE8DF] placeholder-silver-light/20 focus:outline-none focus:border-gold/50 transition-colors resize-none h-24"
                  placeholder="Опишите вашу задачу, тип упаковки, сроки..."
                />
              </div>
              <button className="btn-gold w-full py-4 text-[12px] rounded-none">
                Получить расчёт стоимости
              </button>
              <p className="text-center text-silver-light/30 text-[10px] tracking-wider mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
              {[
                { icon: "Phone", label: "+7 (800) 000-00-00", sub: "Бесплатно по России" },
                { icon: "MessageCircle", label: "@luxebox_official", sub: "Telegram / WhatsApp" },
                { icon: "Mail", label: "hello@luxebox.ru", sub: "Ответ за 1 час" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <Icon name={c.icon as LuxeIcon} size={16} className="text-gold shrink-0" />
                  <div>
                    <div className="text-[13px] text-[#EDE8DF]">{c.label}</div>
                    <div className="text-[10px] text-silver-light/40 tracking-wider mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-gold/10 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl tracking-[0.2em] gradient-gold-text">LUXEBOX</span>
          <span className="text-silver-light/30 text-[11px] tracking-wider">© 2024 LUXEBOX. Эксклюзивная упаковка под заказ.</span>
          <div className="flex gap-6 text-[11px] text-silver-light/30 tracking-wider">
            <a href="#" className="hover:text-gold transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gold transition-colors">Договор оферты</a>
          </div>
        </div>
      </footer>

    </div>
  );
}