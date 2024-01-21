import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import userimg from '../images/user.png'
function Add() {
  const [name, setName] = useState('')
  const [phno, setPhno] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const base_url = 'http://localhost:8000/add-contact'
  const location = useNavigate()
  const addContact=(e)=>{
    e.preventDefault()
    console.log(name,phno,email,address);
    const body = {
      name,phno,email,address
    }
    const result = axios.post(base_url,body).then((response)=>{
    alert(response.data.message)
    location("/")
    })
    .catch((error)=>{
      alert('Please enter a unique name!')
    })
  }
  return (
    <div className='text-center my-5'>
      <form className='text-center'>
        <h4 className='my-4'><img width={'30px'} style={{marginRight:'8px', marginBottom:'5px'}} src={userimg} alt="" />Add to Contacts</h4>
        <input onChange={(e)=>setName(e.target.value)} style={{paddingInline:'15px', borderRadius:'5px', paddingBlock:'8px', boxShadow:'1px 1px 3px rgb(180,180,180)', border:'none'}} className='mb-4 w-50' type="text" placeholder='Name'/><br />
        <input onChange={(e)=>setPhno(e.target.value)} style={{paddingInline:'15px', borderRadius:'5px', paddingBlock:'8px', boxShadow:'1px 1px 3px rgb(180,180,180)', border:'none'}} className='mb-4 w-50' type="text" placeholder='Phone Number'/><br />
        <input onChange={(e)=>setEmail(e.target.value)} style={{paddingInline:'15px', borderRadius:'5px', paddingBlock:'8px', boxShadow:'1px 1px 3px rgb(180,180,180)', border:'none'}} className='mb-4 w-50' type="text" placeholder='Email'/><br />
        <input onChange={(e)=>setAddress(e.target.value)} style={{paddingInline:'15px', borderRadius:'5px', paddingBlock:'8px', boxShadow:'1px 1px 3px rgb(180,180,180)', border:'none'}} className='mb-4 w-50' type="text" placeholder='Address'/><br />
      </form>
      <Link to={'/'}><button style={{backgroundColor:'rgb(95, 0, 181)',color:'white',borderRadius:'50px'}} className='btn mx-3'>Cancel</button></Link>
      <button onClick={(e)=>addContact(e)} style={{backgroundColor:'rgb(95, 0, 181)',color:'white',borderRadius:'50px'}} className='btn mx-3'>Save</button>
    </div>
  )
}

export default Add