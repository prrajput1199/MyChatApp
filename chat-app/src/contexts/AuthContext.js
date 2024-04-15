import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    console.log("Auth=>",auth);
    const res = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log("auth currentUser=>",currentUser);
    });

    return () => {
      res();
    };
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
