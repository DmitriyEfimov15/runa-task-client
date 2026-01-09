"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/shared/ui/sidebar";
import { FC } from "react";
import { TSidebarMainContentProps } from "../models/types";
import { useRouter } from "next/navigation";

const SidebarMainContent: FC<
  TSidebarMainContentProps & React.ComponentPropsWithoutRef<typeof SidebarGroup>
> = ({ items, ...props }) => {
  const router = useRouter();
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem onClick={() => router.push(item.path)} key={item.title}>
              <SidebarMenuButton className="cursor-pointer" tooltip={item.title}>
                {item.icon && <item.icon />}
                <span className="transition-all duration-300 overflow-hidden whitespace-nowrap sidebar-collapsed:!w-0 sidebar-collapsed:opacity-0">
                  {item.title}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarMainContent;
