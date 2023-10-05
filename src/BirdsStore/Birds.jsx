import { useSelector,useDispatch } from "react-redux";
import { addBird, incrementBird,decrementBird } from "./Actions";
import { useState } from "react";
const styles={
    wrapper:{
        padding:'20px'
    },
    button:{
        margin:'10px 0',
        cursor:'pointer',
        background:'none',
        border:'none' 

    }
}



export default function Birds(){

    const birds=[...useSelector(state=>state.birds)].sort((a,b)=>{return a.name.toLowerCase()>b.name.toLowerCase()?1:-1})
   
   

    const [birdName,setBird]=useState('')
    
    



    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addBird(birdName))
        setBird('')

    }
    return(
        <div style={styles.wrapper}>
            <h1>
                Birds list
            </h1>
            <form onSubmit={handleSubmit}>
                <label><p>Add Bird</p>
                <input type="text" value={birdName} onChange={(e)=>setBird(e.target.value)}/>
                </label>
                <div>
                    <button style={styles.button} type="sumbit">Add </button>
                </div>
            </form>
            <ul style={{textTransform:'capitalize'}}>
            {birds.map(bird=>(<li key={bird.name}>
                <h3>Name:{bird.name}</h3>
                <div>Views:{bird.views}
                <button onClick={()=>{dispatch(incrementBird(bird.name))}}style={styles.button}> 
                    <span role="img" aria-label="add">➕</span>
                    

                </button>
                <button onClick={()=>dispatch(decrementBird(bird.name))}>minus</button>
                </div>
            </li>))}
           </ul>
        </div>
    )
}