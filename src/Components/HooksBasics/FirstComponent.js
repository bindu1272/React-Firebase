import React,{Fragment, useState,useEffect} from 'react';
function FirstComponent(){
    const [count, setCount] = useState(0);
    const [name,setName] = useState('');
    const incrementCount =()=>{
        setCount(count+1);
        console.log(count)
    }
    const changeHandler=(event)=>{
        setName(event.target.value);
    }
    // useEffect(() => {
    //     console.log(count);
    // }, [count])
    return(
        <Fragment>
            <button onClick={incrementCount}>Counter</button>
            <h1>{count}</h1>
            <input type="text" name ="name" value={name} placeholder="enter your name" onChange={changeHandler}/>
            {name}
        </Fragment>
    )

}
export default FirstComponent;