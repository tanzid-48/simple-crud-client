import { getUserById } from '@/app/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UpdatedPage = async({params}) => {
    const {userId} = await params;
    const user = await getUserById(userId);
    
    return (
        <div className='w-1/2 mx-auto py-6'>
              <form  className="flex flex-col gap-4 bg-purple-50 rounded-2xl">
                                <TextField className="w-full" name="name" defaultValue={user?.name} type="text">
                                  <Label>Name</Label>
                                  <Input placeholder="Enter your name" />
                                </TextField>
                                <TextField className="w-full" name="email" defaultValue={user?.email} type="email">
                                  <Label>Email</Label>
                                  <Input placeholder="Enter your email" />
                                </TextField>
                                <TextField className="w-full" name="role" defaultValue={user?.role} type="text">
                                  <Label>Role</Label>
                                  <Input placeholder="Enter user role " />
                                </TextField>
                                
                                 <div className=" flex gap-3">
                                     <Button slot="close" variant="secondary">
                                    Cancel
                                  </Button>
                                  <Button type="submit" slot="close">Update User</Button>
                                 </div>
                                
                              </form>
        </div>
    );
};

export default UpdatedPage;