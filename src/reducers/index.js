import { SET_RECIPES } from '../actions';
import { combinedReducers } from '../actions';

function recipes(state=[], action){
    switch(action.type){
        case SET_RECIPES:
            return action.items;
        default:
            return state;
        }
}

const rootReducer = combinedReducers({ recipes });

export default rootReducer;