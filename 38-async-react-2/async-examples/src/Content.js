import React, { Component } from 'react';
export default class Content extends Component {

    
    state = {
        message: 'Loading...'
    }


    componentDidMount(){
        fetch('http://10.185.7.248:3000/roy-dragons/1')
            .then(res => res.json())
            .then( dragon => {
                this.setState({ message: dragon.name })
            })
    }

    handleChange = e => {
        this.setState({ message: e.target.value })
        fetch(`http://10.185.7.248:3000/roy-dragons/1`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: e.target.value
            })
        })
    }

    render() {
        console.log('in render')
        return (
            <div>
                Message:
                <input value={this.state.message} onChange={this.handleChange}/>
            </div>
        );
    }
}