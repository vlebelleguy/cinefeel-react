// PACKAGES IMPORT
import axios from "axios";
import React, { useState, useEffect } from "react";

// CSS IMPORT
import "./MovieCard.css";

// COMPONENTS IMPORT
import MovieDetails from "../MovieDetails/MovieDetails";

const MovieCard = ({ movieId }) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=6038af3ad7c9f321fdadd7de299f81e1`
        );
        setMovieData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <MovieDetails movieData={movieData} />
      <div className="bg">
        <div
          className="background_image"
          style={{
            backgroundImage: ` linear-gradient(0.25turn, rgba(0, 0, 0, 1), transparent, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1)), url("https://image.tmdb.org/t/p/original/${movieData.backdrop_path}")`,
          }}
        />
      </div>
    </div>
  );
};

export default MovieCard;
