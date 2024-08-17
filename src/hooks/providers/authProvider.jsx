import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import auth from "../../firebaseConfig/firebase.config";
import axiosCommon from "../instance/axiosCommon";
import AuthContext from "../context/authContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  signOut,
  GoogleAuthProvider
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  const logInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      await axiosCommon.post("/auth/logout");
    } finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async (updates) => {
    if (auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, updates);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  const addUser = async (user) => {
    if (user) {
      const currentUser = {
        name: user.displayName || "No Name",
        email: user.email || "No Email",
      };
      const { data } = await axiosCommon.put("/users/add", currentUser);
      return data;
    }
  };

  const getToken = async (email) => {
    if (email) {
      const { data } = await axiosCommon.post("/auth/token", { email });
      return data;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await addUser(currentUser);
        await getToken(currentUser.email);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        logInWithGoogle,
        updateUserProfile,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
