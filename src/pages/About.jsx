import React from 'react';
import aboutbackground from "../images/theme_blue.jpg";

const About = () => {
    return(
          <div class="grid grid-cols-1 gap-y-10 text-white" 
          style={{ backgroundImage: `url(${aboutbackground})` ,paddingTop:5,fontFamily: 'Cambria'}}>  
            <div>
              <h1 className='text-4xl text-center'>About Us </h1>
            </div>          
            <div>   
                <p className='text-3xl text-left'>Our Experience</p>
                <p className='text-1xl text-left'>We help our customers who are looking for 
                services where seeking knowledge is at the core. The knowledge spans across different 
                technologies and tools : 
                    <br/> •	Microsoft Technologies 
                    <br/> •	Java , Struts 
                    <br/> •	Enterprise Resource Planning
                    <br/> •	Customer Relationship Management
                    <br/> •	Open Source Technologies 
                    <br/> •	Embedded Systems
                    <br/> •	Functional and Performance Testing
                    <br/> •	Networks and systems security
                    <br/> •	Database and warehouse technology
                </p>
              </div>
            
              <div  >
                <h1 className='text-3xl text-left'>Our Approach</h1>
                <p className='text-1xl text-left'>
                    Our service includes a comprehensive consult to help identify requirements 
                    and help filling those quickly without compromising on quality.
                </p>
              </div>

              <div >
                <h3 className='text-3xl text-left'>Why Us?</h3>
                <p className='text-1xl text-left'>Technical mentors are key—that’s why when it comes to selection, 
                    we’re choosy. We want to give each of our customer the time and guidance they deserve.
                </p>
              </div>
        </div>
    );
};

export default About;