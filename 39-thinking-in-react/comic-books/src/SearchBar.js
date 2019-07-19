import React, { Component } from 'react';
export class SearchBar extends Component {
    render() {
        return (
            <div>
                <h3>Search: </h3>
                <input type="text" value={this.props.searchTerm} onChange={e => {
                    this.props.onSearch(e.target.value)
                }}  />
            </div>
        );
    }
}