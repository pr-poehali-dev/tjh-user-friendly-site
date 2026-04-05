export type Section = "home" | "about" | "services" | "cabinet" | "meters" | "payments" | "documents" | "contacts";

export const navItems: { id: Section; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О ТСЖ" },
  { id: "services", label: "Услуги" },
  { id: "cabinet", label: "ЛК жильца" },
  { id: "meters", label: "Показания" },
  { id: "payments", label: "Платежи" },
  { id: "documents", label: "Документы" },
  { id: "contacts", label: "Контакты" },
];
