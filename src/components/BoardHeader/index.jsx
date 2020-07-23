import React from 'react';
import './index.css';

const BoardHeader = () => {

    let [arrow, setArrow] = React.useState("arrow-down.svg");  
    let [userMenu, setUserMenu] = React.useState("");
    const setNewArrow = () => {
        if (arrow === "arrow-down.svg") {
            setArrow("arrow-up.svg")
            setUserMenu(<div className="user-menu">
                <ul className="usermenu-list">
                    <li>Profile</li>
                    <li>LogOut</li>
                </ul>
            </div>)
        } else {
            setArrow("arrow-down.svg")
            setUserMenu("")
        }
    }

    const handleClickOutside = (event) => {
        if (!['user-menu', 'avatar', 'arrow'].includes(event.target.className)) { 
            setArrow("arrow-down.svg")
            setUserMenu("") 
        }  
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, [])


    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-name">Awesome Kanban Board</div>
                <div className="avatar-and-arrow"  onClick={setNewArrow}>
                <img className="avatar" src='user-avatar.svg' alt="Avatar"></img>
                <img className="arrow" src={arrow} alt=""></img>
                </div>
                {userMenu}
            </div>
        </header>
    )
}

export default BoardHeader;