import React, { useState } from "react";
export default function Login({setToken}) {
    const [userName,setUserName]=useState()
    const[password,setPassword]=useState()

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const token=await loginUser({userName,password})
        setToken(token)
    }
    async function loginUser(credentials){
        return fetch('http://localhost:8080/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(credentials)
        }).then(data=>data.json())
    }

    return (<div className="login-wrapper" style={{display: 'flex',justifyContent:'center'}}>

            <div style={{display: 'flex', border: '2px solid black', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '15vh',width:'80vh' }}>
            <h1>Login Form</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <p>userName</p>
                    <input type="text" onChange={(e)=>{setUserName(e.target.value)}} />
                </label>

                <label>
                    <p>password</p>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                </label>
                <div style={{ marginTop: '8px' }}>
                    <button type="submit">Submit</button>
                </div>
            </form></div>
        
    </div>
    )
}