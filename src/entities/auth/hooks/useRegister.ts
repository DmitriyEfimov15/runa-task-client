import { useMutation } from "@tanstack/react-query";
import { IRegisterForm } from "@/src/entities/auth/types";
import { registerUser } from "@/src/entities/auth/api/authApi";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: IRegisterForm) => registerUser(data),
  });
};
