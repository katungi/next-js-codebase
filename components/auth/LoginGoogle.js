import { useEffect } from "react";
import Router from "next/router";
import GoogleLogin from "react-google-login";
import { loginWithGoogle, authenticate, isAuth } from "../../Hooks/auth";

const LoginGoogle = () => {
  const responseGoogle = (response) => {
    const tokenId = response.tokenId;
    const user = { tokenId };

    loginWithGoogle(user).then((data) => {
      if (data !== undefined) {
        if (data.error) {
          console.log(data.error);
        } else {
          authenticate(data, () => {
            if (isAuth()) {
              Router.push(`/experiences`);
            } else {
              Router.push(`/`);
            }
          });
        }
      }
    });
  };

  return (
    <div className="pb-3">
      <GoogleLogin
        clientId={`${process.env.NEXT_PUBLIC_GOOGLE_ID}`}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        theme="light"
        onClick={LoginGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginGoogle;
