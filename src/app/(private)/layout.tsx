import { SidebarInset, SidebarProvider } from "@/src/shared/ui/sidebar";
import { SiteHeader } from "@/src/shared/ui/siteheader";
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
        <SiteHeader />
        <div className="p-2 h-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
