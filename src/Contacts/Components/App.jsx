import React from "react";
import {v4 as uuidv4} from 'uuid'
import Header from "./Header";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import AddContact from "./AddContacts";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { getContacts,createContacts,deleteContact,updatecontact, getFavourites,setFavourites} from "../Apis/ContactsService";
import EditContact from "./EditComponent";
import Favourite from "./Favourites";

  

export default function App(){
    

    //latest
    const [contacts,setContacts]=useState([])
    //fav array
    const [fav,setFav]=useState([])
    //alphabatically
    const defaultContacts=[...contacts].sort((a,b)=>{return a.name.toLowerCase()>b.name.toLowerCase()?1:-1})   
    //oldest
    const oldestContacts=contacts.reverse()

    const [list,setList]=useState({})
    const[searchTerm,setSearchTerm]=useState('')
    const[searchResults,setSearchResults]=useState([])
    const[sortBy,setSortBy]=useState('default')
   
     
    
    
 const sortingHandler=(i)=>{
        setSortBy(i)
    }   

const removeContact=(id)=>{
    deleteContact(id).then(res=>console.log(res.json()))

    const newContactList=contacts.filter(b=> {return b.id!==id})
   
    setContacts(newContactList)

}

    const addContacts=(contact)=>{
        createContacts({...contact,id:uuidv4.v4()}).then(data=>{
         setContacts([...contacts,data])
        
        })
        

    }      


    const updateContacts=(contact)=>{
        
        updatecontact(contact).then(data=>{
            const {id}=data;
        setContacts(contacts.map(contact=>{return contact.id===id?{...data}:contact}))
    })}

const editDetails=(list)=>{
    setList(list)
}

const searchHandler=(term)=>{
    setSearchTerm(term)
    if(term!==''){
        const newContactList=contacts.filter(contact=>{
       return Object.values(contact).join(' ').toLowerCase().includes(term.toLowerCase())
        })
        setSearchResults(newContactList)

    }
    else{
        setSearchResults(contacts)
    } 
 

}

const createFav=(favs)=>
{
    setFavourites(favs).then(res=>{setFav([...fav,res])})
    

}



        useEffect(()=>{
            getContacts().then(res=>{setContacts(res)})


            getFavourites().then(res=>setFav(res))


        },[])
 
    return(<div className="ui container"  >
       
       
        <BrowserRouter>
        
      
        <div style={{position:'absolute',top:'2em',left:'40%',width:'auto',}}>
            <h2  id='heading' style={{color:'#e0fbfc'}}>Contact Manager</h2>       
            </div>
        <Routes>
            <Route path='/' element={ <ContactList createFav={createFav} fav={fav} children={ <Header searchHandler={searchHandler} sortBy={sortBy}  sortingHandler={sortingHandler} searchTerm={searchTerm}/>} list={searchTerm.length>0?(searchResults):(sortBy!=='default'?(sortBy==='latest'?(contacts):(oldestContacts)):(defaultContacts)) } getContactId={removeContact} editDetails={editDetails}/>}/>
            <Route path="/fav" element={<Favourite fav={fav}/>}/>
            <Route path='/contactDetail/:id' element={<ContactDetails details={contacts} />}/>
            <Route path="edit" element={<EditContact listToEdit={list} updateContacts={updateContacts}/>}/>
            <Route path='/addContacts' element={  <AddContact addContacts={addContacts}/>}/>
            <Route >404 Not found</Route>
        </Routes>
        </BrowserRouter>

      


    </div>)
}