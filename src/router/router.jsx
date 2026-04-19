import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Posts } from "../pages/Posts";
import { Auth } from "../pages/Auth";
import { Register } from "../pages/Register";
import { Create } from "../pages/Create";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Posts /> },
      { path: "/posts", element: <Posts /> },
      { path: "/auth", element: <Auth /> },
      { path: "/register", element: <Register /> },
      {
        path: "/create",
        element: (
          <ProtectedRoute>
            <Create />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);