import googleIcon from "/google-icon.jpeg";
import fakeLogo from "/Ellipse.png";
import Layout from "../components/layout/Layout";

import TeacherContext from "../context/userContext";

import { useAuth, Auth } from "@arcana/auth-react";
import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn && user) {
      // console.log(user);

      navigate(`/who-are-you`);
    }
  }, [user, isLoggedIn]);

  return (
    <Layout>
      <img className="my-10 h-20 w-20" src={fakeLogo} alt="logo" />
      {/* <div
        onClick={handleLogin}
        className="my-auto px-1 rounded-md flex justify-start items-center gap-6 h-14 w-3/5 max-w-md bg-google-blue hover:bg-google-blue-active cursor-pointer"
      >
        <div className="w-12 h-12">
          <img
            className="rounded-md object-cover bg-white"
            src={googleIcon}
            alt=""
          />
        </div>
        <p className=" text-white">Sign in with google</p>
      </div> */}
      <div className="mb-10">
        <Auth theme="light" img={"/Ellipse.png"} />
      </div>
    </Layout>
  );
}
