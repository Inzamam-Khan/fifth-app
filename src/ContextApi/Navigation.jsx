import React,{useContext} from 'react';
import UserContext from './User';
const styles={
    wrapper:{
        borderBottom:'2px solid black',
        padding:'15px',
        textAlign:'right'

    },
}




export default function Navigation() {
    const {name}=useContext(UserContext)
    return(
        <div style={styles.wrapper}>
            Welcome {name}

        </div>
    )
}
