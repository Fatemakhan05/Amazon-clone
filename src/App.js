import React, {useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Header from "./navbar/Header";
import Login from "./Login";
import Home from "./Home";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  /* eslint-disable no-unused-vars */
 const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component load .........
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

    return (
 
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="Header" element={<Header />} />
            <Route path="/Login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
