import React,{useContext} from 'react'
import {StoreContext} from '../useContext'



const Child = (props) => {

    const [state,dispatch] = useContext(StoreContext)
    
  return (
    <div>Child : {state} 
    <button onClick={()=>dispatch({type:'add'})}>++</button>
    <button onClick={()=>dispatch({type:'subtract'})}>--</button>
    </div>
  )
}

export default Child
