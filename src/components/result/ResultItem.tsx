import { Follower } from '../../utils/Model';

interface Props {
  item: Follower;
}

function ResultItem(props: Props) {
  return (
    <div>
      <div className="w-full h-[13.875rem] lg:w-[13.688rem] lg:h-[9.125rem]">
        <img src={props.item.avater} className="size-full object-contain" />
      </div>
      <p className="mt-5 lg:mt-2.5 text-body-3-regular">{props.item.name}</p>
      <p className="text-body-5-regular text-greyscale-400">
        by {props.item.username}
      </p>
    </div>
  );
}

export default ResultItem;
