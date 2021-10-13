export interface WorkspaceMeta {
    title: string;
    name: string;
    description: string;
    id: string;
}

export interface UserLink {
    description?: string;
    url: string;
}

export interface UserProfilePageData {
    firstname: string;
    secondname: string;
    middlename?: string;
    email: string;
    links: UserLink[];
    skills: string[];
    workspaces: WorkspaceMeta[];
}

export interface TeamsMeta {
    name: string,
    participants: string[],
    id: string
}

export interface UserMeta {
    id: string,
    name: string,
    typeOfUser: string,
    teamId?: string,
}

export interface WorkspaceData {
    title: string,
    name: string,
    descr: string,
}