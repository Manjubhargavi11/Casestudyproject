import React from 'react'
import { Link } from 'react-router-dom'



const Friendscomponent2 = (props) => {
  return (
   

   
    <div className='col-md-4'>
         
    <div className='card cds mt-5'>
        <img src={props.img} style={{height:"200px"}} className='cards_img'/>
         <h6>{props.name}</h6>
        
        <Link to={`/details/${props.id}`} className='link'> 
         <button type="button" className="btn btn-dark detail_btn">Details</button>
        </Link>
    </div>
       

   </div>

  )
}

export default Friendscomponent2;
