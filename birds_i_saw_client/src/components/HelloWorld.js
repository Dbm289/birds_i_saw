import React, { Component } from 'react';


import '../Stylesheet.css'

class HelloWorld extends Component {
    state = {
        excount: ""
    }

    handleButtonSubmit = e => {
        e.preventDefault()
        this.setState({
            excount: this.state.excount + "!"

        })
    }

    render() {
        return(

            <div>

            <input type='button' onClick={this.handleButtonSubmit} value='Add exclamation point here!' />

            <ul className="feedback">
            
                    Hello World
            
    
                {this.state.excount}

            </ul>


            </div>

        )
    }
}

export default HelloWorld;