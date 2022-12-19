import { useContext } from "react";
import { MyContext } from "../context/app-context";

const Login = () => {
  const context = useContext(MyContext);
  let loginText = "Login";
  if (!context.logInStatus) loginText = "Login";
  else
    loginText = `Hi, ${JSON.parse(sessionStorage.getItem("user")).firstName}`;
  const showLogin = () => {
    document.getElementById("login-modal").showModal();
  };
  return <div onClick={showLogin}>{loginText}</div>;
};

export default Login;
