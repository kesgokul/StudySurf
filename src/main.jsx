import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WhoAreYou from "./pages/WhoAreYou";
import TeacherLogin from "./pages/teacher/TeacherLogin";
import TeacherRegister from "./pages/teacher/TeacherRegister";
import StudentRegister from "./pages//student/StudentRegister";
import SelectClass from "./pages/teacher/SelectClass";
import ClassSuccess from "./pages/teacher/ClassSuccess";

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
  {
    path: "/login",
    element: <TeacherLogin />,
  },
  {
    path: "registerTeacher",
    element: <TeacherRegister />,
    children: [],
  },
  {
    path: "selectClass",
    element: <SelectClass />,
    children: [
      {
        path: "classSucces",
        element: <ClassSuccess />,
      },
    ],
  },
  {
    path: "registerStudent",
    element: <StudentRegister />,
    children: [],
  },
]);
const arcanaAppAddress = import.meta.env.VITE_ARCANA_APP_ADDRESS;
const provider = new AuthProvider(arcanaAppAddress);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <RouterProvider router={router} />
    </ProvideAuth>
  </React.StrictMode>
);
