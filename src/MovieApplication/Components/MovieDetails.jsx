import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { itemDetails,removeItemDetails} from '../Features/Movies'
import { fontPrimary,secondaryFont,primaryColor,secondaryColor, } from '../Coloross/Colorss'
import { useState } from 'react'

const styles={
  movie_section:{display:'flex',justifyContent:'space-evenly',padding:'40px 0px',color:fontPrimary,fontWeight:'400'
},
movie_rating:{
  paddingLeft:'3px',marginTop:"20px",color:secondaryFont,display:'flex',
},
span:{
  marginRight:'20px',
 
},
movie_title:{
  fontSize:'40px',color:fontPrimary
},
movie_plot:{
  marginTop:'20px',lineHeight:'1.8rem',
},
movie_info_div_span_firstChild:{
  padding:'10px 0px',
  color:fontPrimary,
  fontWeight:'700',
  width:'100px',
  display:"inline-block",

},
movie_info_div_span:{
  color:secondaryFont,
},
section_right:{
  marginLeft:'30px'
},
button:{
   background:'none',
  border:'none',
  color:secondaryFont

}



}
export default function MovieDetails(){
  const [plot,setPlot]=useState('short')
  const items=useSelector(state=>state.itemDetailsReducer)
  const {Title,Released,Year,imdbRating,imdbVotes,Runtime,Plot,Director,Actors,Language,Awards,Poster}=items
  const term=useSelector(state=>state.addTermReducer)
  console.log(items)
    const {imdbID}=useParams()
    const dispatch=useDispatch()



    useEffect(()=>{
      const apiKey="6e87bbd9"
      
      const fetchMoviesDetails=async()=>{
        const response=await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=${plot}`).then(res=>res.json())
        dispatch(itemDetails(response))
        
    }
    fetchMoviesDetails();
    
      return ()=>{ dispatch(removeItemDetails())}
    
    },[imdbID,plot])
   
         return(
        
         
          
        <div className="movie-section" style={styles.movie_section}>
            {Object.keys(items).length===0?(<div style={{color:'red'}}>Loading...</div>):(<>
  <div className="section-left">
    <div className="movie-title" style={styles.movie_title}>{Title}</div>
    <div className="movie-rating" style={styles.movie_rating}>
    <span style={styles.span}>
        IMDB Rating{imdbRating}
      </span>
      <span style={styles.span}>
        IMDB Votes:{imdbVotes}
      </span>
      <span style={styles.span}>
        Runtime{Runtime}
      </span>
      <span  style={styles.span}>
        Year{Year}
      </span>
    </div>

    <div className="movie-plot" style={styles.movie_plot}>{Plot}
    <button style={styles.button} onClick={()=>{
      if(plot==='full')
      {setPlot('short')}
          else{
            setPlot('full')
          }
        } }
          >
      {plot==='full'?'less...':'more...'}</button></div>

    <div className="movie-info">

      <div>
        <span style={styles.movie_info_div_span_firstChild}>Director</span>
        <span style={styles.movie_info_div_span}>{Director}</span>
      </div>

      <div>
      <span style={styles.movie_info_div_span_firstChild}>Stars</span>
      <span style={styles.movie_info_div_span}>{Actors}</span>
      </div>

      {/* <div>
      <span style={styles.movie_info_div_span_firstChild}>Actors</span>
      <span style={styles.movie_info_div_span}>{}</span>
        </div> */}

      <div>
      <span style={styles.movie_info_div_span_firstChild}>Generes</span>
      <span style={styles.movie_info_div_span}>{}</span>
        </div>
        
      <div>
      <span style={styles.movie_info_div_span_firstChild}>Languages</span>
      <span style={styles.movie_info_div_span}>{Language}</span>
      </div>

      <div>
      <span style={styles.movie_info_div_span_firstChild}>Awards</span>
      <span style={styles.movie_info_div_span}>{Awards}</span>
        </div>
    </div>
  </div>
  <div className="section-right" style={styles.section_right}>
    <img src={Poster} alt="title" />
  </div></>)}
</div>

)}


