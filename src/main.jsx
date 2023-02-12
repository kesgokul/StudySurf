import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import WhoAreYou from "./pages/WhoAreYou";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherRegister from "./pages/TeacherRegister";
import StudentRegister from "./pages/StudentRegister";

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
  },
  {
    path: "registerStudent",
    element: <StudentRegister />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
