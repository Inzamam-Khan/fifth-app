import React from "react";
export default function AddContact(){
    
    
    return(<div className="ui main" style={{marginTop:'50px'}}>
<h2  style={{color:'#00b4d8'}}>Add Contact </h2>
<form className="ui input"  onSubmit={handleSubmit}>
<div style={{border:'2px solid black',position:'relative'}}>
    
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',margin:'5px',padding:'10px',alignItems:'left',color:'#e0fbfc'}}>

    <div className="field" >
        <label>
            Name:<div>
        <input style={{outline:'none',width:'50%',height:'35px',margin:'5px',color:'#e0fbfc'}} type="text" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/></div>
        </label>
    </div>

    <div className="field">
        <label>
            Email:
            <div><input style={{width:'50%',height:'35px',margin:'5px',outline:'none',color:'#e0fbfc'}} type="text" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
        </label>
    </div>

   
   
    <button type="submit"  style={{background:'blue',color:'white',border:'none',width:'50px',margin:'5px',height:'25px',borderRadius:'3px',marginLeft:'3em'}} className="ui button blue">Add</button>


    </div>
    <div style={{position:'absolute',bottom:'1.3em',left:'1.5em'}}>
                       <svg fill='#e0fbfc' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
                       </div>
</div>

</form>
       
    </div>)
}