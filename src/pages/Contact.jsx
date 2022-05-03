import React from "react";
import contactbackground from "../images/theme_abstract.jpg";

const Contact = () => {
  return (

        <div className ="w-full h-max  text-white" style={{ backgroundImage: `url(${contactbackground})` }}>
            <h1 style={{ paddingTop:10,fontFamily: 'Proxima Nova'}} 
                className='text-4xl text-center space-x-0 space-y-16'>
              Contact Us
              </h1>
            <div className='text-justify space-y-16 m-auto w-3/4'> 
                Get started today! Every company needs support and manpower to run its 
                business successfully. However, the specific needs of your company are 
                unique to you. Send us a message, and we can help you find the services 
                that best fit your need.
            </div>
           
            <form className='flex flex-col  space-x-0 space-y-16 w-1/2 m-auto'>
                <div className='flex flex-col text-left'>
                    <label>Name:</label>
                    <input type = 'text'/>
                </div>
                <div className='flex flex-col text-left'>
                    <label>Email:</label>
                    <input type = 'email'/>
                </div>
                <div className='flex flex-col text-left'>
                    <label>Message:</label>
                    <textarea className='p-2 rounded h-32'/>
                </div>
                <div class="height:100%"> 
                  .
                </div>
            </form>
            
          </div> 
  );
}

export default Contact;