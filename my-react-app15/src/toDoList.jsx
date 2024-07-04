import React, { useState } from 'react'
function toDoList(){


    const [tasks, setTasks] = useState(['Estudar', 'Tomar Café', 'Malhar', 'Ser campeão do UFC']);
    const [newTask, setNewTask] = useState('');


    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ''){

        setTasks(t => [...t, newTask]);
        setNewTask('');
        }
    }

    function deleteTask(index){
        const updatedText = tasks.filter((_, i)=> i!== index);
        setTasks(updatedText)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTexts = [...tasks];
            [updatedTexts[index], updatedTexts[index-1]] =
            [updatedTexts [index - 1], updatedTexts[index]]
            setTasks(updatedTexts)
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1 ){
            const updatedTexts = [...tasks];
            [updatedTexts[index], updatedTexts[index + 1]] =
            [updatedTexts [index + 1], updatedTexts[index]]
            setTasks(updatedTexts)
        }
    }

    return(
        <>
            <div className='to-do-list'>
                <h1>To-Do-List</h1>
                <div>
                    <input type="text" placeholder='Digite a tarefa...' value={newTask} onChange={handleInputChange}/>
                    <button className='add-button' onClick={addTask}>Adicionar</button>
                </div>

               
                    <ol>{tasks.map((task, index)=> <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={()=> deleteTask(index)}>Deletar</button>

                        <button className='move-button' onClick={()=> moveTaskUp(index)}>☝</button>

                        <button className='move-button' onClick={()=> moveTaskDown(index)}>👇</button>



                    </li>)}
                    
                    </ol>
               
            </div>
        </>
    )
}

export default toDoList;