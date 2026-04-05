import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Section, navItems } from "./types";

interface FooterProps {
  navigate: (section: Section) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center">
                <Icon name="Building2" size={16} className="text-white" />
              </div>
              <span className="font-heading font-black text-white">ТСЖ «Наш Дом»</span>
            </div>
            <p className="text-sm leading-relaxed">Профессиональное управление жилым домом с 2010 года</p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-3">Навигация</h4>
            <ul className="space-y-2">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <button onClick={() => navigate(item.id)} className="text-sm hover:text-white transition-colors">{item.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-3">Сервисы</h4>
            <ul className="space-y-2">
              {navItems.slice(4).map((item) => (
                <li key={item.id}>
                  <button onClick={() => navigate(item.id)} className="text-sm hover:text-white transition-colors">{item.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-3">Контакты</h4>
            <div className="space-y-2 text-sm">
              <div>+7 (495) 123-45-67</div>
              <div>info@tsj-nashdom.ru</div>
              <div>ул. Центральная, 42</div>
              <div className="mt-3">
                <Badge className="bg-emerald-900/50 text-emerald-400 border-emerald-800 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5 animate-pulse" />
                  Аварийная: 999-00-11
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs">© 2026 ТСЖ «Наш Дом». Все права защищены.</span>
          <div className="flex gap-4 text-xs">
            <button className="hover:text-white transition-colors">Политика конфиденциальности</button>
            <button className="hover:text-white transition-colors">Пользовательское соглашение</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
