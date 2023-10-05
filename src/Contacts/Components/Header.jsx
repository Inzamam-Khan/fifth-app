
import { useState } from "react";
import { Link, useActionData } from "react-router-dom";



export default function Header({searchHandler,searchTerm,sortingHandler,sortBy}){
    
//         window.onscroll=()=>{
//         if(document.documentElement.scrollTop>50){
//             document.getElementById('top').style.display='block'

//         }
//         else{
// document.getElementById('top').style.display='none'
//         }

//     }
    
    

    return(<div style={{position:'absolute',height:'2em',top:'8em',right:'4em',left:'4em',border:'2px solid red',overflow:'hidden',}}>
 
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

           

            <input style={{color:'#e0fbfc',left:'40%',width:'auto',height:'2em',background:'none',outline:'none',border:'none',borderBottom:'.5px solid #caf0f8'}} type="text" value={searchTerm} placeholder="Search" onChange={(e)=>{searchHandler(e.target.value)}}/>
            <svg style={{zIndex:1,marginLeft:'-25px',fill:'#d8e2dc'}}  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg> 
            <Link to='/addContacts'>
            <button type="submit" style={{left:'3em',position:'relative',background:'blue',fontSize:"12px",color:'white',border:'none',width:'80px',height:'20px',borderRadius:'5px',}} >Add Contact</button>  </Link> 
          
            <select  style={{right:'-4em',position:'relative',background:'blue',fontSize:"12px",color:'white',border:'none',width:'80px',height:'20px',borderRadius:'5px',outline:'none'}} value={sortBy} onChange={(e)=>{sortingHandler(e.target.value)}}>
                <option value='default'>Default</option>
                <option value='latest'>Latest</option>
                <option value='oldest'>Oldest</option>
            </select>
            <Link to='/fav'>
            <svg  style={{fill:'#ff0000',color:'white',position:'relative',left:'4em'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" ><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
            </Link>
            </div>
            
          
        
        </div>
     
        )
}


 

 

 