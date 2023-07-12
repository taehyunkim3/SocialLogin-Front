import axios from "axios";
import { useEffect } from "react";

const GoogleCallback = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      console.log(
        "axios시작🛑axios시작🛑axios시작🛑axios시작🛑axios시작🛑axios시작🛑"
      );
      axios
        .post(`http://localhost:3001/googleLogin?code=${code}`)
        .then(function (response) {
          console.log("axios성공");
          console.log(response);
          const URL = `http://localhost:3000/?token=${response.data.token}&site=google`;
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
      LoginRedirect
      <h1>{code}</h1>
    </div>
  );
};

export default GoogleCallback;
