import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'
import {Task} from "./components/Task"
function App() {
  
  const [inputValue,setInputvalue] = useState("")
  const [todoList, setTodolist]= useState([])
  // eslint-disable-next-line
const [catFact, setCatfact] = useState("");
  // const [col, setCol] = useState("black")
  const [inputString, setInputstring] = useState("");
  const handleInput=(e)=>{
      setInputvalue(e.target.value)
      setInputstring(e.target.value)
  }

  const addTask=()=>{
    const task = {
      id: todoList.length===0?1:todoList[todoList.length-1].id+1,
      taskName: inputValue,
      completed: false
    }
    
    if(inputValue.length!==0)
    {setTodolist([...todoList,task])
    setInputstring("")
    setInputvalue("")}
    
  }

  const deleteTask=(id)=>{
      setTodolist(todoList.filter((task)=> id!==task.id))
  }

  const completeTask=(id)=>{
      setTodolist(todoList.map((task)=>{
        if(task.id===id){
          return {...task, completed:true}
        }
        else
          return task
      }))
  }

  // fetch("https://catfact.ninja/fact")
  // .then((res)=> res.json())
  // .then((data)=>{
  //   console.log(data)
  // })

  const genFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res)=> {
    setCatfact(res.data.fact);
  });
  }

  const [age,setAge] = useState(0);
  const [perName,setPername] = useState("")
  const genAge = () => {
    Axios.get(`https://api.agify.io/?name=${perName}`).then((res)=> {
    setAge(res.data.age);
  });
  }

  useEffect(()=>{
    genFact();
  },[])
  
  return (
    <div className="App">

      <div className='input-container'>

        <div className="inputs">
          <input type="text" className="input" value={inputString}  onChange={handleInput}/>
          {<button className="input-btn" onClick={addTask}>Add Task</button>}
        </div>
        
      </div>


      <div className='todo-container'>
        {todoList.map((task)=>{

        return <Task taskName={task.taskName} id={task.id} completed={task.completed} completeTask={completeTask} deleteTask={deleteTask}/>       
        } )}
      </div>

      <div>
        <button className='gen-btn' onClick={genFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
      </div>

<br></br>
<br></br>
<br></br>
<br></br>
      <div>
        <input type="text" className='age-text' placeholder='Enter Person Name' onChange={(e)=>{
          setPername(e.target.value)
        }}/>
        <button className='age-btn' onClick={genAge}>Predict Person age</button>
        <p>Predicted age: {age}</p>
      </div>

      

      
    </div>
  );
}

export default App;
