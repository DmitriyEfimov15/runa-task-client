"use client";

import { userSelector } from "@/src/entities/auth/store/selectors";
import { useUserStore } from "@/src/entities/auth/store/user";
import { ProfileAvatarImage } from "@/src/shared/ui/avatar";
import { Button } from "@/src/shared/ui/button";
import { FC } from "react";

const ChangeAvatarForm: FC = () => {
  const user = useUserStore(userSelector);
  if (!user) {
    return null;
  }
  return (
    <div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-64 h-64">
          <ProfileAvatarImage user={user} />
        </div>
        <Button className="w-64">Cменить аватар</Button>
      </div>
    </div>
  );
};

export default ChangeAvatarForm;
