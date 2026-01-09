import { useMutation } from "@tanstack/react-query";
import { IChangePasswordPayload } from "../types";
import { changePassword } from "../api/authApi";

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (data: IChangePasswordPayload) => changePassword(data),
  });
};
