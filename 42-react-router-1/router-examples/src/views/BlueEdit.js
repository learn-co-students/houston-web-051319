import React from 'react';

export const BlueEdit = (props) =>  {
  return (
    <div style={stylesheet}>
        <h1>A Blue Edit Page</h1>
    </div>
  );
}


const stylesheet = {
    margin: '0px',
    padding: '10px',
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    width: '100vw',
    height: '100vh'
}