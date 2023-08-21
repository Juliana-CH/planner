import '../styles/header.css';
import AddMember from './AddMember';
import '../styles/customproperties.css';

export function Header(){
    return (
        <>
        <div className='header'>        
            <h1 className="mainTitle">PLANNER SEMANAL</h1>
            <AddMember />
        </div>
        <div className='divisionLine'></div>
        </>
    );
}

export default Header;