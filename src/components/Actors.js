import React from "react";
import { actors } from "../data";
function Actor({name, movies}){
return(
  <div>
    <ul>
      <h1>{name}</h1>
      {movies.map(movie => <li key={movie}>{movie}</li>)}
    </ul>
  </div>
)
}

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map(actor => <Actor key={actor.movies} {...actor}/>)}
  </div>;
}

export default Actors;
