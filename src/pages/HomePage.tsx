import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Follow from '../components/Follow';
import Slider from '@mui/material/Slider';

function Home() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');
  const [pageSize, setPageSize] = useState<string | number>('15');

  const marks = [3, 6, 9, 12, 15, 50];

  useEffect(() => {
    const labels = document.querySelectorAll('.MuiSlider-markLabel');
    labels.forEach((label) => {
      if (label.innerHTML == pageSize) {
        label.classList.add('!text-white');
      } else {
        label.classList.remove('!text-white');
      }
    });
  }, [pageSize]);

  const navigateSearch = () => {
    navigate(`/search?keyword=${keyword}&per=${pageSize}&page=1`);
  };
  return (
    <>
      <div className="flex flex-1 flex-col justify-between min-h-[calc(100vh-8.5rem)] lg:h-auto lg:pt-13.5 pb-21.75 px-5 lg:px-32.5">
        <div>
          <div>
            <h1 className="text-headline-5-regular !text-white">Search</h1>
            <input
              className="rounded-md border-[3px] border-white/50 focus:outline-[#FF9B33] w-full mt-5 py-5 px-4.5 bg-greyscale-dark text-body-2-regular"
              placeholder="keyword"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div className="border-b border-white/10 mt-7.5 py-7.5">
            <p className="text-headline-5-regular"># of results per page</p>
            <div className="my-5">
              <span className="text-headline-3-bold">{pageSize}</span>
              <span className="ml-2.5 text-subtitle-regular">results</span>
            </div>
            <Slider
              min={1}
              max={6}
              defaultValue={5}
              onChange={(_e, value: number | number[], _a) =>
                setPageSize(marks[Number(value) - 1])
              }
              marks={[
                { value: 1, label: '3' },
                { value: 2, label: '6' },
                { value: 3, label: '9' },
                { value: 4, label: '12' },
                { value: 5, label: '15' },
                { value: 6, label: '50' },
              ]}
              sx={{
                '& .MuiSlider-markLabel': {
                  color: 'rgba(255,255,255,0.5)',
                },
              }}
            />
          </div>
        </div>

        {/* bg-gradient-to-r from-[#FF5C01] to-[#FFD25F] */}
        <button
          onClick={navigateSearch}
          className="rounded-sm hover:border hover:border-white w-full lg:w-85.75 py-3.25 px-4  bg-white hover:bg-black text-black hover:text-white text-sm leading-4 font-bold"
        >
          SEARCH
        </button>
      </div>
      <Follow />
    </>
  );
}

export default Home;
