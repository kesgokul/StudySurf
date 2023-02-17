import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeacherContextProvider } from "./context/teacherContext";

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
import StudentSelectClass from "./pages/student/StudentSelectClass";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/Studentprofile";
import StudentAssignmetns from "./pages/student/StudentAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Something Unexpected happened</div>,
  },
  {
    path: "/whoAreYou",
    element: <WhoAreYou />,
  },
  // -------------------------- TEACHER ---------------------------------
  {
    path: "/teacher",
    children: [
      {
        path: "/teacher",
        index: true,
        element: <Login />,
      },
      {
        path: "/teacher/registerTeacher",
        element: <TeacherRegister />,
      },
      {
        path: "/teacher/selectClass",
        element: <SelectClass />,
      },
      {
        path: "/teacher/selectClass/success",
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
        index: true,
        element: <Login />,
      },
      {
        path: "/student/registerStudent",
        element: <StudentRegister />,
      },
      {
        path: "/student/select-class",
        element: <StudentSelectClass />,
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
        path: "/student/assignments",
        element: <StudentAssignmetns />,
      },
    ],
  },
]);
const arcanaAppAddress = import.meta.env.VITE_ARCANA_APP_ADDRESS;
const provider = new AuthProvider(arcanaAppAddress);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <TeacherContextProvider>
        <RouterProvider router={router} />
      </TeacherContextProvider>
    </ProvideAuth>
  </React.StrictMode>
);
