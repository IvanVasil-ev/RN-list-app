export type ListGetAllRequest = number;

export type ListGetAllResponse = ListItemPreview[] | null;

export interface ListItemPreview {
  type?: string;
  public?: boolean;
  payload?: {};
  repo?: {
    id?: number;
    name?: string;
    url?: string;
  };
  actor?: {
    id?: number;
    login?: string;
    gravatarId?: string;
    avatarUrl?: string;
    url?: string;
  };
  org?: {
    id?: number;
    login?: string;
    gravatarId?: string;
    url?: string;
    avatarUrl?: string;
  };
  createdAt?: string;
  id?: string;
}
