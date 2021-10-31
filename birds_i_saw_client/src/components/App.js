import React from "react";

import Router from "./Router";
import BirdsContainer from "./BirdsContainer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../Stylesheet.css'



const App = () => {
    return (
        <div className="app">
        <Navbar />
        <BirdsContainer />
        <Router />
        <Footer />
        </div>
    );
};

export default App;