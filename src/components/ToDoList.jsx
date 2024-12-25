import React, {useState} from 'react'

const ToDoList = () => {
  
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('')

  const [editingIndex, setEditingIndex] = useState(null);  
  const [editTask, setEditTask] = useState('');


  const addTask = () => {

    if(newTask.trim() !== ''){
        setTasks(t => [...t, newTask])
        setNewTask('')
    }

  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((element, i) => i !== index)
    setTasks(updatedTasks)
  }

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditTask(tasks[index])
  }

  const saveEdit = () => {
    if(editTask.trim() !== ''){
      const updatedTasks = [...tasks]
      updatedTasks[editingIndex] = editTask
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditTask('')
    }
  }





  return (
    <div className='to-do-list'>

        <h1>To-Do-List</h1>

        <div>
            <input type="text" placeholder='Enter a task' value={newTask} onChange={(e) => setNewTask(e.target.value)} />

            <button className='add-btn' onClick={addTask} >Add</button>
        </div>

        <ol>
            {
                tasks.map((task, index) => 
                    <li key={index}>
                      {
                        editingIndex === index ? (
                          <>
                            <input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)} autoFocus />
                            <button className='add-btn' onClick={saveEdit}>Save</button>
                          </>
                        ) : (
                          <>
                            <span className='text'>{ task }</span>
                            <button className='edit-btn' onClick={() => startEditing(index)}>Edit</button>
                            <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                          </>
                        )
                      }
                        
                    </li>
                )
            }
        </ol>

    </div>
  )
}


export default ToDoList