import { FC } from "react";
import { TProjectInfoProps } from "../models/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/shared/ui/avatar";
import { MoreVertical } from "lucide-react";

const ProjectInfo: FC<TProjectInfoProps> = ({ project, isShowIcon }) => {
  return (
    <div className="flex items-center justify-between w-full cursor-pointer">
      <Avatar className="h-8 w-8 rounded-lg grayscale">
        <AvatarImage src={project?.avatarUrl ?? ""} alt={project?.name} />
        <AvatarFallback className="rounded-lg">
          {project?.name[0].toLocaleUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="text-muted-foreground truncate text-xs">{project?.name}</span>
      </div>
      {isShowIcon ? <MoreVertical className="ml-auto size-4" /> : null}
    </div>
  );
};

export default ProjectInfo;
