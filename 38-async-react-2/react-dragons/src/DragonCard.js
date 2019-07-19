import React from 'react'
import DragonForm from './DragonForm';

export default class DragonCard extends React.Component {

    handleSubmit = (name, image) => {
        this.props.onSubmit(name, image, this.props.id)
    }

    render(){
        return (
            <div>
                <h3>{this.props.name}</h3>
                <img width="50%" src={this.props.image} />
                <DragonForm onSubmit={this.handleSubmit} />
            </div>
        )
    }
}