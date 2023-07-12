import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const token = new URL(window.location.href).searchParams.get("token");
  const site = new URL(window.location.href).searchParams.get("site");

  const onLogoutHandler = () => {
    axios
      .post(`http://localhost:3001/user/logout`)
      .then(function (response) {
        console.log("로그아웃");
        console.log(response);
        window.location.href = `http://localhost:3000/`;
      })
      .catch(function (error) {
        console.log("로그아웃fail");
        console.log(error);
      });
  };

  return (
    <div>
      <h1>home</h1>
      {token ? (
        <>
          <p>로그인토큰{token}</p>
          <h1>{site}로 로그인이 완료되었습니다.</h1>
          <button onClick={onLogoutHandler}>로그아웃하기</button>
        </>
      ) : (
        <Link to={"/loginPage"}>로그인하기</Link>
      )}
    </div>
  );
};

export default Home;
