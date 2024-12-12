import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Postcrud = () => {
    const navigation =  useNavigate ()
    const  [userdata, setuserdata]= useState({
       name:"",
       email:"",
       number:"",
       gender:""
}); 
 
const {name,email,number,gender} = userdata
  
const onchangedata = (event)=>{
    setuserdata({...userdata, [event.target.name]:event.target.value})
}

const onsubmitdata = (e)=>{
   
   e.preventDefault()
   axios.post("http://localhost:5050/userinfo",userdata)
   console.log(userdata)
   navigation("/crud-getdata")

}

  return (
    
    <div>
        <h1>Post Data</h1>
      <form className='container mt-5 cnt' onSubmit={onsubmitdata}>
     <label>Name</label>
        <input type='text' className='form-control' placeholder='Enter name' value={name} name='name'
         onChange={onchangedata}/>

        <label>Email</label>
        <input type='text' className='form-control' placeholder='Enter email'value={email} name='email'
         onChange={onchangedata}/>

        <label>number</label>
        <input type='number' className='form-control' placeholder='Enter number'value={number} name='number'
         onChange={onchangedata}/>
        
        <label>Gender</label>
        <select class="form-control" value={gender} name='gender'
        onChange={onchangedata} >
        <option>select options</option>
        <option>Male</option>
        <option>female</option>
        </select>

      <button type="submit" className="btn btn-primary mt-3 btn1">Post</button>

   
      </form>

    </div>

  )
}

export default Postcrud
