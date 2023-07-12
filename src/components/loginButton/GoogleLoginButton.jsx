const GoogleLoginButton = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const LoginURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${
    import.meta.env.VITE_GOOGLE_CLIENT_ID
  }&scope=openid%20profile%20email&redirect_uri=http://localhost:3000/google/callback`;

  const googleLoginHandler = () => {
    window.location.href = LoginURL;
  };
  return (
    <>
      <img
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998689465C3D7D1217"
        onClick={googleLoginHandler}
        width="300px"
      />

      {/* <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);

            navigate(`/google/callback?code=${res.clientId}`);
          }}
          onFailure={(err) => {
            console.log(err);
          }}
        />
      </GoogleOAuthProvider> */}
    </>
  );
};

export default GoogleLoginButton;
