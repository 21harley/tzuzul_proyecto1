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
    
    const [activeGenre, setActiveGenre] = useState(0);
    
    let [pagina,setPagina]=useState(1)
    
    const addReview = (movie,stars,comment)=>{
        setMovies({type:'addStars',movie,stars})
        dispatchReviews({type:'addReview',idMovie:movie.id,comment})
        // setReviews([...reviews,{id:reviews.length,idMovie:movie.id,comment}])
    }
    //Reto: Cambiar las reviews del estado a reducers
    //https://api.themoviedb.org/3/movie/550?api_key=497e24e0a67f0f133e230dd01041ed6a
    useEffect(()=>{
        console.log(pagina);
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${pagina}`/*"https://backendtzuzulcode.wl.r.appspot.com/movies"*/)
        .then(res=>res.json())
        .then(data=>{
            console.log(data,pagina,"consulta "+pagina,movies)

            setMovies({type:"addMovies",movies:data.results})
            setFiltered({type:"addMovies",movies:data.results})

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
    },[pagina])

    return <moviesContext.Provider value={{movies:movies.movies,addReview,reviews:reviews.reviews,setPagina,pagina}}>
        {children}
    </moviesContext.Provider>
}