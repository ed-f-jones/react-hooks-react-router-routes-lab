import React from "react";
import { movies } from "../data";
function Movie({title, time, genres}){
  return(
    <div>
      <h2>{title}</h2>
      <h3>{time}</h3>
      <ul>
        {genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  )
}
function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map(movie => <Movie key={movie.title} {...movie}/>)}

  </div>;
}

export default Movies;
