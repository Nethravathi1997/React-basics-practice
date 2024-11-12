import { useState } from "react";
import React from "react";

export function Counter () {

  const [counter,setCounter] = useState(0);

  return (
    <div>
      <h1>Counter {counter}</h1>
       <button disabled={counter>=10} onClick={() => setCounter(counter+1)}>ADD</button>
       <button disabled={counter<=0} onClick={()=> setCounter(counter-1)}>REDUCE</button>
       <button onClick={()=> setCounter(0)}>RESET</button>
    </div>
  );
}