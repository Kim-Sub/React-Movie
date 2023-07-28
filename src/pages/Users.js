import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';





const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            //console.log(response);
            setUsers(response.data)
        })
    }, [])
    return (
        <div>
            <h1>Users</h1>
            <UserList users={users} />
        </div>
    );
};

export default Users;