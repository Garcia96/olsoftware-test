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
const NewProject = React.lazy(() => import("./projects/NewProjectPage"));
const EditProject = React.lazy(() => import("./projects/EditProjectPage"));
const Users = React.lazy(() => import("./users/UsersPage"));
const NewUser = React.lazy(() => import("./users/NewUserPage"));
const EditUser = React.lazy(() => import("./users/EditUserPage"));

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
        path: "projects/new",
        element: (
          <React.Suspense fallback={<>...</>}>
            <AuthGuard component={<NewProject />} />
          </React.Suspense>
        ),
      },
      {
        path: "projects/:id",
        element: (
          <React.Suspense fallback={<>...</>}>
            <AuthGuard component={<EditProject />} />
          </React.Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <React.Suspense fallback={<>...</>}>
            <AuthGuard component={<Users />} />
          </React.Suspense>
        ),
      },
      {
        path: "users/new",
        element: (
          <React.Suspense fallback={<>...</>}>
            <AuthGuard component={<NewUser />} />
          </React.Suspense>
        ),
      },
      {
        path: "users/:id",
        element: (
          <React.Suspense fallback={<>...</>}>
            <AuthGuard component={<EditUser />} />
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
