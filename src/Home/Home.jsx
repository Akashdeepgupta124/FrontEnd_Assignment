import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userList } from '../Data';
import { Link } from 'react-router-dom';
import { deleteUser } from '../UserReducer';
import { MdOutlineDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

import './Home.css'


function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDelete = (id) =>{
        dispatch(deleteUser({id: id}))
    }
    console.log(users)
    return (
        <div className="container">
            <div className='navigation'>
            <h2>View ALL Customer</h2>
        <div className='content_button'>
        < button className='view_button'>View All Customer</button>
        <button className='Green_button'>< Link to ='/create' >Add Customer</Link></button>  
        </div>
         
         </div>
         <div className='table_container'> 
            <div className="content_table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Alternate Number</th>
                        <th>Registered On</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td data-label="ID">{user.id}</td>
                            <td data-label="Name">{user.Fname}{user.Lname}</td>
                            <td data-label="Email">{user.email}</td>
                            <td data-label="Contact Number">{user.contactNumber}</td>
                            <td data-label="Alternate Number">{user.AlternateNumber}</td>
                            <td data-label="Registered On">{user.RegisteredON}</td>
                            <td data-label="Status">{user.Status}</td>


                            <td data-label="Action" className='link_button'>
                            <button className='delete_btn' onClick={()=>handleDelete (user.id)}><MdOutlineDelete /></button>
                                <Link to={`/edit/${user.id}`} className='edit_button'><MdModeEdit /></Link>
                               
                            </td>
                        </tr>
                    ))}

                </tbody>
                </div>
            </div>
        </div>
    )
}

export default Home
