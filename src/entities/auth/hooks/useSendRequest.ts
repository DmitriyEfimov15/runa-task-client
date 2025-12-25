import { useMutation } from "@tanstack/react-query";
import { sendRequestToChangePassword } from "../api/authApi";
import { ISendRequestForm } from "../types";

export const useSendRequest = () => {
  return useMutation({
    mutationFn: (data: ISendRequestForm) => sendRequestToChangePassword(data),
  });
};
