import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const KakaoLoginButton = () => {
  const LoginURL = `https://kauth.kakao.com/oauth/authorize/?client_id=${
    import.meta.env.VITE_KAKAO_REST_API_KEY
  }&redirect_uri=http:%2F%2Flocalhost:3000%2Fkakao%2Fcallback&response_type=code`;

  const onKakaoClickHandler = () => {
    window.location.href = LoginURL;
  };
  return (
    <>
      <img
        src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_wide.png"
        onClick={onKakaoClickHandler}
      />
    </>
  );
};

export default KakaoLoginButton;
