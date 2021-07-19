import React, { useEffect, useState } from "react";
function SecondComponent() {
  const [student, setStudent] = useState({ name: "", id: 0, board: "" });
  const [isClicked, setisClicked] = useState(false);
  const changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setStudent({ ...student, [name]: value });
  };
  const clickedMethod = (event) => {
    setisClicked({ isClicked: true });
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={changeHandler}
      />
      <input
        type="number"
        name="id"
        value={student.id}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="board"
        value={student.board}
        onChange={changeHandler}
      />
      <button onClick={clickedMethod}>Click me</button>
      {student.name}
      {student.board}
      <CseDepartment studentName = {student.name} id={student.id} board = {student.board} setStudent={setStudent} changeBoard={changeHandler}/>
    </div>
  );
}
const CseDepartment=({studentName,id,board,setStudent,changeBoard})=>{
    function changeBoard(event){
        setStudent({
            board : event.target.value
        })
    }
    return(
        <div>
        <h1>{studentName}</h1>
        <h1>{id}</h1>
        <input type = "" value={board} name = "board" onChange={changeBoard}/>
        <h1>{board}</h1>
        </div>
    )
}
export default SecondComponent;
