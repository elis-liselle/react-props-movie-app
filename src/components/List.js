import React from "react";
import ReactDOM from "react-dom";

function List(props) {
  return (
      <ul><li>{props.movieName}</li></ul>
  );
}

export default List;