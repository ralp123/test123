import { createStore } from 'redux';

const initialState = {
    post: [],
    isPostLoading: false
} 

const reducer = (state = initialState, action) => {
    console.log(action.postDetails);
    switch(action.type){
        case 'IS_LOADING':
            return {...state, isPostLoading: action.isLoading}   
        case 'GET_POST':
            return {...state, post: action.postDetails, isPostLoading: action.isLoading}   
        default:
            return state;
    }
}

const store = createStore(
    reducer,  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
export default store;