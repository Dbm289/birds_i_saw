import React, { Component } from "react";
import '../Stylesheet.css'

class Squares extends Component {

    constructor() {
        super();
        this.handleSquaresButtonSubmit = this.handleSquaresButtonSubmit.bind(this);
        this.state = {
            squares: [{
                backgroundColor: 'rgb(255,255,0)'
            }]
        }
    }

    

    handleSquaresButtonSubmit = e => {
        e.preventDefault()
        const newSquare = {backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`}
        const oldSquares = this.state.squares
        this.setState({
            squares: oldSquares.concat(newSquare)
        })
        console.log(this.state.squares);
    }

    render() {
        const squares = this.state.squares;
        return(
            <div>
                <input type='button' onClick={(e) => this.handleSquaresButtonSubmit(e)} value="Button" ></input>
                
                {this.state.squares.map( (item, index) => {
                    return(
                        <div key={index} style={{ width: '100px', height: '100px', backgroundColor: item.backgroundColor}}></div>
                    )
                } )}


                </div>

            

        )
    }
}

export default Squares;