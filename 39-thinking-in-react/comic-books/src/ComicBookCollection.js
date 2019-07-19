import React, { Component } from 'react';
import { ComicBookCard } from './ComicBookCard';
import { ComicBookForm } from './ComicBookForm';
export class ComicBookCollection extends Component {

    state = {
        comicBooksArray: []
    }

    addComicToState = (name, date, author) => {
        this.setState({
            comicBooksArray: [ ...this.state.comicBooksArray, { 
                name: name,
                date: date,
                author: author
            } ]
        })
    }

    editComicInState = (id, name, date, author) => {
        this.setState({
            comicBooksArray: this.state.comicBooksArray.map( book => {
                if(book.id == id){
                    return { ...book, name: name, date: date, author: author }
                } else {
                    return book
                }
            })
         })
    }

    componentDidMount(){
        fetch('http://localhost:3001/comic-books')
            .then( res => res.json() )
            .then( result => {
                this.setState({ comicBooksArray: result })
            })
    }

    render() {
        window.Collection = this
        let filteredComics = this.state.comicBooksArray.filter( book => book.name.includes(this.props.searchTerm))
        return (
            <div>
                {filteredComics.map( comic => (
                    <ComicBookCard id={comic.id} name={comic.name} date={comic.date} author={comic.author} editComic={this.editComicInState} />
                ))}
                <h3>Create New Comic Book: </h3>
                <ComicBookForm onSubmit={this.addComicToState} />
            </div>
        );
    }
}