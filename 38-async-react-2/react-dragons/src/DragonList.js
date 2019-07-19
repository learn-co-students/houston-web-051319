import React from 'react'
import DragonCard from './DragonCard';
import { dragons } from './dragons'
import DragonForm from './DragonForm';

export default class DragonList extends React.Component {

    state = {
        dragons: dragons
    }

    dragonImage = (e) => {
        this.setState({ dragonImage: e.target.value })
    }

    handleSubmit = (name, image) => {
        this.state.dragons.push({
            name: name,
            image: image
        })
        this.setState({
            dragons: this.state.dragons
        })
    }

    handleEdit = (name, image, id) => {
        this.setState({
            dragons: this.state.dragons.map( dragon => {

                // Ternary form: 
                // return ( 
                //     dragon.id === id 
                //         ? { ...dragon, name: name, image: image }
                //         : dragon
                // )

                if(dragon.id === id){
                    return { ...dragon, name: name, image: image }
                } else {
                    return dragon
                }
            })
        })
    }

    render(){
        return (
            <div>
                {this.state.dragons.map( dragon => {
                    return (
                        <DragonCard id={dragon.id} name={dragon.name} description={dragon.description} image={dragon.image} onSubmit={this.handleEdit}/>
                    )
                })}
                <h3>New Dragon</h3>
                <DragonForm onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

