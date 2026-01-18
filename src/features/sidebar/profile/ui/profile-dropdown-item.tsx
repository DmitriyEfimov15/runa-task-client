"use client";

import { userSelector } from "@/src/entities/auth/store/selectors";
import { useUserStore } from "@/src/entities/auth/store/user";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/src/shared/ui/sidebar";
import ProfileInfo from "./profile-info";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/shared/ui/dropdown-menu";
import { LogOut, UserCircle2 } from "lucide-react";
import { useLogout } from "@/src/entities/auth/hooks/useLogout";
import { useRouter } from "next/navigation";
import { AUTH_ROUTES } from "@/src/shared/constants/routes/auth/routes";
import { PRIVATE_ROUTES } from "@/src/shared/constants/routes/private/routes";
import { SideBarDropdownSkeleton } from "@/src/shared/ui/sidebar-dropdown-skeleton";

const ProfileDropdownItem = () => {
  const user = useUserStore(userSelector);
  const logoutMethod = useLogout();
  const router = useRouter();
  const { isMobile } = useSidebar();

  if (!user) {
    return <SideBarDropdownSkeleton />;
  }

  const handleLogout = async () => {
    await logoutMethod.mutateAsync();
    router.push(AUTH_ROUTES.LOGIN);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <ProfileInfo isShowIcon user={user} />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-sidebar"
            side={isMobile ? "bottom" : "right"}
          >
            <DropdownMenuLabel>
              <ProfileInfo user={user} />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <SidebarMenuButton asChild>
              <DropdownMenuItem onClick={() => router.push(PRIVATE_ROUTES.PROFILE.path)}>
                <UserCircle2 className="mr-2 h-4 w-4" />
                {PRIVATE_ROUTES.PROFILE.title}
              </DropdownMenuItem>
            </SidebarMenuButton>
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Выйти
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default ProfileDropdownItem;
