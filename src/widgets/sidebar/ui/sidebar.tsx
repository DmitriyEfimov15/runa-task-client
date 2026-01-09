"use client";

import {
  SIDEBAR_CONTENT_ITEMS,
  SIDEBAR_SECONDARY_CONTENT_ITEMS,
} from "@/src/features/sidebar/content/models/sidebar-content";
import SidebarMainContent from "@/src/features/sidebar/content/ui/sidebar-content";
import ProfileDropdownItem from "@/src/features/sidebar/profile/ui/profile-dropdown-item";
import ProjectDropdownItem from "@/src/features/sidebar/project/ui/project-dropdown-item";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
} from "@/src/shared/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="list-none">
        <SidebarMenuItem>
          <ProjectDropdownItem />
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMainContent items={SIDEBAR_CONTENT_ITEMS} />
        <SidebarMainContent items={SIDEBAR_SECONDARY_CONTENT_ITEMS} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <ProfileDropdownItem />
      </SidebarFooter>
    </Sidebar>
  );
}
