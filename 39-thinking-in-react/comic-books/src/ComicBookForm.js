import React, { Component } from 'react';
export class ComicBookForm extends Component {

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(e.target.name.value, e.target.date.value, e.target.author.value)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input name="name" type="text" defaultValue={this.props.name}  />
                </div>
                <div>
                    <label>Author</label>
                    <input name="author" type="text" defaultValue={this.props.author} />
                </div>
                <div>
                    <label>Date Created</label>
                    <input name="date" type="text" defaultValue={this.props.date} />
                </div>
                <button>Submit</button>
            </form>
        );
    }
}