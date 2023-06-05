import './App.css';
import {useState} from 'react'
function App() {
  const [todos , setTodos] = useState([])
  const [todo ,setTodo] = useState('')

  return (     
    <>
    <div className='screen'>
      <div className='todo-container'>
        <div className='input-add-wrap'>
          <input value={todo} onChange={(e)=>setTodo(e.target.value)} className='inp-box' type="text" />
          <button onClick={()=>setTodos([...todos,{id:Date.now(),text:todo,status:false}])} className='btn'>ADD</button>
        </div>
        <div className="todos">
        {
          todos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input style={{cursor:'pointer'}} onChange={(e)=>{
                    console.log(e.target.value);
                   
                    setTodos(todos.filter(obj2=>{
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))
                  }} checked={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>{
                    let index = todos.findIndex((obj3)=>obj3.id === obj.id);
                    {
                      const newtoDos = [...todos]
                      newtoDos.splice(index,1)
                      setTodos(newtoDos)
                    }
                  }} className="fas fa-times" style={{cursor:'pointer'}}></i>
                </div>
              </div>
            )
          })
        }
    
        </div>
      </div>
      <div className='todo-container'>
        <div className='input-add-wrap'>
          <div >
            <h4>Completed Task</h4>
          </div>
        </div>
        <div className='thediv-wrap'> 
        {
          todos.map((obj)=>{
            if (obj.status) {
              return(
                <div className='thediv'>
                  <h3 className='thevalue'>{obj.text}</h3>
                </div>
              )
            }
            return null
          })
        }
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
