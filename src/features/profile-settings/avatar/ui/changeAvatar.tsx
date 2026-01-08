"use client";

import { useChangeAvatar } from "@/src/entities/auth/hooks/useChangeAvatar";
import { useGetProfile } from "@/src/entities/auth/hooks/useGetProfile";
import { userSelector } from "@/src/entities/auth/store/selectors";
import { useUserStore } from "@/src/entities/auth/store/user";
import { ProfileAvatarImage } from "@/src/shared/ui/avatar";
import { Button } from "@/src/shared/ui/button";
import { Skeleton } from "@/src/shared/ui/skeleton";
import { UploadFile } from "@/src/shared/ui/upload-file";
import { FC, useState } from "react";

const ChangeAvatarForm: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = useUserStore(userSelector);
  const changeAvatar = useChangeAvatar();
  const { refetch } = useGetProfile();

  const onSubmitFiles = async (files: File[]) => {
    await changeAvatar.mutateAsync({ avatar: files[0] });
    refetch();
    setIsOpen(false)
  };

  return (
    <div>
      <div className="flex flex-col gap-2 items-center">
        <div className="w-64 h-64">
          {user ? <ProfileAvatarImage user={user} /> : <Skeleton className="w-full h-full" />}
        </div>
        <UploadFile
          onSubmit={onSubmitFiles}
          accept="image/*"
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <Button className="w-64" loading={changeAvatar.isPending}>
            Cменить аватар
          </Button>
        </UploadFile>
      </div>
    </div>
  );
};

export default ChangeAvatarForm;
