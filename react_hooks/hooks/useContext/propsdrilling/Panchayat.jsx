import React from 'react'
import Peopl from './peopl'

const Panchayat = ({mopney}) => {
  return (
    <div>
            <h2>This is Panchayat Component</h2>
            <Peopl mopney={mopney}/>
    </div>
  )
}

export default Panchayat