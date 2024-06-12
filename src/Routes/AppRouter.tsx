import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import MainLayout from "@/Layout/MainLayout";
import UploadFiles from "@/Pages/UploadFiles";
import CreatedBy from "@/Pages/CreatedBy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/upload",
        element: <UploadFiles />,
      },
      {
        path: "/createdBy",
        element: <CreatedBy />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
