import React, { useEffect, useState } from 'react';

import './users.styles.scss';

import Header from '../../components/header/header.component';
import AdminPanelTitle from '../../components/admin-panel-title/admin-panel-title.component';
import SearchBar from '../../components/search-bar/search-bar.component';

import {getAllUsers, firestore} from '../../firebase/firebase.utils';
import UserCard from '../../components/user-card/user-card.component';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchUsers, setSearchUsers] = useState([]);

    useEffect(() => {
        let allUsers = [];
        firestore.collection('users').get().then((snapShot)=>{
            snapShot.docs.forEach(doc => {
                const element = doc.data();
                allUsers.push(element);
                users.push(element);
            })
        }).catch(error=>console.log(error));
    },[]);

    const handleChange = (e) => {
        setSearchUsers(
            users.filter(user => user.email.substring(0,e.target.value.length) === e.target.value
            )
        )
    }
    return(
        <div className="users">
            <div>
                <Header/>
                <AdminPanelTitle title="Usuarios"/>
            </div>
            <div className="body-panel">
                <SearchBar handleChange = {handleChange}/>
                <div className="user-list">
                    {
                        searchUsers.map(element => <UserCard user={element}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Users;