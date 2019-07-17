import React from 'react';
import { dragons } from './dragons'
import DragonCard from './DragonCard'
import DragonForm from './DragonForm';

class App extends React.Component {

    state = {  
        dragons: dragons
    }

    handleSubmit = (dragonName, dragonImage) => {
        this.state.dragons.push({
            name: dragonName,
            image: dragonImage
        })
        this.setState({ dragons: dragons })
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
                <DragonForm onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App