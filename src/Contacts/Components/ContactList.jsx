import React from "react";


import {v4 as uuidv4} from 'uuid'
import ContactCard from "./ContactCard";
export default function ContactList({list,getContactId,editDetails,children,createFav,fav}){
   
 
    let t=true
    if(list.length>0)
    {
        t=true;

    }
    else{
        t=false
    }

    const idHandler=(id)=>{
        getContactId(id)
    }
    
    return(<div className='mainContainer'>
        {children}
        <div style={{position:'relative',marginTop:'10em',display:'flex',flexDirection:'column',justifyContent:'left',alignItems:'center',zIndex:2999}}>
       <a href="#heading"> <svg id='toTop' style={{display:'none',position:'fixed',left:'2em',bottom:'2em',fill:'#adb5bd'}}xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" ><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg></a>
          <h2 style={{color:'#00b4d8'}}>Contact List</h2>
        <div className="cardContainer" style={{display:'flex',justifyContent:'flex-start',flexDirection:'column',alignItems:'left'}}>
               
                    {t?(<>
                {list?.map(item=>{
            
                    return(<ContactCard createFavHandler={createFav} list={item} afavIcon={fav}  key={uuidv4.v4()} getContId={idHandler} editDetail={editDetails}/>)})} </>):(<div style={{color:'#e63946'}}>No Results Found</div>)}
                
                
                     
                    {/* :(<> Found Nothing...</>)} */}
               
                    
               
         </div> 
      
        
   </div> </div>)
}