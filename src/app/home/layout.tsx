import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/src/shared/ui/sidebar";
import { AppSidebar } from "@/src/widgets/sidebar/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
