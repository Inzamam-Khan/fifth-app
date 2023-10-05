//produdctListing
import React, { useState } from "react";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'



import Dashboard from "./Dashboard";
import Preferences from "./Preferences";
import Login from "./Login";
import useToken from './useToken'






export default function Authentication(){
  const {token,saveToken,clearToken} =useToken()
  
  if(!token){
    return <Login setToken={saveToken}/>
  }
  else
 

  return (<div>
<div className="wrapper" style={{border:'2px solid black',margin:'5px',padding:'20px',textAlign:'center'}} >
  <h1>Application</h1>
  <button onClick={clearToken}>Logout</button>
  </div>
  <Router>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path='/preferences' element={<Preferences/>}/>
  </Routes>
  </Router>
  
 
</div>    
  )
}




























