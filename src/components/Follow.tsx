import { useState } from 'react';
import FollowerItem from './FollowerItem';
import { followData } from '../context/FollowContext';

function Follow() {
  const [active, setActive] = useState<string>('followers');
  const tabs = ['followers', 'following'];
  const { followers, followings } = followData();

  return (
    <div className="hidden lg:block w-93.75 pt-8">
      <div className="flex">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-13.25 pb-3 capitalize ${active == tab ? 'border-b border-white text-subtitle-blod' : 'text-subtitle-regular text-[#929292]'}`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div
        className={`flex flex-col gap-y-4 mt-8 ${active == 'followers' ? '' : 'hidden'}`}
      >
        {followers.map((follower) => (
          <FollowerItem follower={follower} key={follower.id} />
        ))}
      </div>
      <div
        className={`flex flex-col gap-y-4 mt-8 ${active == 'following' ? '' : 'hidden'}`}
      >
        {followings.map((following) => (
          <FollowerItem follower={following} key={following.id} />
        ))}
      </div>
    </div>
  );
}

export default Follow;
