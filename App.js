import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import MainPage from "./MainPage";

const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isSignedUp ? (
              <Navigate to="/login" />
            ) : (
              <Signup onSignup={() => setIsSignedUp(true)} />
            )
          }
        />

        <Route
          path="/login"
          element={
            isSignedUp ? (
              <Login onLogin={() => setIsLoggedIn(true)} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/main"
          element={isLoggedIn ? <MainPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
