import React from 'react';
import { Link } from 'react-router-dom';
import Card from "../Card";
import "./Project.css";

export default function Projects (){
    return (
       <div >
       {/* <div className="topDiv">
            <h2 className="topHeading"> Mechanical designer,,,</h2>
       </div>
       <div className="bottomDiv">
            <p> click over here  and you will find all my Projects</p>
       </div>
     */}
        <Card 
        link="/MechanicalDesign" 
        name="Mechanical Design" 
        image="$/images/img-1.jpg"
        description="hello this my mech project"

        />

        <Card 
        link="/WebPages" 
        name="Web Pages" 
        image={require("./mech.jpg")}
        description="This will take you to all of my web projects"

        /> 

        <Card 
        link="/Development" 
        name="Projects in development" 
        image={require("../../images/img-1.jpg")}
        description="Things that I am currently working on"

        /> 
    </div>
    
    );
        
    }