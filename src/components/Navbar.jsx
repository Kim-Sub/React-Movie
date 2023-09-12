import React from 'react';
import { NavLink} from "react-router-dom";


const Navbar = () => {
    const activeStyle = {
        color:'#E81D36',
    }

    return (
        <nav>
            <NavLink to=""><h3>이름을 지어주세요</h3></NavLink>

            <ul>
                <li><NavLink to="" style={({isActive}) => (isActive ? activeStyle : undefined)}>HOME</NavLink></li>
                <li><NavLink to="Search" style={({isActive}) => (isActive ? activeStyle : undefined)}>SEARCH</NavLink></li>
                <li><NavLink to="Movies" style={({isActive}) => (isActive ? activeStyle : undefined)}>MY GALLERY</NavLink></li>
                <li><NavLink to="Users" style={({isActive}) => (isActive ? activeStyle : undefined)}>USERS</NavLink></li>
            </ul>
        </nav>
    );
};



export default Navbar;