import React,{createContext, useEffect, useReducer} from 'react';
import moviesReducer, { moviesInitialState } from '../reducers/moviesReducer';
import reviewsReducer, { reviewsInitialState } from '../reducers/reviewsReducer';

export const moviesContext = createContext()

export default function MoviesContext({children}) {

    const [movies,setMovies] = useReducer(moviesReducer,moviesInitialState)
    //const [movies,setMovies] = useState(mockup)
    const [reviews,dispatchReviews] = useReducer(reviewsReducer,reviewsInitialState)
    // const [reviews,dispatchReviews] = useState([])

    const addReview = (movie,stars,comment)=>{
        setMovies({type:'addStars',movie,stars})
        dispatchReviews({type:'addReview',idMovie:movie.id,comment})
        // setReviews([...reviews,{id:reviews.length,idMovie:movie.id,comment}])
    }
    //Reto: Cambiar las reviews del estado a reducers

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"/*"https://backendtzuzulcode.wl.r.appspot.com/movies"*/)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMovies({type:"addMovies",movies:data.results})
            //setMovies({type:"addMovies",movies:data})
        })
    },[])

    return <moviesContext.Provider value={{movies:movies.movies,addReview,reviews:reviews.reviews}}>
        {children}
    </moviesContext.Provider>
}