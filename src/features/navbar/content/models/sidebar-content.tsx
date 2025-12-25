import { CalendarDays, ChartNoAxesColumn, House, Settings, SquareKanban } from "lucide-react";
import { TSideBarContentItem } from "./types";

export const SIDEBAR_CONTENT_ITEMS: TSideBarContentItem[] = [
  {
    title: "Главная",
    url: "#",
    icon: House,
  },
  {
    title: "Доска",
    url: "#",
    icon: SquareKanban,
  },
  {
    title: "Календарь",
    url: "#",
    icon: CalendarDays,
  },
  {
    title: "Отчеты",
    url: "#",
    icon: ChartNoAxesColumn,
  }
];

export const SIDEBAR_SECONDARY_CONTENT_ITEMS: TSideBarContentItem[] = [
  {
    title: 'Настройки',
    url: '#',
    icon: Settings
  },
];
