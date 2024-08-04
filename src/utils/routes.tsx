import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import ResultPage from '../pages/ResultPage';
import TagsPage from '../pages/TagsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'search', element: <ResultPage /> },
      { path: 'tags', element: <TagsPage /> },
    ],
  },
]);
