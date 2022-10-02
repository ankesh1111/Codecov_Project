import Navbar from "../Components/Navbar"
import {Link } from "react-router-dom"
import { Grid,Box,Text,Button,Flex,Spacer,Image, GridItem } from '@chakra-ui/react'
import "./Home.css"
import codecov from "../Folder/codecov.PNG"
import grab from "../Folder/grab.PNG"
import work from "../Folder/work.PNG"
 
import lyast from "../Folder/lyast.PNG"
 
import circle from "../Folder/circle.PNG"
import equalite from "../Folder/equalite.PNG"
import Hitachi from "../Folder/Hitachi.PNG"
import text from "../Folder/text.PNG"
import lang from "../Folder/lang.PNG"

import grab1 from "../Image/grab1.PNG"
import mp1 from "../Image/mp1.PNG"
import tile1 from "../Image/tile1.PNG"
import Read1 from "../Image/Read1.PNG"
import Good from "../Image/Good.PNG"
import Raper from "../Image/Raper.PNG"
import Hew from "../Image/Hew.PNG"
import Hita from "../Image/Hita.PNG"
import we from "../Image/we.PNG"
import ring from "../Image/ring.PNG"
import Uj from "../Image/Uj.PNG"
import shie from "../Image/shie.PNG"
 
 
 import coverage from "../Image/coverage.PNG"
  
 import state from "../Image/state.PNG"
  
 import third from "../Image/third.PNG"
import Footer from "../Components/Footer"
 
 import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
 

