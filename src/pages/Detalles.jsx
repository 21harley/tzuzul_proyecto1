import React, { useContext, useRef , useState } from 'react';
import { useParams ,Navigate} from 'react-router-dom';
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import Movie from '../components/Movie';
import Informacion from '../components/Informacion';
import { moviesContext } from '../context/MoviesContext';
import useFetch from './../hook/useFetch';
import "./../css/detalles.css";

export default function Detalles() {
  const {id} = useParams()
  const {movies,reviews,addReview} = useContext(moviesContext)
  //console.log(movies,"hola");
  const comentario = useRef()
  const rating = useRef()
  const movie = movies.filter(movie=>movie.id===Number(id))[0]
  console.log(movie,"pelicula")
   
  if(!movie){
    return <Navigate to="/notfound"/>
  }
  
  let {data}=useFetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=04c35731a5ee918f014970082a0088b1`);

  const add = ()=>{
    let comment = comentario.current.value
    let stars = rating.current.value
    addReview(movie,stars,comment)
  }
  
  return (
    <div>
      <Navbar/>
      <Informacion data={data} movie={movie}/>
      <div className="container-Detalles">
      {console.log(reviews)}
      <div>
        <input ref={comentario} type="text"></input>
        <select ref={rating}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={add}>Agregar review</button>
      </div>
      {/* && (and): Operador de cortocircuito */}
      {/* || (or)*/}
      {reviews.map(
        review=>review.idMovie===Number(id)
        &&<p key={review.id}>{review.comment}</p>)
      }
      {/* Mostrar comentarios */}
  </div>
      <Footer></Footer>
    </div>
  )


}

