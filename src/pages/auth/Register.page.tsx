import { RegisterCard } from "@/src/features/auth/ui/register-card";
import CenterFlex from "@/src/shared/ui/centerFlex";
import { FC } from "react";

const RegisterPage: FC = () => {
  return (
    <CenterFlex>
      <RegisterCard />
    </CenterFlex>
  );
};

export default RegisterPage;
