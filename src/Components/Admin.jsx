import React, { useEffect, useState } from 'react'
import { MDBCard, MDBCardText } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import {Link} from 'react-router-dom'
import userimg from '../images/user.png'
function Admin() {
  const base_url = 'http://localhost:8000'
  const [allContacts, setAllContacts] = useState([])
  const fetchAllContacts =async()=>{
    const result = await axios.get(`${base_url}/get-all-contacts`)
    setAllContacts(result.data.contacts)
  }
  useEffect(()=>{
    fetchAllContacts()
  },[])
  const deleteContact=async(name)=>{
    const ddata = await axios.delete(`${base_url}/delete-contact/${name}`)
    alert(ddata.data.message)
    fetchAllContacts()
  }
  return (
    <div>
        <div style={{backgroundColor:'rgba(180,180,180,0.2)', borderRadius:'10px'}} className='d-flex justify-content p-4 m-4'>
          <div style={{marginLeft:'5%', color:'rgb(95, 0, 181)', textShadow:'1px 0.5px 0.5px grey'}}>
            <h3>ReachOut</h3>
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Seamless Contacts, Limitless Connections!</h6>
          </div>
          <div id='extra'>
          <Link to={'/add'}>
          <button className='btn ms-5 mt-3' style={{backgroundColor:'rgb(95, 0, 181)',color:'white',borderRadius:'50px'}}><i class="fa-solid fa-plus"></i></button>
          </Link>
          </div>
        </div>
        <Row style={{width:'98%'}} className='m-3'>
      {
      allContacts.map(item=>(
        <Col sm={12} md={6} lg={4} xl={3}>
          <MDBCard className='my-3' style={{width:'290px', height:'119px', boxShadow:'1px 1px 3px rgb(180,180,180)'}}>
          <div className='pt-3 px-4' style={{display:'flex', marginBottom:'20px'}}>
            <div style={{width:'50px'}}>
              <img src={userimg} alt="" style={{ width: '35px', height: '35px' }} className='rounded-circle'/>
            </div>
            <div style={{width:'220px'}}>
              <MDBCardText style={{fontWeight:'bold'}} className='my-2'>{item.name}</MDBCardText>
            </div>
          </div>
          <div className='px-4 py-2 rounded' style={{display:'flex', backgroundColor:'rgba(180,180,180,0.2)'}}>
          <Link style={{color:'rgb(95, 0, 181)'}} to={`/view/${item.name}`}><i class="fa-solid fa-eye ms-4 me-5"></i></Link>
          <Link style={{color:'rgb(95, 0, 181)'}} to={`/edit/${item.name}`}><i className='fa-solid fa-pen ms-3 me-5'></i></Link>
          <Link style={{color:'rgb(95, 0, 181)'}}><i onClick={()=>deleteContact(item.name)} className='fa-solid fa-trash ms-3 me-5'></i></Link>
          </div>
          </MDBCard>
        </Col>
      ))
    }
    </Row>
    </div>
  )
}

export default Admin