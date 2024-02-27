import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./layout/Root/Root";
import Home from "./Pages/Home/Home";
import Dashboard from "./layout/Dashboard/Dashboard";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AddMenuItem from "./Pages/Dashboard/AddMenuItem/AddMenuItem";
import ManageMenuItems from "./Pages/Dashboard/ManageMenuItems/ManageMenuItems";
import UpdateMenuItem from "./Pages/Dashboard/UpdateMenuItem/UpdateMenuItem";

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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/addMenuItems",
        element: <AddMenuItem></AddMenuItem>,
      },
      {
        path: "/dashboard/manageMenuItems",
        element: <ManageMenuItems></ManageMenuItems>,
      },
      {
        path: "/dashboard/updateMenuItem/:id",
        element: <UpdateMenuItem></UpdateMenuItem>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
