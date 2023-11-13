import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
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
          path: "photo/:id",
          element: <Popup />,
        },
      ],
    },
  ],
);