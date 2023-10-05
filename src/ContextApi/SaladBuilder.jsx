import { useContext } from 'react';
import React from 'react';
import SaladItem from './SaladItem';
const ingredients=[
    {
        image: '🍎',
        name: 'apple',
    },
    {
        image: '🥑',
        name: 'avocado',
    },
    {
        image: '🥦',
        name: 'broccoli',
    },
    {
        image: '🥕',
        name: 'carrot',
    },
    {
        image: '🍷',
        name: 'red wine dressing',
    },
    {
        image: '🍚',
        name: 'seasoned rice',
    },
];


const styles = {
    wrapper: {
        display: 'flex',
        flexWrap:'wrap',
        padding: [10, 50],
        justifyContent: 'center',
        width:'800px',
        border:'2px solid grey',
        

    }
}






export default function SaladBuilder() {
    
    return(
        <div style={styles.wrapper}>
            
            {
                ingredients.map((item)=>{return(
                    <SaladItem key={item.name} image={item.image} name={item.name}/>
                )})
            }

        </div>
    )
}