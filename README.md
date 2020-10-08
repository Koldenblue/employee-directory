# Mock Employee Directory

![image](https://user-images.githubusercontent.com/64618290/95415900-5666a580-08e6-11eb-8080-7a27355abace.png)

## Table of Contents

1. <a href="#description">Description</a>
2. <a href="#usage">Usage</a>
3. <a href="#questions">Issues and Questions</a>
<hr><h3 id='description'>Description</h3>
A React app that demonstrates retrieval of data from an API database, as well as search and sort functions for the employee data. The deployed page may be viewed at https://koldenblue.github.io/employee-directory/. A list of random imaginary persons is retrieved from the random user API upon page load or upon clicking the "Hire new employees" button. Employee objects are retrieved from the remote server through a simple AJAX call, using the 'axios' npm package. The search bar can be used to dynamically filter the employees by name. React is advantageous here - each employee is rendered as a separate component in the react virtual DOM, using a map function. Searching, sorting, and filtering functions simply change the indivually rendered components, rather than having to recreate the entire DOM or having to necessitate page reload.

In summary, this app is a good demonstration of how the component-based React framework can be used for code organization and performance advantages.

<h3 id='usage'>Usage</h3>
The "Hire some new employees" button may be pressed to retrieve a random list of 100 employees from the random persons database. The Search bar searches by name, and sort functions offer sort by age or sort by name functionalities.

<h3 id='questions'>Issues and Questions</h3>
Issues and questions can be emailed to 'kmillergit' at the domain 'outlook.com'. The author's GitHub profile may be found at https://github.com/Koldenblue.<p><sub><sup>This readme was generated with the help of the readme generator program at https://github.com/Koldenblue/readme-generator.</sup></sub></p>