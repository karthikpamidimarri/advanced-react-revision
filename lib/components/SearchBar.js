import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component{
    state ={
        searchTerm : ''
    };

    doSearch = debounce(()=>{
        console.log(this.state.searchTerm);
    },300);

    handleSearch = (event) => {
        this.setState({searchTerm:event.target.value},()=>{
            this.doSearch();
        })
    };

    render(){
        return(
                <input
                    value = {this.state.searchTerm}
                    type="search"
                    placeholder="Enter to search"
                    onChange={this.handleSearch}
                />
        );
    }
}
export default SearchBar;