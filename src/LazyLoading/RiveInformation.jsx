import React, { useEffect, useState,useReducer } from 'react';
import { getRiverInformation } from './Rivers';
export default function RiverInformation({name}) {
    
    const [riverInformation,setRiverInformation]=useState({})
    useEffect(()=>{
        let mounted=true;
        getRiverInformation(name).then(res=>{
            if(mounted) {setRiverInformation(res)} 
        })
    
return ()=>{mounted=false}},[name])



return(
 <div>
 <h2>River Information</h2> 
 <ul>
 <li>Continent: {riverInformation?.continent}</li>
 <li>Length: {riverInformation?.length}</li>
 <li>Outflow: {riverInformation?.outflow}</li>
 </ul>



 </div>
 )
}
