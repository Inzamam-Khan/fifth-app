import React, { useEffect } from 'react'
import{ Link, useSearchParams} from 'react-router-dom'

import { primaryColor,secondaryColor,fontPrimary,secondaryFont } from '../Coloross/Colorss'
import { useSelector,useDispatch } from 'react-redux'
import { addPage,delPage } from '../Features/Movies'

import { useState } from 'react'

const styles={
 
    dark:{
        backgroundColor:secondaryColor,
        color:'red',
        height:'72px',
        padding:'0px 40px',
        
        alignItems:'center',
        
        fontSize:'20px',
        fontWeight:'600',
        border:'2px solid wheat',
        display:'flex',
        justifyContent:'space-between'

    },
    button:{
        background:'none',
       border:'none',
       color:fontPrimary
     
     }
 

}





export default function Pagination(){
    const storePage=useSelector(state=>state.pageReducer)
    
    

const dispatch=useDispatch()

           

    return(<div style={styles.dark}>
         <button onClick={()=>{dispatch(delPage())}} style={styles.button} className='prev'>Prev..</button>
            <div>{storePage}</div>
        <button onClick={()=>{dispatch(addPage())}} style={styles.button}className='next'>Next</button>
       


  
    
    
    
    
    
    </div>)
}