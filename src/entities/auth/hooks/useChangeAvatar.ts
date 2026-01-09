import { TChangeAvatar } from "@/src/features/profile-settings/avatar/model/types";
import { useMutation } from "@tanstack/react-query";
import { changeAvatar } from "../api/authApi";

export const useChangeAvatar = () => {
  return useMutation({
    mutationFn: (data: TChangeAvatar) => changeAvatar(data),
  });
};
