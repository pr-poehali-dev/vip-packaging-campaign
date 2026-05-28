import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

type ArtIcon = "Phone" | "Mail" | "MapPin" | "Clock" | "MessageCircle" | "ChevronDown" | "ChevronLeft" | "ChevronRight" | "Menu" | "X" | "Plus" | "Minus" | "Search" | "User" | "Layers" | "Fingerprint" | "Package" | "Truck" | "Award" | "CheckCircle" | "Star" | "Heart" | "ZoomIn" | "ArrowRight" | "TrendingUp" | "Scissors" | "Printer" | "Droplets" | "Stamp" | "Sparkles" | "Shield";

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

/* ── Blink line items ── */
const blinkItems = ["3D-визуализация в подарок", "Готовая концепция за 48 часов", "Доставка по России и СНГ"];

const heroBullets = [
  "Коробки на заказ от 1 штуки",
  "От идеи до тиража за 10 дней",
  "1 000 + готовых решений",
];

const heroSlideData = [
  {
    line1: "Премиальные подарочные коробки",
    line2: "на заказ для Вашего бизнеса",
    img: IMG_HERO,
  },
  {
    line1: "Эксклюзивная упаковка",
    line2: "для корпоративных подарков",
    img: IMG_CATALOG,
  },
  {
    line1: "Подарочные PR и Beauty-боксы",
    line2: "для блогеров и рассылок",
    img: IMG_OPEN,
  },
  {
    line1: "Подарочные коробки премиум класса",
    line2: "для нового бренда и запуска продукта",
    img: IMG_HERO,
  },
];

const promos = [
  { badge: "ХИТ СЕЗОНА",  title: "Бархатные коробки с тиснением",  desc: "Именное тиснение золотой фольгой + шёлковый наполнитель. Минимальный заказ 50 шт.", tag: "–20% при заказе от 100 шт." },
  { badge: "НОВИНКА",      title: "Magnetic Box Exclusive",          desc: "Магнитные крышки, матовое покрытие soft-touch, тиснение серебром. Люкс-сегмент.",       tag: "Доставка за наш счет" },
  { badge: "ДЛЯ БРЕНДОВ",  title: "Корпоративные наборы",           desc: "Полный брендинг: лого, фирменные цвета, брендбук на упаковке. От 200 комплектов.",        tag: "Брендинг в подарок" },
  { badge: "БЛОГЕРАМ",     title: "Unboxing-упаковка",              desc: "Создаём wow-эффект при распаковке. Идеально для коллабораций и запусков.",                 tag: "Пробная партия от 10 шт." },
];

/* Catalog 2×2 */
const catalogItems = [
  {
    title: "Коробки для украшений и часов",
    desc: "Идеально подчеркнут красоту ваших украшений",
    img: "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/bucket/0e5ad031-f9d5-4c61-8fcb-a1324ac63400.png",
  },
  {
    title: "Коробки для корпоративных подарков",
    desc: "Из качественных материалов с оригинальным дизайном",
    img: "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/bucket/448b6c1b-289d-44fe-a4b0-df032063ca0e.png",
  },
  {
    title: "Самосборные коробки из гофры",
    desc: "Удобно, экономично, экологично и доступно",
    img: "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/bucket/0e5ad031-f9d5-4c61-8fcb-a1324ac63400.png",
  },
  {
    title: "Подарки под ключ",
    desc: "Дополнительная услуга для вашего бизнеса",
    img: "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/bucket/448b6c1b-289d-44fe-a4b0-df032063ca0e.png",
  },
];

const advantages = [
  { icon: "Truck",   title: "Срочные заказы",       desc: "Исполняем оперативно день в день" },
  { icon: "Shield",  title: "Собственное производство", desc: "Мощность от 7000 коробок в месяц" },
  { icon: "Award",   title: "Контроль качества",    desc: "Каждая партия проходит 3-этапный контроль. Фотоотчёт до отгрузки." },
  { icon: "Package", title: "Полный комплект",      desc: "Коробка + наполнитель + лента + открытка + фирменная бумага." },
  { icon: "Star",    title: "Опыт работы",          desc: "Мы производим коробки с 2009 года" },
  { icon: "MessageCircle", title: "Персональный менеджер", desc: "Ведёт заказ от брифа до доставки. Ответ в течение 1 часа." },
];

