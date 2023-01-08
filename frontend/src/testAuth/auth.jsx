import React, { useState, useEffect,useContext,createContext} from "react";
import { auth } from "../FirebaseConfig";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <authContext.Provider value={{ currentUser }}>
      {children}
    </authContext.Provider>
  );
};
