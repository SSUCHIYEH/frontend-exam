import { Follower } from '../utils/Model';

interface Props {
  follower: Follower;
}

function FollowerItem(props: Props) {
  return (
    <>
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-x-4">
          <div className="border border-white rounded-[5px] w-10 h-10">
            <img
              src={props.follower.avater}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="text-body-1-regular text-white">
              {props.follower.name}
            </p>
            <p className="text-body-2-regular text-white/50">
              {props.follower.username}
            </p>
          </div>
        </div>
        <div>
          <button
            className={
              'border border-white rounded-full py-2 px-2.5 bg-black hover:bg-white text-xs hover:text-black font-semibold leading-3 ' +
              (props.follower.isFollowing ? 'hidden' : '')
            }
          >
            Follow
          </button>
          <button
            className={
              'rounded-full hover:border hover:border-white py-2 px-2.5 bg-white hover:bg-black text-black hover:text-white text-xs font-semibold leading-3 ' +
              (props.follower.isFollowing ? '' : 'hidden')
            }
          >
            Following
          </button>
        </div>
      </div>
    </>
  );
}

export default FollowerItem;
