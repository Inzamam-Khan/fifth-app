import React,{createContext,useReducer} from 'react';
import SaladBuilder from './SaladBuilder';
import SaladSummary from './SaladSummary';
const styles={
    wrapper:{
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'2px solid red'
    },


}




export const SaladContext=createContext()

function reducer(state,item){
    return[...state,item]
}

export default function SaladMaker() {
    const [salad,setSalad]=useReducer(reducer,[])
    
    return(
        <SaladContext.Provider value={{salad,setSalad}}>
        <div style={styles.wrapper}>
        <h1>
            <span role='img' aria-label='salad'>🥗 </span>
            Build your custom salad!(saladMaker)
            <span role='img' aria-label='salad'>🥗 </span>
        </h1>
        <SaladBuilder/>
        <SaladSummary/>
        </div>
        </SaladContext.Provider>
    )
}
