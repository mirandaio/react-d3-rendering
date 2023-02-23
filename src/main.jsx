import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ReactRendering from './routes/react-rendering';
import D3Rendering from './routes/d3-rendering';
// import App from './App'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/react-rendering',
    element: <ReactRendering/>
  },
  {
    path: '/d3-rendering',
    element: <D3Rendering/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
