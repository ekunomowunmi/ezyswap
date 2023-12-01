import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import  Protected  from './components/Protected'

function App() {
  return (
    <GoogleOAuthProvider clientId="407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com">
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
       
        <Route exact path="/dashboard" element={
         <Protected isLoggedIn={true}>
          {/*  if set to false will not be always route back to login, 
          usually would use a dispatch on login for the auth */}
         <Dashboard />
       </Protected>} />
        <Route exact path="/signup" element={<LoginPage />} />
      </Routes>
    </Router>
     </GoogleOAuthProvider>
  
  );
}

export default App;
