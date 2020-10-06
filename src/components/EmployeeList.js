import React from "react";
import { brotliCompress } from "zlib";
import API from "../utils/API";
import Employee from "./Employee"
import SearchForm from "./SearchForm";
import AgeSortBtn from "./AgeSortBtn";
import NameSortBtn from "./NameSortBtn";
import Logo from "./Logo";
const util = require("util");

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
      // afterFilter is the list of employees after the search filter is applied
      afterFilter: [],
      ageSortOrder: -1,
      nameSortOrder: 1
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
    // Search form state is set to state of input.
    this.asyncSetState({
      [name]: value.toLowerCase()
    // Then 
    }).then(() => {
      let filtered = this.filterEmps()
      this.setState({
        afterFilter: filtered
      })
    })
  }

  sortByAge = (event) => {
    event.preventDefault();
    console.log("clicked")
    console.log(this.state.employees)
    // sorting employees array by age:
    let sorted = this.state.employees.sort(((a, b) => {
      return (a.dob.age + (this.state.ageSortOrder * b.dob.age))
    }));
    // sort Order is multiplied by -1 so it will reverse sort when next clicked
    console.log(sorted)
    this.setState({
      employees: sorted,
      afterFilter: sorted,
      ageSortOrder: this.state.ageSortOrder * -1
    })
  }

  sortByName = (event) => {
    event.preventDefault();
    console.log("clicked sort by name");
    console.log(this.state.employees);
    let sorted = this.state.employees.sort((a, b) => {
      let fullNameA = a.name.first.toLowerCase() + ' ' + a.name.last.toLowerCase();
      let fullNameB = b.name.first.toLowerCase() + ' ' + b.name.last.toLowerCase();
      if (fullNameA < fullNameB) {
        return -1 * this.state.nameSortOrder;
      }
      if (fullNameB < fullNameA) {
        return 1 * this.state.nameSortOrder;
      }
      return 0;
    })
    this.setState({
      employees: sorted,
      afterFilter: sorted,
      nameSortOrder: this.state.nameSortOrder * -1
    })
    console.log(sorted)
  }

  // returns a list of filtered employees by name depending on the search form input
  filterEmps = () => {
    let filteredEmps = this.state.employees;
    console.log(filteredEmps)
    // this.state.search is the form input value
    filteredEmps = filteredEmps.filter((person) => {
      return (person.name.first.toLowerCase() + ' ' + person.name.last.toLowerCase()).includes(this.state.search)
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
      <main className='container-fluid'>
        <div className='row'>
          <div className='col-xl-3'>
            <Logo />
          </div>
          <div className='col-xl-9'>
            <div className='row'>
              <button className='btn btn-success' onClick={this.findEmployees}>Hire some new employees</button>
              <AgeSortBtn sortByAge={this.sortByAge} />
              <NameSortBtn sortByName={this.sortByName} />
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <SearchForm handleInputChange={this.handleInputChange} />
              </div>
            </div>
          </div>
        </div>


          <div className='container'>
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
      </main>
    )
  }
}

export default EmployeeList;