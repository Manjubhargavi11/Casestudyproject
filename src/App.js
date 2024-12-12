
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./casestudyProject/Navbar";
import Friendscomponent1 from "./casestudyProject/Friendscomponent1";
import Detailscomp from "./casestudyProject/Detailscomp";
import InfoGet from "./crud/InfoGet";
import Putcrud from "./crud/Putcrud";
import Postcrud from "./crud/Postcrud";




function App() {
   
  return(
    <>
    <BrowserRouter>
   <Navbar/>
  
    <Routes>
     
     <Route path="/"  element={<Friendscomponent1/>} />
     <Route path="/details/:id"  element={<Detailscomp/>}/>

     {/* search data  */}
     
   <Route path="/crud-getdata" element={<InfoGet/>}/>
   <Route path="/crud-putdata/:id" element={<Putcrud/>}/>
   <Route path="/crud-postdata" element={<Postcrud/>}/>



    </Routes>
    </BrowserRouter>
</>
  );
  
  
}

export default App;
