import React from "react";
import GoogleLoginButton from "../components/loginButton/GoogleLoginButton";
import KakaoLoginButton from "../components/loginButton/KakaoLoginButton";
import NaverLoginButton from "../components/loginButton/NaverLoginButton";

const LoginPage = () => {
  return (
    <div>
      <h1>loginpage</h1>
      <GoogleLoginButton />
      <KakaoLoginButton />
      <NaverLoginButton />
    </div>
  );
};

export default LoginPage;
