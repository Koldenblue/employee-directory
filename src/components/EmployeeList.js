import React from "react";
import { brotliCompress } from "zlib";
import API from "../utils/API";
import Employee from "./Employee"
import SearchForm from "./SearchForm";
const util = require("util")

class EmployeeList extends React.Component {
  constructor(props) {
    super(props)

    // employees is the list of employees retrieved from the database.
    // search is the search bar input
    // afterFilter is the list of employees after filtering with filterEmps()
    this.state = {
      employees: [],
      employeeNames: [],
      search: "",
      afterFilter: []
    }
  }

  findEmployees = () => {
    // res.data.results[0] is an array of 100 random employees
    API.search().then((res) => {
      let names = res.data.results.map((person) => {
        return(person.name.first + ' ' + person.name.last)
      })
      this.setState({
        employees: res.data.results,
        afterFilter: res.data.results,
        employeeNames: names
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  asyncSetState = util.promisify(this.setState)

  handleInputChange = (event) => {
    const { name, value } = event.target;

    // using promisified set state to make sure that searchbar input state is set
    // before using it in the filter function
    this.asyncSetState({
      [name]: value
    }).then(() => {
      let filtered = this.filterEmps()
      this.setState({
        afterFilter: filtered
      })
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("clicked")
    console.log(this.state.employees)
    let sorted = this.state.employees.sort(((a, b) => {
      return (a.dob.age - b.dob.age)
    }));
    console.log(sorted)
    this.setState({
      employees: sorted,
      afterFilter: sorted
    })
  }


  // filters employees by name depending on the search input
  filterEmps = () => {
    let filteredEmps = this.state.employees;
    console.log(filteredEmps)
    // this.state.search is the form input value
    filteredEmps = filteredEmps.filter((person) => {
      if ((person.name.first + person.name.last).includes(this.state.search)) {
        console.log(true)
        console.log(person.name.first + person.name.last)
      }
      return (person.name.first + ' ' + person.name.last).includes(this.state.search)
    })
    console.log(filteredEmps)
    return filteredEmps;
  }

  // gets a new employee list upon rendering
  componentDidMount() {
    this.findEmployees();
  }

  render() {
    return (
      <div>
        <button onClick={this.findEmployees}>Hire some new employees</button>
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <ul>
          {this.state.afterFilter.map((person) => {
            return (
              <div key={person.phone}>
                <Employee
                  name={person.name.title + ' ' + person.name.first + ' ' + person.name.last}
                  phone={person.phone}
                  cell={person.cell}
                  picture={person.picture.thumbnail}
                  age={person.dob.age}
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