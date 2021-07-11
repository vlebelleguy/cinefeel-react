// PACKAGES IMPORT
import React from "react";

// CSS IMPORT
import "./RandomMovie.css";

// ASSETS IMPORT
import { GiPerspectiveDiceSixFacesSix } from "react-icons/gi";

const RandomMovie = ({ setMovieId, setSearch }) => {
  const random = Math.floor(Math.random() * 1000) + 1;
  const handleClick = () => {
    setMovieId(random);
    setSearch("");
  };

  return (
    <span class="random_button" onClick={handleClick}>
      <GiPerspectiveDiceSixFacesSix size={40} />
    </span>
  );
};

export default RandomMovie;
