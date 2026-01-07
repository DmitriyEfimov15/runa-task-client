"use client";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./sidebar";
import { Separator } from "./separator";
import { getRouteTitle } from "../lib/utils/getRouteTitle";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 py-2">
      <div className="flex w-full items-center gap-1 px-4 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 h-4" />
        <h1 className="text-base font-medium">{pathname ? getRouteTitle(pathname) : null}</h1>
      </div>
      <div className="px-1">
        <ThemeToggle />
      </div>
    </header>
  );
}
