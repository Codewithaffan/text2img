import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  // ✅ Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state when auth state changes
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  // ✅ Logout function
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const value = { user, setUser, showLogin, setShowLogin, logout };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
