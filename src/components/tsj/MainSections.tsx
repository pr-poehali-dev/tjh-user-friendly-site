import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./types";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/22e3422d-73c4-4826-b38c-3cb794fa1f00/files/8d921774-2fd7-4a46-95de-d5b4f6ee68fb.jpg";

interface MainSectionsProps {
  active: Section;
  navigate: (section: Section) => void;
  meterValues: { cold: string; hot: string; electric: string; gas: string };
  setMeterValues: (v: { cold: string; hot: string; electric: string; gas: string }) => void;
  meterSent: boolean;
  setMeterSent: (v: boolean) => void;
  loginData: { flat: string; password: string };
  setLoginData: (v: { flat: string; password: string }) => void;
  loggedIn: boolean;
  setLoggedIn: (v: boolean) => void;
  contactForm: { name: string; email: string; message: string };
  setContactForm: (v: { name: string; email: string; message: string }) => void;
  contactSent: boolean;
  setContactSent: (v: boolean) => void;
}

export default function MainSections({
  active,
  navigate,
  meterValues,
  setMeterValues,
  meterSent,
  setMeterSent,
  loginData,
  setLoginData,
  loggedIn,
  setLoggedIn,
  contactForm,
  setContactForm,
  contactSent,
  setContactSent,
}: MainSectionsProps) {
  return (
    <main>
      {/* ═══════════ HOME ═══════════ */}
      {active === "home" && (
        <div>
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950 min-h-[90vh] flex items-center">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl animate-blob" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl animate-blob delay-300" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl animate-blob delay-600" />

            <div className="absolute inset-0 opacity-15">
              <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />

            <div className="relative container max-w-6xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <Badge className="bg-white/10 text-white border-white/20 text-xs backdrop-blur px-3 py-1">
                  🏢 Современное управление домом
                </Badge>
                <h1 className="font-heading text-5xl lg:text-6xl font-black leading-[1.05] text-white">
                  Ваш дом
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    в надёжных руках
                  </span>
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                  Передавайте показания счётчиков, оплачивайте квитанции и получайте документы — всё в одном месте, онлайн и без очередей.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    size="lg"
                    onClick={() => navigate("cabinet")}
                    className="bg-gradient-to-r from-blue-500 to-violet-600 text-white border-0 hover:opacity-90 shadow-xl text-base px-6"
                  >
                    <Icon name="LogIn" size={18} className="mr-2" />
                    Войти в кабинет
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate("services")}
                    className="border-white/30 text-white hover:bg-white/10 bg-white/5 text-base px-6"
                  >
                    Наши услуги
                  </Button>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  {[
                    { value: "1 200+", label: "жильцов" },
                    { value: "14 лет", label: "на рынке" },
                    { value: "24/7", label: "поддержка" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-heading font-black text-white">{stat.value}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex justify-end animate-fade-in-up delay-300">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-3xl opacity-20 blur-2xl" />
                  <div className="relative glass rounded-3xl p-6 w-80 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-slate-800">Быстрые действия</span>
                      <Badge className="bg-green-100 text-green-700 text-xs border-0">Онлайн</Badge>
                    </div>
                    {[
                      { icon: "Gauge", label: "Передать показания", color: "from-blue-500 to-cyan-400", section: "meters" as Section },
                      { icon: "CreditCard", label: "Оплатить счёт", color: "from-violet-500 to-purple-400", section: "payments" as Section },
                      { icon: "FileText", label: "Скачать документы", color: "from-orange-400 to-amber-400", section: "documents" as Section },
                      { icon: "MessageSquare", label: "Написать в УК", color: "from-teal-500 to-emerald-400", section: "contacts" as Section },
                    ].map((action) => (
                      <button
                        key={action.label}
                        onClick={() => navigate(action.section)}
                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                          <Icon name={action.icon} size={16} className="text-white" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{action.label}</span>
                        <Icon name="ChevronRight" size={14} className="ml-auto text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features strip */}
          <section className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue bg-[length:200%] py-4">
            <div className="container max-w-6xl mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
                {["✅ Онлайн-оплата", "📊 Учёт ресурсов", "📧 Электронные квитанции", "🔧 Заявки на ремонт", "📄 Все документы онлайн"].map((item) => (
                  <span key={item} className="text-white/90 text-sm font-medium">{item}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Services preview */}
          <section className="py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="container max-w-6xl mx-auto px-4">
              <div className="text-center mb-14 animate-fade-in-up">
                <Badge className="bg-blue-100 text-brand-blue border-0 mb-3">Что мы делаем</Badge>
                <h2 className="font-heading text-4xl font-black">Всё для комфортной жизни</h2>
                <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Управляем вашим домом профессионально — от лифтов до придомовой территории</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "Wrench", title: "Техническое обслуживание", desc: "Плановый и аварийный ремонт инженерных систем 24/7", color: "from-blue-500 to-cyan-500" },
                  { icon: "Shield", title: "Безопасность", desc: "Видеонаблюдение, консьерж и контроль доступа в подъезды", color: "from-violet-500 to-purple-600" },
                  { icon: "Leaf", title: "Благоустройство", desc: "Уборка придомовой территории, озеленение, вывоз мусора", color: "from-emerald-500 to-teal-500" },
                  { icon: "Zap", title: "Учёт ресурсов", desc: "Автоматический сбор показаний и расчёт платежей", color: "from-amber-500 to-orange-500" },
                  { icon: "FileCheck", title: "Документооборот", desc: "Электронные справки, договоры и акты без очередей", color: "from-pink-500 to-rose-500" },
                  { icon: "Mail", title: "Квитанции на email", desc: "Формирование и отправка квитанций автоматически каждый месяц", color: "from-indigo-500 to-blue-600" },
                ].map((card, i) => (
                  <div
                    key={card.title}
                    style={{ animationDelay: `${i * 0.1}s` }}
                    className="animate-fade-in-up group p-6 rounded-2xl bg-white border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    onClick={() => navigate("services")}
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon name={card.icon} size={22} className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-violet-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative container max-w-4xl mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl lg:text-4xl font-black text-white mb-4">
                Получайте квитанции на email автоматически
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                Настройте один раз — и каждый месяц квитанция сама придёт на вашу почту. Никаких бумажек, никаких очередей.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("cabinet")}
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-base px-8 shadow-xl"
              >
                <Icon name="Mail" size={18} className="mr-2" />
                Подключить квитанции на email
              </Button>
            </div>
          </section>

          {/* News */}
          <section className="py-20">
            <div className="container max-w-6xl mx-auto px-4">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <Badge className="bg-orange-100 text-orange-600 border-0 mb-2">Новости</Badge>
                  <h2 className="font-heading text-3xl font-black">Последние события</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { date: "01 апр 2026", tag: "Важно", color: "bg-red-100 text-red-600", title: "Плановое отключение воды 5 апреля", desc: "С 9:00 до 17:00 в подъездах 1–3 будут проводиться профилактические работы на водопроводе." },
                  { date: "25 мар 2026", tag: "Обслуживание", color: "bg-blue-100 text-blue-600", title: "Завершён ремонт лифтов", desc: "В подъезде №2 установлен новый лифт компании OTIS. Теперь лифт работает тихо и быстро." },
                  { date: "15 мар 2026", tag: "Благоустройство", color: "bg-green-100 text-green-600", title: "Новая детская площадка открыта", desc: "Во дворе установлен новый игровой комплекс с безопасным покрытием для детей всех возрастов." },
                ].map((news) => (
                  <div key={news.title} className="p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={`${news.color} border-0 text-xs`}>{news.tag}</Badge>
                      <span className="text-xs text-muted-foreground">{news.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-base mb-2 group-hover:text-brand-blue transition-colors">{news.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{news.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ═══════════ ABOUT ═══════════ */}
      {active === "about" && (
        <div className="animate-fade-in">
          <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 py-24">
            <div className="absolute inset-0 opacity-10">
              <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative container max-w-4xl mx-auto px-4 text-center">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">О нас</Badge>
              <h1 className="font-heading text-5xl font-black text-white mb-4">ТСЖ «Наш Дом»</h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">Товарищество собственников жилья, которое работает для вас с 2010 года</p>
            </div>
          </section>

          <section className="py-16">
            <div className="container max-w-5xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  <h2 className="font-heading text-3xl font-black">Наша миссия</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Мы создаём комфортную и безопасную среду для проживания. Наша цель — прозрачное управление, оперативное реагирование и постоянное улучшение качества жизни жильцов.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    ТСЖ «Наш Дом» управляет жилым комплексом по адресу ул. Центральная, 42. В нашем ведении 6 подъездов, 240 квартир, подземный паркинг и придомовая территория площадью 1,2 га.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {[
                      { value: "2010", label: "Год основания" },
                      { value: "240", label: "Квартир" },
                      { value: "6", label: "Подъездов" },
                      { value: "12", label: "Сотрудников" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-100">
                        <div className="font-heading text-3xl font-black gradient-text">{stat.value}</div>
                        <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-violet-200 rounded-3xl opacity-50 blur-2xl" />
                  <img src={HERO_IMAGE} alt="Наш дом" className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
                </div>
              </div>

              <h2 className="font-heading text-3xl font-black text-center mb-10">Правление ТСЖ</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { name: "Иванов Сергей Петрович", role: "Председатель правления", icon: "UserCheck" },
                  { name: "Петрова Елена Николаевна", role: "Главный бухгалтер", icon: "Calculator" },
                  { name: "Сидоров Алексей Игоревич", role: "Технический директор", icon: "Settings" },
                ].map((person) => (
                  <div key={person.name} className="text-center p-6 rounded-2xl border border-border hover:shadow-lg transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Icon name={person.icon} size={28} className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold mb-1">{person.name}</h3>
                    <p className="text-sm text-muted-foreground">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ═══════════ SERVICES ═══════════ */}
      {active === "services" && (
        <div className="animate-fade-in">
          <section className="bg-gradient-to-br from-violet-900 to-blue-900 py-24 relative overflow-hidden">
            <div className="absolute top-10 right-10 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-blob" />
            <div className="relative container max-w-4xl mx-auto px-4 text-center">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Услуги</Badge>
              <h1 className="font-heading text-5xl font-black text-white mb-4">Что входит в управление</h1>
              <p className="text-slate-300 text-lg">Полный спектр услуг по содержанию и управлению жилым домом</p>
            </div>
          </section>

          <section className="py-16">
            <div className="container max-w-5xl mx-auto px-4">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: "Wrench", title: "Техническое обслуживание", color: "from-blue-500 to-cyan-500",
                    items: ["Обслуживание лифтов и эскалаторов", "Ремонт инженерных сетей (водопровод, канализация)", "Обслуживание систем отопления", "Аварийная служба 24/7", "Электрика в местах общего пользования"],
                  },
                  {
                    icon: "Shield", title: "Безопасность и охрана", color: "from-violet-500 to-purple-600",
                    items: ["Видеонаблюдение 24/7 во всех подъездах", "Консьерж-служба", "Домофонные системы", "Контроль доступа на паркинг", "Охрана периметра территории"],
                  },
                  {
                    icon: "Leaf", title: "Благоустройство", color: "from-emerald-500 to-teal-500",
                    items: ["Ежедневная уборка подъездов", "Вывоз твёрдых бытовых отходов", "Уход за газонами и цветниками", "Уборка снега в зимний период", "Обслуживание детских площадок"],
                  },
                  {
                    icon: "Zap", title: "Учёт ресурсов и ЖКХ", color: "from-amber-500 to-orange-500",
                    items: ["Сбор показаний счётчиков", "Расчёт платёжных документов", "Автоматическая отправка квитанций на email", "Работа с поставщиками ресурсов", "Перерасчёты и льготы"],
                  },
                  {
                    icon: "FileCheck", title: "Документы и справки", color: "from-pink-500 to-rose-500",
                    items: ["Справки о составе семьи", "Выписки из реестра собственников", "Договоры на услуги", "Акты выполненных работ", "Финансовая отчётность"],
                  },
                  {
                    icon: "Mail", title: "Электронные квитанции", color: "from-indigo-500 to-blue-600",
                    items: ["Автоформирование квитанций ежемесячно", "Отправка на email жильца", "История платежей в личном кабинете", "Уведомления о задолженности", "Интеграция с банковскими сервисами"],
                  },
                ].map((service) => (
                  <div key={service.title} className="p-6 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon name={service.icon} size={22} className="text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-xl pt-1">{service.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="CheckCircle2" size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ═══════════ CABINET ═══════════ */}
      {active === "cabinet" && (
        <div className="animate-fade-in">
          <section className="bg-gradient-to-br from-slate-900 to-violet-950 py-24 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />
            <div className="relative container max-w-4xl mx-auto px-4 text-center">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Личный кабинет</Badge>
              <h1 className="font-heading text-5xl font-black text-white mb-4">Управляйте онлайн</h1>
              <p className="text-slate-300 text-lg">Войдите, чтобы получить доступ к показаниям, платежам и документам</p>
            </div>
          </section>

          <section className="py-16">
            <div className="container max-w-4xl mx-auto px-4">
              {!loggedIn ? (
                <div className="max-w-md mx-auto">
                  <div className="p-8 rounded-3xl border border-border shadow-xl bg-white">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon name="User" size={28} className="text-white" />
                    </div>
                    <h2 className="font-heading text-2xl font-black text-center mb-1">Вход в кабинет</h2>
                    <p className="text-muted-foreground text-sm text-center mb-6">Введите номер квартиры и пароль</p>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Номер квартиры</label>
                        <Input
                          placeholder="Например: 42"
                          value={loginData.flat}
                          onChange={(e) => setLoginData({ ...loginData, flat: e.target.value })}
                          className="h-11"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Пароль</label>
                        <Input
                          type="password"
                          placeholder="Введите пароль"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          className="h-11"
                        />
                      </div>
                      <Button
                        className="w-full h-11 bg-gradient-to-r from-brand-blue to-brand-violet text-white border-0 hover:opacity-90 font-semibold text-base"
                        onClick={() => setLoggedIn(true)}
                      >
                        Войти в кабинет
                      </Button>
                    </div>

                    <div className="mt-6 pt-6 border-t text-center">
                      <p className="text-sm text-muted-foreground">Забыли пароль?
                        <button className="text-brand-blue font-medium ml-1 hover:underline">Восстановить</button>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">Нет аккаунта?
                        <button className="text-brand-blue font-medium ml-1 hover:underline">Зарегистрироваться</button>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-violet text-white flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                        <Icon name="User" size={26} className="text-white" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-lg">Квартира №{loginData.flat || "42"}</div>
                        <div className="text-blue-100 text-sm">Петров Алексей Иванович</div>
                      </div>
                    </div>
                    <Badge className="bg-white/20 text-white border-0">Активен</Badge>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { icon: "CreditCard", label: "Задолженность", value: "1 250 ₽", color: "from-rose-500 to-pink-500", sub: "Оплатить до 25 апр." },
                      { icon: "Gauge", label: "Холодная вода", value: "143.2 м³", color: "from-blue-500 to-cyan-400", sub: "Следующий: 25 апр." },
                      { icon: "Flame", label: "Горячая вода", value: "58.7 м³", color: "from-orange-500 to-amber-400", sub: "Следующий: 25 апр." },
                      { icon: "Zap", label: "Электричество", value: "5 421 кВт·ч", color: "from-violet-500 to-purple-500", sub: "Следующий: 25 апр." },
                    ].map((card) => (
                      <div key={card.label} className="p-5 rounded-2xl border border-border bg-white hover:shadow-lg transition-all">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 shadow-sm`}>
                          <Icon name={card.icon} size={18} className="text-white" />
                        </div>
                        <div className="text-xs text-muted-foreground mb-1">{card.label}</div>
                        <div className="font-heading font-black text-xl text-foreground">{card.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{card.sub}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { icon: "Gauge", label: "Передать показания", section: "meters" as Section, color: "from-blue-500 to-cyan-500" },
                      { icon: "CreditCard", label: "Оплатить счёт", section: "payments" as Section, color: "from-violet-500 to-purple-600" },
                      { icon: "FileText", label: "Мои документы", section: "documents" as Section, color: "from-emerald-500 to-teal-500" },
                    ].map((action) => (
                      <button
                        key={action.label}
                        onClick={() => navigate(action.section)}
                        className="p-5 rounded-2xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all bg-white flex items-center gap-3 group text-left"
                      >
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          <Icon name={action.icon} size={20} className="text-white" />
                        </div>
                        <span className="font-semibold text-sm">{action.label}</span>
                        <Icon name="ChevronRight" size={16} className="ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center shadow-md flex-shrink-0">
                        <Icon name="Mail" size={22} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold mb-1">Квитанции на email</h3>
                        <p className="text-sm text-muted-foreground mb-3">Получайте квитанции автоматически каждый месяц. Настройте email для доставки.</p>
                        <div className="flex gap-2">
                          <Input placeholder="Ваш email" className="h-9 max-w-xs" />
                          <Button size="sm" className="bg-gradient-to-r from-brand-blue to-brand-violet text-white border-0 hover:opacity-90">
                            Подключить
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <Button variant="outline" size="sm" onClick={() => setLoggedIn(false)}>
                      <Icon name="LogOut" size={14} className="mr-1" /> Выйти
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {/* ═══════════ METERS ═══════════ */}
      {active === "meters" && (
        <div className="animate-fade-in">
          <section className="bg-gradient-to-br from-blue-900 to-cyan-900 py-24 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
            <div className="relative container max-w-4xl mx-auto px-4 text-center">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Показания</Badge>
              <h1 className="font-heading text-5xl font-black text-white mb-4">Передача показаний</h1>
              <p className="text-blue-200 text-lg">Передавайте показания счётчиков онлайн — быстро и удобно</p>
            </div>
          </section>

          <section className="py-16">
            <div className="container max-w-2xl mx-auto px-4">
              {!meterSent ? (
                <div className="p-8 rounded-3xl border border-border shadow-xl bg-white">
                  <h2 className="font-heading text-2xl font-black mb-2">Введите показания</h2>
                  <p className="text-muted-foreground text-sm mb-6">Передайте показания за апрель 2026</p>
                  <div className="space-y-5">
                    {[
                      { key: "cold", icon: "Droplets", label: "Холодная вода", unit: "м³", color: "text-blue-500", prev: "141.5" },
                      { key: "hot", icon: "Flame", label: "Горячая вода", unit: "м³", color: "text-orange-500", prev: "57.2" },
                      { key: "electric", icon: "Zap", label: "Электричество (день)", unit: "кВт·ч", color: "text-violet-500", prev: "5 210" },
                      { key: "gas", icon: "Wind", label: "Газ", unit: "м³", color: "text-emerald-500", prev: "320.1" },
                    ].map((meter) => (
                      <div key={meter.key} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon name={meter.icon} size={20} className={meter.color} />
                          <span className="font-semibold">{meter.label}</span>
                          <span className="ml-auto text-xs text-muted-foreground">Пред.: {meter.prev} {meter.unit}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input
                            placeholder="Введите показание"
                            value={meterValues[meter.key as keyof typeof meterValues]}
                            onChange={(e) => setMeterValues({ ...meterValues, [meter.key]: e.target.value })}
                            className="h-11"
                          />
                          <span className="text-sm text-muted-foreground w-12 flex-shrink-0">{meter.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
                    <Icon name="Info" size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-blue-700">Показания принимаются с 1 по 25 число каждого месяца. После отправки данные передаются для расчёта квитанции.</p>
                  </div>
                  <Button
                    className="w-full mt-5 h-11 bg-gradient-to-r from-brand-blue to-brand-violet text-white border-0 hover:opacity-90 font-semibold text-base"
                    onClick={() => setMeterSent(true)}
                  >
                    <Icon name="Send" size={18} className="mr-2" />
                    Передать показания
                  </Button>
                </div>
              ) : (
                <div className="text-center p-12 rounded-3xl border border-border shadow-xl bg-white animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-5 shadow-xl">
                    <Icon name="CheckCheck" size={36} className="text-white" />
                  </div>
                  <h2 className="font-heading text-2xl font-black mb-2">Показания переданы!</h2>
                  <p className="text-muted-foreground mb-6">Ваши данные приняты и будут учтены при формировании квитанции за апрель 2026</p>
                  <Button variant="outline" onClick={() => setMeterSent(false)} className="mr-3">Передать снова</Button>
                  <Button onClick={() => navigate("cabinet")} className="bg-gradient-to-r from-brand-blue to-brand-violet text-white border-0 hover:opacity-90">
                    В кабинет
                  </Button>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {/* ═══════════ PAYMENTS ═══════════ */}
      {active === "payments" && (
        <div className="animate-fade-in">
          <section className="bg-gradient-to-br from-violet-900 to-indigo-900 py-24 relative overflow-hidden">
            <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="relative container max-w-4xl mx-auto px-4 text-center">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Платежи</Badge>
              <h1 className="font-heading text-5xl font-black text-white mb-4">Онлайн-платежи</h1>
              <p className="text-violet-200 text-lg">История платежей и оплата счетов без комиссии</p>
            </div>
          </section>

          <section className="py-16">
            <div className="container max-w-4xl mx-auto px-4 space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-violet-200 text-sm mb-1">Текущая задолженность</div>
                    <div className="font-heading font-black text-4xl">1 250 ₽</div>
                    <div className="text-violet-200 text-sm mt-1">Квартира №42 · Апрель 2026</div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-white/20 text-white border-0 mb-3">До 25 апреля</Badge>
                    <div>
                      <Button className="bg-white text-violet-700 hover:bg-violet-50 font-bold shadow-lg">
                        <Icon name="CreditCard" size={16} className="mr-2" />
                        Оплатить сейчас
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-white">
                <h3 className="font-heading font-bold text-lg mb-4">Расшифровка начислений</h3>
                <div className="space-y-3">
                  {[
                    { label: "Содержание и ремонт", amount: "450.00 ₽" },
                    { label: "Холодное водоснабжение", amount: "180.50 ₽" },
                    { label: "Горячее водоснабжение", amount: "290.20 ₽" },
                    { label: "Электроснабжение", amount: "185.30 ₽" },
                    { label: "Отопление", amount: "144.00 ₽" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="font-semibold text-sm">{item.amount}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2 font-bold">
                    <span>Итого</span>
                    <span className="text-lg gradient-text">1 250.00 ₽</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-white">
                <h3 className="font-heading font-bold text-lg mb-4">История платежей</h3>
                <div className="space-y-3">
                  {[
                    { month: "Март 2026", amount: "1 180 ₽", date: "22 марта", status: "Оплачено" },
                    { month: "Февраль 2026", amount: "1 340 ₽", date: "18 февраля", status: "Оплачено" },
                    { month: "Январь 2026", amount: "1 290 ₽", date: "20 января", status: "Оплачено" },
                    { month: "Декабрь 2025", amount: "1 420 ₽", date: "19 декабря", status: "Оплачено" },
                  ].map((payment) => (
                    <div key={payment.month} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                          <Icon name="CheckCircle" size={16} className="text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{payment.month}</div>
                          <div className="text-xs text-muted-foreground">{payment.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm">{payment.amount}</div>
                        <Badge className="bg-emerald-100 text-emerald-600 border-0 text-xs">{payment.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ═══════════ DOCUMENTS ═══════════ */}
      {active === "documents" && (
        <div className="animate-fade-in">
          <section className="bg-gradient-to-br from-emerald-900 to-teal-900 py-24 relative overflow-hidden">
            <div className="absolute right-10 bottom-0 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
            <div className="relative container max-w-4xl mx-auto px-4 text-center">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Документы</Badge>
              <h1 className="font-heading text-5xl font-black text-white mb-4">База документов</h1>
              <p className="text-emerald-200 text-lg">Все важные документы в одном месте — скачивайте когда нужно</p>
            </div>
          </section>

          <section className="py-16">
            <div className="container max-w-4xl mx-auto px-4">
              {[
                {
                  category: "Устав и регламенты", icon: "BookOpen",
                  docs: [
                    { name: "Устав ТСЖ «Наш Дом»", size: "1.2 МБ", date: "01.01.2024", type: "PDF" },
                    { name: "Правила внутреннего распорядка", size: "340 КБ", date: "15.03.2024", type: "PDF" },
                    { name: "Договор на управление МКД", size: "890 КБ", date: "01.01.2025", type: "PDF" },
                  ],
                },
                {
                  category: "Финансовая отчётность", icon: "BarChart3",
                  docs: [
                    { name: "Отчёт о доходах и расходах 2025", size: "2.1 МБ", date: "31.12.2025", type: "XLSX" },
                    { name: "Смета расходов на 2026 год", size: "780 КБ", date: "15.01.2026", type: "PDF" },
                    { name: "Протокол общего собрания 2025", size: "450 КБ", date: "20.11.2025", type: "PDF" },
                  ],
                },
                {
                  category: "Тарифы и нормативы", icon: "Calculator",
                  docs: [
                    { name: "Тарифы на ЖКУ 2026 год", size: "210 КБ", date: "01.01.2026", type: "PDF" },
                    { name: "Нормативы потребления ресурсов", size: "155 КБ", date: "01.07.2025", type: "PDF" },
                  ],
                },
                {
                  category: "Технические документы", icon: "FileCode2",
                  docs: [
                    { name: "Технический паспорт дома", size: "5.4 МБ", date: "2010 год", type: "PDF" },
                    { name: "Акт весенне-летнего осмотра 2025", size: "620 КБ", date: "15.04.2025", type: "PDF" },
                    { name: "Акт осенне-зимнего осмотра 2025", size: "580 КБ", date: "20.10.2025", type: "PDF" },
                  ],
                },
              ].map((section) => (
                <div key={section.category} className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm">
                      <Icon name={section.icon} size={16} className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg">{section.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {section.docs.map((doc) => (
                      <div key={doc.name} className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-slate-50 hover:shadow-sm transition-all group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                            <Icon name="FileText" size={18} className="text-slate-500" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{doc.name}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{doc.size} · {doc.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-slate-100 text-slate-600 border-0 text-xs">{doc.type}</Badge>
                          <button className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                            <Icon name="Download" size={14} className="text-white" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ═══════════ CONTACTS ═══════════ */}
      {active === "contacts" && (
        <div className="animate-fade-in">
          <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-24 relative overflow-hidden">
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl" />
            <div className="relative container max-w-4xl mx-auto px-4 text-center">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Контакты</Badge>
              <h1 className="font-heading text-5xl font-black text-white mb-4">Свяжитесь с нами</h1>
              <p className="text-slate-300 text-lg">Мы готовы помочь — оставьте обращение или позвоните напрямую</p>
            </div>
          </section>

          <section className="py-16">
            <div className="container max-w-5xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h2 className="font-heading text-2xl font-black">Контактная информация</h2>
                  <div className="space-y-4">
                    {[
                      { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Центральная, д. 42", color: "from-blue-500 to-cyan-500" },
                      { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67", color: "from-violet-500 to-purple-500" },
                      { icon: "Mail", label: "Email", value: "info@tsj-nashdom.ru", color: "from-orange-400 to-amber-500" },
                      { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00\nСб: 10:00–15:00", color: "from-emerald-500 to-teal-500" },
                      { icon: "AlertCircle", label: "Аварийная служба", value: "+7 (495) 999-00-11 (24/7)", color: "from-rose-500 to-pink-500" },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-4 p-4 rounded-xl border border-border hover:bg-slate-50 transition-colors">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                          <Icon name={item.icon} size={18} className="text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                          <div className="font-semibold text-sm whitespace-pre-line">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-black mb-6">Написать обращение</h2>
                  {!contactSent ? (
                    <div className="p-6 rounded-2xl border border-border bg-white shadow-lg space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Ваше имя</label>
                        <Input placeholder="Иван Петров" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="h-11" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email для ответа</label>
                        <Input placeholder="ivan@mail.ru" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="h-11" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Текст обращения</label>
                        <Textarea placeholder="Опишите вашу проблему или вопрос..." rows={5} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} />
                      </div>
                      <Button
                        className="w-full h-11 bg-gradient-to-r from-brand-blue to-brand-violet text-white border-0 hover:opacity-90 font-semibold text-base"
                        onClick={() => setContactSent(true)}
                      >
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить обращение
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center p-10 rounded-2xl border border-border shadow-lg animate-scale-in">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <Icon name="CheckCheck" size={28} className="text-white" />
                      </div>
                      <h3 className="font-heading font-black text-xl mb-2">Обращение отправлено!</h3>
                      <p className="text-muted-foreground text-sm mb-5">Мы ответим на {contactForm.email || "ваш email"} в течение 1 рабочего дня</p>
                      <Button variant="outline" onClick={() => setContactSent(false)}>Отправить ещё</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
