import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Notfound from './pages/Notfound.tsx';
import Videos from './pages/Videos.tsx';
import VideoDetail from './pages/VideoDetail.tsx';
import '../index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Notfound />,
    children: [
      {
        // with hot videos
        index: true,
        element: <Videos />,
      },
      {
        // with hot videos
        path: 'videos',
        element: <Videos />,
      },
      {
        // with keyword option
        path: 'videos/:keyword',
        element: <Videos />,
      },
      {
        // with keyword option
        path: 'videos/watch/:videoId',
        element: <VideoDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
