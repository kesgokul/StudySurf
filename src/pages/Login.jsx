import googleIcon from "/google-icon.jpeg";
import fakeLogo from "/Ellipse.png";
import Layout from "../components/layout/Layout";

import { useAuth, Auth } from "@arcana/auth-react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function TeacherLogin() {
  const { isLoggedIn, loginWithLink, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  //   async function handleLogin() {
  //     console.log("google");
  //     await loginWithSocial("google");
  //   }

  useEffect(() => {
    if (isLoggedIn) {
      console.log(user);
      navigate(`${location.pathname}/registerTeacher`);
    }
  }, [user, isLoggedIn, location]);

  console.log(location.pathname);

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
      <Auth externalWallet={true} theme="light" />
      {/* <Outlet /> */}
    </Layout>
  );
}

export default TeacherLogin;
