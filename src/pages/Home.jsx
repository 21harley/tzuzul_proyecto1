import React, { useContext } from "react";
import { moviesContext } from "../context/MoviesContext";
import Footer from "../components/footer";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { themeContext } from "../context/ThemeContext";
import Filtro from "../components/Filtro";
import CargarMasPeliculas from "../components/CargarMasPeliculas";

export default function Home() {
  const { movies } = useContext(moviesContext);
  const { setFiltered} = useContext(moviesContext);
  
 
 
  const { theme, setTheme } = useContext(themeContext);

  
 

  return (
    <div className={theme ? "main__dark" : "main__light"}>
      <Navbar />
      <Slider />
      
      <br />
      <Filtro movies={movies} setFiltered={setFiltered} />
      <li>
        <button
          className="btnanimated2"
          onClick={() => {
            setTheme(!theme);
          }}
        >
          Claro/Oscuro
        </button>
      </li>
      <h1>Peliculas Online</h1>
      <CargarMasPeliculas/>
      {movies != [] ? <Movies movies={movies} /> : "<p>Cargando<p/>"}
      <Footer />
    </div>
  );
}
