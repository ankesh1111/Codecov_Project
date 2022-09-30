
import {Box,  FormControl,Flex,Spacer,Image,Text,Input, Stack,Button, Alert} from "@chakra-ui/react";
import "./Home.css"
import Adobe from "../Image/Adobe.PNG"
import { useState } from "react";

function Signup(){

  const [user, setUser] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    company:""
  })

  const [obj, setObj] = useState([])


  function handleChange(e){
       const name=e.target.name;
       const value=e.target.value;

       console.log(name,value)

       setUser({...user, [name]:value})
  }

  function handleSubmit(e){
     e.preventDefualt()

     const newObj= {...user, id:new Date().getTime().toString()}

     Alert("Signup Successfull")
     console.log(obj)
     setObj([...obj,newObj])
     console.log(obj)
  }






    return (
        <Flex width="100%" height="625px" >
           <Box bgColor="#0F1B29" width="50%" height="625"   >
              
              <Image width="200px" marginTop="40px" marginLeft="70px" src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg"/>
             <br /> <br /><br /> <br /><br />
             <br />
        
             <Text marginLeft="-140px" fontSize="3xl" as="b" color="white">Schedule a Demo.</Text>
           <br />
           <Text  fontSize="lg" marginLeft="30px" as="b" color="white">Fill out the form to immediately schedule a demo <br /> with our team.</Text>
           <br />
           <br />
           <br />
           <Image marginLeft="140px" src={Adobe}/>
           
           </Box>

          <Spacer />

      <Box  bgColor="white" width="50%" height="625" >
        
      {/* <form action=""> */}
         
        <FormControl onSubmit={handleSubmit}>
         <Stack   marginTop="40px" marginLeft="170px" width="340px" spacing={3}>
          
          <div class="L1"><p >First Name:</p></div>
      
           <Input
            type="text"
           value={user.firstname}
           onChange={handleChange}
           name="firstname"
           />
           <div ><p class="L2" >Last Name:</p></div>
          
           <Input 
          
             type="text"
             value={user.lastname}
             onChange={handleChange}
             name="lastname"
           />
           <div ><p className="L3" >Email Address:</p></div>
          
           <Input
             
             type="text"
             value={user.email}
             onChange={handleChange}
             name="email"
           />
           <div><p  className="L4">Phone Number:</p></div>
        
           <Input
             
             type="number"
             value={user.phone}
             onChange={handleChange}
             name="phone"
           />
           <div ><p class="L5">Company Name:</p></div>
          
           <Input
              
             type="text"
             value={user.company}
             onChange={handleChange}
             name="company"
           />
           <Button  type="submit"   colorScheme='pink' color="white">Schedule Demo</Button>

          </Stack>
        </ FormControl>
        {/* </form> */}
        </Box>
    

      </Flex>
    )
}
export default Signup