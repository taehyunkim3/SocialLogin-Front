import axios from "axios";
import { useEffect } from "react";

const NaverCallback = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      console.log("axios시작🛑");
      console.log(code);
      axios
        .post(`http://localhost:3001/naverLogin?code=${code}`)
        .then(function (response) {
          console.log("axios성공");
          console.log(response);
          const URL = `http://localhost:3000/?token=${response.data.token}&site=naver`;
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
      <h1>잠시만 기다려주세요. 네이버에서 홈으로 이동중</h1>
      <h2>코드:{code}</h2>
    </div>
  );
};

export default NaverCallback;
