import React from 'react'
import Title from './Title'
import DragonForm from './DragonForm';
export default class DragonCard extends React.PureComponent {
    render(){
        const { name, image, id } = this.props.dragon
        return (
            <div>
                <Title name={name}/>
                <img src={image} width="50%"/>
                <DragonForm onSubmit={(name, image) => this.props.onSubmit(name, image, id)}/>
            </div>
        )
    }
}