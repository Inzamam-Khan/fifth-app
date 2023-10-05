import React from 'react';
import Beluga from './Beluga';
import Blue from './Blue';
import {Routes,Route} from 'react-router-dom'
import {useRouteMatch} from 'react-router-dom'


export default function Whale() {
    const {path}=useRouteMatch();
    

    






    // const{ search}=useLocation()
    // const match= search.match(/type=(.*)/);
    // const type=match?.[1]
    // console.log(type)
    

return (
<div><h2>Whale</h2>;



</div>
)
}