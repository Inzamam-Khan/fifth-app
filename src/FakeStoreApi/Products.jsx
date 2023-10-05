import React, { useEffect, useState } from "react";
import fetchProducts from "./FetchProducts";
export default function Products(){
    const  [products,setProducts]=useState([])
    useEffect(async ()=>{setProducts(await fetchProducts())},[])
    return(<>
    products called
    { 
    console.log(products)}
    </>)
}