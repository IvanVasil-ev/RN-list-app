export type ListGetPageRequest = number;

export type ListGetPageResponse = ListItemPreview[] | null;

export type ListChangeValue = {
  key: string;
  value: any; // TODO: Change "any"
};

export type ListErrorRepsonse = Error;

export type Author = {
  email?: string;
  name?: string;
}

export type Commits = {
  author?: Author;
  email?: string;
  name?: string;
  distinct?: boolean;
  message?: string;
  sha?: string;
  url?: string;
}

export type Payload = {
  before?: string;
  commits?: Commits[];
  distinct_size?: number;
  head?: string;
  push_id?: 8257708776;
  ref?: string;
  size?: number;
  description?: string | null;
  master_branch?: string;
  pusher_type?: string;
  ref_type?: string;
}
export type Repo = {
  id?: number;
  name?: string;
  url?: string;
}

export type Actor = {
  id?: number;
  login?: string;
  gravatar_id?: string;
  avatar_url?: string;
  url?: string;
}

export type Org = {
  id?: number;
  login?: string;
  gravatar_id?: string;
  url?: string;
  avatar_url?: string;
}

export interface ListItemPreview {
  type?: string;
  public?: boolean;
  payload?: Payload;
  repo?: Repo;
  actor?: Actor;
  org?: Org;
  createdAt?: string;
  id: string;
}
