import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myState: null
    }
  }

  styles = {
    employeeThumb: {
      'float': 'right'
    }
  }
  render() {
    return (
      <div className='employee-box'>
        <img src={this.props.picture} alt='employee' style={this.styles.employeeThumb} className='emp-image'></img>
        <p>
          <strong>{this.props.name}</strong>
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
      </div>
    )
  }
}

export default Employee;