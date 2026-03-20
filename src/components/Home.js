import React from 'react'
import Nav from './Nav'
// import h1 from '../img/h1.png';
import About from './About';
import Project from './Project';
import Testimonial from './Testimonial';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Nav/>
        {/* <div   id='homepage' >
        <img style={{width:'1540px',marginTop:'-150px'}} className='h1' src={h1}/>
        <div style={{width:'100%',textAlign:'center'}} id='maintext' >
        <div   className='text'>
    <h3 className='hometext' style={{fontSize:"3rem",textAlign:'center'}}>We Offer Financial Wings To Let Your<br/><span style={{marginRight:'20px'}}> Dream Soar Higher!</span></h3>
    <p style={{textAlign:'center',marginTop:'30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero<br/> et velit interdum, ac aliquet odio mattis. </p>
      <div style={{textAlign:'center',marginTop:'20px'}}> <button className='btnhome'><b>Consultation</b></button></div>
    </div>
        </div>
        </div> */}

      <div className="home-main">
        <div style={{ paddingTop: '330px', textAlign: 'center' }} className='text-home'>
          <h1 style={{ color: 'white' }}>We offer financial wings to let your<br /> dreams soar higher!</h1>
          <p style={{ color: 'gray' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero<br /> et velit interdum, ac aliquet odio mattis. </p>
          <Link to='/Contact'><button className='btnhome'><b>Consultation</b></button></Link>
        </div>
      </div>
      

            <Services/>

            <About/>

            <Project/>

            <Testimonial/>

            <Contact/>

            <Footer/>

    </div>
  )
}

export default Home