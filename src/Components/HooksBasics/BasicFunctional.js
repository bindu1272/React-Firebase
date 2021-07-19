import React, { useState, useEffect } from "react";
import axios from "axios";

const BasicFunctional = () => {
  const [employees, setEmployees] = useState(null);
  const [student,setStudent] = useState(0)
  useEffect(() => {
    axios
      .get("https://api.github.com/users/supreetsingh247/repos")
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      });
  },[student]);
  useEffect(()=>{
      console.log("hi") 
  },[employees])
  return <div></div>;
};
export default BasicFunctional;
