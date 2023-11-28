

 import {Box,  FormControl,Flex,Spacer,Image,Text,Input, Stack,Button, Alert} from "@chakra-ui/react";
 import Navbar from "../Components/Navbar"
 import Imapct from "../Image/Imapct.PNG"
 import More from "../Image/More.PNG"
 import Multi from "../Image/Multi.PNG"
 import Check from "../Image/Check.PNG"
 import Noti from "../Image/Noti.PNG"
 import "./Home.css"
 import "./resorce.css"
 import coverage from "../Image/coverage.PNG"
  
 import state from "../Image/state.PNG"
  
 import third from "../Image/third.PNG"

 import re1 from "../Image/re1.PNG"
  
 import re2 from "../Image/re2.PNG"
  
 import re3 from "../Image/re3.PNG"

 import re4 from "../Image/re4.PNG"
  
 import re5 from "../Image/re5.PNG"
  
 import re6 from "../Image/re6.PNG"
 import {Link } from "react-router-dom"
 function Resources(){
 
     return (
        <Box>
         <Navbar/>
         <br />
         <br />
         <br />
         
         <Text as="b" fontSize='5xl'>Resources</Text>
        <br />
        <br />
        <br />
        <br />

        <div id="container5">
    <div>
        
        <img style={{borderRadius:"5px"}} src={coverage} alt="" />
        <br />
        <Text fontSize='md' marginLeft="-217px" color="#FF0077">PAGE</Text>
        <Text as="b" color="black" marginLeft="23px">What should my code coverage goal <br /> be?</Text>

        <br />
        <br />
        <br />
        <hr />
        <Button  marginTop="4px" marginLeft="160px" height="30px" color="#FF0077">Learn More -></Button>
    </div>
    <div>
        <img src={state} alt="" />
        <br />
        <Text fontSize='md' marginLeft="-165px"  color="#FF0077">INFOGRAPHIC</Text>
        <Text as="b" marginLeft="-25px"> 2020 State of Open Source Code <br /> Coverage </Text>

        <br />
        <br />
        <br />
        <hr />
        <Button marginTop="4px" marginLeft="120px" height="30px" color="#FF0077">View Infographic -></Button>
    </div>
    <div>
        <img src={third} alt="" />
        <br />
        
        <Text fontSize='md' marginLeft="-180px" color="#FF0077">BLOG POST</Text>
        <Text as="b" marginLeft="10px"> 8 Factors Influencing Your Approach <br /> to Code Coverage  </Text>

        <br />
        <br />
        <br />
        <hr />
        <Button  marginTop="4px" marginLeft="140px" height="30px" color="#FF0077"> Read Blog Post -></Button>
    </div>
  </div>

<br /><br /><br />
        
 
      <br /><br /><br />
        <Box display="flex" margin="auto"  width="70%" height="330px">
          <Box height="330px" width="60%"  >
             <Image src={Imapct}/>
          </Box>
          <Box height="330px" width="60%" >
             <Image width="500px" height="270px" src="https://about.codecov.io/wp-content/uploads/2022/06/0622_ProjectInsights.jpg"/>
          </Box>
        </Box>
 
        <br />
        <br />
        <br />
        <br />
        <Box gap="20px" display="flex" margin="auto"  width="70%" height="330px">
          <Box height="330px" width="60%"  >
             <Image box-shadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" src= "https://about.codecov.io/wp-content/uploads/2020/10/Source-Code-Coverage-1.png"/>
          </Box>
          <Box height="330px" width="60%" >
             <Image marginTop="65px" width="400px" height="270px" src={More}/>
          </Box>
        </Box>
 
        <br />
        <br />
        <br />
        <br />
        <div id="container5">
    <div>
        
        <img style={{borderRadius:"5px"}} src={coverage} alt="" />
        <br />
        <Text fontSize='md' marginLeft="-217px" color="#FF0077">PAGE</Text>
        <Text as="b" color="black" marginLeft="23px">What should my code coverage goal <br /> be?</Text>

        <br />
        <br />
        <br />
        <hr />
        <Button  marginTop="4px" marginLeft="160px" height="30px" color="#FF0077">Learn More -></Button>
    </div>
    <div>
        <img src={state} alt="" />
        <br />
        <Text fontSize='md' marginLeft="-165px"  color="#FF0077">INFOGRAPHIC</Text>
        <Text as="b" marginLeft="-25px"> 2020 State of Open Source Code <br /> Coverage </Text>

        <br />
        <br />
        <br />
        <hr />
        <Button marginTop="4px" marginLeft="120px" height="30px" color="#FF0077">View Infographic -></Button>
    </div>
    <div>
        <img src={third} alt="" />
        <br />
        
        <Text fontSize='md' marginLeft="-180px" color="#FF0077">BLOG POST</Text>
        <Text as="b" marginLeft="10px"> 8 Factors Influencing Your Approach <br /> to Code Coverage  </Text>

        <br />
        <br />
        <br />
        <hr />
        <Button  marginTop="4px" marginLeft="140px" height="30px" color="#FF0077"> Read Blog Post -></Button>
    </div>
  </div>
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
         
        
      
      <div id="i1">
          <div>
            <img src={re1}/>
            <Text fontSize='md' marginTop="15px" marginLeft="-250px" color="#FF0077">PAGE</Text>
            <br />
        <Text as="b"  color="black" marginLeft="15px"> May Product Update: Browser Extension and Quality of Life Updates </Text>

        <br />
        <br />
        <br />
        <hr />
        <Button fontSize="19px"  marginTop="20px" marginLeft="160px" height="50px" color="#FF0077">Learn More -></Button>
          </div>

          <div>
            <img src={re2}/>
            <Text fontSize='md' marginTop="15px" marginLeft="-250px" color="#FF0077">PAGE</Text>
            <br />
        <Text as="b"  color="black" marginLeft="2px"> How To Maintain A Healthy Codebase Quality update</Text>

        <br />
        <br />
        <br />
        <hr />
        <Button fontSize="19px"  marginTop="20px" marginLeft="160px" height="50px" color="#FF0077">Learn More -></Button>
          </div>

          <div>
            <img src={re6}/>
            <Text fontSize='md' marginTop="15px" marginLeft="-250px" color="#FF0077">PAGE</Text>
            <br />
        <Text as="b"  color="black" marginLeft="2px"> CLI from Codecov: Coverage insights in your terminal</Text>

        <br />
        <br />
        <br />
        <hr />
        <Button fontSize="19px"  marginTop="20px" marginLeft="160px" height="50px" color="#FF0077">Learn More -></Button>
          </div>
         
      </div>
          

       <br /><br /><br />
      
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
     
 
    <div id="container9">
               <div class="V1">
                 <select class="v2">
                   <option value="">Select Language</option>
                   <option value="">Male</option>
                   <option value="">RSA</option>
                   <option value="">USA</option>
                   <option value="">AUS</option>
               
               
                 </select>
               </div>
               <div class="V3">
                 <h4 class="v4">Terms & Conditions</h4>
                 <h4  class="v4">Privacy</h4>
                 <h4  class="v4">Security</h4> 
                 <h4  class="v4">EULA</h4>
                 <h4  class="v4">GDPR</h4>
 
               </div>
               <div  >
                 <h4   class="V5">@ Codecov 2022</h4>
               </div>
              </div>
 
 
 
 
 
 
 
 
        
        </Box>
     )
 }
 export default  Resources