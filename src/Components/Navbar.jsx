import { Box ,Text, Image, Button} from "@chakra-ui/react"
import "./Navbar.css"
import {Link} from "react-router-dom"
 
function Navbar(){
    return (

         <Box>

          <div id="nav">
             <p > Coming Soon! Need automated test selection powered by code coverage data? Learn more</p>
          </div>
          <br />
          <br/>

          <Box>
            <Box boxSize='180px' marginLeft="120px">
              <Image src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg"/>
            </Box>

            <Box   bgColor='black.500' gap={5} display="flex" marginLeft="370px" marginTop="-175px">
            
            <Text color="#0F1B29" className="re1" fontSize='lg'><Link to="/product"> Product</Link> </Text>
            <Text color="#0F1B29" className="re1"  fontSize='lg'><Link to="/documentataion"> Documentataion</Link></Text>
            <Text color="#0F1B29" className="re1"  fontSize='lg'><Link to="/customers"> Customers </Link></Text>
            <Text color="#0F1B29" className="re1"  fontSize='lg'><Link to="/resources"> Resources</Link> </Text>
            <Text color="#0F1B29" className="re1"  fontSize='lg'><Link to="/pricing"> Pricing</Link> </Text>
            <Text color="#0F1B29" className="re1"  fontSize='lg'><Link to="/contact"> Contact </Link></Text>
               
            </Box>

            <Box display="flex" marginLeft="1050px" marginTop="-40px">
                <Text color="#0F1B29"  className="re1" fontSize='lg'   marginTop="10px" marginLeft="-15px"><Link to="/login">Login</Link> </Text>
                <Button height="45px" width="110px"   bgColor="black" colorScheme="BLACK" marginTop="7px" marginLeft="30px"><Link to="/signup">Get Demo</Link> </Button>
            </Box>
          </Box>
 
 





         </Box>
      

        
 





 
    )
}
export default Navbar