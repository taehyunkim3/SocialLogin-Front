import axios from "axios";
import React, { useEffect } from "react";

const KakaoCallback = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      console.log(
        "axios시작🛑axios시작🛑axios시작🛑axios시작🛑axios시작🛑axios시작🛑"
      );
      axios
        .post(`http://localhost:3001/kakaoLogin?code=${code}`)
        .then(function (response) {
          console.log("axios성공");
          console.log(response);
          const URL = `http://localhost:3000/?token=${response.data.token}&site=kakao`;
          window.location.href = URL;
        })
        .catch(function (error) {
          console.log("axios실패");
          console.log(error);
        });
    }
  }, []);

  return (
    <div>
      <h1>잠시만 기다려주세요. 카카오에서 홈으로 이동중</h1>
      <h2>코드:{code}</h2>
    </div>
  );
};

export default KakaoCallback;
