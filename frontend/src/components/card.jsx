import React from 'react'

export const Card = (props) => {

    return (
    <div className="m-2 max-w-sm rounded overflow-hidden shadow-lg w-64">
        <img className="w-full" src={props.image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-sm mb-2">{props.name}</div>
            <p className="text-gray-700 text-sm">
                {props.origin.name}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            
            {[props.gender,props.species,props.status].map(item=>{
                return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{item}</span> 
            })}
            
        </div>
    </div>)
}

export default Card;