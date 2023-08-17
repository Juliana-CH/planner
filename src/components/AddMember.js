import { useState } from 'react';
import '../styles/addMember.css';

export function AddMember(){
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);

    const addName = () => {
        setNameList([...nameList, name]);
        setName('');
    };
    
    const deleteName = (nameToDelete) => {
        const updatedList = nameList.filter(name => name !== nameToDelete);
        setNameList(updatedList);
    };
    

    return (
        <>
        <div className='addMember'>

            <label htmlFor='name'>Novo membro:</label>

            <input 
                type='text' 
                size={"14"} 
                className='addMemberField'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button 
                type='button' 
                className='addMemberBtn'
                onClick={addName}>
                Adicionar
            </button>

        </div>

        <ul className='memberList'>{nameList.map((nameAdded, index) => (
            <li key={index}>{nameAdded}
                <button
                type='button'
                className='delMemberBtn'
                onClick={() => deleteName(nameAdded)}>
                DEL
                </button>
            </li>
        ))}
        </ul>
        </>
    );

};

export default AddMember;