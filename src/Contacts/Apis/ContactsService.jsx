export const getContacts=async()=>{
    return await fetch('http://localhost:3000/contacts').then(res=>res.json());

}
export const createContacts=async (item)=>{
   return await fetch('http://localhost:3000/contacts',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(item)


    }).then(res=>(res.json()))
}


export const deleteContact=async (id)=>{
    return await fetch(`http://localhost:3000/contacts/${id}`,{
         method:'DELETE',
         headers:{'Content-Type':'application/json'},
      
 
 
     }).then(res=>(res.json()))
 }

 export const updatecontact=async(contact)=>{
    const{name,email,id}=contact
    
    return await fetch(`http://localhost:3000/contacts/${id}`,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
    body:JSON.stringify(contact)
}).then(res=>res.json())
    }



    export const getFavourites=async()=>{
        return await fetch('http://localhost:3000/fav').then(res=>res.json())
    }


    export const setFavourites=async(item)=>{
        return await fetch('http://localhost:3000/fav',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(item)

        }).then(res=>res.json())


    }
  
 