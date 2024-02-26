import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignInPage, SignUpPage, HomePage } from "../pages";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignInPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
