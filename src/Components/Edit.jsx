import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import userimg from '../images/user.png'
function Edit() {
  const [conname, setName] = useState('')
  const [conphno, setPhno] = useState('')
  const [conemail, setEmail] = useState('')
  const [conaddress, setAddress] = useState('')
  const base_url = 'http://localhost:8000'
  const location = useNavigate()
  const {name} = useParams()
  console.log(name);
  const fetchData=async(name)=>{
    const result = await axios.get(`${base_url}/view-contact/${name}`)
    console.log(result);
    setName(result.data.contact.name)
    setPhno(result.data.contact.phno)
    setEmail(result.data.contact.email)
    setAddress(result.data.contact.address)
  }
  useEffect(()=>{
    fetchData(name)
  },[])
  const updateContact=async(e)=>{
    e.preventDefault()
    const body={
      name:conname,
      phno:conphno,
      email:conemail,
      address:conaddress
    }
    const result = await axios.post(`${base_url}/update-contact/${name}`,body)
    console.log(result);
    alert(result.data.message)
    location("/")
  }
  return (
    <div>
      <div className='text-center my-5'>
      <form className='text-center'>
        <h4 className='my-4'><img width={'30px'} style={{marginRight:'8px', marginBottom:'5px'}} src={userimg} alt="" />Edit Contact</h4>
        <input onChange={(e)=>setName(e.target.value)} value={conname} style={{paddingInline:'15px', borderRadius:'5px', paddingBlock:'8px', boxShadow:'1px 1px 3px rgb(180,180,180)', border:'none'}} className='mb-4 w-50' type="text" placeholder='Name' disabled={true}/><br />
        <input onChange={(e)=>setPhno(e.target.value)} value={conphno} style={{paddingInline:'15px', borderRadius:'5px', paddingBlock:'8px', boxShadow:'1px 1px 3px rgb(180,180,180)', border:'none'}} className='mb-4 w-50' type="text" placeholder='Phone Number'/><br />
        <input onChange={(e)=>setEmail(e.target.value)} value={conemail} style={{paddingInline:'15px', borderRadius:'5px', paddingBlock:'8px', boxShadow:'1px 1px 3px rgb(180,180,180)', border:'none'}} className='mb-4 w-50' type="text" placeholder='Email'/><br />
        <input onChange={(e)=>setAddress(e.target.value)} value={conaddress} style={{paddingInline:'15px', borderRadius:'5px', paddingBlock:'8px', boxShadow:'1px 1px 3px rgb(180,180,180)', border:'none'}} className='mb-4 w-50' type="text" placeholder='Address'/><br />
      </form>
      <Link to={'/'}><button style={{backgroundColor:'rgb(95, 0, 181)',color:'white',borderRadius:'50px'}} className='btn mx-3'>Cancel</button></Link>
      <button onClick={(e)=>updateContact(e)} style={{backgroundColor:'rgb(95, 0, 181)',color:'white',borderRadius:'50px'}} className='btn mx-3'>Save</button>
    </div>
    </div>
  )
}

export default Edit