import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { FollowerProvider } from './context/FollowContext';

function App() {
  return (
    <FollowerProvider>
      <div className="flex flex-col lg:flex-row min-h-screen h-full bg-greyscale-dark">
        <Navbar />
        <Outlet />
      </div>
    </FollowerProvider>
  );
}

export default App;
