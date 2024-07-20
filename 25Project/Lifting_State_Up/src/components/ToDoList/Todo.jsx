import React, { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";

const Todo = () => {
  const [input, setinput] = useState({
    id:"",
    content:"",
    check:false
  });
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("thapatodo")) || []);
  const [datetime, setDateTime] = useState("");

  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formateDate = now.toLocaleDateString();
      const formateTime = now.toLocaleTimeString();
      setDateTime(`${formateDate}-${formateTime}`);
    }, 1000);
    return () => clearInterval(interval);
    
  }, []);


  const handleDeleteTask = (value)=>{
        const updatedTaskList = task.filter((currTask)=>currTask != value);
        setTask(updatedTaskList);
  }

  const handleCheckTask = (taskItem)=>{
    const updatedTask = task.map((item)=>{
      if(item.id===taskItem.id){
       return  {...item, check:!item.check}
      }
      return item;
    })
    setTask(updatedTask);
  }
  const handleClearAll = ()=> setTask([]);



const handleFormSubmit = (e) => {
  const value = e.target.value;
  e.preventDefault();
  if(!input) return;
  if(task.some(item=>item.content===input.content)) return;


setTask(prev=> [...prev, input]);
setinput({
  id:"",
  content:"",
  check:false
});
localStorage.setItem("thapatodo",JSON.stringify(task));
};


  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{datetime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={input.content}
              onChange={(e) => setinput((prev)=>({...prev, id:e.target.value, content: e.target.value}))}
              style={{
                width:"300px",
                border:"2px solid red",
                borderTopLeftRadius:"110px",
                borderTopRightRadius:"110px",
                borderBottomLeftRadius:"110px",
                borderBottomRightRadius:"110px",
                padding:"10px",
                marginBottom:"10px",
                // display:"flex",
                // gap:"100px",
                // justifyContent:"space-between",
                // alignItems:"center"
              }}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section>
        <ul >
          {task.map((task, index) => (
            <li key={index} className="todo-item" style={{
              width:"400px",
              border:"2px solid blue",
              borderTopLeftRadius:"110px",
              borderTopRightRadius:"110px",
              borderBottomLeftRadius:"110px",
              borderBottomRightRadius:"110px",
              padding:"10px 30px",
              marginBottom:"10px",
              marginRight:"45px",
              display:"flex",
              // gap:"100px",
              justifyContent:"space-between",
              alignItems:"center",
              textDecoration:"none"
            }}>
              <span className={`${task.check && "text-strict"}`}>{task.content}</span>
              <button className="check-btn " onClick={()=>handleCheckTask(task)}
                style={{backgroundColor:"green",}}
                >
                <MdCheck />
              </button>
              <button className="delete-btn" onClick={()=> handleDeleteTask(task)} style={{backgroundColor:"red",}}>
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <button onClick={handleClearAll}
        style={{backgroundColor:"maroon",}}>
            Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
