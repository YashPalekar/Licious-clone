import React, { useState } from "react";

export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [logInStatus, setLogInStatus] = useState(
    sessionStorage.getItem("user") ?? false
  );

  const currentUser = JSON.parse(sessionStorage.getItem("user"));

  const [cart, setCart] = useState(
    currentUser !== null ? currentUser.cart : []
  );

  const value = {
    logInStatus,
    setLogInStatus,
    cart,
    setCart,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
