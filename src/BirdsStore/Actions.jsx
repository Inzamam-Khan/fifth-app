import { combineReducers } from "redux"

export function addBird(bird){
    return{
        type:'ADD_BIRD',
        bird,
    }
}
export function decrementBird(bird){
    return{
        type:'DECREMENT_BIRD',
        bird,
    }
}

export function incrementBird(bird){
    return{
        type:'INCREMENT_BIRD',
        bird
    }
}


//defaultBirds
const defaultBirds =[
{

    name:'robin',views:1,
}
]

//reducer

function birds(state=defaultBirds,action){
    switch(action.type){
        case 'ADD_BIRD':
              return[...state,{name:action.bird,views:1}]
        case 'INCREMENT_BIRD':
            const bird=state.find(b=>b.name===action.bird)
            console.log(bird)
            const birds=state.filter(b=>action.bird!==b.name)
            
            return[...birds,{...bird,views:bird.views+1}]
        case 'DECREMENT_BIRD':{
            
            const bird=state.find(b=>action.bird===b.name)
            const birds=state.filter(b=>b.name!==action.bird)
            if(bird.views==1)
            return state;
        else{
           
            return [...birds,{...bird,views:bird.views-1}]}
        }


        default:
            return state;
    }
    
}


const allReducers=combineReducers({birds})
export default allReducers