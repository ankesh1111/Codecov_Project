import {FormControl, Input,Box,Flex,Spacer ,Text,Image,Button} from "@chakra-ui/react"
import { useState } from "react";
import {   FaGithub } from "react-icons/fa";
import {Link} from "react-router-dom"
function Login1(){

  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const [obj, setObj] = useState([])

  function handleChange(e){
    const name = e.target.name;
    const value= e.target.value;
    console.log(name,value)

    setUser({...user, [name]:value})
  }

  function handleSubmit(e){
    e.preventDefault();

    const newObj ={...user, id:new Date().getTime().toString()}
      alert("Login Successfull")
      console.log(obj);

      setObj([...obj,newObj])
      console.log(obj)
  
  }



    return (
        <Box marginTop="200px" width="30%" margin="auto" height="700px">
           <Box marginLeft="178px" marginTop="30px" fontSize="50px"><FaGithub/></Box>
           <br />
           <br />

          <Box borderRadius="6px" margin="auto" width="380px" height="455px" border="1px solid grey">
           <Image marginTop="25px" width="100px" marginLeft="140px" src="data:image/png;base64,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"/>
        
          
            <Text>Sign in to GitHub <br /> to continue to Codecov</Text>
        
             <br />
             <hr />
             <br />

          <form onSubmit={handleSubmit}>
   
             <Text marginLeft="-120px">Username or email address</Text>
            
             <Input marginTop="10px" width="300px"
             type="text"
             value={user.email}
             onChange={handleChange}
             name="email"

             />
             <Text marginTop="10px" marginLeft="-235px">Password</Text>
             <Input  marginTop="10px" width="300px"

                 type="password"
                 value={user.password}
                 onChange={handleChange}
                 name="password"
             
             />
            
            <Button type="submit" colorScheme="green" width="300px" marginTop="18px"><Link to="/"> Sign in</Link></Button>
             
          </form>
          
         </Box>
         
         <Box marginTop="20px" borderRadius="6px"  marginLeft="13px" width="380px" height="60px" border="1px solid grey">
           <Text color="black" marginTop="16px">New to GitHub? Create an account .</Text>
         </Box>
         <br />
         <br />

         <Box cursor="pointer" gap="16px" display="flex" marginTop="20px" borderRadius="6px"  marginLeft="13px" width="380px" height="60px">
         <Text color="#0088E9" marginLeft="46px">Terms</Text>
         <Text color="#0088E9">Privacy</Text>
         <Text color="#0088E9">Security</Text>
         <Text>Contact GitHub</Text>
         </Box>




        </Box>

    )
}
export default Login1