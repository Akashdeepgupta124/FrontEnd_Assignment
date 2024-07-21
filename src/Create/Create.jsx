import React, { useState } from 'react'
import { addUser } from '../UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Create.css'



function Create() {
    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')
    const [contactNumber, setcontactNumber] = useState('')
    const [AlternateNumber, setAlternateNumber] = useState('')
    const [email,setEmail] =useState('')
    const [status, setStatus] =useState(true)
    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(addUser({id: users[users.length -1 ].id + 1, Fname,Lname, contactNumber, AlternateNumber, email, status}))
        navigate('/')
    }
    return (
        <div className="contains">
            <div className="navbar">
                <h2>Add Customer</h2>
             <div className='content_button'>
                <button className='Green_button'><Link to={'/'}>View ALL Customer</Link></button>
                <button className='view_button'>Add Customer</button>
             </div>
            </div>
            <div className="form_contianer">
                <form onSubmit={handleSubmit}>
                    <div className="field_Container">
                    <div className='field'>
                        <label htmlFor="name">First Name:</label>
                        <input type="text" name='name' className='form-control' placeholder='enter First name'
                        onChange={e => setFname(e.target.value)} />
                    </div>
                    <div className='field'>
                        <label htmlFor="name">Last Name:</label>
                        <input type="text" name='name' className='form-control' placeholder='enter Last name'
                        onChange={e => setLname(e.target.value)} />
                    </div>
                    <div className='field'>
                        <label htmlFor="name">Contact Number:</label>
                        <input type="text" name='name' className='form-control' placeholder='enter Contact Number'
                        onChange={e => setcontactNumber(e.target.value)} />
                    </div>
                    <div className='field'>
                        <label htmlFor="name">Alternate Number:</label>
                        <input type="text" name='name' className='form-control' placeholder='enter Alternate Number'
                        onChange={e => setAlternateNumber(e.target.value)} />
                    </div>
                    <div className='field'>
                        <label htmlFor="email">Email Address:</label>
                        <input type='email' name='email' className='form-control' placeholder='enter email'
                         onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <br/>
                    <button className='Green_button'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create
