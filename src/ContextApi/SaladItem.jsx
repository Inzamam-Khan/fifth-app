import React,{useContext, useReducer} from 'react';
import UserContext from './User';
import { SaladContext } from './SaladMaker';
const styles = {
    add: {
        background: 'none',
        border: 'none',
        cursor: 'pointer'
    },
    favourite: {
        fontSize: '20px',
        position: 'absolute',
        top: '10px',
        right: '10px',

    },
    image: {
        fontSize: '80',
    },
    wrapper: {
        border: 'lightgrey solid 5px',
        borderRadius:'50px',
        margin: 20,
        padding: 25,
        position: 'relative',
        textTransform:'capitalize',
        textAlign:'center',
        width:'200px',
       

    },
    
}
const reducer=key=>key+1
export default function SaladItem({image,name}){
    const {setSalad}=useContext(SaladContext)
    const {fav}=useContext(UserContext)

    const [id,updateId]=useReducer(reducer,0)
    
 
    const favourite=fav.includes(name)

    function update()
    {
        setSalad({name,id:`${id}`,image})
        updateId()
    }

return(
    <div style={styles.wrapper}>
        <p>saladItem</p>
        <h3>{name}</h3>
        <span style={styles.favourite} aria-aria-label={favourite?'Favourite':'Not Favourite'}>
            {favourite?'😋':''}
        </span>
        <button style={styles.add} onClick={update}>
            <span style={styles.image} role='img' aria-label={name}>
                {image}
            </span>
        </button>
    </div>
)
}