export interface IRegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterUserResponse {
  activationLink: string;
}

export interface IVerifyEmailForm {
  activationCode: string;
}

export interface IVerifyEmailPayload {
  activationCode: number;
  activationLink: string;
}

export interface IVerifyEmailResponse {
  user: IUser;
}

export interface IUser {
  id: string;
  email: string;
  avatarUrl?: string | null;
  roles: TUserRole[];
}

export interface IUserStoreInitialState {
  user: IUser | null;
}

export interface IUserStoreActions {
  setUser: (user: IUser | null) => void;
}

export interface IUserStore extends IUserStoreInitialState, IUserStoreActions {}

export interface IGetProfileResponse {
  user: IUser;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export const AuthToken = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
} as const;

export const UserRoles = {
  USER: "USER",
  ADMIN: "ADMIN",
} as const;

export type TUserRole = (typeof UserRoles)[keyof typeof UserRoles];

export interface ITokenInside {
  id: string;
  roles: TUserRole[];
  iat: number;
  exp: number;
}

export interface ISendRequestForm {
  email: string;
}

export interface IChangePasswordPayload {
  newPassword: string;
  resetToken: string;
}

export interface IChangePasswordForm {
  newPassword: string;
  confirmNewPassword: string;
}
