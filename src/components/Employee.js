import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myState: null
    }
  }

  render() {
    return (
      <div>
        <p>
          {this.props.name}
        </p>
      </div>
    )
  }
}

export default Employee;