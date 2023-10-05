import React from 'react'
import{ Link, useSearchParams} from 'react-router-dom'
import user from '../images/user2.avif'
import { primaryColor,secondaryColor,fontPrimary,secondaryFont } from '../Coloross/Colorss'
import { useSelector,useDispatch } from 'react-redux'
import { changeTheme,addTerm} from '../Features/Movies'
import { useState } from 'react'

const styles={
    header:{
        backgroundColor:secondaryColor,
        height:'72px',
        padding:'0px 40px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    },
    input:{
        outline:'none',
        border:'2px solid red',
        margin:'0px 5px 0px 0px'
     

    },
    
    logo:{color:'',
        fontSize:'20px',
        fontWeight:'600'

    },
    userImage:{
        weight:'38px',
        height:'38px',
        borderRadius:'50px'
    },
    dark:{
        backgroundColor:secondaryColor,
        color:'red',
        height:'72px',
        padding:'0px 40px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        fontSize:'20px',
        fontWeight:'600'

    },
    light:{
        backgroundColor:'wheat',
        color:secondaryColor,
        height:'72px',
        padding:'0px 40px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        
        fontSize:'20px',
        fontWeight:'600'
    }


}


export default function Header(){
    const [term,setTerm]=useState('')
    const dispatch=useDispatch()
    const theme=useSelector(state=>state.changeThemeRedcuer)

    const handleSearch=(e)=>{
        e.preventDefault();
        dispatch(addTerm(term))
        setTerm('')
       



    }

    // const handleFocus=(e)=>{
    //     e.target.style.outline='none'
    //     e.target.style.border='5px solid #26bf47'
    //     e.target.style.boxShadow=' 0 0 20px #26bf47'
    //     e.target.style.transition='box-shadow ease-in-ease-out 3s infinite'
    //     // border-color: #26bf47;
    //     // box-shadow: 0 0 10px #26bf47;

    // }

    // const handleBlur=(e)=>{
    //     e.target.style.outline='none'
    //     e.target.style.border='none'
    //     e.target.style.boxShadow=' none'
    //     e.target.style.transition='box-shadow,ouline,border ease-in-ease-out 3s infinite'

    // }
   

    return(<div style={theme==='Dark'?styles.dark:styles.light}>
  <Link to='/'>
    <div style={theme==='Dark'?styles.dark:styles.light}>Movie App</div></Link>

    <form style={{display:'flex',padding:'2px',alignItems:'center',}} onSubmit={handleSearch}>
        <input type='search' value={term}  onChange={(e)=>{setTerm(e.target.value)}}/>

        <div style={{marginLeft:'10px',cursor:'pointer'}}>
        <span className="badge rounded-pill bg-light text-dark">Search</span>
       </div>
       
    </form>
  
    <div className='userImage'>
        <img  style={styles.userImage} src={user} alt="user" />
    </div>

    <div className="fav">
        <span> 
            <Link to='/fav'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{fill:'#f20707'}}><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
        </Link>
        </span>
    </div>
    <div>
        <Link to='/demo' ><button>Demo</button></Link>
    </div>
    <div>
        <span role='img' onClick={()=>dispatch(changeTheme())} style={{background:'none',position:'absolute',top:'20px',right:'15px'}}>
             <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
             </span>
       
    </div>
    
    
    
    
    </div>)
}