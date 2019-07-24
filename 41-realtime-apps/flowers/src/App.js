import React from 'react';
import logo from './logo.svg';
import socketIO from 'socket.io-client'
import './App.css';

const io = socketIO('http://localhost:8080')

class App extends React.Component {
  state= {
    balls: []
  }

  componentDidMount(){
    fetch('http://localhost:8080/balls')
      .then(r => r.json())
      .then( balls => this.setState({ balls }))

    io.on('newBall',  ball => {
      this.setState({ balls: [ ...this.state.balls, ball ]})
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const newBall = { color: e.target.color.value }
    fetch('http://localhost:8080/balls', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newBall)
    })
    
    this.setState({
      balls: [...this.state.balls, newBall]
    })
  }

  render() {
    return (
      <div>
        {this.state.balls.map(ball => (
          <li>{ball.color}</li>
        ))}
        <form onSubmit={this.handleSubmit}>
          <label>
            New Ball:
          </label>
          <input type="text" name="color"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
