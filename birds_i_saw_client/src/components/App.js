import React from "react";

import Router from "./Router";
import BirdsContainer from "./BirdsContainer";
import Navbar from "./Navbar";
import '../Stylesheet.css'



const App = () => {
    return (
        <div className="app">
        <Navbar />
        <BirdsContainer />
        <Router />
        </div>
    );
};

export default App;