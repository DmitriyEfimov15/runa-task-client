import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/src/shared/ui/sidebar";
import { Skeleton } from "@/src/shared/ui/skeleton";

export const SideBarDropdownSkeleton = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" disabled>
          <div className="flex items-center gap-3 w-full">
            <Skeleton className="h-9 w-9 rounded-full bg-sidebar-ring/40" />
            <div className="flex flex-col gap-1 flex-1">
              <Skeleton className="h-3 w-24 bg-sidebar-ring/30" />
              <Skeleton className="h-3 w-16 bg-sidebar-ring/20" />
            </div>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
