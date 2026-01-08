import { TChangePasswordForAuthorizedForm } from "@/src/features/profile-settings/password/model/types";
import { useMutation } from "@tanstack/react-query";
import { changePasswordForAuthorized } from "../api/authApi";

export const useChangePasswordForAuthorized = () => {
  return useMutation({
    mutationFn: (data: TChangePasswordForAuthorizedForm) => changePasswordForAuthorized(data),
  });
};
