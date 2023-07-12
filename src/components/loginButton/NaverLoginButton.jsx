const NaverLoginButton = () => {
  const LoginURL = `https://nid.naver.com/oauth2.0/authorize?client_id=${
    import.meta.env.VITE_NAVER_LOGIN_CLIENT_ID
  }&response_type=code&redirect_uri=http:%2F%2Flocalhost:3000%2Fnaver%2Fcallback&state=test`;

  const onNaverClickHandler = () => {
    window.location.href = LoginURL;
  };
  return (
    <>
      <img
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99580C465C3D7D130C"
        onClick={onNaverClickHandler}
        width="300px"
      />
    </>
  );
};

export default NaverLoginButton;
