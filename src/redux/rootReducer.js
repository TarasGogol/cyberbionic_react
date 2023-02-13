import {combineReducers} from "redux";
import initialStore from "./initialStore";
import {CHANGETITLE} from "./actionConst";
import counterReducer from "../components/ReduxCounter/counterReducer";


const titleReducer = (title = initialStore.title, action) =>{
    switch (action.type){
        case CHANGETITLE:
            return action.payload;
        case "Trololo":
            return "Trololo";
        default:
            return title;
    }
}

export default combineReducers({
    // auth: authReducer,
    title: titleReducer,
    count: counterReducer,
    // posts:postsReducer
});