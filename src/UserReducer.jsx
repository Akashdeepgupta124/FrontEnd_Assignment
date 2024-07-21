import React from 'react'
import {createSlice} from '@reduxjs/toolkit'
import { userList } from './Data'

const userSlice = createSlice({
    name:"users",
    initialState: userList,
    reducers: {
        addUser: (state, action) =>{
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const {id, Fname, email,Lname,contactNumber,AlternateNumber} = action.payload
            const update = state.find(user => user.id == id);
            if(update) {
                update.Fname = Fname;
                update.email = email;
                update.Lname = Lname;
                update.contactNumber = contactNumber;
                update.AlternateNumber = AlternateNumber;
            }
     },
     deleteUser: (state, action) =>{
        const {id} = action.payload
        const update = state.find(user => user.id == id);
        if(update) {
            return state.filter(f => f.id !==id);
        }
     }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions;

export default userSlice.reducer

