import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function EditContact({listToEdit,updateContacts}){
    const {name,id,email}=listToEdit
    const navigate=useNavigate()
    const [newName,setName]=useState(name)
    const [newEmail,setEmail]=useState(email);

    const editDetails=(e)=>{
        e.preventDefault()
        if(name===''||email===''){
            alert('all fields required')
        }
        else{
            const res=(email.split('@'))
    
            if(res[1]==='gmail.com'){
                
                updateContacts({name:newName,email:newEmail,id:id})
               
            setName('')
            setEmail('')
            navigate('/')

            }
            else{
                updateContacts({name:newName,email:newEmail+'@gmail.com'})
            setName('')
            setEmail('')
            navigate('/')
            }
            
    

        }
       

    }
    return(<div className="ui main" style={{marginTop:'50px',color:'#e0fbfc'}}>
<h2 style={{color:'#00b4d8'}}>Edit Contact </h2>
<form className="ui input"  onSubmit={editDetails}>
<div style={{border:'2px solid black'}}>
    
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',margin:'5px',padding:'10px',alignItems:'left'}}>

    <div className="field" >
        <label>
            Name:<div>
        <input style={{outline:'none',width:'50%',height:'35px',margin:'5px'}} type="text" name="name" placeholder="Name" value={newName} onChange={(e)=>setName(e.target.value)}/></div>
        </label>
    </div>

    <div className="field">
        <label>
            Email:
            <div><input style={{width:'50%',height:'35px',margin:'5px',outline:'none'}} type="text" name="email" placeholder="Email" value={newEmail} onChange={(e)=>setEmail(e.target.value)}/></div>
        </label>
    </div>
   
    <button type="submit"  style={{background:'blue',padding:'2px',color:'white',boxSizing:'border-box',border:'none',width:'50px',margin:'5px',marginLeft:'3em',height:'25px',borderRadius:'3px'}} className="ui button blue">Update</button>


    </div>
    <div onClick={()=>{navigate('/')}} style={{position:'absolute',top:'16.5em',left:'2em'}}>
                       <svg fill='#e0fbfc' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
                       </div>
    

</div>

</form>
       
    </div>)
}