import React from "react";

import Router from "./Router";
import BirdsContainer from "./BirdsContainer";
import Navbar from "./Navbar";

const App = () => {
    return (
        <div>
        <Navbar />
        <BirdsContainer />
        <Router />
        </div>
    );
};

export default App;