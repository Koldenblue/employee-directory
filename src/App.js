import React from 'react';
import EmployeeList from './components/EmployeeList';
import SearchForm from './components/SearchForm';


function App() {
  return (
    <div className="App">
      <SearchForm />
      <EmployeeList />
    </div>
  );
}

export default App;
