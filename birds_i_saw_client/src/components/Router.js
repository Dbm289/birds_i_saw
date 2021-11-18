import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import BirdsList from '../components/BirdsList'
import About from '../components/About'
import CharacterCounter from '../components/characterCounter'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/Birds' component={BirdsList} />
            <Route exact path='/charactercounter' component={CharacterCounter} />



        </Switch>
    );
};

export default Router;