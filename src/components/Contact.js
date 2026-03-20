import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='contact-main'>
        <div style={{marginTop:'100px'}} id='contactpage'>
        {/* <div style={{marginTop:'100px'}}><h1 style={{textAlign:'center', marginTop:'100px'}}>Free Consultation</h1></div> */}
        <h1 style={{paddingTop:'30px',textAlign:'center'}}>Free Consultation</h1>
        <p style={{textAlign:'center',marginTop:'30px',fontSize:'20px'}}>Duis aute irure dolor in reprehenderit volupte velit esse cillum fugiat pariature occaecat<br/> cupidatat proident.</p>
        </div>

        <div class="container">
          <div style={{justifyContent:'center'}} className="row">
            <div className="col-lg-6">
  {/* <form  action="/action_page.php"> */}
    {/* <label for="fname">First Name</label> */}
    <input style={{width:'100%'}} type="text" id="fname" name="firstname" placeholder="Your Name"/>
    </div>
    </div>
    {/* <label for="lname">Last Name</label> */}
    <div style={{justifyContent:'center'}} className="row">
      <div className="col-lg-6">
    <input style={{width:'100%'}} type="text" id="lname" name="lastname" placeholder="Email"/>
    </div>
    </div>

  
    <div style={{justifyContent:'center'}} className="row">
      <div className="col-lg-6">
    <textarea    id="subject" name="subject" placeholder="Massage" style={{height:'200px',width:'100%'}}></textarea>
    </div>
    </div>

    <button   className='contact-btn'>Send Request</button>
  {/* </form> */}
</div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249822.21961233!2d82.75252935!3d21.068622799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1672893322705!5m2!1sen!2sin" width="100%" height="500" style={{border:"0",marginTop:'50px'}} allowfullscreen="" loading="fast" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact