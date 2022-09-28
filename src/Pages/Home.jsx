import Navbar from "../Components/Navbar"
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
 
 
 

function Home(){
    return (
        <Box color="grey.400">
            {/* Navbar section */}
            <Navbar/>
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
                <Box mt="-50px"> <Text   ml="70px"  as='b' color="black" fontSize='2xl'>Flexible / Unified Reporting</Text></Box>
               
                <br />
                <br />
                
                <img src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/seamless.svg" alt="" />
               <Box mt="-50px"> <Text  ml="69px" as='b' color="black" fontSize='2xl'>Seamless Coverage Insights</Text></Box>
               
                <br/>
                <br />
                <img src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/robust.svg" alt="" />
                 <Box mt="-50px"> <Text  ml="50px" as='b' color="black" fontSize='2xl'>Rebust Coverage Controls</Text></Box>
                
            </div>
            
            <div id="con2">
                <Text as='a' color="black" fontSize="lg">As long as your code has tests and your coverage tool can output <br />
                    coverage results in a compatible format, you can use Codecov.</Text>
                    <br />
                   <br />


                    <Text ml="-250px" fontSize="lg" color="#FF0077">Source Code Coverage</Text>
                    <Text  ml="-150px"  fontSize="lg"  color="#FF0077">20+ Langauage and CI/CD Agnostic</Text>
                    <Text  ml="-307px" fontSize="lg"  color="#FF0077">Report Merging</Text>
                    <Text  ml="-284px" fontSize="lg" color="#FF0077">Coverage Isolation</Text>
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

          <br />
          <br />

          {/* Five section */}

          {/* <Text  as='b' fontSize='3xl' color="black">Who else is covered?</Text>

            <br />
            <Text  as='a' color="black"  fontSize="lg">Over 29K organizations and 1M+ developers trust <br /> Codecov to gain visibility into their code coverage.</Text>
        <br />
        <br />
        
        <Button width="170px" color="white" bgColor="#FF0077">View Customers</Button>
         */}
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


            {/* six section */}














     </Box>
    )
}
export default Home