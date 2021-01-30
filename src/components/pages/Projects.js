import React from 'react';
import { Link } from 'react-router-dom';

import Card from "../Card";

export default function Projects (){
    return (
       <div className='projects'>
    
        <Card 
        link="/MechanicalDesign" 
        name="Mechanical Design" 
        // image="../images/img-1.jpg"
        decription="hello this my mech project"

        /> 
    </div>
    
    );
        
    }