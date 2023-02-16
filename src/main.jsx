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



// Student components
import StudentSelectClass from "./pages/student/StudentSelectClass";
import StudentSuccess from "./pages/student/StudentSuccess";
import StudentDashboard from "./pages/student/StudentDashboard";



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
        path: "/student/success",
        element: <StudentSuccess/>
      },
      {
        path: "/student/dashboard",
        element: <StudentDashboard />,
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
