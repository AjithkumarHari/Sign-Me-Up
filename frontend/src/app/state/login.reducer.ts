import { createAction, createReducer, on } from "@ngrx/store";

export const initialState = {
    token: '',
    user : null
} 

export const _authReducer = createReducer(
    initialState,
    on( createAction('some action'),(state)=>{
        return{ ...state}
    })
)