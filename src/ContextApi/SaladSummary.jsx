import React,{useContext} from 'react';
import UserContext from './User';
import { SaladContext } from './SaladMaker';
const styles={
    list:{
        display:"flex",
        flexDirection:'column',
        flexWrap:'wrap',
       textAlign:'center',
        width:'auto',
        listStyle:'none'
    },
    wrapper: {
        border: 'black solid 1px',
        padding: '25px',
        marginTop:'5px',
        width:'100%',
        textTransform:'capitalize'
        
    },

}

export default function SaladSummary() {
    const{salad}=useContext(SaladContext)
    
    return(
        <div style={styles.wrapper}>
            <h2 >Salad Summary</h2>
            <ul style={styles.list}>
                {
                    salad.map(({id,name,image})=>(<li key={id}> {image} {name}</li>))
                }
               

            </ul>
        </div>
    )


}
