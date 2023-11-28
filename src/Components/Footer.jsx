// import "./Home.css"
import {Box} from "@chakra-ui/react"
import { FaInstagram , FaDiscourse,FaAngellist, FaYoutube, FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
 function Footer(){

    return (
        <div>

            {/* Footer section */}

            <div id="container7">
              <div>
                <img src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/codecov/codecov-circle.svg" alt="" />
                
            
                  

              </div>
              <div id="fa">
                <div>
                < FaLinkedin/>
               
                </div>
               <div> < FaTwitterSquare/></div>
            
               <div>  <FaGithub/></div>
               <div><FaYoutube/></div>
               <div>
               <  FaAngellist/></div>
               <div>   <  FaDiscourse/></div>
               <div>  <  FaInstagram/></div>
               
             </div>
               
            </div>

            {/* second footer section */}

             <div id="container8">
                  <div class="div1">
                    <p class="c1">PRODUCT</p>
                    <br />
                    <div class="c2">
                      <h5 class="a1" >Features</h5>
                      
                      <h5  class="a2" >Integration</h5>
                      <h5 class="a3">Documentation</h5>
                      <h5 class="a4">API</h5>
                      <h5 class="a5">Status</h5>
                    </div>
                  </div>
                  <div class="div2">
                  <p class="c1">SOLUTIONS</p>
                  <br />
                  <div class="c2">
                      <h5 class="b1">Open Source</h5>
                      <h5 class="b2"> Enterprise</h5>
                      <h5 class="b3">Startups</h5>
                      <h5 class="b4">Education</h5>
                      
                    </div>
                  </div>


                  <div class="div3">
                  <p class="c1">CUSTOMERS</p>
                  <br />
                  <div class="c2">
                      <h5 class="d1">Customers</h5>
                      <h5 class="d2">Case Studies</h5>
                      <h5 class="d3">Community</h5>
                     
                    </div>
                  </div>
                  <div class="div4">
                  <p class="c1">RESOURCES</p>
                  <br />
                  <div class="c2">
                      <h5 class="e1">Webinars</h5>
                      <h5 class="e2">Blog</h5>
                      <h5 class="e3">Documentation</h5>
                     
                    </div>
                  </div>
                  <div class="div5">
                  <p class="c1">COMPANY</p>
                  <br />
                  <div class="c2">
                      <h5 class="g1">Team</h5>
                      <h5 class="g2">Press</h5>
                      <h5 class="g3">Careers</h5>
                      <h5 class="g4">Write for us</h5>
                     
                    </div>
                  </div>
                  <div class="div6">
                  <p class="c1">CONTACT US</p>
                  <br />
                  <div class="c2">
                      <h5 class="j1">Contact</h5>
                      <h5 class="j2">Demo</h5>
                      <h5 class="j3">Support</h5>
                      
                    </div>
                  </div>
             </div>


             {/* FOOTER SECTION 3 */}
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

        </div>
    )
}
export default Footer