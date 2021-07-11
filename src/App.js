// PACKAGES IMPORT
import React, { useState } from "react";

// CSS IMPORT
import "./App.css";
import "./assets/fonts/stylesheet.css";

// COMPONENTS IMPORT
import MovieCard from "./components/MovieCard/MovieCard";
import SearchEngine from "./components/SearchEngine/SearchEngine";

function App() {
  const firstMovie = 475557;
  const [movieId, setMovieId] = useState(firstMovie);

  return (
    <div className="App">
      <SearchEngine setMovieId={setMovieId} />
      <MovieCard movieId={movieId} />
    </div>
  );
}

export default App;
