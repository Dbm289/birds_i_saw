import React from 'react';
import '../Stylesheet.css'
import BirdsForm from "./BirdsForm";



const Home = () => {
    return (
        <div className="welcome">
        <h2>
            Welcome! If you've seen a bird you like, please fill in the relevant information below. 
            You'll be able to look at your full bird list by using the Navigation Bar up top! 
            Your favorite birds will be listed first. 
        </h2>
        <div>
            <BirdsForm />
        </div>
        </div>
    
    );
};

export default Home;