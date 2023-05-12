import { createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions";
import { AppInitialState } from "../AppInitialState";

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(initialState,
    on(recoverPassword, (currentState: any) =>{
        return {
            ...currentState,
            error:null,
            isRecoveredPassword:false,
            isRecoveringPassword:true
        };
    }),
    on(recoverPasswordSuccess, (currentState: any)=>{
        return {
            ...currentState,
            error:null,
            isRecoveredPassword:true,
            isRecoveringPassword:false
        };
    }),
    on(recoverPasswordFail, (currentState: any, action:any)=>{
        return {
            ...currentState,
            error:action.error,
            isRecoveredPassword:false,
            isRecoveringPassword:false
        };
    })
    )

    export function loginReducer({ state, action }: { state: LoginState; action: any; }){
        return reducer(state, action)
    }