function Home(){
    // const { isAuth, toggleAuth } = useContext(AuthContext);

    // if (isAuth) {
    //   return <Navigate to="/product" />;
    // }
    return (
        <Box color="grey.400">
           
            {/* Navbar section */}
            <Navbar />
            {/* <button onClick={toggleAuth}>LOGIN</button> */}
            <br />
            <br />
            
            {/* First section */}

            <div  >
                <div>
                    <img style={{marginLeft:"180px"}} src={codecov} />
                </div>

             </div>
             <br />
             <br />
            

             {/* P TAG USE HERE */}
             
             <p>29,000+ ORGANIZATION ARE ALREADY USING CODECOV</p>
     <br />
           {/* Image */}

           
           <div id="container">
               <div class="grab">
                <img style={{marginTop:"-5px"}}  src={grab}/>
               </div>
               <div>
               <img style={{marginTop:"6px"}} src={work}/>
               </div>
               <div>
               <img src={equalite}/>
               </div>
               <div>
               <img src={Hitachi}/>
               </div>
               <div>
               <img style={{marginTop:"-10px"}} src={circle}/>
               </div>
               <div>
               <img style={{marginTop:"-10px"}} src={lyast}/>
               </div>
           </div>
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />


           {/* SECOND SECTION */}

           <Text  as='b' fontSize='3xl' color="black">Development cycles are spinning faster than <br /> ever... </Text>
            
           <br />
           <br />
           <br />
           


           <div id="container1">
            <div id="src1">
                <img src="https://about.codecov.io/wp-content/themes/codecov/assets/templates/home/devops.svg" alt="" />
            </div>
            <div  >
                <img src={text} alt="" />
            </div>
           </div>

           <br />
          <br />
          <br />

          <br />
          <br />
          <br />


            {/* Third SECTION */}

          <Text  as='b' fontSize='3xl' color="black">How Codecov helps...</Text>
          
          <br />
          <br />
          <br />
          
         <div id="container2"  >
            <div id="con1">
                <img   src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/flexible.svg" alt="" />
                <Box cursor="pointer" mt="-50px"> <Text   ml="70px"  as='b' color="black" fontSize='2xl'>Flexible / Unified Reporting</Text></Box>
               
                <br />
                <br />
                
                <img src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/seamless.svg" alt="" />
               <Box cursor="pointer" mt="-50px"> <Text  ml="69px" as='b' color="black" fontSize='2xl'>Seamless Coverage Insights</Text></Box>
               
                <br/>
                <br />
                <img src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/robust.svg" alt="" />
                 <Box cursor="pointer" mt="-50px"> <Text  ml="50px" as='b' color="black" fontSize='2xl'>Rebust Coverage Controls</Text></Box>
                
            </div>
            
            <div id="con2">
                <Text as='a' color="#212529" fontSize="lg">As long as your code has tests and your coverage tool can output <br />
                    coverage results in a compatible format, you can use Codecov.</Text>
                    <br />
                   <br />


                    <Text  cursor="pointer" ml="-250px" fontSize="lg" color="#FF0077">Source Code Coverage</Text>
                    <Text cursor="pointer"  ml="-150px"  fontSize="lg"  color="#FF0077">20+ Langauage and CI/CD Agnostic</Text>
                    <Text cursor="pointer"  ml="-307px" fontSize="lg"  color="#FF0077">Report Merging</Text>
                    <Text cursor="pointer"  ml="-284px" fontSize="lg" color="#FF0077">Coverage Isolation</Text>
            </div>
         </div>




          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* Fouth section */}

          <Text  as='b' fontSize='3xl' color="black">Code Coverage For Any Tech Stack</Text>
          
          <br />

           <Text  as='a' color="black"  fontSize="lg">Codecov provides highly integrated tools for developers and engineering leaders to gain <br /> actionable visibility into their code coverage.</Text>
         
         <br />
         <br />
         <br />
         <br />
          
          <div id="container3">
            <div>
                <img   src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/features/multi.svg" alt="" />
            </div>
            <div>
                <img src={lang} alt="" />
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          

          {/* Five section */}

          <Text  as='b' fontSize='3xl' color="black">Who else is covered?</Text>

            <br />
            <Text  as='a' color="black"  fontSize="lg">Over 29K organizations and 1M+ developers trust <br /> Codecov to gain visibility into their code coverage.</Text>
        <br />
        <br />
        
        <Button width="170px" color="white"   colorScheme='pink'>View Customers</Button>
        
        <br />
        <br />
         

          <br />
          <br />
            <br />
            <br />

            <div id="container4">
                <div>
                    <img   src={grab1} alt="" />
                </div>
                <div>
                    <img src={mp1} alt="" />
                </div>
                <div>
                    <img src={tile1} alt="" />
                </div>
                <div>
                    <img src={Read1} alt="" />
                </div>
                <div>
                    <img src={Good} alt="" />
                </div>
                <div>
                    <img src={Uj} alt="" />
                </div>
                <div>
                    <img src={ring} alt="" />
                </div>
                <div>
                    <img src={we} alt="" />
                </div>
                <div>
                    <img src={Hita} alt="" />
                </div>
                <div>
                    <img src={Raper} alt="" />
                </div>
                <div>
                    <img src={shie} alt="" />
                </div>
                <div>
                    <img src={Hew} alt="" />
                </div>
            </div>
            
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> 
 <br /><br /><br />

  

   {/* Six section */}

   <Text  as='b' fontSize='3xl' color="black">Resources</Text>

<br />
<Text  as='a' color="black"  fontSize="lg"> Want to learn more about code coverage? View our library of <br /> resources to start building a culture of coverage at your company.</Text>
<br />
<br />
 
 <Button color="#FF0077">View Resources ></Button>
  
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
  <br/>
  <br />
  <br />

   {/* Seven section */}

   <div id="container6">
    <br />
   <Text  as='b' fontSize='3xl' color="black">Ready to get covered?</Text>

    <br />
    <p color="#212529" >Join over a million developers in shipping healthier <br /> code today. Sign up with your code host below.</p>

   
   <br />
   <br />
   
   <Button as='b' height="50px"   width="290px" bgColor="black" colorScheme="BLACK" marginTop="-30px"><Link to="./login"> Get Started</Link></Button>
   <Button  as='b'  height="50px" width="290px" color="white"   colorScheme='pink' marginLeft="30px" marginTop="-30px"><Link to="./signup">  Schedule Demo</Link></Button>
   
   <br />
   <br />

   </div>

    
   <br />
   <br />

 
   <br />
   <br />

   {/* Footer section */}

  <Footer/>
 
 


     </Box>
    )
}
export default Home