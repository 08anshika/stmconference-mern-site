import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addOrganizer } from '../api/organizer-api';

const Orgn = () => {  

const defaultValue = {
  nameoforganization:'',
  urloforganization:'',
  organizationemail:'',
  contactnumber:'',
  about:'',
  addressline1:' ',
  country:'',
  state:'',
  pincode:'',
  contactpersonname:'',
  contactpersondesignation:'',
  contactpersonemail:'',
  contactpersonphone:'',
  contactpersonimage:''
}


const [organizer,setOrganizer] =useState(defaultValue);
const navigate = useNavigate();

  const onValueChange=(e)=>{
    setOrganizer({...organizer,[e.target.name]:e.target.value});
  }


  const addOrganizerDetails = async() => {
    await addOrganizer(organizer);
    navigate('/all-organizers');
}
  
  return (
    <>

      <div className="container mt-5">
        <form className="row">
        <h3  className='text-center mt-5 mb-3'>Add Organizers</h3>

          <div className="col-md-6">
            <label htmlFor="validationDefault01" className="form-label">Name of Organization</label>
            <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required onChange={(e)=>onValueChange(e)} name='nameoforganization'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault01" className="form-label">Url of Organization</label>
            <input type="url" className="form-control" id="validationDefault01" defaultValue="WWW.xyz.com" required onChange={(e)=>onValueChange(e)} name='urloforganization'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefaultUsername" className="form-label">Organization Email</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">📨</span>
              <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required onChange={(e)=>onValueChange(e)} name='organizationemail'/>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">Contact Number</label>
            <input type="text" className="form-control" data-mdb-input-mask={'+91-999-9999-999'} id="phone" required onChange={(e)=>onValueChange(e)} name='contactnumber'/>
          </div>
          <div classname="mb-3 p-">
            <label htmlFor="validationTextarea" className="form-label">About</label>
            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" cols={'30'} rows={'6'} required  onChange={(e)=>onValueChange(e)} name='about'/>
            <div className="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefault03" className="form-label">Address line- 1</label>
            <input type="paragraph" className="form-control" id="validationDefault03" required  onChange={(e)=>onValueChange(e)} name='addressline1'/>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault04" className="form-label">Country</label>
            <select className="form-select" id="validationDefault04" required onChange={(e)=>onValueChange(e)} name='country'>
              <option selected disabled value>Choose...</option>
              <option>India</option>
              <option>Russia</option>
              <option>New York</option>
              <option>China</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault04" className="form-label">State</label>
            <select className="form-select" id="validationDefault04" required  onChange={(e)=>onValueChange(e)} name='state'>
              <option selected disabled value>Choose...</option>
              <option>UP</option>
              <option>Delhi</option>
              <option>MP</option>
              <option>Mumbai</option>
              <option>Mumbai</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault05" className="form-label">Pin Code</label>
            <input type="text" className="form-control" id="validationDefault05" required onChange={(e)=>onValueChange(e)} name='pincode'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">Contact Person Name</label>
            <input type="text" className="form-control" id="validationDefault03" required onChange={(e)=>onValueChange(e)} name='contactpersonname'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">Contact Person Designation</label>
            <input type="text" className="form-control" id="validationDefault03" required onChange={(e)=>onValueChange(e)} name='contactpersondesignation'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefaultUsername" className="form-label">Contact Person Email</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">📨</span>
              <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required onChange={(e)=>onValueChange(e)} name='contactpersonemail'/>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">Contact Person Phone</label>
            <input type="text" className="form-control" id="validationDefault03" required onChange={(e)=>onValueChange(e)} name='contactpersonphone'/>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefault03" className="form-label">Contact Person Image</label>
            <input type="file" className="form-control" id="validationDefault03" required  onChange={(e)=>onValueChange(e)} name='contactpersonimage'/>
          </div>

          <div className="col-12 m-5">
            <button className="btn btn-primary" type="submit" onClick={()=>addOrganizerDetails()}>Submit form</button>
          </div>
        </form>

      </div>



    </>
  )
}

export default Orgn