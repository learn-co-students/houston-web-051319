import React from 'react';
import { SearchBar } from './SearchBar';
import { ComicBookCollection } from './ComicBookCollection';

class App extends React.Component {

  state = {
    searchTerm: ''
  }

  changeSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  render(){
    return (
      <div>
        <SearchBar searchTerm={this.state.searchTerm} onSearch={this.changeSearchTerm}/>
        <ComicBookCollection searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
