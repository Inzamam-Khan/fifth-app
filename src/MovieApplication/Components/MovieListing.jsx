import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
export default function MovieListing() {
    const movies = useSelector(state => state.addMovieReducer.movies)
    const series = useSelector(state => state.addSeriesReducer.series)





    return (<div className="wrapper">



        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div style={{ display: 'flex', margin: '10px', border: '2px solid red', padding: '20px', boxSizing: 'border-box' }}> 

                    <div className='movies-container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', alignItems: "flex-start" }}>

                        {movies?.map((movie, index) => { return <MovieCard key={index} data={movie} index={index} /> })}
                    </div>
                </div>
            </div>
        </div>


        <div className="serie-list">
            <h2>Series</h2>
            <div style={{ display: 'flex', margin: '10px', border: '2px solid red', padding: '20px', boxSizing: 'border-box' }}>

                <div className='serie-container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', alignItems: "flex-start" }}>

                    {series?.map((serie, index) => { return <MovieCard key={index} data={serie} index={index} /> })}
                </div>
            </div>
        </div>





    </div>)
}