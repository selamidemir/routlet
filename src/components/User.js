import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../assets/data';

function User() {
    const { id } = useParams();
    const user = users.filter(user => user.id===parseInt(id))[0];
    console.log(user)
    return (
        <>
            {!user && <div>No selected user.</div>}
            {user &&
                <div className='user-box'>
                    <div>Name: {user.name}</div>
                    <div>Email: {user.email}</div>
                    <div>Gender: {user.gender}</div>
                    <div>Age: {user.age}</div>
                </div>
            }
            <hr />
        </>
    );
}

export default User;