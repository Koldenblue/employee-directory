import React from "react";
import API from "../utils/API";
import Employee from "./Employee"

class EmployeeList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }
  }

  findEmployees = () => {
    // res.data.results[0] is an array of 100 random employees
    API.search().then((res) => {
      console.log(res.data.results);
      this.setState({
        employees: res.data.results
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.findEmployees();
  }

  render() {
    return (
      <div>
        <button onClick={this.findEmployees}>Press me</button>
        <ul>
          {this.state.employees.map((person) => {
            return (
              <Employee
                name={person.name.title + ' ' + person.name.first + ' ' + person.name.last}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default EmployeeList;