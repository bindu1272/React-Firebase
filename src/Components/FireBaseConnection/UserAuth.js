import React,{useRef, useState} from "react";
import { auth } from "./FireBase";
const UserAuth = () => {
  const email = useRef();
  const password = useRef();
  const repeatPassword = useRef();
    // const [data,setData] = useState({
    //     email : "",
    //     password : "",
    //     repeatPassword : ""
    // })
    // const changeHandler=(event)=>{
    //   let name = event.target.name;
    //   let value = event.target.value;
    //     setData({...data,[name] : value})
    //     console.log(data);
    // }
    const signIn=(event)=>{
        event.preventDefault();
    }
    const signUp=(event)=>{
      event.preventDefault();
      if(password.current.value === repeatPassword.current.value){
        
        console.log(auth.createUserWithEmailAndPassword(email.current.value,password.current.value))
      } 
    }
    // auth.onAuthStateChanged(user=>{
    //   setCurrentUser(user)
    // })
  return (
    <div>
        <form>
          <input type="email" name="email" ref = {email} autoComplete="off" placeholder="enter email"  /> <br/>
          <input type="password" name="password" ref = {password} placeholder="enter password"  /> <br/>
          <input type="password" name="repeatPassword" ref = {repeatPassword} placeholder="Re-enter password"  /> <br/>
          {/* <button onClick={signIn}>Sign in</button> */}
          <button onClick={signUp}>Sign Up</button>
        </form>
    </div>
  );
};
export default UserAuth;
