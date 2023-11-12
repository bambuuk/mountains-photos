import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import Popup from "../components/Popup";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "photo/:id",
          element: <Popup />,
        },
      ],
    },
  ],
);