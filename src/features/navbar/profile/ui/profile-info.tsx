import { Avatar, AvatarFallback, AvatarImage } from "@/src/shared/ui/avatar";
import { FC } from "react";
import { TProfileInfoProps } from "../models/types";
import { MoreVertical } from "lucide-react";

const ProfileInfo: FC<TProfileInfoProps> = ({ user, isShowIcon }) => {
  return (
    <div className="flex items-center justify-between w-full cursor-pointer">
      <div className="flex gap-2 items-center">
        <Avatar className="h-8 w-8 rounded-lg grayscale">
          <AvatarImage src={user?.avatarUrl ?? ""} alt={user?.email} />
          <AvatarFallback className="rounded-lg">
            {user?.email[0].toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="text-muted-foreground truncate text-xs">{user?.email}</span>
        </div>
      </div>
      {isShowIcon ? <MoreVertical className="ml-auto size-4" /> : null}
    </div>
  );
};

export default ProfileInfo;
