import React from 'react'
import Title from './Title'
export default class DragonCard extends React.Component {


    render(){
        const { name, image } = this.props.dragon
        return (
            <div>
                <Title name={name}/>
                <img src={image} width="50%"/>
            </div>
        )
    }
}