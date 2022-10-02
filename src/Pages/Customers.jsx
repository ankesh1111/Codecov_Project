
 
import Footer from "../Components/Footer"
import {Box,  FormControl,Flex,Spacer,Image,Text,Input, Stack,Button, Alert} from "@chakra-ui/react";
import Navbar from "../Components/Navbar"
 
import Multi from "../Image/Multi.PNG"
import Check from "../Image/Check.PNG"
import Noti from "../Image/Noti.PNG"
import Enter from "../Image/Enter.PNG"
import NUT from "../Image/NUT.PNG"
import Open from "../Image/Open.PNG"
import Salt from "../Image/Salt.PNG"
import "./Home.css"
import {Link } from "react-router-dom"
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
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
     
       <Box   gap="20px" display="flex" margin="auto"  width="70%" height="330px">
         <Box height="330px" width="60%"  >
            <Image box-shadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" src={Check}/>
         </Box>
         <Box height="390px" width="60%" >
            <Image  marginTop="-10px" width="470px" height="350px" src="https://about.codecov.io/wp-content/uploads/2020/10/Checks-passed.png"/>
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
 