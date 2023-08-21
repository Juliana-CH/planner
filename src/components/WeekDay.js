import { useState } from 'react';
import '../styles/weekDay.css';
import AddMemberButton from './AddMemberButton';
import AddMemberInput from './AddMemberInput';
import AddTask from './AddTask';

export function WeekDay(){
    const [name, setName] = useState(''); 
    const [nameList, setNameList] = useState([]); 
    const [showInput, setShowInput] = useState(false); 


    const handleButtonClick = () => {
        setShowInput(true);
    };

    const addName = () => {
        if (name.trim() !== '') {
            setNameList([...nameList, name]);
            setName('');
            setShowInput(false);
        }
    };

    const deleteName = (nameToDelete) => {
        const updateList = nameList.filter(name => name !== nameToDelete);
        setNameList(updateList);
    };

    return (
    <>  
        <AddMemberButton onClick={handleButtonClick} />
        <div className='divisionLine'></div>
        <h2 className='weekDay'>Segunda-feira</h2>
        
        <div className='dayWrapper'>
            <AddMemberInput 
                show={showInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onConfirm={addName}
            />
            <AddTask />
        </div>
        <ul className='memberList'>
            {nameList.map((nameAdded, index) => (
                <li key={index}>{nameAdded}
                    <button
                        type='button'
                        className='delMemberBtn'
                        onClick={() => deleteName(nameAdded)}>
                            del
                    </button>
                </li>
            ))}
        </ul>
    </>
    );
}

export default WeekDay;
