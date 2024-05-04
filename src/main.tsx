import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./layout/Root/Root";
import Home from "./Pages/Home/Home";

import AboutUs from "./Pages/AboutUs/AboutUs";

import Menu from "./Pages/Menu/Menu";

import BookTable from "./Pages/BookTable/BookTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "menu",
        element: <Menu defaultItemsNumber={0} />,
      },
      {
        path: "booktable",
        element: <BookTable></BookTable>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
