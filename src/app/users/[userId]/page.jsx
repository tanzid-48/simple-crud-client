import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailsPage = async({params}) =>{
    const {userId} = await params;
    const user = await getUserById(userId);
    console.log(user);
    return (
        <div>
            <h2>UserDetails Page</h2>
            <p>{user.name}</p>
        </div>
    );
};

export default UserDetailsPage;