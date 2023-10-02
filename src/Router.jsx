import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import App from "./App";
import Home from "./Home";

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
    {
      path: "home",
      element: <Home></Home>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
