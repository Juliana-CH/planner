import { useState } from 'react';
import '../styles/daySchedule.css';

export function DaySchedule(){
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const addTask = () => {
        setTaskList([...taskList, task]);
        setTask('');
    };
    
    const deleteTask = (taskToDelete) => {
        const updatedTaskList = taskList.filter(task => task !== taskToDelete);
        setTaskList(updatedTaskList);
    };
    

    return (
        <>
        <div className='DaySchedule'>

            <label htmlFor='task'>Tarefa</label>

            <input 
                type='text' 
                size={"14"} 
                className='DayScheduleField'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button 
                type='button' 
                className='DayScheduleBtn'
                onClick={addTask}>
                Adicionar
            </button>

        </div>

        <ul className='taskList'>{taskList.map((taskAdded, index) => (
            <li key={index}>{taskAdded}
                <button
                type='button'
                className='delMemberBtn'
                onClick={() => deleteTask(taskAdded)}>
                DEL
                </button>
            </li>
        ))}
        </ul>
        </>
    );

};

export default DaySchedule;