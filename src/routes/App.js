import React from "react";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "./login/LoginPage";
import { HomePage } from "./home/HomePage";
import AuthGuard from "../guards/AuthGuard";

const Dashboard = React.lazy(() => import("./dashboard/DashboardPage"));
const Projects = React.lazy(() => import("./projects/ProjectsPage"));
const Users = React.lazy(() => import("./users/UsersPage"));

const router = createBrowserRouter([
  {
    path: "login",
    element: <AuthGuard component={<LoginPage />} />,
  },
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/dashboard"} />,
      },
      {
        path: "dashboard",
        element: (
          <React.Suspense fallback={<>...</>}>
            <AuthGuard component={<Dashboard />} />
          </React.Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <React.Suspense fallback={<>...</>}>
            <AuthGuard component={<Projects />} />
          </React.Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <React.Suspense fallback={<>...</>}>
            <AuthGuard component={<Users />} />
          </React.Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
