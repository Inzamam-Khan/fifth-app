//cart of all favourite items
// favourite=[{'item1'},{'item2'}]
//array of objects 
//when any item is clicked navigate them to MovieDetails component

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export default function Favourite() {
    const favourite = useSelector(state => state.selectedItemReducer)


    return (<div><h2>Favourites</h2>
    <div style={{border:'2px solid wheat',display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'left',alignItems:'flex-start',width:'100%'}}>
           
       

      
            {favourite.map(item=>{
                const{Title,Poster,Year,imdbID}=item
                return( 
                     <Link to={`/movie/${imdbID}`}> 
                 <div className="card-flex" key={imdbID} style={{border:'2px solid red',padding:'20px',margin:'35px',width:'25rem'}}>
                <img src={Poster} className="card-img-top" alt="..." />
                <div className="card-bottom" style={{ padding: '5px',margin:'5px'}}>
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">
                        {Year}
                    </p>
                    </div></div> </Link> 
                    )})}
                    </div>
                    </div>)
        }
    
                
                
        
            
           
        
