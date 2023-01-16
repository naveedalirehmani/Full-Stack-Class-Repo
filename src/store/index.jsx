import { createContext, useContext, useReducer } from "react"

const initialState = {
    allUsers:[],
    loggedInUser:{}
}

const reducer = (state,action)=>{
    switch (action.type) {
        case 'ADD_USER':
            return {...state,allUsers:[...state.allUsers,action.payload]}
        case 'ADD_LOGGINED_USER':
            return {...state,loggedInUser:action.payload}
        case 'REMOVE_LOGGINED_USER':
            return {...state,loggedInUser:{}}
        default:
            return state
    }
}

const StoreContext = createContext(null);

const Store = ()=>{
    const [state,dispatch]  = useReducer(reducer,initialState)
    return {state,dispatch}
}


const StoreProvider =({children})=>{
    return <StoreContext.Provider value={Store()}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext).state
export const useDispatch = () => useContext(StoreContext).dispatch

export default StoreProvider;

