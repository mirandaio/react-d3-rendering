import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ReactRenderingPage from "./routes/react-rendering-page";
import D3RenderingPage from "./routes/d3-rendering-page";
// import App from './App'
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/react-rendering",
    element: <ReactRenderingPage />,
  },
  {
    path: "/d3-rendering",
    element: <D3RenderingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
