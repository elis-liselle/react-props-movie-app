import React from "react";
import ReactDOM from "react-dom";

function Movie(props) {
  return (
    <div>
      <h3>{props.movieName}</h3>
      <img src={props.image} alt={props.movieName} />
    </div>
  );
}

export default Movie;
