import ChangeAvatarForm from "@/src/features/profile-settings/avatar/ui/changeAvatar";
import ChangeEmail from "@/src/features/profile-settings/email/ui/change-email";
import ChangePassword from "@/src/features/profile-settings/password/ui/change-password";
import { Separator } from "@/src/shared/ui/separator";
import { FC } from "react";

const ProfileSettings: FC = () => {
  return (
    <div className="flex items-center flex-col gap-6 md:flex-row md:items-start">
      <div className="w-full md:w-64">
        <ChangeAvatarForm />
      </div>

      <div className="w-full">
        <div className="md:w-100">
          <ChangeEmail />
        </div>
        <Separator className="my-4" />
        
        <div className="md:w-100">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
