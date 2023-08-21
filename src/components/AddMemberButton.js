import '../styles/addMemberButton.css';


function AddMemberButton({ onClick }) {
    return (
        <div className='addMember'>
            <button 
                type='button' 
                className='addMemberBtn'
                onClick={onClick}>
                + adicionar novo membro
            </button>
        </div>
    );
}

export default AddMemberButton;
