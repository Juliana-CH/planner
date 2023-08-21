import { useState } from 'react';
import '../styles/addMember.css';

export function AddMember(){
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);
    const [showInput, setShowInput] = useState(false);

    const addName = () => {
        if (name.trim() !== '') {
            setNameList([...nameList, name]);
            setName('');
            setShowInput(false);
        }
    };
    
    const deleteName = (nameToDelete) => {
        const updatedList = nameList.filter(name => name !== nameToDelete);
        setNameList(updatedList);
    };

    const handleButtonClick = () => {
        setShowInput(true);
    };
    

    return (
        <>
        <div className='addMember'>

            <button 
                type='button' 
                className='addMemberBtn'
                onClick={handleButtonClick}>
                + adicionar novo membro
            </button>

            {showInput && (
                <>
                    <input
                        type='text'
                        size={"14"}
                        className='addMemberField'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                        
                    <button
                        type='button'
                        className='confirmAddMemberBtn'
                        onClick={addName}>
                        confirmar
                    </button>    
                </>
            )}

        </div>

        <ul className='memberList'>{nameList.map((nameAdded, index) => (
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

};

export default AddMember;