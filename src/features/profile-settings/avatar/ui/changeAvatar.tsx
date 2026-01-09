"use client";

import { FC, useState, useEffect } from "react";
import { useChangeAvatar } from "@/src/entities/auth/hooks/useChangeAvatar";
import { useGetProfile } from "@/src/entities/auth/hooks/useGetProfile";
import { userSelector } from "@/src/entities/auth/store/selectors";
import { useUserStore } from "@/src/entities/auth/store/user";
import { ProfileAvatarImage } from "@/src/shared/ui/avatar";
import { Button } from "@/src/shared/ui/button";
import { Skeleton } from "@/src/shared/ui/skeleton";
import { UploadFile } from "@/src/shared/ui/upload-file";

const ChangeAvatarForm: FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const user = useUserStore(userSelector);
  const changeAvatar = useChangeAvatar();
  const { refetch } = useGetProfile();

  const onSubmitFiles = async (files: File[]) => {
    await changeAvatar.mutateAsync({ avatar: files[0] });
    refetch();
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="w-64 h-64">
        {user ? <ProfileAvatarImage user={user} /> : <Skeleton className="w-full h-full" />}
      </div>
      <UploadFile
        onSubmit={onSubmitFiles}
        accept="image/*"
        open={isOpen}
        onOpenChange={setIsOpen}
        loading={changeAvatar.isPending}
      >
        <Button className="w-64">Cменить аватар</Button>
      </UploadFile>
    </div>
  );
};

export default ChangeAvatarForm;
