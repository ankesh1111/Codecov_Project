 
import React from "react";
import {Routes, Route} from "react-router-dom"
import Contact from "../Pages/Contact"
import Customers from "../Pages/Customers"
import Documentataion from "../Pages/Documentation"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Pricing from "../Pages/Pricing"
import Product from "../Pages/Product"
import Resources from "../Pages/Resources"
import Signup from "../Pages/Signup"


function AllRoutes(){

    return (
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/product" element={<Product/>}/> 
            <Route path="/documentataion" element={<Documentataion/>}/> 
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/resources" element={<Resources/>}/> 
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>

         </Routes>
        </div>
        
    )
}
export default AllRoutes