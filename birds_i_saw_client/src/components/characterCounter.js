import React, { Component } from 'react';


import '../Stylesheet.css'

class CharacterCounter extends Component {
    state = {
        word: '',
        wordcount: 0
    }

    handleCharChange = e => {
        const { value } = e.target

        this.setState({
            word: value
        })
    }

    handleCharSubmit = e => {
       e.preventDefault()
       this.setState({
           wordcount: (this.state.word.length + this.state.wordcount)
       })
    }

render() {
    return (
        <div>

        <form className="characterForm" onSubmit={this.handleCharSubmit}>
            <label>Word: </label>

            <input type='text' value={this.state.word} onChange={this.handleCharChange} name="word" />

            < br />

            <input type='submit' value="Add word characters" />

            < br />
    


        </form>
        
        <div>

            <ul className="characterFeedback">
            < br />
            <h4>
                Total Characters:
            </h4>
            {this.state.wordcount}

            </ul>
            
        </div>

        </div>
    
    );
}

}

export default CharacterCounter;