import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import WhoAreYou from "./pages/WhoAreYou";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherRegister from "./pages/TeacherRegister";
import StudentRegister from "./pages/StudentRegister";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
const arcanaAppAddress = import.meta.env.VITE_ARCANA_APP_ADDRESS;
const provider = new AuthProvider(arcanaAppAddress);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <RouterProvider router={router} />
    </ProvideAuth>
  </React.StrictMode>
);
