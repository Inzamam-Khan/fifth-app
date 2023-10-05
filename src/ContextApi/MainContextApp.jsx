import React,{useContext} from "react"
import UserContext from "./User"
import SaladMaker from "./SaladMaker"
import Navigation from "./Navigation"

const user=
{
    name:'khan',
    fav:['avocado','carrot'],
    
}

export default function MainContextApp(){
  return(
   <UserContext.Provider value={user}>

    <Navigation/>
    <SaladMaker/>
    </UserContext.Provider>
    
   
  )
}

