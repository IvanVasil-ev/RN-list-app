export type ListGetAllRequest = number;

export type ListGetAllResponse = ListItemPreview[] | null;

export type ListChangeValue = {
  key: string;
  value: any,
};

export type ListErrorRepsonse = Error;

export type author = {
  email?: string;
  name?: string;
}

export type commits = {
  author?: author;
  email?: string;
  name?: string;
  distinct?: boolean;
  message?: string;
  sha?: string;
  url?: string;
}

export type payload = {
  before?: string;
  commits?: commits[];
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
export type repo = {
  id?: number;
  name?: string;
  url?: string;
}

export type actor = {
  id?: number;
  login?: string;
  gravatar_id?: string;
  avatar_url?: string;
  url?: string;
}

export type org = {
  id?: number;
  login?: string;
  gravatar_id?: string;
  url?: string;
  avatar_url?: string;
}

export interface ListItemPreview {
  type?: string;
  public?: boolean;
  payload?: payload;
  repo?: repo;
  actor?: actor;
  org?: org;
  createdAt?: string;
  id: string;
}
