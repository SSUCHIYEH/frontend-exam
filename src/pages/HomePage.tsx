import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Follow from '../components/Follow';

function Home() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [pageSize, setPageSize] = useState<string | number>('15');
  const navigateSearch = () => {
    navigate(`/search?keyword=${keyword}&per=${pageSize}&page=1`);
  };
  return (
    <>
      <div className="flex flex-1 flex-col justify-between min-h-[calc(100vh-8.5rem)] lg:h-auto lg:pt-13.5 pb-21.75 px-5 lg:px-32.5">
        <div>
          <div>
            <h1 className="text-headline-5-regular">Search</h1>
            <input
              className="rounded-md border-[3px] border-white/50 focus:outline-0 w-full mt-5 py-5 px-4.5 bg-greyscale-dark text-body-2-regular"
              placeholder="keyword"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div className="border-b border-white/10 mt-7.5 pt-7.5">
            <p className="text-headline-5-regular"># of results per page</p>
          </div>
        </div>
        <input
          type="range"
          min="3"
          max="50"
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
          className="hover:cursor-pointer bg-[#FF5C01]"
        />
        {/* bg-gradient-to-r from-[#FF5C01] to-[#FFD25F] */}
        <button
          onClick={navigateSearch}
          className="rounded-sm w-full lg:w-85.75 py-3.25 px-4 bg-white text-black text-sm leading-4 font-bold"
        >
          SEARCH
        </button>
      </div>
      <Follow />
    </>
  );
}

export default Home;
