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
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

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

  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
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
      updateProfile(auth?.currentUser, {
        ...updates,
      });
    }
  };

  const addUser = async (user) => {
    const currentUser = {
      name: user.displayName,
      email: user.email,
    };
    const { data } = await axiosCommon.put("/users/add", currentUser);
    return data;
  };

  const getToken = async (email) => {
    const { data } = await axiosCommon.post("/auth/token", { email });
    return data;
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
