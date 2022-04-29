import React from "react";
import servicesbackground from "../images/theme_pyramid.jpg";
import styles from "../layout/App.css";

const Services = () => {
  return (
          <div className ="h-screen w-screen text-white" style={{ backgroundImage: `url(${servicesbackground})` }}>
            <h1 style={{ paddingTop:20,fontFamily: 'Proxima Nova'}} className='text-4xl text-center'>Services</h1>
            <div class='box' style={{ marginLeft:30,marginTop:10,marginRight:40,marginBottom:90}}>
                <div class='one' style={{ paddingLeft:50,paddingTop:150,paddingRight:50,paddingBottom:150, fontFamily: 'Proxima Nova' }}>   
                    <h1 className='text-2xl text-center'>Development #1</h1>
                    <p>The wide range of development services that
                    are offered include C++,VC++, C#, DOTNET, Sharepoint, Java, Angular JS, REACT JS including  databases like Oracle, MYSQL, SQL Server,
                    NO SQL and span to Cloud Architect and MVC .
                    </p>
                </div>
                <div class='two' style={{ paddingLeft:50,paddingTop:150,paddingRight:50,paddingBottom:150, fontFamily: 'Proxima Nova' }}>
                    <h1 className='text-2xl text-center'>Testing #2</h1>
                    <p>
                        These services range from Functional
                        Testing, Software Testing,  Agile Scrum
                        Management to Automation testing using
                        RPA,ROBOT framework, Blue Prism and Katalon.
                    </p>
                </div>
                <div class='three' style={{ paddingLeft:50,paddingTop:150,paddingRight:50,paddingBottom:150, fontFamily: 'Proxima Nova' }}>
                    <h3 className='text-2xl text-center'>Data Science #3</h3>
                    <p>
                        We support services for Machine
                        learning with Pyhton, Data Analysis and
                        Visualisation using Tableau, Seaborn, Power BI
                        to improve business.
                    </p>
                </div>
                
            </div>
          </div>
  );
}

export default Services;