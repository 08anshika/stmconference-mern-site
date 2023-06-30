import React from 'react'

const Contact = () => {
  return (
    <>
     <section id='#contactus'>

<div className="container">
  <div className="row">
    <div className="col-12">
      <h2 className='text-center '>Contact Us</h2>
    </div>
    <div className="col-6 mt-4">
    <iframe src="https://embed.lottiefiles.com/animation/75663" width={'100%'} height={500} alt="contactUs"></iframe>
    </div>
    <div className="col-6">
    <form className="row g-3 mt-0">
  <div className="col-md-10">
    <label htmlFor="validationDefault01" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="validationDefault01" placeholder='Please Enter Your Name' required />
  </div>
  <div className="col-md-10">
    <label htmlFor="validationDefault02" className="form-label">Email</label>
    <input type="email" className="form-control" id="validationDefault02" placeholder='Please Enter Your Email' required />
  </div>
  <div className="col-md-10">
    <label htmlFor="validationDefault02" className="form-label">Subject</label>
    <input type="text" className="form-control" id="validationDefault02"  required />
  </div>
  <div className="col-md-10">
    <label htmlFor="validationDefault02" className="form-label">Message</label>
    <textarea class="form-control form-control-sm mb-3" rows="6" placeholder="Large textarea"></textarea>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

    </div>
  </div>
</div>
</section> 
    
    
    
    </>
  )
}

export default Contact