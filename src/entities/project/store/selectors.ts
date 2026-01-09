import { TProjectStore } from "../types";

export const currentProjectSelector = (state: TProjectStore) => state.currentProject;
export const projectsSelector = (state: TProjectStore) => state.projects;
export const projectActionsSelector = (state: TProjectStore) => state.actions;
