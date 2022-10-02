import { Box,Flex,Spacer ,Text,Image,Button} from "@chakra-ui/react"
import code from "../Image/code.PNG"
import {   FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import {Link} from "react-router-dom"
 

function Login(){

    return (
        <Box   bgColor= "#212529" width="100%" height="56px" border="1px solid #212529" >
           <Box cursor="pointer" as="b" marginLeft="40px" width="20%" gap="20px" marginTop="12px" border="1px solid #212529" display="flex">
            <Image src={code}/>
              <Text marginTop="4px" color="white">Docs</Text>
              <Text marginTop="4px"  color="white">Support</Text>
              <Text marginTop="4px"  color="white">Blog</Text>
           </Box>
           <Box  cursor="pointer" marginLeft="1040px" marginTop="-34px">
            <Text marginTop="4px"  color="white">New to Codecov? Learn more</Text>
           </Box>

           <br />
           <br />
           <br />
           <br />
           <br />
           <br />

          <Box color="#222F3D"  height="340px" width="30%" margin="auto">
             <Text fontSize='3xl'>Login to Codecov</Text>
             <Text fontSize="LG">You’ll be taken to your repo provider to authenticate</Text>
          <br />
          
          <hr />
          <br />
          <Button height="50px" width="340px" border="1px solid black"> <div> <FaGithub/></div><Link to="/login1">Login with Github</Link>  </Button>
          <br />
          <br />
          <hr />
          <br />
          <Text>If you are using GitHub Enterprise, GitLab EE/CE, or <br /> Bitbucket Server please view our self hosted option.</Text>
          </Box>

        <br /><br /><hr />
          <Box>
            <Box cursor="pointer" marginLeft="35px" width="400px" gap="10px" marginTop="15px" display="flex">
                <Text>@2022 Codecov</Text>
                <Text color="#0088E9">Terms</Text>
                <Text color="#0088E9">Privacy</Text>
                <Text color="#0088E9">Security</Text>
                <Text color="#0088E9">GDPR</Text>
            </Box>
            <Box cursor="pointer" color="white" display="flex">
            <Image  marginLeft="700px" marginTop="-30px" src={code}/>
            </Box>
            <Box cursor="pointer" marginLeft="1040px"   width="280px" gap="15px" marginTop="-28px"   display="flex">
                <Text color="#0088E9">Pricing</Text>
                <Text color="#0088E9">Support</Text>
                <Text color="#0088E9">Docs</Text>
                <Text color="#0088E9">Self Hosted</Text>
            </Box>
          </Box>
           
        </Box>
    
       
      
    )
}
export default Login