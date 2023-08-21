import { useState } from 'react';
import '../styles/addTask.css';

export function AddTask(){
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [showInput, setShowInput] = useState(false);

    const addTask = () => {
        if (task.trim() !== '') {
            setTaskList([...taskList, task]);
            setTask('');
            setShowInput(false);
        }
    };
    
    const deleteTask = (taskToDelete) => {
        const updatedList = taskList.filter(task => task !== taskToDelete);
        setTaskList(updatedList);
    };

    const handleButtonClick = () => {
        setShowInput(true);
    };
    

    return (
        <>
        <div className='addTask'>

            <button 
                type='button' 
                className='addTaskBtn'
                onClick={handleButtonClick}>
                + adicionar nova tarefa
            </button>

            {showInput && (
                <>
                    <input
                        type='text'
                        size={"14"}
                        className='addTaskField'
                        value={task}
                        onChange={(e) => setTask(e.target.value)} />
                        
                    <button
                        type='button'
                        className='confirmAddTaskBtn'
                        onClick={addTask}>
                        confirmar
                    </button>    
                </>
            )}

        </div>

        <ul className='taskList'>{taskList.map((taskAdded, index) => (
            <li key={index}>{taskAdded}
                <button
                type='button'
                className='delTaskBtn'
                onClick={() => deleteTask(taskAdded)}>
                del
                </button>
            </li>
        ))}
        </ul>
        </>
    );

};

export default AddTask;