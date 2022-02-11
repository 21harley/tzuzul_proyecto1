import React, {useState, useEffect} from "react";
import Movies from "../components/Movies";

const FEATURE_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function () {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    getMovies(FEATURE_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setMovies(data.results);
      });
  };
  
  return (
    <div>
      {(movies!=[])?<Movies movies={movies}/>:"<p>Cargando<p/>"}
    </div>
  );
}
