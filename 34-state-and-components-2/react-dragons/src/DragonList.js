import React from 'react'
import DragonCard from './DragonCard';

const dragons = [
    {
        "id": 1,
        "name": "Toothless",
        "description": "A Night Fury",
        "image":"https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
        "atWar": false
    },
    {
        "id": 2,
        "name": "Smaug",
        "description": "He is Fire, He is Death",
        "image":"http://media.comicbook.com/uploads1/2015/08/cumbersmaug-147620.jpg",
        "atWar": false
    },
    {
        "id": 3,
        "name": "Bozar",
        "description": "An uninteresting dragon",
        "image":"https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
        "atWar": false
    },
    {
        "id": 4,
        "name": "Tomar",
        "description": "An interesting dragon",
        "image":"https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
        "atWar": true
    }
  ]

export default class DragonList extends React.Component {

    state = {
        dragons: dragons,
        dragonName: '',
        dragonImage: ''
    }

    dragonImage = (e) => {
        this.setState({ dragonImage: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.state.dragons.push({
            name: this.state.dragonName,
            image: this.state.dragonImage
        })
        this.setState({
            dragons: this.state.dragons
        })
    }

    render(){
        return (
            <div>
                {this.state.dragons.map( dragon => {
                    return (
                        <DragonCard name={dragon.name} description={dragon.description} image={dragon.image} />
                    )
                })}
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label>Name:</label>
                        <input type="text"  onChange={e => {
                            this.setState({ dragonName: e.target.value })
                        }} />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input type="text" onChange={this.dragonImage}/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

