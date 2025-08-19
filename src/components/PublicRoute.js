import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const PublicRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return null; // poczekaj aż Firebase sprawdzi usera

  // 🔑 jeśli zalogowany → przekieruj do strony głównej
  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
