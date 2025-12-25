import { create, StateCreator } from "zustand";
import { TProjectInitialState, TProjectStore } from "../types";

const initialState: TProjectInitialState = {
  currentProject: {
    id: "1",
    name: "Default Project",
    description: "This is the default project",
    avatarUrl: undefined,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  projects: [
    {
      id: "1",
      name: "Default Project",
      description: "This is the default project",
      avatarUrl: undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Default Projec1t",
      description: "This is the default project",
      avatarUrl: undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
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
