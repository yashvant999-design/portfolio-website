import React from 'react'
import p1 from '../img/p1.png';
import p2 from '../img/p2.png'
import p3 from '../img/p3.png'
import p4 from '../img/p4.png'
import p5 from '../img/p5.png'

const Project = () => {
  return (
    <div>
        <div id='projectpage' >
            <h1 style={{textAlign:'center',marginTop:'150px'}}>Our Project</h1>
        </div>
        <div className='project-main'>
            <div className='container'>
            <div id='ourproject' style={{justifyContent:'center'}}   className='row'>
                <div id='ourproject' className='col-lg-3'>
                <div class="card" style={{width:'18rem',marginTop:'30px'}}>
                <img style={{width:'240px',marginLeft:'23px',marginTop:'15px'}} src={p1} class="card-img-top" alt="..."/>
                 <div style={{height:'200px'}} class="card-body">
                    <h6 style={{textAlign:'center'}}><b>Startup Funding</b></h6>
                <p style={{fontSize:'13px',width:'100%',textAlign:'center',marginRightL:'10px',marginLeft:'-13px'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Class ad litora torquent per conubia nostra, per inceptos himenaeos.Class </p>
                </div>
                </div>
                </div>

                <div id='ourproject' className='col-lg-3'>
                <div class="card" style={{width:'18rem',marginTop:'30px'}}>
                <img style={{width:'240px',marginLeft:'23px',marginTop:'15px'}} src={p2} class="card-img-top" alt="..."/>
                 <div style={{height:'200px'}} class="card-body">
                    <h6 style={{textAlign:'center'}}><b>Family Assest Managment</b></h6>
                <p style={{fontSize:'13px',width:'286px',textAlign:'center',marginRightL:'10px',marginLeft:'-13px'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Class ad litora torquent per conubia nostra, per inceptos himenaeos.Class </p>
                </div>
                </div>
                </div>

                <div id='ourproject' className='col-lg-3'>
                <div class="card" style={{width:'18rem',marginTop:'30px'}}>
                <img style={{width:'240px',marginLeft:'23px',marginTop:'15px'}} src={p3} class="card-img-top" alt="..."/>
                 <div style={{height:'200px'}} class="card-body">
                    <h6 style={{textAlign:'center'}}><b>Account Advisory</b></h6>
                <p style={{fontSize:'13px',width:'286px',textAlign:'center',marginRightL:'10px',marginLeft:'-13px'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Class ad litora torquent per conubia nostra, per inceptos himenaeos.Class </p>
                </div>
                </div>
                </div>
                </div>

            <div id='ourproject'  style={{justifyContent:'center'}}   className='row'>
                <div id='ourproject' className='col-lg-3'>
                <div class="card" style={{width:'18rem',marginTop:'30px'}}>
                <img style={{width:'240px',marginLeft:'23px',marginTop:'15px'}} src={p1} class="card-img-top" alt="..."/>
                 <div style={{height:'200px'}} class="card-body">
                    <h6 style={{textAlign:'center'}}><b>Business Matching</b></h6>
                <p style={{fontSize:'13px',width:'286px',textAlign:'center',marginRightL:'10px',marginLeft:'-13px'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Class ad litora torquent per conubia nostra, per inceptos himenaeos.Class </p>
                </div>
                </div>
                </div>

                <div id='ourproject' className='col-lg-3'>
                <div class="card" style={{width:'18rem',marginTop:'30px'}}>
                <img style={{width:'240px',marginLeft:'23px',marginTop:'15px'}} src={p4} class="card-img-top" alt="..."/>
                 <div style={{height:'200px'}} class="card-body">
                    <h6 style={{textAlign:'center'}}><b>Bitcoin Farming Advisory</b></h6>
                <p style={{fontSize:'13px',width:'286px',textAlign:'center',marginRightL:'10px',marginLeft:'-13px'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Class ad litora torquent per conubia nostra, per inceptos himenaeos.Class </p>
                </div>
                </div>
                </div>

                <div id='ourproject' className='col-lg-3'>
                <div class="card" style={{width:'18rem',marginTop:'30px'}}>
                <img style={{width:'240px',marginLeft:'23px',marginTop:'15px'}} src={p5} class="card-img-top" alt="..."/>
                 <div style={{height:'200px'}} class="card-body">
                    <h6 style={{textAlign:'center'}}><b>Business Strategy</b></h6>
                <p style={{fontSize:'13px',width:'286px',textAlign:'center',marginRightL:'10px',marginLeft:'-13px'}} class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Class ad litora torquent per conubia nostra, per inceptos himenaeos.Class </p>
                </div>
                </div>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Project