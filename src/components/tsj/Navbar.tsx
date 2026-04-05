import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Section, navItems } from "./types";

interface NavbarProps {
  active: Section;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navigate: (section: Section) => void;
}

export default function Navbar({ active, menuOpen, setMenuOpen, navigate }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 glass shadow-sm">
      <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => navigate("home")} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center shadow-md">
            <Icon name="Building2" size={18} className="text-white" />
          </div>
          <span className="font-heading font-800 text-lg leading-none">
            <span className="gradient-text font-black">ТСЖ</span>
            <span className="text-foreground ml-1 font-bold">«Наш Дом»</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`nav-link text-sm font-medium transition-colors ${active === item.id ? "text-brand-blue active" : "text-muted-foreground hover:text-foreground"}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            onClick={() => navigate("cabinet")}
            className="hidden md:flex bg-gradient-to-r from-brand-blue to-brand-violet text-white border-0 hover:opacity-90 shadow-md"
          >
            <Icon name="User" size={14} className="mr-1" />
            Войти
          </Button>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t bg-white/95 backdrop-blur animate-fade-in">
          <div className="container max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active === item.id ? "bg-blue-50 text-brand-blue" : "text-foreground hover:bg-muted"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
