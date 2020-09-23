import React from "react";
import "../index.css"
class SearchForm extends React.Component {

  // state = {
  //   search: ""
  // }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleFormSubmit()
  }


  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search for an employee:</label>
          <input
            onChange={this.props.handleInputChange}
            // value={}
            name="search"
            type="text"
            className="form-control"
            placeholder="Employee Name"
            id="search"
          />
          <br />

        </div>
      </form>
    );
  }
}

export default SearchForm;
