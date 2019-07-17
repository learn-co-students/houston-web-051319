import React from 'react';
import { dragons } from './dragons'
import DragonCard from './DragonCard'

class App extends React.Component {

    state = {  
        newDragonName: '',
        newDragonImage: '',
        dragons: dragons
    }

    handleChange = (e) => {
      this.setState({ newDragonImage: e.target.value })
    }

    abstractChangeHandler = (e) => {
        this.setState({ [e.target.name]: `${e.target.value}!` })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.state.dragons.push({
            name: this.state.newDragonName,
            image: this.state.newDragonImage
        })
        this.setState({ dragons: dragons })
    }

    render(){
        window.App = this 
        return (
            <div>
                {dragons.map( dragon => 
                    <DragonCard dragon={dragon}/>
                )}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input value={this.state.newDragonName} name="newDragonName" type="text" onChange={this.abstractChangeHandler} ></input>
                    </div>
                    <div>
                        <label>Image</label>
                        <input name="newDragonImage" type="text" onChange={this.abstractChangeHandler} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default App