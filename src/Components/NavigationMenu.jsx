import React from 'react';
import {Link }from 'react-router-dom'
export default function NavigationMenu() {
    const styles={
        forAnchor:{
            
        },
        listItem:{
            marginLeft:'40px'

        }
    }
    return (<nav>

        <ul style={{border:'2px solid black',display:'flex',justifyContent:'space-between',width:'auto'}}>
            <li >
                <Link style={styles.forAnchor} to='/manatee'>Manatee</Link>
                
            </li>
            <li>
            <Link to='/narwhal'>Narwhal</Link>
                
            </li>
            <li>
            <Link to='/whale'>Whale</Link>
            </li>
            <li>
                <Link to="/whale/beluga">Belunga_whale</Link>
            </li>
            <li>
                <Link to="/whale/blue">Blue_whale</Link>
            </li>
        </ul>

    </nav>
    )
}