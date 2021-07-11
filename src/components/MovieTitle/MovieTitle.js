// PACKAGES IMPORT
import React from "react";

// CSS IMPORT
import "./MovieTitle.css";

const MovieTitle = ({ movie, setMovieId, setSearch }) => {
  const handleClick = () => {
    setMovieId(movie.id);
    setSearch("");
  };

  return (
    <p className="movie_title" onClick={handleClick}>
      {movie.title}
    </p>
  );
};

export default MovieTitle;
