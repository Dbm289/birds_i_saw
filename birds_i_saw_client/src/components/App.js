import React from "react";

import Router from "./Router";
import BirdsContainer from "./BirdsContainer";

const App = () => {
    return (
        <div>
        <BirdsContainer />
        <Router />
        </div>
    );
};

export default App;