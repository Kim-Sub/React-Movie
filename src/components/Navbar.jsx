import React from 'react';
import { NavLink} from "react-router-dom";


const Navbar = () => {
    const activeStyle = {
        color:'#e42c2c',
    }

    return (
        <nav>
            <NavLink to=""><h3>이름을 지어주세요</h3></NavLink>

            <ul>
                <li><NavLink to="" style={({isActive}) => (isActive ? activeStyle : undefined)}>HOME</NavLink></li>
                <li><NavLink to="Movies" style={({isActive}) => (isActive ? activeStyle : undefined)}>MY GALLERY</NavLink></li>
                <li><NavLink to="users" style={({isActive}) => (isActive ? activeStyle : undefined)}>USERS</NavLink></li>
            </ul>
        </nav>
    );
};



export default Navbar;