import React from 'react';
import { NavLink} from "react-router-dom";
import {MdTheaters} from 'react-icons/md'

const Navbar = () => {
    const activeStyle = {
        color:'red'
    }

    return (
        <nav>
            <NavLink to=""><MdTheaters className='logoIcon'/></NavLink>
            <ul>
                <li>
                    <NavLink to="" style={({isActive}) => (isActive ? activeStyle : undefined)}>HOME</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to="movies" style={({isActive}) => (isActive ? activeStyle : undefined)}>MOVIES</NavLink>
                </li>
                <li className='nav-itme'>
                    <NavLink to="users" style={({isActive}) => (isActive ? activeStyle : undefined)}>USERS</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;