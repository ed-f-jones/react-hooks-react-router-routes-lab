import React from "react";
import { directors } from "../data";
function Director({name, movies}){
return(
  <div>
    <h1>{name}</h1>
    <ul>
    {movies.map(movie => <li key={movie}>{movie}</li>)}
    </ul>
  </div>
)
}

function Directors() {
  return <div>
    <h1>
      Directors Page
    </h1>
    {directors.map(director => <Director key={director.movies} {...director}/>)}
  </div>;
}

export default Directors;
