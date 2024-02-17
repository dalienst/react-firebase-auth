/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut as authSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };

  const authStateChanged = async (user) => {
    setIsLoading(true);
    if (!user) {
      clear();
      return;
    }
    setAuthUser({
      uid: user.uid,
      email: user.email,
    });
    setIsLoading(false);
  };

  const signOut = () =>
    authSignOut(auth).then(() => {
      clear();
    });

  const login = async ({email, password}) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    authStateChanged(userCredential.user);
  };

  const signUp = async ({email, password}) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    authStateChanged(userCredential.user);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    authStateChanged(userCredential.user);
  };

  const loginWithGithub = async () => {
    const provider = new GithubAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    authStateChanged(userCredential.user);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
    signOut,
    login,
    signUp,
    loginWithGoogle,
    loginWithGithub,
  };
}

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);
