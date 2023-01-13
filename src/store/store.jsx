import React, { useState, useContext, createContext } from "react";

const StoreContext = createContext(null);

const useStore = () => {
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);

  return {
    user,
    setUser,
    count,
    setCount: (value) => setCount(count + value),
  };
};

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};

export const mutations = () => {
  return {
    useLogin: () => useContext(StoreContext).setUser,
    useGetUser: () => useContext(StoreContext).user,
    useGetCount: () => useContext(StoreContext).count,
    useSetCount: () => useContext(StoreContext).setCount,
  };
};

export default StoreProvider;
