import { CalendarDays, ChartNoAxesColumn, House, LucideIcon, Settings, SquareKanban } from "lucide-react";
import { TSideBarContentItem } from "./types";
import { PRIVATE_ROUTES } from "@/src/shared/constants/routes/private/routes";
import { TSidebarKeys } from "@/src/shared/lib/types/sidebar.types";

const sidebarKeys: Array<TSidebarKeys> = [
  "HOME",
  "DESK",
  "CALENDAR",
  "REPORTS",
];

const iconsMap: Record<typeof sidebarKeys[number], LucideIcon> = {
  HOME: House,
  DESK: SquareKanban,
  CALENDAR: CalendarDays,
  REPORTS: ChartNoAxesColumn,
};

export const SIDEBAR_CONTENT_ITEMS: TSideBarContentItem[] = sidebarKeys.map((key) => ({
  title: PRIVATE_ROUTES[key].title,
  path: PRIVATE_ROUTES[key].path,
  icon: iconsMap[key],
}));


export const SIDEBAR_SECONDARY_CONTENT_ITEMS: TSideBarContentItem[] = [
  {
    title: PRIVATE_ROUTES.SETTINGS.title,
    path: PRIVATE_ROUTES.SETTINGS.path,
    icon: Settings
  },
];
