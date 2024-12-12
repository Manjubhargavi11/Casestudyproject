import React from 'react'
import data from '../jsData/Data'
import Friendscomponent2 from './Friendscomponent2'



const Friendscomponent1 = () => {
  return (
    <div className='container cnts mt-5'>
    <h1><i>F.R.I.E.N.D.S</i></h1>
     <img src="https://imgix.bustle.com/rehost/2016/9/13/aefb8cb6-4b31-4ad8-ba50-916f9ac08442.jpg" className='group_img' style={{width:"700px", marginLeft:"180px"}}/>
   
    <div className='row'>

        {data.map((info)=>(
                  <Friendscomponent2
                  id={info.id}
                  name={info.name}
                  img = {info.img}

              />
             
     ))}
    
    </div>
    </div>

  )
}

export default Friendscomponent1
