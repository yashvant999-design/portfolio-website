import React from 'react'
import a1 from '../img/a1.png'
import a2 from '../img/a2.png'
import a3 from '../img/a3.png'

const About = () => {
  return (
    <div>
        <div id='aboutpage' className='about'>
            <div className="container">
            <h1 style={{textAlign:'center'}}>About us</h1>
            <p style={{textAlign:'center',fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  consectetur<br/> adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
            </div>
        </div>

        <div className='container'>
            <div id='aboutrow' style={{justifyContent:'center'}} className='row'>
                <div id='aboutmain' className='col-lg-5'>
                    <div className="col-lg-6">
                    <img id='aboutimg1' style={{Width:'500px'}}  src={a1}/>
                    </div>
                    <div className="col-lg-6">
                    <img  id='aboutimg2' style={{marginTop:'20px',Width:'500px'}} src={a2}/>
                    </div>
                </div>

                <div className='col-lg-7'>
                    <div className='hero-image'>
                        <img  id='aboutimg3' style={{height:'510px',width:'100%'}}  src={a3}/>
                        <div id='abouttext' style={{position:'relative'}} className='hero-text'>
                            <h3 style={{color:'white',textAlign:'center',marginLeft:'-100px',marginTop:'30px'}}>Who We Are</h3>
                            <p style={{color:'white',textAlign:'center',width:'100%',marginLeft:'10px',justifyContent:'center'}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Nunc vulputate libero et velit<br/> interdum, ac aliquet odio mattis. Class aptent<br/> taciti sociosqu ad litora torquent per conubia<br/> nostra, per inceptos himenaeos.Class aptent<br/> taciti sociosqu ad litora torquent per conubia <br/>nostra, per inceptos himenaeos.</p>
                            <button style={{marginLeft:'100px'}} className='btnabout'>Read More</button>
                       
                        </div>
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About