export function getList(){
    return fetch('http://localhost:3000/list').then(data=>data.json())
}


//setList()
export function setItem(item){
    return fetch('http://localhost:3000/list',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({item})
    }).then(data=>console.log(data.json()))
}