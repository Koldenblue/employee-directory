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
        <p>
          Home phone: {this.props.phone}
        </p>
        <p>
          Cell phone: {this.props.cell}
        </p>
        <p>
          Age: {this.props.age}
        </p>
        <img src={this.props.picture} alt='employee'></img>
      </div>
    )
  }
}

export default Employee;