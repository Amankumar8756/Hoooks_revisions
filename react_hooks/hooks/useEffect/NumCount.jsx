import React, { useEffect,useState } from "react";

const NumCount = () => {


  useEffect(() => {
   
    const fetchDataFromAPI = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/users");

      const result = await api.json();

      console.log("fetching datat = ", result);
       
       
    };
    fetchDataFromAPI();
  }, []);


  return (
    <div>
      <h1>Fetch Data</h1>

   
    </div>
  );
};

export default NumCount;
