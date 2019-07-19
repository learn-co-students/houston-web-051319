import React, { Component } from 'react';
import { ComicBookForm } from './ComicBookForm';

const cardStyles = {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '2px',
    margin: '5px'
}

export class ComicBookCard extends Component {

    state = {
        showDetails: false
    }

    editCard = () => {
        this.setState({
            showDetails: !this.state.showDetails //? false : true
        })
    }

    handleSubmit = (name, date, author) => {
        this.props.editComic(this.props.id, name, date, author)
    }

    render() {
        return (
            <div style={cardStyles} >
               <p>{this.props.name}</p>
               { this.state.showDetails 
                    ? <ComicBookForm 
                        id={this.props.id}
                        name={this.props.name} 
                        author={this.props.author} 
                        date={this.props.date} 
                        onSubmit={this.handleSubmit}
                    />
                    : null
                }
               <button onClick={this.editCard}>Edit</button>
            </div>
        );
    }
}