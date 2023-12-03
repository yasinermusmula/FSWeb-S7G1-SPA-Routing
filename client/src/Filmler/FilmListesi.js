import React from "react";
import FilmCard from "./FilmCard";
import { Link } from "react-router-dom";

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <Link to={`/filmler/${movie.id}`}>
          <FilmCard key={movie.id} film={movie} />
        </Link>
      ))}
    </div>
  );
}
