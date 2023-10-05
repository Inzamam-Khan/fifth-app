//movies main App.jsx


import React from 'react';
import {BrowserRouter,Routes,Route,} from  'react-router-dom'
import Home from '../Components/Home';
import MovieDetails from '../Components/MovieDetails';
import PageNotFound from '../Components/PageNotFound';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { primaryColor,secondaryColor,fontPrimary,secondaryFont } from '../Coloross/Colorss';
import { useSelector } from 'react-redux';
import Favourite from '../Components/Favourite';
import Pagination from '../Components/Pagination';

const styles={
    app:{
        margin:'0px',
        paddin:'0px',
        boxSizing:'borderBox',
        background:primaryColor,
        
    },
    a:{
        textDecoration:'none'

    },
    container:{
        margin:'0px 40px',
        
    },
    dark:{  margin:'0px',
    paddin:'0px',
    boxSizing:'borderBox',
    background:primaryColor,
    color:'wheat'
    },
    light:{
        margin:'0px',
        paddin:'0px',
        boxSizing:'borderBox',
        background:'white',
        color:primaryColor
        
    }
}

export default function App(){
    const theme=useSelector(state=>state.changeThemeRedcuer)
  
    return(<div className='app' style={theme==='Dark'?styles.dark:styles.light} >
        <BrowserRouter>
        <Header/>
        <Pagination/>
        <div className="container" style={styles.container}>
        <Routes>
        <Route  element={<PageNotFound/>}/>
            
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/fav' element={<Favourite/>}/>
            <Route exact path='/movie/:imdbID' element={<MovieDetails/>}/>
                  

        </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
        
        
    </div>)
}