import React from 'react'
import data from '../jsData/Data'
import { Link, useParams } from 'react-router-dom'



const Detailscomp = () => {

    const {id} = useParams();
    const findData = data.find((info)=>info.id === parseInt(id))
  
 
 return (

    <div className='container detail_cnt'>
    <h1>Details page</h1>
    <Link to="/"><i class="fa-solid fa-arrow-left backicon"></i></Link>

   <div className='container frndcnt'>

  {findData ? (
   
    <div className='row'>
    <div className='col-md-4'> 
    <div className='card friendcard'>
     <img src={findData.img}/>
     <h5> Role: {findData.role}</h5>
     <h5> age:  {findData.age}</h5>
    
    </div>
    </div>
    <div className='col-md-8 detail_page'>
      <h3>Name : {findData.name}</h3>
   <p>{findData.discription}</p>
    </div>
   </div>

  ):(
      <p>no info found</p>
  )}
</div>
  

</div>

  );
}

export default Detailscomp;
