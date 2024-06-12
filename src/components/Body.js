import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard from "./DashBoard";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
