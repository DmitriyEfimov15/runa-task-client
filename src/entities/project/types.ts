export type TProject = {
  id: string;
  name: string;
  description?: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export type TProjectInitialState = {
  currentProject: TProject | null;
  projects: TProject[];
};

export type TProjectStoreAction = {
  setCurrentProject: (projectId: string | null) => void;
  setProjects: (projects: TProject[]) => void;
};

export type TProjectStore = TProjectInitialState & { actions: TProjectStoreAction };
