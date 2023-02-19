import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider, CHAIN } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import { PolywrapProvider } from "@polywrap/react";

import WhoAreYou from "./pages/WhoAreYou";
import Login from "./pages/Login";
import TeacherRegister from "./pages/teacher/TeacherRegister";
import StudentRegister from "./pages//student/StudentRegister";
import SelectClass from "./pages/teacher/SelectClass";
import ClassSuccess from "./pages/teacher/ClassSuccess";
import Dashboard from "./pages/teacher/dashboard/Dashboard";
import Submissions from "./pages/teacher/dashboard/Submissions";

import Profile from "./pages/teacher/dashboard/Profile";
import Premium from "./pages/teacher/dashboard/Premium";

// Student components
import StudentSelectClass from "./pages/student/StudentSelectClass";
import StudentSuccess from "./pages/student/StudentSuccess";
import StudentDashboard from "./pages/student/StudentDashboard";

import StudentProfile from "./pages/student/Studentprofile";
import StudentAssignmetns from "./pages/student/StudentAssignments";
import NotLoggedIn from "./pages/NotLoggedIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Something Unexpected happened</div>,
  },
  {
    path: "/who-are-you",
    element: <WhoAreYou />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/not-logged-in",
    element: <NotLoggedIn />,
  },
  // -------------------------- TEACHER ---------------------------------
  {
    path: "/teacher",
    children: [
      {
        path: "/teacher",
        index: true,
        element: <TeacherRegister />,
      },
      {
        path: "/teacher/select-class",
        element: <SelectClass />,
      },
      {
        path: "/teacher/select-class/success",
        element: <ClassSuccess />,
      },
      {
        path: "/teacher/dashboard",
        children: [
          {
            path: "/teacher/dashboard",
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/teacher/dashboard/submissions",
            element: <Submissions />,
          },
        ],
      },

      {
        path: "/teacher/profile",
        children: [
          { path: "/teacher/profile", index: true, element: <Profile /> },
          {
            path: "/teacher/profile/premium",
            element: <Premium />,
          },
        ],
      },
    ],
  },
  // ----------------------- STUDENT ----------------------------
  {
    path: "/student",
    children: [
      {
        path: "/student",
        index: "true",
        element: <StudentRegister />,
      },
      {
        path: "/student/select-class",
        element: <StudentSelectClass />,
      },
      {
        path: "/student/success",
        element: <StudentSuccess />,
      },
      {
        path: "/student/dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "/student/profile",
        element: <StudentProfile />,
      },
      {
        path: "/student/dashboard/submissions",
        element: <StudentAssignmetns />,
      },
    ],
  },
]);
const arcanaAppAddress = import.meta.env.VITE_ARCANA_APP_ADDRESS;
const provider = new AuthProvider(arcanaAppAddress, {
  network: "testnet",
  chainConfig: {
    chainId: CHAIN.POLYGON_MUMBAI_TESTNET,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PolywrapProvider />
    <ProvideAuth provider={provider}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </ProvideAuth>
    <PolywrapProvider />
  </React.StrictMode>
);
