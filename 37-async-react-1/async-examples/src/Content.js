import React, { Component } from 'react';
export default class Content extends Component {

    // constructor(){
    //     super()
    //     console.log('in constructor')
    // }

    state = {
        message: 'Loading...'
    }

    componentDidMount(){
        fetch('http://10.185.7.248:3000/roy-dragons/1')
            .then( res => res.json() )
            .then( dragon => {
                this.setState({
                    message: dragon.name
                })
            })
    }

    // componentWillUnmount(){
    //     console.log('component will unmount')
    // }

    // shouldComponentUpdate(){
    //     console.log('component is about to update')
    //     return true
    // }

    // componentDidUpdate(){
    //     console.log('component did update')
    // }

    render() {
        console.log('in render')
        return (
            <div>
                {this.state.message}
            </div>
        );
    }
}