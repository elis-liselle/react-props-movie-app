import React from "react";
import Timer from "./Timer";
import Footer from "./Footer";
import Movie from "./Movie";
import PageHeading from "./PageHeading";
import List from "./List";
import movies from "../movies";

function createMovie(movie) {
  return (
    <Movie 
      key={movie.id}
      movieName={movie.movieName}
      image={movie.image}
    />
  )
}

function createList(movie) {
  return <List
    key={movie.id}
    movieName={movie.movieName} 
  />;
}

export default function App() {
  return (
    <div>
      <Timer/>
      <PageHeading />
      {movies.map(createList)}
      {movies.map(createMovie)}
      <Footer />
    </div>
  );
}