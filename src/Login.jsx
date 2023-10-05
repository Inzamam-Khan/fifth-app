import { useParams } from "react-router-dom"

export const Login=()=>{
    const {id}=useParams()
    return(<p>Login id:{id}</p>)
}
