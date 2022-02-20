import React, { useContext, useEffect, useRef , useState } from 'react';
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
  let [rating,setRating]=useState(0);
  const movie = movies.filter(movie=>movie.id===Number(id))[0]
  console.log(movie,"pelicula")
   
  if(!movie){
    return <Navigate to="/notfound"/>
  }
  
  let {data}=useFetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=04c35731a5ee918f014970082a0088b1`);
  
  useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
    });
  },[])


  const add = ()=>{
    let comment = comentario.current.value
    let stars = rating
    addReview(movie,stars,comment)
  }
  const startReview=(stars)=>{
    setRating(stars);
    console.log(consulta(stars,1),"h");
  }

  const consulta=(a,b)=>(a==b || a>b);

  
  return (
    <div>
      <Navbar/>
      <Informacion data={data} movie={movie}/>
      <div className="container-Detalles">
      {reviews.map(
        review=>review.idMovie===Number(id)
        &&<p key={review.id}>{review.comment}</p>)
      }
       <div className='margin__review'>
          <div className='div__review'>
          <input  className='input__review' ref={comentario} type="text" placeholder='¿Que  te parecio la pelicula?'></input>
            <div className='star__review'>
            <button  className={"btn-start "+(consulta(rating,5)?"start-active":"")} onClick={()=>{startReview(5)}} ></button>
            <button  className={"btn-start "+(consulta(rating,4)?"start-active":"")} onClick={()=>{startReview(4)}} ></button>
            <button  className={"btn-start "+(consulta(rating,3)?"start-active":"")} onClick={()=>{startReview(3)}} ></button>
            <button  className={"btn-start "+(consulta(rating,2)?"start-active":"")} onClick={()=>{startReview(2)}} ></button>
            <button  className={"btn-start "+(consulta(rating,1)?"start-active":"")} onClick={()=>{startReview(1)}} ></button>
            </div>
          </div>
          <div >
             <button className='btn-review' onClick={add}>Agregar review</button>
          </div>

       </div>
  </div>
      <Footer></Footer>
    </div>
  )


}

/**
      <div className="container-Detalles">
       <div className='margin__review'>
          <div className='div__review'>
          <input  className='input__review' ref={comentario} type="text" placeholder='¿Que  te parecio la pelicula?'></input>
            <div className='star__review'>
            <button  className={"btn-start "+(consulta(rating,5)?"start-active":"")} onClick={()=>{startReview(5)}} ></button>
            <button  className={"btn-start "+(consulta(rating,4)?"start-active":"")} onClick={()=>{startReview(4)}} ></button>
            <button  className={"btn-start "+(consulta(rating,3)?"start-active":"")} onClick={()=>{startReview(3)}} ></button>
            <button  className={"btn-start "+(consulta(rating,2)?"start-active":"")} onClick={()=>{startReview(2)}} ></button>
            <button  className={"btn-start "+(consulta(rating,1)?"start-active":"")} onClick={()=>{startReview(1)}} ></button>
            </div>
          </div>
          <div >
             <button className='btn-review' onClick={add}>Agregar review</button>
          </div>
       </div>
      {/* && (and): Operador de cortocircuito *///}
      //{/* || (or)*/}
      //{reviews.map(
        //review=>review.idMovie===Number(id)
        //&&<p key={review.id}>{review.comment}</p>)
      //}
      //{/* Mostrar comentarios */}
  //</div>

