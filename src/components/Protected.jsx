import { Navigate } from "react-router-dom";
import React from 'react';
import { useAuth } from './AuthContext';

const Protected = ({ children }) => {
  const {isLoggedIn} = useAuth()
   if (!isLoggedIn) {
    return <Navigate to="/signup" replace />
  }
  return children;
};
export default Protected