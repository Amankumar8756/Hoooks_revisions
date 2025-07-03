import React from 'react'
import District from './District'

const StateGov = ({mopney}) => {
  return (
    <div>
            <h2>This is StateGov Component</h2>
            <District mopney={mopney}/>
    </div>
  )
}

export default StateGov