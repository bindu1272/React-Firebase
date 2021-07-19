import React from 'react';
import {useState,useContext} from 'react';
const employeeContext = React.createContext();
function ContextUses(){
    const [employee,setEmployee] = useState({name:'Bindu',branch:"cse",salary:'150000'});
    return(
        <div>
            welcome to hooks learn use context
            <employeeContext.Provider value={{data:employee,updateFunction:setEmployee}}>
            <Employee/>
            </employeeContext.Provider>
        </div>
    )
}
function Employee(){
    let context =useContext(employeeContext)
    return(
        <div>
                Welcome to Employee Component
                <h1>Employee Name  {context.name}</h1>
                <Salary/>
        </div>
    )
}
function Salary(){
    let context = useContext(employeeContext)
    const changeHandler=(event)=>{
        context.updateFunction({...context.data,salary : event.target.value})
    }
    return(
        <div>
            Welcome to Salary Component
            <input type="text" name ="salary" value={context.salary} onChange={changeHandler}/>
            <h1>Employee Salary {context.data.salary}</h1>
        </div>
    )
}

export default ContextUses;