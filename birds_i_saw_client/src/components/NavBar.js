import React, { Component } from 'react';
import { Button } from './Button';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import NavItem from './NavItem';

class Navbar extends Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }



    render() {
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo">Birds I Saw<i className="fab fa-birdsisaw"></i> </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>


                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {MenuItems.map((item, index) => {
                        return (
                            <NavItem key={index} item={item} />

                        )
                    })
                    }
                    
                    
                </ul>
            </nav>
        )
    }

}
export default Navbar;