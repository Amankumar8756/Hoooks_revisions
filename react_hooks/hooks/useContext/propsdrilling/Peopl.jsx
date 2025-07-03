import React, { useContext } from 'react'

import MyContext from '../MyContext'


const Peopl = () => {

  const data = useContext(MyContext);


  return (
    <div>
            <h2>This is peopl/janta Component = {data.money}</h2>
          <h1>Counter = {data.counter}</h1>
          <button onClick={()=>data.setCounter(data.counter + 1)  }>increase</button>
    </div>
  )
}

export default Peopl