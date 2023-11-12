import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import MainPage from "../pages/MainPage";
import ModalPage from "../pages/ModalPage";
import ErrorPage from "../pages/ErrorPage";

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
          path: "/photo/:id",
          element: <ModalPage />,
        },
      ],
    },
  ],
);