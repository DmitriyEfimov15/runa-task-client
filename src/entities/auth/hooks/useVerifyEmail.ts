import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyEmail } from "../api/authApi";
import { IVerifyEmailPayload } from "../types";

export const useVerifyEmail = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IVerifyEmailPayload) => verifyEmail(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
