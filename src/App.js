import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './Components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


//Components
import Pricing from './Routes/Pricing';
import Contact from "./Routes/Contact"
import Testimonial from './Routes/Testimonial';



const App = () =>{
  return(
    <>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/testimonial" element={<Testimonial/>}/>
      <Route path="/contact" element={<Contact/>}/> 
      



    
    </Routes>
      






    </>
  )
}


export default App;
