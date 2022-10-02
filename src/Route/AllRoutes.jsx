 
import React from "react";
import {Routes, Route} from "react-router-dom"
import PrivateRoute from "../Components/PrivateRoute";
import Contact from "../Pages/Contact"
import Customers from "../Pages/Customers"
import Documentataion from "../Pages/Documentation"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Login1 from "../Pages/Login1";
import Pricing from "../Pages/Pricing"
import Product from "../Pages/Product"
import Resources from "../Pages/Resources"
import Signup from "../Pages/Signup"


function AllRoutes(){

    return (
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/product" element={
              <PrivateRoute>
                 <Product/>
             </PrivateRoute>
          
            }/> 
            <Route path="/documentataion" element={
          <PrivateRoute>
                    <Documentataion/>
             </PrivateRoute>
          
            }/> 
            <Route path="/customers" element={
           <PrivateRoute>
                   <Customers/>
             </PrivateRoute>
           
            }/>
            <Route path="/resources" element={
              <PrivateRoute>
            <Resources/>
            </PrivateRoute>
            }/> 
            <Route path="/pricing" element={
                <PrivateRoute>
            <Pricing/>
            </PrivateRoute>
            }/>
            <Route path="/contact" element={
                <PrivateRoute>
            <Contact/>
            </PrivateRoute>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login1" element={<Login1/>}/>

         </Routes>
        </div>
        
    )
}
export default AllRoutes