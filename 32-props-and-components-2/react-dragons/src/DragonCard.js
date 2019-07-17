import React from 'react'

export default class DragonCard extends React.Component {
    render(){
        return (
            <div>
                <h3>{this.props.name}</h3>
                <img width="100px" src={this.props.image} />
            </div>
        )
    }
}