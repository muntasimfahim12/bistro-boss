/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/firebase.config"; 

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // ---------------- SIGN UP ----------------
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // ---------------- LOGIN ----------------
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // ---------------- LOGOUT ----------------
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // ---------------- UPDATE PROFILE ----------------
    const updateUserProfile = (name, photoURL) => {
        if (!auth.currentUser) return Promise.reject(new Error("No user logged in"));
        return updateProfile(auth.currentUser, { displayName: name, photoURL })
            .then(() => console.log("Profile updated successfully!"))
            .catch((error) => console.error("Error updating profile:", error));
    };

    // ---------------- GOOGLE LOGIN ----------------
    const googleLogin = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // ---------------- OBSERVE AUTH STATE ----------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // ---------------- AUTH CONTEXT VALUE ----------------
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        googleLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
