import { useContext } from "react";
import { MyContext } from "../context/app-context";

const CreateAccountPage = () => {
  const context = useContext(MyContext);

  const addAccount = () => {
    let details = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      cart: context.cart,
    };

    const prevRecords = JSON.parse(localStorage.getItem("accounts")) ?? [];

    let match = prevRecords.filter((e) => e.username === details.username);
    if (match.length !== 0) {
      alert("Account already exists. Please login");
    } else {
      localStorage.setItem(
        "accounts",
        JSON.stringify([...prevRecords, details])
      );
    }
  };
  return (
    <div className="main">
      <div className="page-title-heading">
        <h3>Create New Account</h3>
      </div>
      <form className="create-account-form">
        <input
          id="first-name"
          placeholder="First name"
          type="text"
          required></input>
        <input
          id="last-name"
          placeholder="Last name"
          type="text"
          required></input>
        <input id="username" placeholder="Email" type="email" required></input>
        <input
          id="password"
          placeholder="Password"
          type="password"
          required></input>
        <button className="center-btn active-color-btn" onClick={addAccount}>
          Create account
        </button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
