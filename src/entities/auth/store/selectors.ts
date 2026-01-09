import { IUserStore } from "../types";

export const userSelector = (state: IUserStore) => state.user;
export const setUserSelector = (state: IUserStore) => state.setUser;
