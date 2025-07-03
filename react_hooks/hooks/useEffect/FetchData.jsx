import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
console.log("useEffect is running ->");
     document.title = count;
  },[count]) // dependency array



  return (
    <div>
      <h1>FetchDatas</h1>

      <h2>Count = {count}</h2>
      <button onClick={() => setCount(count + 2)}> increase </button>
      <button onClick={() => setCount(count - 2)}> decrease </button>
    </div>
  );
};

export default FetchData;
