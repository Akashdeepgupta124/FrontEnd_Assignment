import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../UserReducer';
import './Update.css'
import { Link } from 'react-router-dom';


function Update() {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id)
    const {email,Fname, Lname,contactNumber,AlternateNumber} =existingUser[0];
    const [uFname, setFName] = useState(Fname)
    const [uLname, setLName] = useState(Lname)
    const [ucontactNumber, setcontactNumber] = useState(contactNumber)
    const [uAlternateNumber, setAlternateNumber] = useState(AlternateNumber)
    const [uemail,setEmail] =useState(email)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (event) =>{
        event.preventDefault()
        dispatch(updateUser({
            id: id,
            Fname: uFname,
            Lname: uLname,
            email: uemail,
            contactNumber: ucontactNumber,
            AlternateNumber:uAlternateNumber

        }))
        navigate('/')
    }
    return (
        <div className="contains">
            <button className='Green_button'> <Link to={'/'}>View All Customers</Link></button>
        <div className="form_contianer">
            <h3>Edit Customer Details</h3>
            <div className="form_container">
            <form onSubmit={handleUpdate}>
                <div className="field_container">
                <div className='field'>
                    <label htmlFor="name">First Name</label>
                    <input type="text" name='name' className='form-control' placeholder='enter name'
                    value={uFname}onChange={e => setFName(e.target.value)}/>
                </div>
                <div className='field'>
                    <label htmlFor="name">Last Name</label>
                    <input type="text" name='name' className='form-control' placeholder='enter name'
                    value={uLname}onChange={e => setLName(e.target.value)}/>
                </div>
                <div className='field'>
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' className='form-control' placeholder='enter email'
                    value={uemail} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='field'>
                    <label htmlFor="number">Contact Number</label>
                    <input type='number' name='email' className='form-control' placeholder='enter Contact Number'
                    value={ucontactNumber} onChange={e => setcontactNumber(e.target.value)}/>
                </div>
                <div className='field'>
                    <label htmlFor="number">Alternate Number</label>
                    <input type='number' name='number' className='form-control' placeholder='enter Alternate Number'
                    value={uAlternateNumber} onChange={e => setAlternateNumber(e.target.value)}/>
                </div>
                <br/>
                
               
                </div>
            </form>
            <div className='Button_alignment'>
                <button className='Green_button'>Update</button>
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default Update

