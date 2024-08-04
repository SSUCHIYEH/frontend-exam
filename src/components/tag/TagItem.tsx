import { Tag } from '../../utils/Model';

interface Props {
  tag: Tag;
}

function TagItem(props: Props) {
  return (
    <div>
      <div className="flex items-end size-37.5 rounded-lg pl-2.5 py-3.5 bg-[rgba(255,255,255,0.06)]">
        <div className="rounded-md border-4 border-white px-2.5 text-headline-5-bold truncate">
          {props.tag.name}
        </div>
      </div>
      <p className="mt-2.5 text-body-3-regular">{props.tag.name}</p>
      <p className="text-body-5-regular text-greyscale-400">
        {props.tag.count} Results
      </p>
    </div>
  );
}

export default TagItem;
