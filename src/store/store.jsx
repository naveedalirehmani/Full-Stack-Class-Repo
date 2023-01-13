import React, { createContext, useContext, useState } from "react";


const useStore = () => {

  const [user, setUser] = useState("");
  const [counter, setCounter] = useState(0);

  return {
    user,
    counter,
    login : ()=> setUser("user"),
    setCounter : ()=> setCounter(),
  };
};

export const UseStoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  return (
    <UseStoreContext.Provider value={useStore()}>
      {children}
    </UseStoreContext.Provider>
  );
};

export default StoreProvider;

export const useUser = () => useContext(UseStoreContext).user;
export const useLogin = () => useContext(UseStoreContext).login;
export const useCounter = () => useContext(UseStoreContext).setCounter;
export const useGetCounter = () => useContext(UseStoreContext).counter;