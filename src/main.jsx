import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ReactRenderingPage from './routes/react-rendering-page';
import D3RenderingPage from './routes/d3-rendering-page';
import CanvasRenderingPage from './routes/canvas-rendering-page';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <ReactRenderingPage />,
      },
      {
        path: '/d3-rendering',
        element: <D3RenderingPage />,
      },
      {
        path: '/canvas-rendering',
        element: <CanvasRenderingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  /* <React.StrictMode> */
  <RouterProvider router={router} />
  /* </React.StrictMode> */
);
