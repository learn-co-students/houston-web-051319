import React from 'react';
import { Link } from 'react-router-dom'

export const GreenIndex = () =>  {
  return (
    <div style={stylesheet}>
        <h1>A Green Index Page</h1>
        <Link to={{
          pathname: "/things/1",
          state: { something: 'foo' }
        }} >Thing 1</Link>
    </div>
  );
}


const stylesheet = {
    margin: '0px',
    padding: '10px',
    backgroundColor: 'green',
    textAlign: 'center',
    color: 'white',
    width: '100vw',
    height: '100vh'
}