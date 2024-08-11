import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen h-full bg-greyscale-dark">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
