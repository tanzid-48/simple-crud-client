import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '@/components/UsersTable';


const UsersPage = async() => {
    const users = await getUsers()
    return (
        <div className='py-10'>
           <UsersTable users={users}></UsersTable>
        </div>
    );
};

export default UsersPage;