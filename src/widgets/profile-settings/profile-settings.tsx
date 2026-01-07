import ChangeAvatarForm from "@/src/features/profile-settings/avatar/ui/changeAvatar";
import ChangeEmail from "@/src/features/profile-settings/email/ui/change-email";
import { Separator } from "@/src/shared/ui/separator";
import { FC } from "react";

const ProfileSettings: FC = () => {
  return (
    <div className="flex gap-6">
      <div>
        <ChangeAvatarForm />
      </div>
      <div className="w-full">
        <ChangeEmail />
        <Separator />
      </div>
    </div>
  );
};

export default ProfileSettings;
