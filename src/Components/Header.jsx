import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar light style={{backgroundColor:'rgb(95, 0, 181)'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light'>
          <i class="fa-solid fa-address-card me-2 ms-3"></i>
            ReachOut
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header