import { fetchClient } from "@/src/shared/lib/fetchClient";
import {
  IChangePasswordPayload,
  IGetProfileResponse,
  ILoginForm,
  IRegisterForm,
  ISendRequestForm,
  IUser,
  IVerifyEmailPayload,
  IVerifyEmailResponse,
  RegisterUserResponse,
  TLoginResponse,
} from "../types";
import { TRequestChangeEmailForm } from "@/src/features/profile-settings/email/model/types";
import { IResponseWithNotification } from "@/src/shared/lib/types/responseWithNotificaton";
import { IOtpFormValues } from "@/src/shared/ui/opt-form";
import { TChangePasswordForAuthorizedForm } from "@/src/features/profile-settings/password/model/types";

export const registerUser = (data: IRegisterForm) => {
  return fetchClient<RegisterUserResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const verifyEmail = (data: IVerifyEmailPayload) => {
  return fetchClient<IVerifyEmailResponse>("/auth/verify-email", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const getProfile = () => {
  return fetchClient<IGetProfileResponse>("/auth/profile", {
    method: "GET",
    credentials: "include",
  });
};

export const loginUser = (data: ILoginForm) => {
  return fetchClient<TLoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const sendRequestToChangePassword = (data: ISendRequestForm) => {
  return fetchClient<void>("/auth/send-change-password-request", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const changePassword = (data: IChangePasswordPayload) => {
  return fetchClient<void>("/auth/change-password", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const logout = () => {
  return fetchClient<void>("/auth/logout", {
    method: "POST",
  });
};

export const requestChangeEmail = (data: TRequestChangeEmailForm) => {
  return fetchClient<IResponseWithNotification>("/auth/request-change-email", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const changeEmail = (data: IOtpFormValues) => {
  return fetchClient<IResponseWithNotification>("/auth/change-email", {
    method: "POST",
    body: JSON.stringify(data)
  })
}

export const changePasswordForAuthorized = (data: TChangePasswordForAuthorizedForm) => {
  return fetchClient<IResponseWithNotification>("/auth/change-password-for-authorized", {
    method: "PATCH",
    body: JSON.stringify(data)
  })
}