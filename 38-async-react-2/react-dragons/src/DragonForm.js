import React from 'react'

export default class DragonForm extends React.Component {

    state = {
        dragonName: '',
        dragonImage: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.dragonName, this.state.dragonImage)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>Name:</label>
                    <input type="text"  onChange={e => {
                        this.setState({ dragonName: e.target.value })
                    }} />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="text" onChange={e => {
                        this.setState({ dragonImage: e.target.value })
                    }}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }

}