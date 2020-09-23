import React from "react";

class SearchForm extends React.Component {

  // state = {
  //   search: ""
  // }



  handleFormSubmit = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={this.props.handleInputChange}
            // value={}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="search"
          />
          <br />
          <button onClick={this.handleFormSubmit} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
