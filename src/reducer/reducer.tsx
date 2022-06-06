import { Reducer } from "react";
import { AnyAction } from 'redux'


// export interface state{
//     username : string,
//     city : string
// }



const initialState : [] = []



const reducer  = (state = initialState, action : AnyAction)=>{

    switch(action.type){

        case "fetch" :
            return{
                ...state,
                state : action.payload
            } 
        default : 
            return{
                ...state,

            }

    }
    
}



export default reducer;