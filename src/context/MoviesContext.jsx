import React,{createContext, useEffect, useReducer, useState} from 'react';
import moviesReducer, { moviesInitialState } from '../reducers/moviesReducer';
import reviewsReducer, { reviewsInitialState } from '../reducers/reviewsReducer';

export const moviesContext = createContext()

export default function MoviesContext({children}) {

    const [movies,setMovies] = useReducer(moviesReducer,moviesInitialState)
    //const [movies,setMovies] = useState(mockup)
    const [reviews,dispatchReviews] = useReducer(reviewsReducer,reviewsInitialState)
    // const [reviews,dispatchReviews] = useState([])
    const [filtered, setFiltered] = useState([])
    
    const [activeGenre, setActiveGenre] = useState(1);
    
    const [pagina,setPagina]=useState(1)
    
    const [totalPagina,setTotalPagina]=useState(1);
   
    const [consulta,setConsulta]=useState("");

    const addReview = (movie,stars,comment)=>{
        setMovies({type:'addStars',movie,stars})
        dispatchReviews({type:'addReview',idMovie:movie.id,comment})
        // setReviews([...reviews,{id:reviews.length,idMovie:movie.id,comment}])
    }
    //Reto: Cambiar las reviews del estado a reducers

    //https://api.themoviedb.org/3/movie/550?api_key=497e24e0a67f0f133e230dd01041ed6a

    //https://api.themoviedb.org/3/movie/27/similar?api_key=04c35731a5ee918f014970082a0088b1

    useEffect(()=>{
        console.log(consulta,pagina)
        fetch((consulta=="")
               ?`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${pagina}`
               :`https://api.themoviedb.org/3/movie/${consulta}/similar?api_key=04c35731a5ee918f014970082a0088b1&page=${pagina}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data,pagina,"consulta "+pagina,movies)

            setMovies({type:"addMovies",movies:data.results});
            setFiltered({type:"addMovies",movies:data.results});
            setTotalPagina(data.total_pages);
            /*
            if(movies.movies.length>0){
                setMovies({type:"addMovies",movies:[...data.results,...movies.movies]})
                setFiltered({type:"addMovies",movies:[...data.results,...movies.movies]})
            }else{
                setMovies({type:"addMovies",movies:data.results})
                setFiltered({type:"addMovies",movies:data.results})
            }
            */

            //setMovies({type:"addMovies",movies:data})
            console.log(data,pagina,"consulta "+pagina,movies.movies.length)
        })
    },[pagina,consulta])

    return <moviesContext.Provider value={{movies:movies.movies,addReview,
                                           reviews:reviews.reviews,
                                           setPagina,pagina,totalPagina,
                                           consulta,setConsulta}}>
        {children}
    </moviesContext.Provider>
}