import React from 'react'

export default class DragonForm extends React.Component {

    state = {
        newDragonName: '',
        newDragonImage: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return (
            <form onSubmit={e => {
                e.preventDefault()
                this.props.onSubmit(this.state.newDragonName, this.state.newDragonImage)
            }}>
                <div>
                    <label>Name</label>
                    <input value={this.state.newDragonName} name="newDragonName" type="text" onChange={this.handleChange} ></input>
                </div>
                <div>
                    <label>Image</label>
                    <input value={this.state.newDragonImage} name="newDragonImage" type="text" onChange={this.handleChange} />
                </div>
                <button>Submit</button>
            </form>
        )
    }

}