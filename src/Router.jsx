import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import App from "./App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
    },
    {
      path: "/shop",
      element: <Error></Error>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
