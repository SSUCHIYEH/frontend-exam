import { useEffect, useState } from 'react';
import Follow from '../components/Follow';
import { Link, useLocation } from 'react-router-dom';
import ResultItem from '../components/result/ResultItem';
import Back from '../assets/icons/back.svg';
import { getResult } from '../api/Index';
import { Follower } from '../utils/Model';
import { Skeleton } from '@mui/material';

const SkeletonComponent = () => {
  return (
    <div className="col-span-1 flex flex-col gap-y-2.5">
      <Skeleton
        variant="rounded"
        sx={{
          bgcolor: 'rgba(255,255,255,0.2)',
          width: '100%',
          height: '9.125rem',
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          bgcolor: 'rgba(255,255,255,0.2)',
          fontSize: '1rem',
          width: '13.688rem',
        }}
      />
    </div>
  );
};

function Result() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword: string = queryParams.get('keyword') || '';
  const pageSize: string = queryParams.get('pageSize') || '10';
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState(queryParams.get('page') || 10);
  const [results, setResults] = useState<Follower[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);

  const skelectonComponents = [];
  for (let i = 0; i < Number(pageSize); i++) {
    skelectonComponents.push(<SkeletonComponent key={`skelecton-${i}`} />);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true);
    const data = await getResult(page, pageSize, keyword);
    setTotalPage(data.totalPages);
    if (page == '1') {
      setResults(data.data);
    } else {
      setResults((preResults) => [...preResults, ...data.data]);
    }
    setLoading(false);
  };

  return (
    <>
      <div className=" flex-1 px-5 lg:px-32.5 mt-5 lg:mt-[5.75rem] mb-[3.625rem]">
        <div className="relative">
          <Link to="/" className="absolute top-2.5 -left-11 size-6.5">
            <img src={Back} className="size-full object-contain" />
          </Link>
          <h1 className="ml-[0.438rem] text-headline-5-regular lg:text-headline-4-regular">
            Results
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-9 gap-y-10 lg:gap-y-7.5 mt-6">
          {results.map((item) => (
            <ResultItem item={item} key={item.id} />
          ))}

          {loading ? skelectonComponents : <></>}
        </div>

        <button
          onClick={() => setPage(Number(page) + 1)}
          className={`${!loading && results.length > 0 && totalPage != Number(page) ? '' : 'hidden'}  rounded-sm hover:border hover:border-white w-full lg:w-85.75 mt-10 py-3.25 px-4 bg-white hover:bg-black text-black hover:text-white text-sm leading-4 font-bold`}
        >
          More
        </button>
      </div>
      <Follow />
    </>
  );
}

export default Result;
