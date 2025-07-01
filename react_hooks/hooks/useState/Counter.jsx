import React from 'react'

const Counter = () => {

    let counter =0;
    
    const increase = () =>{
        counter++;
        console.log("counter increase = ",counter)
    }

    const decrease =()=>{
        counter--;
          console.log("counter decrease = ",counter)
    }

  return (
    <div>
        <h1>Counters</h1>
       <div className='count'>
         <h2>{counter}</h2>

         <button onClick={increase}>increase by 1</button>

         <button onClick={decrease}>increase by 2</button>
       </div>

    </div>
  )
}

export default Counter