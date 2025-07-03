import React, { useState } from 'react'

const Counter = () => {

   // let counter =0;
    
    const [counter, setCoounter] = useState(0);

    const [salary, setsalary] = useState(100000/10);

    const [number, setnumber] = useState([10,20]);

    const increase = () =>{

        setCoounter(counter + 1);
    
        console.log("counter increase = ",counter)
    }

    const decrease =()=>{
 setCoounter(counter -1);
          console.log("counter decrease = ",counter)
    }

    // const encom =() =>{
    //   setsalary(salary + 100)
    //   console.log("montholy salary is ",salary)
    // }

  return (
    <div>
        <h1>Counters</h1>
       <div className='count'>
         <h2>{counter}</h2>

         <button onClick={increase}>increase by 1</button>

         <button onClick={decrease}>decrease by 1</button>
       </div>
       <h2>Salary = {salary}</h2>
       <button onClick={()=>setsalary(salary+100/10)}> salary </button>

        <p>here present your dayes -- {number}</p>
    </div>
  )
}

export default Counter