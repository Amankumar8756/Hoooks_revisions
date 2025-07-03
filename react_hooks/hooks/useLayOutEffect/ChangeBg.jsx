import React, { useLayoutEffect,useState } from 'react'

const ChangeBg = () => {

    const [color, setColor] = useState('lightblue');

    useLayoutEffect(()=>{
       document.body.style.backgroundColor = color;

    },[color]) // dependecy array




  return (
    <div>
        <h2>Current background : {color}</h2>
        <button onClick={()=>setColor('red')}>Red</button>
         <button onClick={()=>setColor('black')}>black</button>
          <button onClick={()=>setColor('pink')}>pink</button>
           <button onClick={()=>setColor('gray')}>gray</button>
    </div>
  )
}

export default ChangeBg