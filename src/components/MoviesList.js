import Movie from "./Movie";
import classes from './MoviesList.module.css'
import React from "react";
const MoviesList=(props)=>{
    return(
        <ul className={classes['movie-list']}>
            {props.movies.map((movie)=>(
            <Movie 
            key={movie.id}
            title={movie.title}
            releaseDate={movie.realease} 
            openingText={movie.openingText}/>  
            ))}
        </ul>
    )
}
export default MoviesList;