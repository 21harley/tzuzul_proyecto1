import React, { useState, useEffect ,useContext} from "react";
import { moviesContext } from '../context/MoviesContext';
import Footer from "../components/footer";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const FEATURE_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";



export default function Home() {
  /*const [movies1, setMovies1] = useState([]);*/
  const {movies} = useContext(moviesContext)
  /*
  console.log(movies);
  useEffect(() => {
    getMovies(FEATURE_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies1(data.results);
      });
  };
*/
  return (
    <div>
      <Navbar/>
      <Slider />
      <h1>Peliculas Online</h1>
      {movies != [] ? <Movies movies={movies} /> : "<p>Cargando<p/>"}
      <Footer/>
    </div>
  );
}
