import { useState } from "react"

function App() {

  const[todolist,setTodolist]= useState([
    {id:1,taskName:"1. Learn useRef",status:" Pending"},
    {id:2,taskName:"2. Go to Gym",status:" Pending"},
    {id:3,taskName:"3. Build todo web app",status:" Pending"}
  ])

  const[newTask,setNewTask]=useState("")

  function addTask(e){
    e.preventDefault()
    if(!newTask){
      alert("Enter the task")
    }else{
      let newId=todolist.length+1
      let newEntry={id:newId,taskName:newTask,status:"Pending"}
      setTodolist([...todolist,newEntry])
      setNewTask("")
    }
  }

  function removeTask(id){
    setTodolist(todolist.filter((item)=>{
      return  item.id !==id

     
    }))
  }

  function updateTask(id){
    setTodolist(todolist.map((item)=>{
      return (
        item.id==id?{...item,status:"Finished"}:item
      )
    }))
  }


  return (
   <div className="h-screen bg-gradient-to-b from-purple-800 to-indigo-950">

    <div className="flex justify-center pt-24">
      <form className="bg-white py-3 px-6 rounded-lg flex justify-between w-[400px]">
        <input type="text" placeholder="Learn useRef" className="text-black font-semibold border-none outline-none" value={newTask} onChange={(e)=>{setNewTask(e.target.value)}}/>
        <button className="bg-purple-800 w-20 rounded-lg px-5 py-1 text-white" onClick={addTask} >Add</button>
      </form>
    </div>
    <div className="flex gap-10 justify-center mt-15">
      {todolist.map((item)=>{
      return(
        <div key={item.id} className="bg-stone-800 text-white h-[250px] w-[250px] rounded-lg ">
          <h1 className="font-bold py-5 px-2">{item.id}.{item.taskName}</h1>
          <p className="font-semibold px-2 py-2">Status:{item.status}</p>
          <div className="flex flex-col gap-3 mt-8 item-center">
            <button className="bg-indigo-600 w-[200px] rounded mt-3 ml-7 font-semibold py-1" onClick={()=>{updateTask(item.id)}} >Update Status</button>
            <button className="bg-indigo-600 w-[200px] rounded ml-7 font-semibold py-1" onClick={()=>{removeTask(item.id)}}>Remove</button>
          </div>
        </div>
      )
      })}
    </div>
   </div>
   
  )
}

export default App
