export interface FollowContextType {
  followers: Follower[];
  followings: Follower[];
}

export type Follower = {
  avater: string;
  name: string;
  isFollowing: boolean;
  username: string;
  id: string;
};

export interface Tag {
  id: string;
  count: number;
  name: string;
}

export interface Result {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
}
