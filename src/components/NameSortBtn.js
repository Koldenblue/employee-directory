import React from "react";

class NameSortBtn extends React.Component {

  state = {
    btnText: "Sort by Name"
  }

  sortToggle = (event) => {
    event.preventDefault()
    this.props.sortByName(event);
    this.setState({
      btnText: this.state.btnText === "Sort by Name" ? "Reverse Sort by Name" : "Sort by Name"
    });
  }

  render() {
    return (
      <button onClick={this.sortToggle} className="btn btn-danger">
        {this.state.btnText}
      </button>
    )
  }
}

export default NameSortBtn;