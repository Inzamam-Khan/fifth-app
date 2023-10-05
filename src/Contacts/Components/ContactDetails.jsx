import { useParams,Link ,useNavigate} from "react-router-dom"
import logo from '../images/user.jpg'
export default function ContactDetails({details}){
    
    const {id}=useParams()
    const navigate=useNavigate()
    
    
    
   return(<>{
    details.map((i,index)=>{ 
        if(i.id===id){
            const {name,email}=i
            return(
                 <div key={index} style={{position:'fixed',
                top:'128px',bottom:'25%',left:'40%',right:'40%',boxSizing:'border-box',display:'flex',flexDirection:'column',alignItems:"center",color:'#e9d8a6'}}>
                      
                       <div onClick={()=>{navigate('/')}} style={{position:'absolute',top:'3em',left:'0em'}}>
                       <svg fill='#e0fbfc' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
                       </div>
                       
                           
                           <img src={logo} style={{borderRadius:'100%', height:'auto',width:'40px',border:'none',margin:'2em',marginBottom:'4em',border:'2px solid  #caf0f8'}}/>
                          
                <div style={{position:'absolute',top:'6em',left:'1em',}} className="name">
                   Name</div>
                   <span style={ {position:'absolute',top:'8.1em',left:'1em ',borderBottom:'1px solid  #caf0f8',width:'80%',}}>{name}</span>
               
               
               
                   <div style={{ position:'absolute',top:'10em',left:'1em ',}} className="email">Email</div>
                   <span style={ {position:'absolute',top:'12.1em',left:'1em ',borderBottom:'1px solid  #caf0f8',width:'80%',}}>{email}</span>
               
                   <div style={{position:'absolute',top:'14em',left:'1em',}} className="email">Id</div>
                   <span style={ {position:'absolute',top:'16.1em',left:'1em ',borderBottom:'1px solid  #caf0f8',width:'80%',}}>{id}</span>
                             
                               
                          
               
                       
                       
                       
               
                       
                   </div>
           )
       
      }})

   }
   </>)



}

//  onClick={()=>{deleteHandler(id)}}----onClick={()=>{update(list)}} 