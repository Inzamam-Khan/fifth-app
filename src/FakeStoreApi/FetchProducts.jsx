const fetchProducts=async()=>{
    const res=await fetch('http://localhost:8080/login').then(res=>res.json())
    return res
    
}
export default fetchProducts;