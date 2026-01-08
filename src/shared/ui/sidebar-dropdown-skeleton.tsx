import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/src/shared/ui/sidebar";
import { Skeleton } from "@/src/shared/ui/skeleton";

export const SideBarDropdownSkeleton = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" disabled>
          <div className="flex items-center gap-3 w-full">
            <Skeleton className="h-9 w-9 rounded-full" />
            <div className="flex flex-col gap-1 flex-1">
              <Skeleton className="h-3 w-24 bg-skeleton/30" />
              <Skeleton className="h-3 w-16 bg-skeleton/20" />
            </div>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