const ourServices = [
  "Нанесение логотипа и принта",
  "Вырубка и резка",
  "Цифровая и офсетная печать",
  "УФ-лакирование",
  "Шелкография",
  "Тиснение фольгой",
];

/* Cases */
const cases = [
  {
    tag: "КЕЙС",
    title: "Как мы изготовили 10 000 коробок для ювелирного бренда",
    desc: "Бренд запускал новую коллекцию. Нужна была упаковка с бархатом и золотым тиснением. Срок — 14 дней.",
    points: ["За 2 дня согласовали дизайн и образец", "Запустили параллельное производство", "Доставили за день до дедлайна"],
    result: "+18% к среднему чеку",
    resultDesc: "Клиент продлил контракт на год вперёд.",
    img: IMG_HERO,
  },
  {
    tag: "КЕЙС",
    title: "50 000 боксов для PR-рассылки блогера с 5M подписчиков",
    desc: "Нужна была wow-упаковка для коллаборации. Магнитная крышка, конфетти, золотые инициалы.",
    points: ["3D-визуализация за 48 часов", "Производство 50 000 единиц за 21 день", "Доставка по всей России"],
    result: "15M+ просмотров unboxing",
    resultDesc: "Видео набрало 15M+ просмотров, бренд получил узнаваемость.",
    img: IMG_CATALOG,
  },
  {
    tag: "КЕЙС",
    title: "Корпоративные наборы для 8 000 партнёров Сбербанка",
    desc: "Эксклюзивные подарочные наборы к Новому году. Тиснение золотом, бархат, именные открытки.",
    points: ["Разработали дизайн за 5 дней", "Производство 8 000 комплектов", "Своевременная доставка"],
    result: "NPS +28 пунктов",
    resultDesc: "Партнёры отметили качество упаковки отдельно.",
    img: IMG_OPEN,
  },
];

/* Partners */
const partnerLogos = [
  "Данисcимо", "YAMAGUCHI", "Avito", "МегаФон", "Азбука Вкуса", "ФосАгро", "Сбербанк", "MIXIT",
];

/* Reviews */
const reviews = [
  { name: "Диля",               date: "20 мар. 2023 г.", stars: 5, text: "Отличные коробки! Качественные и на любой вкус.", source: "Яндекс",  avatar: "Д" },
  { name: "Дилярчик Гусейнова", date: "20 мар. 2023 г.", stars: 5, text: "Отличные коробки! Качественные и на любой вкус.", source: "Яндекс",  avatar: "Д" },
  { name: "Анастасия",          date: "14 ноя. 2022 г.", stars: 5, text: "Отличные коробки! Быстрая доставка! Будем заказывать ещё. Спасибо большое))", source: "Avito", avatar: "А" },
  { name: "Андрей Грибок",      date: "10 ноя. 2022 г.", stars: 5, text: "Хороший выбор упаковки", source: "Яндекс", avatar: "А" },
  { name: "Мария К.",           date: "5 фев. 2023 г.",  stars: 5, text: "Заказывали коробки для нашего бренда. Всё сделали качественно и в срок.", source: "Google", avatar: "М" },
  { name: "Дмитрий Ш.",         date: "12 янв. 2023 г.", stars: 5, text: "Наконец нашли партнёра, который понимает слово «люкс». Чёткие сроки, проактивная коммуникация.", source: "Яндекс", avatar: "Д" },
  { name: "Valeria M.",         date: "3 мар. 2023 г.",  stars: 5, text: "Упаковка для мерча получилась просто огонь. Подписчики сошли с ума от unboxing.", source: "Avito", avatar: "V" },
  { name: "Михаил К.",          date: "28 дек. 2022 г.", stars: 5, text: "Заказывали 8000 наборов для партнёров на Новый год. Результат превзошёл ожидания.", source: "Google", avatar: "М" },
];

