import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0,0,0,0,0,0]
    }
  }
  arvo = (arvottu) => {
      return () => {
          this.setState ({ selected: arvottu })
      }
  }
  pisteet = () => {
     
     const pisteet1 = this.state.pisteet

     const kopio = [...pisteet1]
     kopio[this.state.selected] += 1   
     this.setState ({ pisteet: kopio})      
  }

  render() {
    
    
    const Statistics = () => {
      const max = Math.max(...this.state.pisteet)
      const index = this.state.pisteet.findIndex(x => x === max);
     
      if (max === 0){
        return(
        <p>no votes has been given</p>
        )
      }
      return (
        <div>
        <p>{this.props.anecdotes[index]}</p>
        <p> has {max} votes</p>
        </div>
      )
    }

    return (
      <div>
        
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>Has {this.state.pisteet[this.state.selected]} votes </p>
        <button onClick={this.arvo(Math.floor((Math.random()* 6) + 0))} >
            next anecdote
        </button> 
        <button onClick={this.pisteet} >
          vote
        </button>
        <h2> anecdote with most votes </h2>
        < Statistics />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)