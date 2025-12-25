import { SendRequestCard } from "@/src/features/auth/ui/send-request-card";
import CenterFlex from "@/src/shared/ui/centerFlex";
import { FC } from "react";

const SendRequestToChangePassword: FC = () => {
  return (
    <CenterFlex>
      <SendRequestCard />
    </CenterFlex>
  );
};

export default SendRequestToChangePassword;
