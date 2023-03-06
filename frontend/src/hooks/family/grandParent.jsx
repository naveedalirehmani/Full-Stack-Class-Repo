import React from 'react'
import Parent from './parent'

const GrandParent = (props) => {
  return (
    <div>
        GrandParent
        <hr />
        <Parent ></Parent>
    </div>
  )
}

export default GrandParent