import React, { Component } from 'react';
import Content from './Content';
export default class App extends Component {

    state = {
        show: true
    }

    render() {
        return (
            <div>
               { this.state.show 
                    ? <Content bar="foo"/>
                    : null
                }
                <button 
                    onClick={() => this.setState({ show: !this.state.show})}
                >
                    Toggle
                </button>
            </div>
        );
    }

}