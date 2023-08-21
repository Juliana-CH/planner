function AddMemberInput({ show, value, onChange, onConfirm }) {
    if (!show) return null;

    return (
        <>
            <input
                type='text'
                size={"14"}
                className='addMemberField'
                value={value}
                onChange={onChange} />
                
            <button
                type='button'
                className='confirmAddMemberBtn'
                onClick={onConfirm}>
                confirmar
            </button>    
        </>
    );
}

export default AddMemberInput;