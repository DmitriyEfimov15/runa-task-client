import { useMutation } from "@tanstack/react-query";
import { requestChangeEmail } from "../api/authApi";
import { TRequestChangeEmailForm } from "@/src/features/profile-settings/email/model/types";

export const useRequestChangeEmail = () => {
  return useMutation({
    mutationFn: (data: TRequestChangeEmailForm) => requestChangeEmail(data),
  });
};
