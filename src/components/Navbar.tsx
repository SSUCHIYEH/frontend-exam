import { Link, NavLink, useLocation } from 'react-router-dom';
import PencileRulerGray from '../assets/icons/pencil-ruler-gray.svg';
import PencileRulerWhite from '../assets/icons/pencil-ruler-white.svg';

import Logo from '../assets/logo.svg';
import Back from '../assets/icons/back.svg';

function Navbar() {
  const location = useLocation();

  const sidebar = [
    {
      title: 'Home',
      route: '/',
      active: location.pathname == '/' || location.pathname == '/search',
    },
    { title: 'Tags', route: '/tags', active: location.pathname == '/tags' },
  ];

  return (
    <>
      {location.pathname == '/' ? (
        <>
          <div className="block lg:hidden h-17.5 py-7 px-5">
            <img src={Logo} />
          </div>
          <div className="fixed bottom-0 flex lg:hidden justify-center gap-x-[3.125rem] w-full py-[1.313rem]">
            {sidebar.map((item) => (
              <NavLink to={item.route} key={item.title}>
                <img
                  src={PencileRulerWhite}
                  className={`${item.active ? '' : 'hidden'}`}
                />
                <img
                  src={PencileRulerGray}
                  className={`${item.active ? 'hidden' : ''}`}
                />
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <div className="block lg:hidden py-4.25 px-5">
          <div className="flex items-center gap-x-[0.823rem]">
            <Link to="/">
              <img src={Back} className="size-6.5 object-contain" />
            </Link>
            <h1 className="ml-[0.438rem] text-headline-5-regular lg:text-headline-4-regular">
              Home Page
            </h1>
          </div>
        </div>
      )}

      <div className="hidden lg:flex flex-col items-center gap-y-10 w-20 h-screen pt-9.25 bg-sidebar-dark">
        <img src={Logo} className="mb-[0.188rem]" />
        {sidebar.map((item) => (
          <NavLink
            className="relative flex flex-col items-center"
            to={item.route}
            key={item.title}
          >
            <img
              src={PencileRulerWhite}
              className={`${item.active ? '' : 'hidden'}`}
            />
            <img
              src={PencileRulerGray}
              className={`${item.active ? 'hidden' : ''}`}
            />
            <p
              className={`absolute -bottom-4 text-caption-regular text-white  ${item.active ? '' : 'hidden'}`}
            >
              {item.title}
            </p>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Navbar;
