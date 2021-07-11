// PACKAGES IMPORT
import axios from "axios";
import React, { useState, useEffect } from "react";

// CSS IMPORT
import "./SearchEngine.css";

// COMPONENTS IMPORT
import MovieTitle from "../MovieTitle/MovieTitle";
import RandomMovie from "../RandomMovie/RandomMovie";

// ASSETS IMPORT
import logo from "../../assets/images/cinefeel-logo.png";

const SearchEngine = ({ setMovieId }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search !== "") {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie/?query=${search}&api_key=6038af3ad7c9f321fdadd7de299f81e1`
          );
          setMovies(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <RandomMovie setSearch={setSearch} setMovieId={setMovieId} />
      <div className="header">
        <img className="logo_header" src={logo} alt="cinefeel_logo" />
        <div className="search_engine">
          <input
            placeholder="Search a movie"
            className="search_input"
            onChange={handleSearch}
            value={search}
          />
          {movies.results && search !== "" && (
            <div className="movie_list">
              {movies.results.slice(0, 10).map((e, i) => {
                return (
                  <MovieTitle
                    setMovieId={setMovieId}
                    setSearch={setSearch}
                    movie={e}
                    key={i}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
