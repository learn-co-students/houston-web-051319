import React from 'react';
import DragonCard from './DragonCard'
import DragonForm from './DragonForm';

class App extends React.Component {

    state = {
        dragons: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/roy-dragons')
            .then( res => res.json() )
            .then( dragons => {
                this.setState({ dragons: dragons })
            })
    }

    handleSubmit = (dragonName, dragonImage) => {
        fetch('http://localhost:3000/roy-dragons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: dragonName,
                image: dragonImage
            })
        })
        this.state.dragons.push({
            name: dragonName,
            image: dragonImage
        })
        this.setState({ dragons: this.state.dragons })
    }

    handleEdit = (dragonName, dragonImage, id) => {
        this.setState({
            dragons: this.state.dragons.map( dragon => {
                if(dragon.id === id){
                    return { ...dragon, name: dragonName, image: dragonImage }
                } else {
                    return dragon
                }
            })
        })
    }

    render(){
        return (
            <div>
                {this.state.dragons.map( dragon => 
                    <DragonCard key={dragon.id} dragon={dragon} onSubmit={this.handleEdit}/>
                )}
                <h3>Create Dragon:</h3>
                <DragonForm onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App