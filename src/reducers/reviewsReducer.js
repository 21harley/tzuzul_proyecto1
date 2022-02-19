export const reviewsInitialState = {
    reviews:[]
}

export default function reviewsReducer(state,action){
    let newState;
    console.log(state,action,"reviews")
    switch(action.type){
        case 'addReview':
            const {idMovie,comment} = action
            newState = {reviews:[...state.reviews,{id:state.reviews.length,idMovie,comment}]}
        break;
        /*
        case 'addStars':
            const {idMovie,stars} = action
            newState = {reviews:[...state.reviews,{id:state.reviews.length,idMovie}]}
        break;
        */
    }

    return newState
}