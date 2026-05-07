import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '@/components/UsersTable';
import { creteUser, deleteUser } from '../lib/action';
import AddUserModal from '@/components/AddUserModal';


const UsersPage = async() => {

    const users = await getUsers()
    return (
       
       
        <div className='py-5'>
             <div className="flex justify-between">
            <p className='text-purple-500 font-bold text-xl'>Users:{users.length}</p>
            <AddUserModal createUserAction = {creteUser}></AddUserModal>
        </div>
           <UsersTable users={users} deleteUserAction = {deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;