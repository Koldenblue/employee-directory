import React from "react";

class AgeSortBtn extends React.Component {

  state = {
    btnText: "Sort by Age"
  }

  sortToggle = (event) => {
    event.preventDefault()
    this.props.sortByAge(event);
    this.setState({
      btnText: this.state.btnText === "Sort by Age" ? "Reverse Sort by Age" : "Sort by Age"
    });
  }

  render() {
    return (
      <button onClick={this.sortToggle} className="btn btn-primary">
        {this.state.btnText}
      </button>
    )
  }
}

export default AgeSortBtn;