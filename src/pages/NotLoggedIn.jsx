import Layout from "../components/layout/Layout";
import logo from "/Ellipse.png";

import { useAuth } from "@arcana/auth-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotLoggedIn() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // navigate back if logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate(-1);
    }
  }, [isLoggedIn]);

  return (
    <Layout>
      <img src={logo} className="mt-20 h-40 w-40 " alt="app logo" />
      <p className="mt-32 text-2xl font-righteous text-purple-900">
        You are not logged in,
      </p>
      <button
        onClick={() => navigate("/login")}
        className="mt-10 w-11/12 h-16  bg-orange-gradient text-white text-2xl rounded-2xl shadow-lg"
      >
        Log In
      </button>
      <h2 className="mt-6 text-xl text-purple-900 font-righteous">
        to continue...
      </h2>
    </Layout>
  );
}
