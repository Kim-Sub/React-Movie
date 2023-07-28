import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./UserList.module.scss";

const UserList = ({users}) => {
    return (
        <div>
           {
                users.map(user => {
                    return (
                        <div className={`${styles.card}`} key={user.id}>
                            <div className={`${styles.cardbody}`}>
                                <Link to={`/users/${user.id}` } className={`${styles.link}`}>{user.name}</Link>
                            </div>
                        </div>
                    )
                })
            } 
        </div>
    );
};

export default UserList;