const galleryImgs = [IMG_HERO, IMG_CATALOG, IMG_OPEN, IMG_HERO, IMG_CATALOG, IMG_OPEN];

const steps = [
  { num: "01", title: "Бриф",         desc: "Обсуждаем цели, тираж, сроки и бюджет.",            img: "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/1a489828-1283-4c58-864d-ff3e655d4e87.jpg" },
  { num: "02", title: "Концепция",    desc: "2–3 варианта дизайна за 48 часов.",                  img: "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/6136e80f-28ee-4bc5-8cc9-dae47429ab5d.jpg" },
  { num: "03", title: "Утверждение",  desc: "Согласуем макет. Физический образец по запросу.",    img: "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/36b41cae-5d13-45f4-818e-4e215c613b42.jpg" },
  { num: "04", title: "Производство", desc: "Запускаем тираж с фотоотчётом.",                     img: "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/6b75a0c8-39db-4239-bcfc-e74692d52fb9.jpg" },
  { num: "05", title: "Доставка",     desc: "Отгружаем по России и СНГ. Страхование включено.",   img: "https://cdn.poehali.dev/projects/cd883386-6402-4459-8df4-61b06ba8676e/files/d6d04088-8d9b-42d1-a325-ad9feaa8165a.jpg" },
];

const faqs = [
  { q: "Какой минимальный тираж?",                  a: "От 50 шт для стандартных моделей, от 100 шт для эксклюзива. Пробные образцы — от 10 штук." },
  { q: "Сколько стоит разработка дизайна?",          a: "Включена в стоимость. Уточните детали у менеджера." },
  { q: "Какие сроки производства?",                  a: "Стандарт: 14–21 рабочий день. Экспресс: от 7 дней (наценка 30%). Образец: 5 дней." },
  { q: "Можно ли сделать под мой фирменный стиль?",  a: "Да — работаем с брендбуком, Pantone, корпоративными шрифтами." },
  { q: "Есть ли доставка в регионы и СНГ?",          a: "Доставляем по всей России, Казахстану, Беларуси. СДЭК, Деловые линии, своя логистика." },
  { q: "Как происходит оплата?",                     a: "50% предоплата при старте, 50% перед отгрузкой. Работаем по договору." },
];

const navLinks = ["Новинки", "Каталог", "Услуги", "Прайс", "Отзывы", "О компании", "Контакты"];

/* Wishlist item type */
type WishItem = { name: string; img: string };

