import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import React, { useContext, useRef } from 'react';
import { useParams ,Navigate} from 'react-router-dom';
import Movie from '../components/Movie';
import { moviesContext } from '../context/MoviesContext';
import "./../css/detalles.css";

export default function Detalles() {
  const {id} = useParams()
  const {movies,reviews,addReview} = useContext(moviesContext)
  console.log(movies,"hola");
  const comentario = useRef()
  const rating = useRef()
  const movie = movies.filter(movie=>movie.id===Number(id))[0]
  console.log(movie)
   
  if(!movie){
    return <Navigate to="/notfound"/>
  }
  

  const add = ()=>{
    let comment = comentario.current.value
    let stars = rating.current.value
    addReview(movie,stars,comment)
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="container-Detalles">
      <p>Details {movie.title}</p>
      <Movie movie={movie}></Movie>
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

