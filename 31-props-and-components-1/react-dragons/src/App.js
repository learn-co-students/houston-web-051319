import React from 'react';
import { dragons } from './dragons'


class App extends React.Component {
    render(){
        return (
            <div>
                <h1>All Dragons </h1>
                {dragons.map( dragon => 
                    <DragonCard dragon={dragon} foo={"bar"}/>
                )}
            </div>
        )
    }
}

class DragonCard extends React.Component {
    // props = {
    //     dragon: {
    //         name
    //         image
    //     },
    //     foo: "bar"
    // }
    render(){
        const { name, image } = this.props.dragon
        return (
            <div>
                https://hackmd.io/QezoNJSXQJOd84rjjF-HKg?view
                <Title name={name}/>
                <img src={image} width="50%"/>
            </div>
        )
    }
}

function Title(whatever){
    return (
        <h3>{whatever.name}</h3>
    )
}



export default App