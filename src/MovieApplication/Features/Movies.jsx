import { combineReducers } from "redux";

//actions

// export const removeSelectedItem=(item)=>{
//     return{
//     type:"REMOVE_SELECTED_ITEM",
//     item,}
// }
export const removeItemDetails=()=>{
    return{type:'REMOVE_ITEM_DETAILS',}
}
export const addPage=()=>{
    return{
        type:'ADD_PAGE',
        
    }
}
export const delPage=()=>{
    return{
        type:'DEL_PAGE',
        
    }
}
export const itemDetails=(item)=>{
    return {
        type:'ITEM_DETAILS',
        item,
    }
}
export const selectedItem=(item)=>{
    return{
        type:'ADD_TO_CART',
        item,
    }

}
export const addTerm=(term)=>{
    return {
        type:'ADD_TERM',
        term
    }

}
export const addMovies = (movies) => {
    return {
        type: 'ADD_MOVIES',
        movies,
    }
}
export const addSeries=(series)=>{
    return {
        type:'ADD_SERIES',
        series,
    }
}
export const changeTheme = (theme) => {
    return {
        type: 'CHANGE_THEME',
        theme,
    }

}
//initail Values
const initialMovies = {
    movies: []
}

const initialSeries={
    series:[]
}

const initialTheme = 'Dark';

const initialTerm='Harry';

const initialCart=[];

const initialItemDetails={}
   

//reducer

function pageReducer(state=1,action){
    switch(action.type){
        case 'ADD_PAGE':{
            return state+1;

        }
        case 'DEL_PAGE':{
            
            if(state>1){
                return state-1;
            }
            else {
                return state
            }
        }
        default:
            {
                return state
            }
        
    }

}
function itemDetailsReducer(state=initialItemDetails,action){
    const {item,type}=action
    switch(type){
        case'ITEM_DETAILS':
        {
                return item
        }
        case 'REMOVE_ITEM_DETAILS':{
            return {}
        }
        default:
            {
                return state
            }
    }
}
function selectedItemReducer(state=initialCart,action){
    switch(action.type){
        case 'ADD_TO_CART':{
            return [...state,action.item]
        }
      
        default:
            return state;
    }

}
function changeThemeRedcuer(state = initialTheme, action) {
    switch (action.type) {
        case 'CHANGE_THEME': {
            if (state === 'Light') {

                return state = 'Dark'
            }
            else {
                return state='Light'
            }


        }

        default:
            return state;

    }
}
function addMovieReducer(state = initialMovies, action) {
    switch (action.type) {
        case 'ADD_MOVIES':
            {
                return { ...state, movies: action.movies.Search }
            }
        default:
            return state;
    }

}
function addSeriesReducer(state=initialSeries,action){
    switch(action.type){
        case 'ADD_SERIES':
            {
                return {...state,series:action.series.Search
                }
            }
        default:{
            return state;
        }
    }

}
function addTermReducer(state=initialTerm,action){
    switch(action.type){
        case'ADD_TERM':{
            return state=action.term

        }
    default:
        {
            return state;
        }

    }

}

const allReducer = combineReducers({ addMovieReducer,changeThemeRedcuer,addSeriesReducer,addTermReducer,selectedItemReducer,itemDetailsReducer,pageReducer})
export default allReducer