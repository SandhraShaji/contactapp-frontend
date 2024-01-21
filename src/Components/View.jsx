import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MDBCard, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import userimg from '../images/user.png'
function View() {
  const {name} = useParams()
  const base_url = 'http://localhost:8000/view-contact'
  const [details, setDetails] = useState({})
  const fetchDetails = async()=>{
    const result = await axios.get(`${base_url}/${name}`)
    setDetails(result.data.contact)
  }
  useEffect(()=>{
    fetchDetails()
  },[])
  return (
    <div>
      <h3 className='text-center mb-4 mt-5'><img width={'30px'} style={{marginRight:'8px', marginBottom:'5px'}} src={userimg} alt="" />Contact Details</h3>
      <div style={{width:'100%'}} className="row mb-4">
        <div id='col1' className="col-4"></div>
        <div id='col2' className="col-4">
        <MDBCard className='mb-5 mt-2' style={{boxShadow:'1px 1px 3px rgb(180,180,180)'}}>
        <MDBListGroup>
        <MDBListGroupItem style={{fontWeight:'bold', paddingBlock:'10px'}}><span style={{color:'rgb(95, 0, 181)'}}>Name: <span style={{color:'rgb(80,80,80)'}}>{details.name}</span></span></MDBListGroupItem>
        <MDBListGroupItem style={{fontWeight:'bold', paddingBlock:'10px'}}><span style={{color:'rgb(95, 0, 181)'}}>Phone Number: </span><span style={{color:'rgb(80,80,80)'}}>{details.phno}</span></MDBListGroupItem>
        <MDBListGroupItem style={{fontWeight:'bold', paddingBlock:'10px'}}><span style={{color:'rgb(95, 0, 181)'}}>Email: </span><span style={{color:'rgb(80,80,80)'}}>{details.email}</span></MDBListGroupItem>
        <MDBListGroupItem style={{fontWeight:'bold', paddingBlock:'10px'}}><span style={{color:'rgb(95, 0, 181)'}}>Address: </span><span style={{color:'rgb(80,80,80)'}}>{details.address}</span></MDBListGroupItem>
        </MDBListGroup>
        </MDBCard>
        <div className='text-center mt-3'>
        <Link to={`/edit/${details.name}`}><button style={{backgroundColor:'rgb(95, 0, 181)',color:'white',borderRadius:'50px'}} className='btn mx-3'>Edit</button></Link>
        <Link to={'/'}><button style={{backgroundColor:'rgb(95, 0, 181)',color:'white',borderRadius:'50px'}} className='btn mx-3'>Home</button></Link>
        </div>
        </div>
        <div id='col1' className="col-4"></div>
      </div>
    </div>
  )
}

export default View