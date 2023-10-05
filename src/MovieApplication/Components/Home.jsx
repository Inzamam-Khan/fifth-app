import React, { useEffect } from 'react'
import MovieListing from './MovieListing'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies,addSeries } from '../Features/Movies';
export default function Home(){
    const term=useSelector(state=>state.addTermReducer)
    const storePage=useSelector(state=>state.pageReducer)
    

    
    
   
    const dispatch=useDispatch();

    
    const apiKey="6e87bbd9"
    useEffect(()=>{
        const fetchMovies=async()=>{
            const response=await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${term}&type=movie&page=${storePage}`).then(res=>res.json()).catch(err=>console.log('no internet'))
            dispatch(addMovies(response))
            
        }
        fetchMovies();
        return()=>{console.log('home unmounted')}
      
    },[term,storePage])

    useEffect(()=>{
        const fetchSeries=async()=>{
            const response=await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=friends&type=series&page=${storePage}`).then(res=>res.json()).catch(err=>console.log(err))
            dispatch(addSeries(response))
        }
        fetchSeries();
      
    },[term,storePage])

    return(
        <div>
    <div className='banner-image' >
      
        
        <MovieListing/>
    </div>

    </div>)
}