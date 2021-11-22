import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import BirdsList from '../components/BirdsList'
import About from '../components/About'
import CharacterCounter from '../components/characterCounter'
import Name from '../components/Name'
import Squares from '../components/Squares'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/Birds' component={BirdsList} />
            <Route exact path='/charactercounter' component={CharacterCounter} />
            <Route exact path='/name' component={Name} />
            <Route exact path='/squares' component={Squares} />



        </Switch>
    );
};

export default Router;