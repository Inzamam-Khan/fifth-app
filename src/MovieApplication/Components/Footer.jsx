import React from 'react'
import { primaryColor,secondaryColor,fontPrimary,secondaryFont } from '../Coloross/Colorss'
const styles={
    footer:{
        background:secondaryColor,
        color:fontPrimary,
        height:'72px',display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    }


}
export default function Footer(){
    return(<div className='footer' style={styles.footer}>
        <div>Movie app</div>
        <div>Designed by Inzamam</div>
    </div>)
}