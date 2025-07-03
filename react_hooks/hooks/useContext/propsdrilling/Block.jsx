import React from 'react'
import Panchayat from './panchayat'

const Block = ({mopney}) => {
  return (
    <div>
            <h2>This is Block Component</h2>
            <Panchayat mopney={mopney} />
    </div>
  )
}

export default Block