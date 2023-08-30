import axios from "axios";
import "./browses.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logos from "./img/logos.svg";
import CategoryPage from "./CategoryPage"
function BrowseEntertainmentPage() {
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const GeneresName = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=df96abd99373f256b81d98c52587ae3c&language=en-US"
      );
      setGenreList(response.data.genres);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const MoviesDetail = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=df96abd99373f256b81d98c52587ae3c"
      );
      const data = await response.json();
      setMovieList(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    MoviesDetail();
    GeneresName();
  }, []);

  const GeneresNames = [
    localStorage.getItem("Action"),
    localStorage.getItem("Drama"),
    localStorage.getItem("Romance"),
    localStorage.getItem("Thriller"),
    // localStorage.getItem("Western"),
    localStorage.getItem("Horror"),
    localStorage.getItem("fantasy"),
    //localStorage.getItem("Music"),
    localStorage.getItem("Fiction"),
  ].filter(Boolean);

  const genresIdNum = {Drama: 18,Action: 28,Fiction: 878,Music: 10402,Horror: 27,Fantasy: 14,Western: 37,Thriller: 53,Romance: 10749,};

  return (
    <div className="containAll">
      <div className="header">
        <div className="headName">
          <h1 className="headNames">Super app</h1>
        </div>
        <div className="imgs">
          <img src={logos} alt="logos" className="imgs1" />
        </div>
      </div>
      <div>
        <h1 className="nameAcc">Entertainment according to your choice</h1>
        {/* function for selecting particular movies genres id to show particular movies */}
        {GeneresNames.map((selectedGenre) => {
          const genresIds = genresIdNum[selectedGenre];
          const genreMovies = movieList.filter((movie) =>
            movie.genre_ids.includes(genresIds)
          );

              return (
          <div className="posterCard">
              <h2 className="genresNames">{selectedGenre}</h2>
              <div className="movie-posters">
                {genreMovies.slice(0, 3).map((movie) => (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={genresIdNum}
                    className="moviesPoster"
                  />
                ))}
              </div>
            </div>
          );
        })}
        <div className="lastDiv">
<Link to="/CategoryPage">

        <button className="browseButton">Browse</button>
</Link>
        </div>
      </div>
    </div>
  );
}

export default BrowseEntertainmentPage;
