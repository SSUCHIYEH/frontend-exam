import TagItem from '../components/tag/TagItem';
import { getTags } from '../api/Index';
import { useEffect, useState } from 'react';
import { Tag } from '../utils/Model';
import { Skeleton } from '@mui/material';

const SkeletonComponent = () => {
  return (
    <div className="flex flex-col gap-y-2.5">
      <Skeleton
        variant="rounded"
        sx={{
          bgcolor: 'rgba(255,255,255,0.2)',
          width: '9.375rem',
          height: '9.375rem',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          bgcolor: 'rgba(255,255,255,0.2)',
          fontSize: '1rem',
          width: '9.375rem',
        }}
      />
    </div>
  );
};

function Tags() {
  const skelectonComponents = [];
  for (let i = 0; i < 20; i++) {
    skelectonComponents.push(<SkeletonComponent key={`skelecton-${i}`} />);
  }

  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    const data = await getTags();
    setTags(data);
  };

  return (
    <>
      <div className="flex-1 px-6 lg:px-64.25 py-5 lg:py-20">
        <h1 className="text-headline-4-regular">Tags</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-9 mt-6">
          {tags.length > 0
            ? tags.map((tag) => <TagItem tag={tag} key={tag.id} />)
            : skelectonComponents}
        </div>
      </div>
    </>
  );
}

export default Tags;
