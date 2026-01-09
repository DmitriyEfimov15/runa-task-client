import { create, StateCreator } from "zustand";
import { IUserStore, IUserStoreInitialState } from "../types";

const initialState: IUserStoreInitialState = {
  user: null,
};

const userStore: StateCreator<IUserStore> = (set) => ({
  ...initialState,
  setUser: (user) => set(() => ({ user })),
});

export const useUserStore = create<IUserStore>()(userStore);
