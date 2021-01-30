import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Projects (){
    return (
       <div className='projects'>
    
        
          <Link to ="/MechanicalDesign" > <h1>Mechancil Projects</h1></Link>
        
        
           <Link to ="/WebPages"> <h1>Web Projects</h1> </Link> 
        
    </div>
    
    );
        
    }