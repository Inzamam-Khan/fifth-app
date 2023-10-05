import React from "react";
import { Link } from "react-router-dom";
export default function ContactCard({list,getContId,editDetail,createFavHandler,afavIcon}){
    const deleteHandler=(id)=>{
        getContId(id)

    }
    const update=(list)=>{
        editDetail(list)

    }
    const afavHandler=(item)=>{
        createFavHandler(item)
    }

    
     const {name,email,id}=list
    const favIcon=afavIcon.includes(list)
     console.log(favIcon)
    
    return(
         <div className="card"  style={{margin:'5px',padding:"5px", display:'flex',justifyContent:'space-between'}}>

               <section className="left"style={{borderTop:'0.5px solid #caf0f8',borderBottom:'0.5px solid #caf0f8 ',padding:'3px',width:'100%'}}>
                <img src='src\Contacts\images\user.jpg'style={{borderRadius:'100%', height:'auto',width:'40px',border:'none'}}/>
                <Link to={`/contactDetail/${id}`} style={{color:'#e9d8a6'}} >
               <div className="name" style={{}}>{name}</div>
               <div className="email">{email}</div>
               <div>Id:{id}</div>
               </Link>
               </section>

               <section className="right" style={{boxSizing:'border-box',marginTop:'50px',display:'flex'}}>
            {/*add to fav-icon*/}
               <svg onClick={()=>{afavHandler(list)}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{marginRight:'.3em',fill:'#fa0000'}}><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>

               <Link to='/edit' >
               <svg style={{marginRight:'.3em',fill:'#adb5bd'}} xmlns="http://www.w3.org/2000/svg" height="1em" onClick={()=>{update(list)}} viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>

               </Link>
               <svg style={{fill:'#d8e2dc'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" onClick={()=>{deleteHandler(id)}}><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
               </section>
            </div>
    )
}
