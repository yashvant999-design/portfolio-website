import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../img/logo.png';

const Nav = () => {
  return (
    <div>
         
            <nav style={{width:'100%'}} class="navbar navbar-expand-lg ">
  <div class="container">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
   <div className='finance-main'>
     <img className='logo' src={logo}/>
      <div><a style={{marginTop:'70px',marginLeft:'58px',fontFamily:'Gugi400'}}>FINANCE ADVISO</a></div>
      </div>
   
      <button style={{color:'white',backgroundColor:'white'}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style={{position:'relative'}} class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav"> 
        <li class="nav-item">
          <a style={{color:'white'}} class="nav-link active"  aria-current="page" href="#homepage"><b>HOME</b></a>
        </li>
        <li class="nav-item">
          <a style={{color:'white'}} class="nav-link active"  href="#servicepage"><b>OUR SERVICES</b></a>
        </li>
        <li class="nav-item">
          <a style={{color:'white'}} class="nav-link active"  href="#aboutpage"><b>ABOUT US</b></a>
        </li>
        <li class="nav-item">
          <a style={{color:'white'}} class="nav-link active"  href="#projectpage"><b>OUR PORJECTS</b></a>
        </li>
        <li class="nav-item">
          <a style={{color:'white'}} class="nav-link active"  href="#testpage"><b>TESTIMONIALS</b></a>
        </li>
        <li class="nav-item">
          <a  style={{color:'white'}}class="nav-link active"  href="#contactpage"><b>CONTACT US</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav