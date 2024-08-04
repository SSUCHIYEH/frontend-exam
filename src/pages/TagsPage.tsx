import TagItem from '../components/tag/TagItem';
import { getTags } from '../api/Index';
import { useEffect, useState } from 'react';
import { Tag } from '../utils/Model';

function Tags() {
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
          {tags.map((tag) => (
            <TagItem tag={tag} key={tag.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tags;
