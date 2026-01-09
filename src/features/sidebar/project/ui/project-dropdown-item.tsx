"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/src/shared/ui/sidebar";
import { FC } from "react";
import ProjectInfo from "./project-info";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/shared/ui/dropdown-menu";
import AddProject from "./add-project";
import { currentProjectSelector, projectsSelector } from "@/src/entities/project/store/selectors";
import { useProjectStore } from "@/src/entities/project/store/project";

const ProjectDropdownItem: FC = () => {
  const { isMobile } = useSidebar();
  const project = useProjectStore(currentProjectSelector);
  const projects = useProjectStore(projectsSelector);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          {project ? (
            <>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <ProjectInfo isShowIcon project={project} />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-sidebar"
                side={isMobile ? "top" : "right"}
              >
                {projects.map((project) => (
                  <DropdownMenuItem key={project.id}>
                    <ProjectInfo project={project} />
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <AddProject />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </>
          ) : (
            <SidebarMenuButton>
              <AddProject />
            </SidebarMenuButton>
          )}
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default ProjectDropdownItem;
