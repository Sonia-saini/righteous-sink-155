export default function Reducer(state,action){
    switch(action.type){
        case "addtocart": {return [...state,action.payload]};
        case "remove": {return state.filter(el=>el.id!==action.payload)};
        case "checkout": {return []};
        default:{return state};
    }

}