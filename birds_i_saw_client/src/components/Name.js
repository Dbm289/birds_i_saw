import React, { Component } from 'react';


import '../Stylesheet.css'
import NameButton from './nameButton';

class Name extends Component {

    constructor() {
        super();
        this.input = React.createRef();
        this.handleNameSubmit = this.handleNameSubmit.bind(this);
        this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
        this.names = ["Ash", "Red", "Jack", "Eleanor"]


    }

    state = {
        chosenName: '',
        nameError: ''
    }

    validate = () => {
        let nameError = "";

        if (this.input.current.value.includes("BadName")) {
            nameError = 'Your name is a naughty name and, thus, invalid';
        }

        this.setState({ nameError });

        if (nameError) {
            return false;
        }

        return true
    }

    handleNameSubmit(e) {
        console.log(this.input)
        e.preventDefault()
        alert('You submitted a name: ' + this.input.current.value);
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                chosenName: this.input.current.value
            })
        }
    };

    handleButtonSubmit(e) {
        e.preventDefault()
        console.log(e)
        alert('You chose ' + e.target.value + '!')
        this.setState({
            chosenName: e.target.value,
            nameError: ''
        })
    }

    render() {
        return (
            <div>

<form className="nameForm" onSubmit={this.handleNameSubmit}>
            <label>Name: </label>

            <input type='text'  ref={this.input}/>

            < br />

            <input type='submit' value="Add your own name" />

            < br />

            < br />

        </form>

        

        {this.names.map((name) => {
            

            return(


        <NameButton name={name} key={name} handleButtonSubmit={this.handleButtonSubmit}  />

            )})}



        <div>

            <ul className="nameFeedback">
            < br />
            <h4>
                Name Chosen:
            </h4>
            {this.state.chosenName}

            </ul>
            
        </div>
        <div style={{ color: "red" }}>
            {this.state.nameError}
        </div>


            </div>
        )
    }

}

export default Name;