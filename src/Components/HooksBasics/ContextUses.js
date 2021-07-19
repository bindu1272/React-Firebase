import React from 'react';
import {useState,useContext} from 'react';
const employeeContext = React.createContext();
function ContextUses(){
    const [employee] = useState({name:'Bindu',branch:"cse",salary:'150000'});
    const [student] = useState({id:"1272",name:"varaprasad"})
    return(
        <div>
            welcome to hooks learn use context
            <employeeContext.Provider value={employee,student}>
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
    return(
        <div>
            Welcome to Salary Component
            <h1>Employee Salary {context.salary}</h1>
            <Branch/>
        </div>
    )
}
function Branch(){
    let context = useContext(employeeContext)
    return(
        <div>
            welcome to branch 
            <h1>{context.id}</h1>
        </div>
    )
}
export default ContextUses;