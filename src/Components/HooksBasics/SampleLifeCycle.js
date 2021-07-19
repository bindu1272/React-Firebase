import React, { Component } from "react";
import axios from "axios";
class SampleLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeCount: 0,
      employees: null,
      student: null,
    };
  }
  getEmployeesCount = () => {
    let employees = this.state.employees;
    // fetch("https://api.github.com/users/supreetsingh247/repos")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result)
    //     this.setState({
    //       employeeCount: result.length,
    //     });
    //   });
    axios
      .get("https://api.github.com/users/supreetsingh247/repos")
      .then((response) => {
        this.setState({
          employees,
        });
      });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("did update");
    console.log(prevState, this.state);
    if (prevState.employees !== this.state.employees) {
      console.log("hi");
    }
  }
  componentDidMount() {
    console.log("didMount");
    this.getEmployeesCount();
  }
  render() {
    console.log("render");
    return (
      <div>
        <h2>Welcome to Component Lifecycle Methods Demonstration...</h2>
        <p>
          <label>
            Number of Employees are : <b>{this.state.employeeCount}</b>
          </label>
        </p>
      </div>
    );
  }
}
export default SampleLifeCycle;
