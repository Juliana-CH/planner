import '../styles/header.css';
import AddMember from './AddMember';

export function Header(){
    return (
        <>
        <div className='header'>        
            <h1 className="mainTitle">Planner Semanal</h1>
            <AddMember />
        </div>
        </>
    );
}

export default Header;