
 
import Footer from "../Components/Footer"
import {Box,  FormControl,Flex,Spacer,Image,Text,Input, Stack,Button, Alert} from "@chakra-ui/react";
import Navbar from "../Components/Navbar"
 
import Multi from "../Image/Multi.PNG"
import Noti from "../Image/Noti.PNG"
import Enter from "../Image/Enter.PNG"
import NUT from "../Image/NUT.PNG"
import Open from "../Image/Open.PNG"
import Salt from "../Image/Salt.PNG"
import Cus from "../Image/cus1.PNG"
import Shie from "../Image/shie.PNG"
import "./Home.css"
 import "./customer.css"
import { Grid } from '@chakra-ui/react'
import {Link } from "react-router-dom"


import img1 from "../Image/1.PNG"
import img2 from "../Image/2.PNG"
import img3 from "../Image/3.PNG"
import img4 from "../Image/4.PNG"
import img5 from "../Image/5.PNG"
import img6 from "../Image/6.PNG"
import img7 from "../Image/7.PNG"
import img8 from "../Image/8.PNG"
import img9 from "../Image/9.PNG"
import img10 from "../Image/10.PNG"
import img11 from "../Image/11.PNG"
import img12 from "../Image/12.PNG"
import img13 from "../Image/13.PNG"
import img14 from "../Image/14.PNG"
import img15 from "../Image/15.PNG"






function Customers(){

    return (
       <Box>
        <Navbar/>
        <br />
        <br />
        <br />
        
        <Text as="b" fontSize='5xl'>Our Customers</Text>
       <br />
       <br />
       <br />
       <br />
       <br />
        
       <Box display="flex" marginTop="-30px" marginLeft="250px" width="80%" height="330px">
         <Box height="330px" width="100%"  >
            <Image src={Cus}/>
         </Box>
           
       </Box>


<br /><br /><br /><br /><br />
       <Box display="flex" margin="auto"  width="80%" height="330px">
         <Box height="330px" width="100%"  >
            <Image src={Enter}/>
         </Box>
           
       </Box>

        
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />

       <br />
       <br />
       <br />
       <br />
       <Box width="70%" margin="auto"  >
        <Image src={NUT}/>
       </Box>
       <br />

<br />
<br />
<br />
<br />


       
<Box display="flex" margin="auto"  width="90%" height="330px">
         <Box marginLeft="140PX" height="330px"    >
            <Image src={Open}/>
         </Box>
           
       </Box>


       <br /> <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <Box  width="70%" margin="auto"  >
        <Image marginLeft="20PX" src={Salt}/>
       </Box>
       <br />
       <br />
       <br />
       <br />
    
       <Box gap="20px" display="flex" margin="auto"  width="70%" height="330px">
         <Box height="330px" width="60%"  >
            <Image box-shadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" src={Multi}/>
         </Box>
         <Box height="330px" width="60%" >
            <Image   width="430px" height="280px" src="https://about.codecov.io/wp-content/uploads/2020/10/CD.png"/>
         </Box>
       </Box>
       <br />
       <br />
       <Text as="b" fontSize='3xl'>These companies use Codecov to efficiently release more reliable code</Text>
       {/* <h1 fontSize="280px">These companies use Codecov to efficiently release more reliable code</h1> */}
       <br />
       <br />
       <br /><br />

       <div id="e1">
         <div>
            <img src= {img1} />
         </div>
         <div>
            <img src={img2} />
         </div>
         <div>
            <img src= {img3} />
         </div>
         <div>
            <img src={img4} />
         </div>
         <div>
            <img src={img5} />
         </div>

         
         
     </div>
<br />

     <div id="e1">
         <div>
            <img src= {img6} />
         </div>
         <div>
            <img src={img7} />
         </div>
         <div>
            <img src= {img8} />
         </div>
         <div>
            <img src={img9} />
         </div>
         <div>
            <img src={img10} />
         </div>
   </div>
 <br />
   <div id="e1">
         <div>
            <img src= {img11} />
         </div>
         <div>
            <img src={img12} />
         </div>
         <div>
            <img src= {img13} />
         </div>
         <div>
            <img src={img14} />
         </div>
         <div>
            <img src={img15} />
         </div>
   </div>
<br />
   <div id="e1">
         <div>
            <img src= {img9} />
         </div>
         <div>
            <img src={img4} />
         </div>
         <div>
            <img src= {img6} />
         </div>
         <div>
            <img src={img7} />
         </div>
         <div>
            <img src={img1} />
         </div>
   </div>
       <br />
       <div id="e1">
         <div>
            <img src= {img10} />
         </div>
         <div>
            <img src={img7} />
         </div>
         <div>
            <img src= {img8} />
         </div>
         <div>
            <img src={img9} />
         </div>
         <div>
            <img src={img5} />
         </div>
   </div>   
     
     
       <br />
       <br />
       <br />
        

       <Box   gap="20px" display="flex" margin="auto"  width="70%" height="330px">
         <Box box-shadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" height="330px" width="60%"  >
            <Image box-shadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" src="https://about.codecov.io/wp-content/uploads/2020/10/Notifications.png"/>
         </Box>
         <Box height="390px" width="60%" >
            <Image marginTop="100px"  src={Noti}/>
         </Box>
       </Box>

       <br />
       <br />
       <br />
       <br />
       <br />
       
 
       

       <div id="container6">
    <br />
   <Text  as='b' fontSize='3xl' color="black">Ready to get covered?</Text>

    <br />
    <p>Join over a million developers in shipping healthier <br /> code today. Sign up with your code host below.</p>

   
   <br />
   <br />
   
   <Button as='b' height="50px"   width="290px" bgColor="black" colorScheme="black" marginTop="-30px"><Link to="./login"> Get Started</Link></Button>
   <Button  as='b'  height="50px" width="290px" color="white"   colorScheme='pink' marginLeft="30px" marginTop="-30px"><Link to="./signup">  Schedule Demo</Link></Button>
   
   <br />
   <br />

   </div>

   <br /><br /><br />
    
          <Footer/>




       
       </Box>
    )
}
export default Customers
 