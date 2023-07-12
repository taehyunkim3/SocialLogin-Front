import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LoginRedirect from "../pages/CallbackPage/KakaoCallback";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Register from "../pages/Register";
import KakaoCallback from "../pages/CallbackPage/KakaoCallback";
import NaverCallback from "../pages/CallbackPage/NaverCallback";
import GoogleCallback from "../pages/CallbackPage/GoogleCallback";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/kakao/callback" element={<KakaoCallback />}></Route>
        <Route path="/naver/callback" element={<NaverCallback />}></Route>
        <Route path="/google/callback" element={<GoogleCallback />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
