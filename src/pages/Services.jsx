import React from "react";
import servicesbackground from "../images/theme_pyramid.jpg";

const Services = () => {
  return (
    <div class="grid grid-cols-3 gap-x-6 gap-y-28 text-white" 
    style={{ backgroundImage: `url(${servicesbackground})` ,fontFamily: 'Cambria'}}>
        <div style={{ paddingLeft:0,paddingTop:10,paddingRight:0}} class= "col-start-1 col-span-3">
            <h1 className='text-4xl text-center'>Services </h1>
        </div>
        <div/> 
        <div />
        <div />
        <div style={{ paddingLeft:15,paddingTop:20,paddingRight:5,paddingBottom:25,
            marginLeft:10,  borderWidth: 1 }}>
            <h1 className='text-2xl text-center'>Development #1</h1>
            <p>The wide range of development services that
            are offered include C++,VC++, C#, DOTNET, Sharepoint, Java, Angular JS, REACT JS including  databases like Oracle, MYSQL, SQL Server,
            NO SQL and span to Cloud Architect and MVC .
            </p>
        </div>
        <div style={{ paddingLeft:15,paddingTop:20,paddingRight:5,paddingBottom:25,  borderWidth: 1  }}>
            <h1 className='text-2xl text-center'>Testing #2</h1>
            <p>These services range from Functional
                Testing, Software Testing,  Agile Scrum
                Management to Automation testing using
                RPA,ROBOT framework, Blue Prism and Katalon.
            </p>
        </div>
        <div style={{ paddingLeft:15,paddingTop:20,paddingRight:5,paddingBottom:25,
            marginRight:10,  borderWidth: 1  }}>
            <h1 className='text-2xl text-center'>Data Science #3</h1>
            <p>We support services for Machine
                learning with Pyhton, Data Analysis and
                Visualisation using Tableau, Seaborn, Power BI
                to improve business.
            </p>
        </div>
        <div />
        <div />
        <div />
    </div>
  );
}

export default Services;