import React, { useContext } from "react";
import { moviesContext } from "../context/MoviesContext";
import Footer from "../components/footer";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";


export default function Home() {
  /*const [movies1, setMovies1] = useState([]);*/
  const { movies } = useContext(moviesContext);
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
      <Navbar />
      <Slider />
      <h1>Peliculas Online</h1>
      {movies != [] ? <Movies movies={movies} /> : "<p>Cargando<p/>"}
      <Footer />
    </div>
  );
}
