import React from 'react';
import { NavLink} from "react-router-dom";


const Navbar = () => {
    const activeStyle = {
        color:'#e42c2c',
        borderBottom: '1px solid #e42c2c',
    }

    return (
        <nav style={navStyle}>
            <NavLink to=""><img src={require("../img/mainlogo.png")} style={logoImg} alt='로고이미지' /></NavLink>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <NavLink to="" style={({isActive}) => (isActive ? activeStyle : undefined)}>HOME</NavLink>
                </li>
                <li style={liStyle} className='nav-itme'>
                    <NavLink to="Movies" style={({isActive}) => (isActive ? activeStyle : undefined)}>MY GALLERY</NavLink>
                </li>
                <li style={liStyle} className='nav-itme'>
                    <NavLink to="users" style={({isActive}) => (isActive ? activeStyle : undefined)}>USERS</NavLink>
                </li>
            </ul>
        </nav>
    );
};

// 내장 CSS
const navStyle = {
    position : 'fixed', zIndex: '1',
    width: '70%', height : '80px', padding : '0 15%' ,
    display : 'flex' , alignItems : 'center' , justifyContent: 'space-between' ,
};
const logoImg = {
    height : '40px',
}
const ulStyle = {
    display: 'flex', justifyContent: 'center', listStyleType: 'none'
}
const liStyle = {
    padding: '0 20px'
}


export default Navbar;