import React from "react";
import ReactDOM from "react";
import Card from "./Movie";
import Footer from "./Footer";
import Movie from "./Movie";
import PageHeading from "./PageHeading";
import List from "./List";

export default function App() {
  return (
    <div>
      <PageHeading />
      <List movieName="Inside Out" />
      <List movieName="Sing" />
      <List movieName="Zootopia" />

      <Movie
        movieName="Inside Out"
        image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg"
      />
      <Movie
        movieName="Sing"
        image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zZTlF2eVVUkbdmccd3bNUU9T9sD.jpg"
      />
      <Movie
        movieName="Zootopia"
        image="https://www.themoviedb.org/t/p/w1280/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg"
      />
      <Footer />
    </div>
  );
}
