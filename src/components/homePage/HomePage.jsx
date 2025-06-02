import "./HomePage.css";
import { useGSAP } from "@gsap/react";
import { GoogleLogin } from "@react-oauth/google";
import { loginWithGoogle } from "../../reducers/usersSlice";
import gsap from "gsap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Auth/Login/Login";
import SignUp from "./Auth/SignUp/SignUp";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { isAuthLoading, isAuthError, errorMessage, user } = useSelector(
    (state) => state.user
  );
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();

  useGSAP(() => {
    gsap.to(".welcome-h4", {
      opacity: 1,
      duration: 3,
      ease: "power1.inOut",
    });
  }, {});

  const loginwithGoogle = (data) => {
    console.log(data);
    dispatch(loginWithGoogle(data));
  };

  const errorLoginGoogle = (data) => {
    console.log(data);
  };

  // ************************ CLICK SIGNUP BUTTON ********************
  const createAccount = () => setIsLoginForm(false);

  // ************************ CLICK LOGIN BUTTON ********************
  const clickLoginButton = () => setIsLoginForm(true);

  // if (isAuthLoading)
  //   return (
  //     <div>
  //       <h3>Loading ... </h3>
  //     </div>
  //   );

  return (
    <div className="HomePage">
      <div className="welcome-div">
        <img src="https://img.icons8.com/?size=100&id=58562&format=png&color=000000" />
        <h4 className="welcome-h4"> Connect </h4>
      </div>
      <div id="googleLogin">
        <GoogleLogin
          cookiePolicy={"single_host_origin"}
          onSuccess={loginwithGoogle}
          onError={errorLoginGoogle}
        />
      </div>{" "}
      {isAuthLoading ? (
        <h4>Loading ...</h4>
      ) : isLoginForm ? (
        <div className="login-div forms-div">
          <Login />
          <div className="forgot-password-div">
            <Link className="forgot-password-para" to="/reset-password">Forgot Password</Link>
          </div>{" "}
          <p>
            Don't Have account? <button onClick={createAccount}>SignUp</button>{" "}
          </p>
        </div>
      ) : (
        <div className="signup-div forms-div">
          <SignUp />
          <p>
            Already have account{" "}
            <button onClick={clickLoginButton}>Login</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
