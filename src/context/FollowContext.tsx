import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { Follower, FollowContextType } from '../utils/Model';
import { getFollowers, getFollowing } from '../api/Index';

const FolllowContext = createContext<FollowContextType>({
  followers: [],
  followings: [],
});

type Props = { children: ReactNode };

export const FollowerProvider = ({ children }: Props) => {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [followings, setFollowing] = useState<Follower[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const followersData = await getFollowers();
    const followingData = await getFollowing();
    setFollowers(followersData.data);
    setFollowing(followingData.data);
  };

  return (
    <FolllowContext.Provider value={{ followers, followings }}>
      {children}
    </FolllowContext.Provider>
  );
};

export const followData = () => React.useContext(FolllowContext);