export default function Index() {
  const [heroSlide, setHeroSlide]       = useState(0);
  const [blinkIdx, setBlinkIdx]         = useState(0);
  const [activeFaq, setActiveFaq]       = useState<number | null>(null);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [authOpen, setAuthOpen]         = useState(false);
  const [wishOpen, setWishOpen]         = useState(false);
  const [wishlist, setWishlist]         = useState<WishItem[]>([]);
  const [authTab, setAuthTab]           = useState<"login" | "register">("login");
  const [caseSlide, setCaseSlide]       = useState(0);
  const [reviewSlide, setReviewSlide]   = useState(0);
  const [partnerSlide, setPartnerSlide] = useState(0);
  const [galleryOpen, setGalleryOpen]   = useState(false);
  const [galleryIdx, setGalleryIdx]     = useState(0);
  const [gallerySub, setGallerySub]     = useState(0);

  /* Hero auto-slide */
  useEffect(() => {
    const t = setInterval(() => setHeroSlide(s => (s + 1) % heroSlideData.length), 5000);
    return () => clearInterval(t);
  }, []);

  /* Blink items */
  useEffect(() => {
    const t = setInterval(() => setBlinkIdx(s => (s + 1) % blinkItems.length), 2000);
    return () => clearInterval(t);
  }, []);

  /* Partner auto-scroll */
  useEffect(() => {
    const t = setInterval(() => setPartnerSlide(s => (s + 1) % Math.ceil(partnerLogos.length / 5)), 3000);
    return () => clearInterval(t);
  }, []);

  const addToWish = (item: WishItem) => {
    setWishlist(w => w.find(x => x.name === item.name) ? w : [...w, item]);
  };

  const reviewsPerPage = 4;
  const totalReviewPages = Math.ceil(reviews.length / reviewsPerPage);
  const visibleReviews = reviews.slice(reviewSlide * reviewsPerPage, reviewSlide * reviewsPerPage + reviewsPerPage);

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
            <div className="w-10 h-10 bg-ink flex items-center justify-center">
              <span className="text-white font-display font-bold text-xs">AD</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl font-bold tracking-tight">ART‑<span className="italic font-normal">DiZo</span></span>
              <span className="text-[10px] text-gray-400 leading-tight">Производство подарочных коробок</span>
              <span className="text-[10px] text-gray-400 leading-tight">и упаковки на заказ в Москве</span>
            </div>
          </div>

          {/* Address (was contacts) */}
          <div className="hidden lg:flex flex-col gap-0.5 text-[11px] text-gray-500">
            <div className="flex items-center gap-1"><Icon name={"MapPin" as ArtIcon} size={11} className="shrink-0" /> г. Москва, ул. Шеногина 4, корп. 1</div>
            <div className="flex items-center gap-1"><Icon name={"Clock" as ArtIcon} size={11} className="shrink-0" /> Пн – Пт: с 9:00 до 18:00</div>
          </div>

          {/* Phone (was address) */}
          <div className="hidden md:flex flex-col items-center gap-0.5">
            <a href="tel:+74951616873" className="font-display text-xl font-semibold hover:text-warm transition-colors">+7 (495) 161-68-73</a>
            <a href="mailto:online@art-dizo.ru" className="text-[11px] text-gray-400 hover:text-warm transition-colors">online@art-dizo.ru</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => { setSearchOpen(v => !v); setAuthOpen(false); setWishOpen(false); }}
              className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-ink transition-colors"
            >
              <Icon name={"Search" as ArtIcon} size={15} />
            </button>
            {/* Heart */}
            <button
              onClick={() => { setWishOpen(v => !v); setAuthOpen(false); setSearchOpen(false); }}
              className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-ink transition-colors relative"
            >
              <Icon name={"Heart" as ArtIcon} size={15} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-warm text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>
            {/* User */}
            <button
              onClick={() => { setAuthOpen(v => !v); setSearchOpen(false); setWishOpen(false); }}
              className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-ink transition-colors"
            >
              <Icon name={"User" as ArtIcon} size={15} />
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(v => !v)}>
            <Icon name={(menuOpen ? "X" : "Menu") as ArtIcon} size={22} />
          </button>
        </div>

        {/* Search dropdown */}
        {searchOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 border border-gray-300 px-4 py-3">
                <Icon name={"Search" as ArtIcon} size={16} className="text-gray-400 shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Более 1000 вариантов подарочных коробок и упаковки"
                  className="flex-1 text-[13px] outline-none placeholder-gray-400"
                />
                <button onClick={() => setSearchOpen(false)}>
                  <Icon name={"X" as ArtIcon} size={14} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Auth dropdown */}
        {authOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-6">
            <div className="max-w-sm mx-auto">
              <div className="flex mb-6 border border-gray-200">
                <button
                  onClick={() => setAuthTab("login")}
                  className={`flex-1 py-2.5 text-[12px] font-semibold uppercase tracking-wider transition-colors ${authTab === "login" ? "bg-ink text-white" : "text-gray-500 hover:bg-gray-50"}`}
                >
                  Войти
                </button>
                <button
                  onClick={() => setAuthTab("register")}
                  className={`flex-1 py-2.5 text-[12px] font-semibold uppercase tracking-wider transition-colors ${authTab === "register" ? "bg-ink text-white" : "text-gray-500 hover:bg-gray-50"}`}
                >
                  Регистрация
                </button>
              </div>
              {authTab === "login" ? (
                <div className="space-y-3">
                  <input type="email" placeholder="Email" className="w-full border border-gray-200 px-4 py-3 text-[13px] outline-none focus:border-ink transition-colors" />
                  <input type="password" placeholder="Пароль" className="w-full border border-gray-200 px-4 py-3 text-[13px] outline-none focus:border-ink transition-colors" />
                  <button className="w-full bg-ink text-white py-3 text-[12px] font-semibold uppercase tracking-wider hover:bg-ink/90 transition-colors">Войти</button>
                  <p className="text-center text-[11px] text-gray-400 cursor-pointer hover:text-ink">Забыли пароль?</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <input type="text" placeholder="Имя" className="w-full border border-gray-200 px-4 py-3 text-[13px] outline-none focus:border-ink transition-colors" />
                  <input type="email" placeholder="Email" className="w-full border border-gray-200 px-4 py-3 text-[13px] outline-none focus:border-ink transition-colors" />
                  <input type="password" placeholder="Пароль" className="w-full border border-gray-200 px-4 py-3 text-[13px] outline-none focus:border-ink transition-colors" />
                  <button className="w-full bg-ink text-white py-3 text-[12px] font-semibold uppercase tracking-wider hover:bg-ink/90 transition-colors">Зарегистрироваться</button>
                </div>
              )}
              <button onClick={() => setAuthOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-ink">
                <Icon name={"X" as ArtIcon} size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Wishlist dropdown */}
        {wishOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-6">
            <div className="max-w-7xl mx-auto">
              <h3 className="font-display font-semibold text-base uppercase mb-4">Избранное</h3>
              {wishlist.length === 0 ? (
                <p className="text-[13px] text-gray-400">Вы ещё не добавили товары в избранное</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {wishlist.map((item, i) => (
                    <div key={i} className="border border-gray-200 p-3">
                      <img src={item.img} alt={item.name} className="w-full h-28 object-cover mb-2" />
                      <p className="text-[12px] font-semibold">{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* NAV BAR */}
        <nav className="bg-ink hidden md:block">
          <div className="max-w-7xl mx-auto px-6">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`block px-5 py-3.5 font-display font-medium text-[13px] tracking-[0.1em] uppercase transition-colors
                      ${link === "Каталог" ? "bg-warm text-white" : "text-white hover:bg-white/10"}`}
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
      <section className="relative overflow-hidden" style={{ height: 520 }}>
        {heroSlideData.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: heroSlide === i ? 1 : 0 }}
          >
            <img src={s.img} alt={s.line1} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/75 to-transparent" />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="max-w-xl">
              {/* Sub-heading above */}
              <p className="text-warm font-semibold text-[13px] uppercase tracking-[0.2em] mb-3">
                Подарочная упаковка, которую запоминают
              </p>
              {/* Main heading 2 lines */}
              <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight text-ink uppercase mb-5">
                <span className="block">{heroSlideData[heroSlide].line1}</span>
                <span className="block">{heroSlideData[heroSlide].line2}</span>
              </h1>
              {/* Bullets */}
              <ul className="space-y-1.5 mb-4">
                {heroBullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-[13px] text-gray-700">
                    <span className="w-1.5 h-1.5 bg-warm rounded-full shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              {/* Blinking line */}
              <div className="flex items-center gap-2 mb-7 h-7">
                <span className="w-2 h-2 bg-warm animate-pulse rounded-full shrink-0" />
                <span
                  key={blinkIdx}
                  className="text-[13px] font-semibold text-warm uppercase tracking-wider"
                  style={{ animation: "fadeInUp 0.5s ease" }}
                >
                  {blinkItems[blinkIdx]}
                </span>
              </div>
              {/* 2 buttons */}
              <div className="flex flex-wrap gap-3">
                <a href="#контакты" className="btn-primary">Рассчитать проект</a>
                <a href="#каталог" className="btn-outline">Посмотреть каталог</a>
              </div>
            </div>
          </div>
        </div>
        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlideData.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${heroSlide === i ? "bg-ink scale-110" : "bg-ink/30"}`}
            />
          ))}
        </div>
        <button
          onClick={() => setHeroSlide(s => (s - 1 + heroSlideData.length) % heroSlideData.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
        >
          <Icon name={"ChevronLeft" as ArtIcon} size={18} />
        </button>
        <button
          onClick={() => setHeroSlide(s => (s + 1) % heroSlideData.length)}
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
                <div className="bg-cream border border-gray-200 card-hover h-full flex flex-col overflow-hidden">
                  {/* Photo placeholder */}
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400 text-[11px] uppercase tracking-wider">
                    Фото акции
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-warm mb-2 block">{p.badge}</span>
                    <h3 className="font-display font-semibold text-base uppercase leading-snug mb-2">{p.title}</h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed flex-1 mb-4">{p.desc}</p>
                    <div className="text-[11px] font-semibold text-white bg-ink px-3 py-2 inline-block self-start cursor-pointer hover:bg-ink/80 transition-colors">
                      {p.tag === "Доставка за наш счет" ? "Доставка за наш счет" : p.tag}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOG 2×2 ── */}
      <section id="каталог" className="py-16 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">
              Производство подарочных коробок в Москве
            </h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {catalogItems.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <div
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ height: 280 }}
                  onClick={() => addToWish({ name: item.title, img: item.img })}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-center">
                    <h3 className="font-display font-bold text-2xl text-white uppercase leading-tight mb-2">{item.title}</h3>
                    <p className="text-white/80 text-[13px] mb-0">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#контакты" className="btn-primary px-10">Рассчитать проект</a>
              <button className="btn-outline px-10">Перейти в каталог</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section id="услуги" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">Наши преимущества</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {advantages.map((s, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="bg-[#F9F7F4] border border-gray-200 p-6 card-hover">
                  <div className="w-10 h-10 bg-ink flex items-center justify-center mb-4">
                    <Icon name={s.icon as ArtIcon} size={18} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-base uppercase mb-2">{s.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Our services 1 row */}
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2 mt-16">Наши услуги</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-10" />
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3">
              {ourServices.map((srv, i) => (
                <div key={i} className="bg-[#F9F7F4] border border-gray-200 px-5 py-3 text-[13px] font-semibold uppercase tracking-wide hover:bg-ink hover:text-white transition-colors cursor-pointer">
                  {srv}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CASES ── */}
      <section id="кейсы" className="py-16 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide">Кейсы с реальными результатами</h2>
              <button className="hidden md:flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider border border-ink px-5 py-2.5 hover:bg-ink hover:text-white transition-colors">
                Смотреть все кейсы
                <Icon name={"ArrowRight" as ArtIcon} size={14} />
              </button>
            </div>
            <div className="w-12 h-0.5 bg-warm mb-10" />
          </Reveal>
          {/* Case slider */}
          <div className="relative">
            {cases.map((c, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${caseSlide === i ? "block" : "hidden"}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-gray-200 overflow-hidden">
                  {/* Left */}
                  <div className="p-10 flex flex-col justify-center">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-warm mb-3">{c.tag}</span>
                    <h3 className="font-display font-bold text-xl md:text-2xl uppercase leading-snug mb-4">{c.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed mb-5">{c.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {c.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <span className="w-4 h-4 rounded-full border-2 border-warm flex items-center justify-center shrink-0 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-warm rounded-full" />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#F9F7F4] border border-gray-200 p-4 flex items-center gap-3">
                      <Icon name={"TrendingUp" as ArtIcon} size={20} className="text-warm shrink-0" />
                      <div>
                        <div className="font-display font-bold text-warm text-base">{c.result}</div>
                        <div className="text-[11px] text-gray-500">{c.resultDesc}</div>
                      </div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="relative h-72 lg:h-auto overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white text-[11px] px-3 py-2 flex items-center justify-between">
                      <span>Фото проекта</span>
                      <span className="text-white/60">{i + 1} / {cases.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Arrows */}
            <div className="flex items-center gap-3 mt-5">
              <button
                onClick={() => setCaseSlide(s => (s - 1 + cases.length) % cases.length)}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-ink transition-colors"
              >
                <Icon name={"ChevronLeft" as ArtIcon} size={16} />
              </button>
              <button
                onClick={() => setCaseSlide(s => (s + 1) % cases.length)}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-ink transition-colors"
              >
                <Icon name={"ChevronRight" as ArtIcon} size={16} />
              </button>
              <div className="flex gap-1.5 ml-2">
                {cases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCaseSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all ${caseSlide === i ? "bg-ink" : "bg-gray-300"}`}
                  />
                ))}
              </div>
              <button className="md:hidden ml-auto flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider border border-ink px-4 py-2">
                Все кейсы
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-xl md:text-2xl uppercase tracking-[0.15em]">Производим коробки для</h2>
            <button className="text-[11px] text-gray-400 uppercase tracking-widest hover:text-ink transition-colors">Все партнёры</button>
          </div>
          <div className="relative overflow-hidden">
            <button
              onClick={() => setPartnerSlide(s => (s - 1 + Math.ceil(partnerLogos.length / 5)) % Math.ceil(partnerLogos.length / 5))}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-200 flex items-center justify-center hover:border-ink transition-colors shadow-sm"
            >
              <Icon name={"ChevronLeft" as ArtIcon} size={14} />
            </button>
            <div className="px-10">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${partnerSlide * 100}%)` }}
              >
                {partnerLogos.map((logo, i) => (
                  <div
                    key={i}
                    className="flex-none w-1/5 flex items-center justify-center py-4 px-6"
                  >
                    <div className="text-gray-400 font-display font-bold text-sm uppercase tracking-wider hover:text-gray-600 transition-colors cursor-pointer text-center">
                      {logo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setPartnerSlide(s => (s + 1) % Math.ceil(partnerLogos.length / 5))}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-200 flex items-center justify-center hover:border-ink transition-colors shadow-sm"
            >
              <Icon name={"ChevronRight" as ArtIcon} size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="отзывы" className="py-16 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide mb-6">
              Отзывы о нас на независимых площадках
            </h2>
            {/* Rating badges */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-full px-4 py-2">
                <span className="text-[12px] font-semibold text-gray-700">Все отзывы</span>
              </div>
              {[
                { label: "Я", color: "#FC3F1D", score: "4.4" },
                { label: "G", color: "#4285F4", score: "4.5" },
                { label: "AV", color: "#00AAFF", score: "5.0" },
                { label: "2ГИС", color: "#3DB54A", score: "5.0" },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-1.5 border border-gray-200 bg-white rounded-full px-3 py-1.5">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold" style={{ backgroundColor: r.color }}>{r.label}</span>
                  <span className="text-[13px] font-semibold">{r.score}</span>
                </div>
              ))}
              <button className="ml-auto bg-ink text-white px-6 py-2.5 text-[12px] font-semibold uppercase tracking-wider hover:bg-ink/80 transition-colors">
                Оставить отзыв
              </button>
            </div>
            <p className="text-[12px] text-gray-500 mb-8">53 отзыва из 4 источников</p>
          </Reveal>

          {/* Review cards */}
          <div className="relative">
            <button
              onClick={() => setReviewSlide(s => Math.max(0, s - 1))}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:border-ink transition-colors"
            >
              <Icon name={"ChevronLeft" as ArtIcon} size={16} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
              {visibleReviews.map((r, i) => (
                <Reveal key={`${reviewSlide}-${i}`} delay={i * 60}>
                  <div className="bg-white border border-gray-200 p-5 flex flex-col h-full shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center font-bold text-gray-600 text-sm shrink-0">
                        {r.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-[13px] leading-tight">{r.name}</div>
                        <div className="text-[11px] text-gray-400">{r.date}</div>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: r.stars }).map((_, j) => (
                        <span key={j} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-[12px] text-gray-600 leading-relaxed flex-1 mb-4">{r.text}</p>
                    <a href="#" className="text-[11px] text-gray-400 underline hover:text-ink transition-colors">
                      Отзыв из {r.source}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <button
              onClick={() => setReviewSlide(s => Math.min(totalReviewPages - 1, s + 1))}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:border-ink transition-colors"
            >
              <Icon name={"ChevronRight" as ArtIcon} size={16} />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: totalReviewPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${reviewSlide === i ? "bg-ink" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="портфолио" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">Наше портфолио</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImgs.map((img, i) => (
              <Reveal key={i} delay={i * 60}>
                <div
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                  onClick={() => { setGalleryOpen(true); setGalleryIdx(i); setGallerySub(0); }}
                >
                  <img
                    src={img}
                    alt={`Пример ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-all duration-400 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Icon name={"ZoomIn" as ArtIcon} size={28} className="text-white mb-2 mx-auto" />
                      <span className="text-white font-display font-semibold uppercase text-xs tracking-wider">Пример</span>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-[9px] font-semibold uppercase tracking-wider px-2 py-1">
                    Пример
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      {galleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setGalleryOpen(false)}
        >
          <div className="relative max-w-4xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <Icon name={"X" as ArtIcon} size={24} />
            </button>
            <img
              src={galleryImgs[(galleryIdx + gallerySub) % galleryImgs.length]}
              alt="Пример работы"
              className="w-full max-h-[70vh] object-contain"
            />
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={() => setGallerySub(s => s - 1)}
                className="w-9 h-9 bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <Icon name={"ChevronLeft" as ArtIcon} size={16} className="text-white" />
              </button>
              <div className="flex gap-2">
                {[0, 1, 2, 3].map(j => (
                  <button
                    key={j}
                    onClick={() => setGallerySub(j)}
                    className="w-16 h-16 overflow-hidden border-2 transition-all"
                    style={{ borderColor: gallerySub === j ? "white" : "transparent" }}
                  >
                    <img
                      src={galleryImgs[(galleryIdx + j) % galleryImgs.length]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setGallerySub(s => s + 1)}
                className="w-9 h-9 bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <Icon name={"ChevronRight" as ArtIcon} size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── PROCESS ── */}
      <section id="процесс" className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide text-center mb-2">Как мы работаем</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-12" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative overflow-hidden rounded-xl group" style={{ height: 340 }}>
                  {/* Background photo */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Number — серая подложка top-right */}
                  <div className="absolute top-3 right-3 bg-gray-800/75 backdrop-blur-sm text-white font-display font-bold text-sm px-2.5 py-1 rounded">
                    {s.num}
                  </div>
                  {/* Text — серая подложка снизу */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-800/80 backdrop-blur-sm px-5 py-4">
                    <h3 className="font-display font-bold text-white text-sm uppercase leading-snug mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-gray-200 text-[11px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="о компании" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wide mb-2">О компании</h2>
            <div className="w-12 h-0.5 bg-warm mx-auto mb-8" />
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Привет! Мы команда <strong>Art-Dizo</strong> — производители подарочных упаковок.
            </p>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              Мы обожаем подарочную упаковку и всё, что с ней связано. Хотим, чтобы каждый подарок обрёл достойную упаковку, сделанную с душой.
            </p>
            <p className="text-[15px] font-semibold text-ink">Дарите красиво вместе с Art-DiZo!</p>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 bg-[#F9F7F4]">
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
      <section id="контакты" className="py-16 bg-white">
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
                    { label: "Ваше имя",           ph: "Александр" },
                    { label: "Телефон / Telegram",  ph: "+7 (___) ___-__-__" },
                    { label: "Компания / Бренд",    ph: "Название компании" },
                    { label: "Тираж (прим.)",        ph: "от 100 штук" },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-500 block mb-1.5">{f.label}</label>
                      <input
                        type="text"
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
                    { icon: "Phone" as ArtIcon,         text: "+7 (495) 161-68-73",   sub: "Бесплатно по России" },
                    { icon: "Mail" as ArtIcon,          text: "online@art-dizo.ru",   sub: "Ответ за 1 час" },
                    { icon: "MessageCircle" as ArtIcon, text: "@artdizo_official",    sub: "Telegram / WhatsApp" },
                    { icon: "MapPin" as ArtIcon,        text: "г. Москва, ул. Шеногина 4, корп. 1, стр. 1", sub: "" },
                    { icon: "Clock" as ArtIcon,         text: "Пн – Пт: 9:00 – 18:00", sub: "" },
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
                  <p className="text-[12px] text-white/60">Включает разработку дизайна</p>
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

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}