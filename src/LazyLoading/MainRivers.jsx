import React,{useState,useReducer} from "react";

import RiverInformation from "./RiveInformation";
const styles={
  wrapper:{
    padding:'20px',
    border:'2px solid black',
    margin:'5px',
  }
}

export default function MainRivers(){
  const [show,toggle]=useReducer(state=>!state,true)
  const [river,setRiver]=useState('nile')
  return(
  <div style={styles.wrapper}>
 <h1>World's Longest Rivers</h1>
 <div><button onClick={toggle}>Toggle Button</button></div>
 <button onClick={() => setRiver('nile')}>Nile</button>
 <button onClick={() => setRiver('amazon')}>Amazon</button>
 <button onClick={() => setRiver('yangtze')}>Yangtze</button>
 <button onClick={() => setRiver('mississippi')}>Mississipi</button>
 {show&& <RiverInformation name={river} />}
 
 </div>
);
}

  
  
