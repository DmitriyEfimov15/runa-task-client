import { create, StateCreator } from "zustand";
import { TProjectInitialState, TProjectStore } from "../types";

const initialState: TProjectInitialState = {
  currentProject: null,
  projects: [],
};

const projectStore: StateCreator<TProjectStore> = (set) => ({
  ...initialState,
  actions: {
    setCurrentProject: (projectId) =>
      set(() => {
        const project = initialState.projects.find((p) => p.id === projectId) || null;
        return { currentProject: project };
      }),
    setProjects: (projects) => set(() => ({ projects })),
  },
});

export const useProjectStore = create<TProjectStore>()(projectStore);
