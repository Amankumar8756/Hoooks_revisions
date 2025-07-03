import React, { useState } from "react";
import MyContext from "./MyContext";

const MoneyState = (props) => {

    const money =1000;

  const [counter, setCounter] = useState(10);

  const person = {
    name: "Aman",
    age: "22",
    email: "amankumar@gmail.com"
  }

  return <MyContext.Provider value={{money, person, counter, setCounter}}>{props.children}</MyContext.Provider>;
};

export default MoneyState;
