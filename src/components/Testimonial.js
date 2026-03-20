import React from 'react'
import t1 from '../img/t1.png'
import t2 from '../img/t2.png'
import t3 from '../img/t3.png'
import t4 from '../img/t4.png'
import t5 from '../img/t5.png'
import t6 from '../img/t6.png'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


const Testimonial = () => {
  return (
    <div >
      <div id='testpage'>       
         <h1 style={{textAlign:'center',marginTop:'100px'}}>Testimonials</h1>
         </div>

        <div className='hero-image'>
        <div  className='testimg'>
          
            <div className="hero-text">     
             
               
               <img style={{display:'block',margin:'auto',paddingTop:'40px'}} src={t2}/>
             
               <img className='nisan' style={{marginTop:'-75px',display:'block',margin:'auto'}} src={t3}/>
              <img  style={{margin:'auto',display:'block',paddingTop:'100px'}} src={t4}/> 
              <h6 style={{position:'relative',color:'white',textAlign:'center'}}><b>Jones Venus</b></h6>
              <img style={{display:'block',margin:'auto'}} src={t5}/>    
           

              <p style={{color:'white',width:'100%',maxWidth:'989px',display:'block',margin:'auto',marginTop:'30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, </p>   

                </div>
            </div>
        </div>
         

        <div>
          <h1 style={{textAlign:'center',marginTop:'100px',marginLeft:'10px'}}>Our Success Story</h1>
        </div>
        

        <div className="container">
          <div style={{justifyContent:'center'}} id='review1' className="row">
            <div className="col-lg-2">
            <div id='review1'  >
            <h1 style={{fontSize:'61px',color:'#21823C'}}><b>7350</b></h1>
            <p style={{marginLeft:'20px'}}>All Clientss</p>
            </div>
            </div>
            <div className="col-lg-2">
              
          <div id='review1' >
            <h1 style={{fontSize:'61px',color:'#21823C'}}><b>2350</b></h1>
            <p style={{marginLeft:'0px'}}>Clients In This Year</p>
          </div>
            </div>
            <div className="col-lg-2">
            <div id='review1'>
            <h1 style={{fontSize:'61px',color:'#21823C'}}><b>5120</b></h1>
            <p style={{marginLeft:'5px'}}>Finished Projects</p>
          </div>
            </div>
            <div className="col-lg-2">
            <div id='review1' >
            <h1 style={{fontSize:'61px',color:'#21823C'}}><b>300</b></h1>
            <p style={{marginLeft:'5px'}}>New Projects</p>
          </div>
            </div>

          </div>
        </div>
    </div>
       
  )
}

export default Testimonial