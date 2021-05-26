import React, { Component } from 'react'

class Search extends Component {
    handleChange = (event) => {
        
      this.props.callbackFn(event.target.value);
    };
  
    render() {
      return (
        <input
          className="input is-link"
          name="search"
          value={this.props.value}
          onChange={this.handleChange}
          placeholder="Search food"
        />
      );
    }
  }
  
  export default Search;