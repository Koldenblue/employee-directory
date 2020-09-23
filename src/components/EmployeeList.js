import React from "react";
import API from "../utils/API";
import Employee from "./Employee"
import SearchForm from "./SearchForm";
const util = require("util")

class EmployeeList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      employees: [],
      search: ""
    }
  }

  findEmployees = () => {
    // res.data.results[0] is an array of 100 random employees
    API.search().then((res) => {
      this.setState({
        employees: res.data.results
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  asyncSetState = util.promisify(this.setState)

  handleInputChange = (event) => {
    const { name, value } = event.target;

    // so this.state.search is the form input value
    this.asyncSetState({
      [name]: value
    }).then(() => {
      let filtered = this.filterEmps()
      this.setState({
        employees: filtered
      })
    })

    
    // console.log(this.state.employees)
  }

  filterEmps = () => {
    let filteredEmps = this.state.employees;
    console.log(filteredEmps)
    filteredEmps = filteredEmps.filter((person) => {
      if ((person.name.first + person.name.last).includes(this.state.search)) {
        console.log(true)
        console.log(person.name.first + person.name.last)
      }
      return (person.name.first + person.name.last).includes(this.state.search)
    })
    console.log(filteredEmps)
    return filteredEmps;
  }


  componentDidMount() {
    this.findEmployees();
  }

  render() {
    return (
      <div>
        <button onClick={this.findEmployees}>Hire some new employees</button>
        <SearchForm
          handleInputChange={this.handleInputChange}
        />
        <ul>
          {this.state.employees.map((person) => {
            return (
              <div key={person.phone}>
                <Employee
                  name={person.name.title + ' ' + person.name.first + ' ' + person.name.last}
                  phone={person.phone}
                  cell={person.cell}
                  picture={person.picture.thumbnail}
                />
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default EmployeeList;