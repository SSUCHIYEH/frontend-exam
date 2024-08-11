import { useEffect, useState } from 'react';
import FollowerItem from './FollowerItem';
import { Follower } from '../utils/Model';
import { getFollowers, getFollowing } from '../api/Index';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Skeleton } from '@mui/material';

const SkeletonComponent = () => {
  return (
    <div className="flex gap-x-4 px-4">
      <Skeleton
        variant="rounded"
        sx={{
          bgcolor: 'rgba(255,255,255,0.2)',
          width: '2.5rem',
          height: '2.5rem',
        }}
      />

      <Skeleton
        variant="rectangular"
        sx={{
          bgcolor: 'rgba(255,255,255,0.2)',
          flex: 1,
          height: '2.5rem',
        }}
      />
    </div>
  );
};

function Follow() {
  const [active, setActive] = useState<string>('followers');
  const [followerPage, setFollowerPage] = useState<number>(2);
  const [followingPage, setFollowingPage] = useState<number>(2);
  const [followersMore, setFollowersMore] = useState<boolean>(true);
  const [followingsMore, setFollowingsMore] = useState<boolean>(true);
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [followings, setFollowings] = useState<Follower[]>([]);
  const tabs = ['followers', 'following'];

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    const followerData = await getFollowers(1);
    const followingData = await getFollowing(1);
    setFollowers(followerData.data);
    setFollowings(followingData.data);
  };

  const fetchMoreFollower = async () => {
    await getFollowers(followerPage).then((res) => {
      setFollowers((pre) => [...pre, ...res.data]);
      if (res.totalPages == followerPage) {
        setFollowersMore(false);
      } else {
        setFollowerPage((pre) => pre + 1);
      }
    });
  };

  const fetchMoreFollowing = async () => {
    await getFollowing(followingPage).then((res) => {
      setFollowings((pre) => [...pre, ...res.data]);
      if (res.totalPages == followingPage) {
        setFollowingsMore(false);
      } else {
        setFollowingPage((pre) => pre + 1);
      }
    });
  };

  const skelectonComponents = [];
  for (let i = 0; i < 20; i++) {
    skelectonComponents.push(<SkeletonComponent key={`skelecton-${i}`} />);
  }

  return (
    <div className="hidden lg:block w-93.75 h-screen pt-8">
      <div className="flex">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActive(tab)}
            className={`h-[2.125rem] px-13.25 pb-3 capitalize cursor-pointer ${active == tab ? 'border-b border-white text-subtitle-bold' : 'text-subtitle-regular text-[#929292]'}`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div
        className={`flex flex-col gap-y-4 mt-8 ${active == 'followers' ? '' : 'hidden'}`}
      >
        <InfiniteScroll
          dataLength={followers.length}
          next={fetchMoreFollower}
          hasMore={followersMore}
          loader={skelectonComponents}
          style={{
            maxHeight: 'calc(100vh - 6rem)',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
            paddingBottom: '1.5rem',
          }}
        >
          {followers.map((follower) => (
            <FollowerItem follower={follower} key={follower.id} />
          ))}
        </InfiniteScroll>
      </div>
      <div
        className={`flex flex-col gap-y-4 mt-8 ${active == 'following' ? '' : 'hidden'}`}
      >
        <InfiniteScroll
          dataLength={followings.length}
          next={fetchMoreFollowing}
          hasMore={followingsMore}
          loader={skelectonComponents}
          style={{
            maxHeight: 'calc(100vh - 6rem)',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
            paddingBottom: '1.5rem',
          }}
        >
          {followings.map((following) => (
            <FollowerItem follower={following} key={following.id} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Follow;
