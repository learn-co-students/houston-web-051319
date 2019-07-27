import React from 'react';
import logo from './logo.svg';
import socketIO from 'socket.io-client'
import './App.css';

const io = socketIO('http://localhost:8080?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.8y3RkmSWZ5RCq7z5A8qxfiKBhXbIRB6DZIPdJSSHGT4')

class App extends React.Component {
  

  componentDidMount(){
   
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
