import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const InfoGet = () => {

      
    const [info , setinfo] = useState([]);
    const [searchdata, setsearchdata] = useState("")

    const filterdata = info.filter((data)=>data.name.toLowerCase().includes(searchdata.toLowerCase()))
   

      useEffect(()=>{
      dataload()
    },[]);                                                                
    
   
    
    const dataload = async()=>{
        const result = await axios.get("http://localhost:5050/userinfo");
        setinfo(result.data)

        }

        const deletedata = async(id)=>{
         await axios.delete(`http://localhost:5050/userinfo/${id}`);
         dataload()
        }
    
   return (
   
   <div className='container table_cnt'>
      <input type='search' className='form-control mt-5' placeholder='search' onChange={(e)=>setsearchdata(e.target.value)}/>
       <table className="table mt-5">
        <thead className="thead-dark"> 
        <tr>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Gender</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
        </tr>
        </thead>
         <tbody>

          {  filterdata.length > 0 ? (
              filterdata.map((userinfo,index)=>(
             <tr>
                <td>{index+1}</td>
                <td>{userinfo.name}</td>
                <td>{userinfo.email}</td>
                <td>{userinfo.number}</td>
                <td>{userinfo.gender}</td>
                <td> 
                 <i 
                    class="fa-solid fa-trash delete_icon" onClick={()=>deletedata(userinfo.id)}>
                </i>
                </td>
                <td><Link to={`/crud-putdata/${userinfo.id}`}><i class="fa-solid fa-pen-to-square edit_icon"></i></Link></td>
             </tr> 

          ))):(

             <div className='container icon_cnt mt-5 ml-5'>
              <p>Not found <i class="fa-solid fa-face-sad-cry"></i></p>
             </div>
           
            
          )}
          
          
         </tbody>
       
       </table>
     <Link to="/crud-postdata"><button  className="btn btn-outline-dark btn_table">Add Data</button></Link>  
    </div>

    
  );
}

export default InfoGet
