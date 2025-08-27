import React from 'react'
import { useState } from 'react'; 
const InputTodo = () => {
    const [description, setDescription] = useState("");
  const onSubmitForm = async(e)=>{
    e.preventDefault();
    try{
      const body = {description};
      const response = await fetch("http://localhost:5000/todos",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)
      });
      console.log(response);
      window.location = "/";
    }
    catch(err){
      console.error(err.message);
    }
  }
  return (
       <>
    <div className="text-center mt-5">
    <h1>Pern Todo List</h1>
    <form className="d-flex mt-5 justify-content-center" onSubmit={onSubmitForm}>
      <input type="text" value={description} onChange={e=>{setDescription(e.target.value)}}/>
      <button className="btn btn-success">Add</button>
    </form>
   </div>
    </>
  )
}

export default InputTodo