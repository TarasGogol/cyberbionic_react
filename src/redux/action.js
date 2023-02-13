import {CHANGETITLE} from "./actionConst";


export const changeTitleCreator = (value) =>{
    return{
        type: CHANGETITLE,
        payload:value
    }
}