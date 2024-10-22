import { useState } from "react";

export default function App(){
  return(
    <div>
<Counter />,
<Step />
</div>  
);
}

function Step(){
 const[step, setStep] = useState(1)
 
return(
<div className="button">
 
<button onClick={() =>setStep((c) => c-step)}>-</button>
      <span>step: {step}</span>
      <button onClick={()=> setStep((c) =>c+step)}>+</button>
</div>
  );
}


function Counter(){
const[count, setCount]= useState(0)

const date= new Date("july 03 2023");
date.setDate(date.getDate()+count);

  return <div>
    <div className="button">
      <button onClick={() =>setCount((c) => c-1)}>-</button>
      <span>Count: {count}</span>
      <button onClick={()=> setCount((c) =>c+1)}>+</button>
    </div>

<p>
  <span>{count === 0 
    ? "Today is  "  : count > 0 
    ? `${count} data from today is`
     :`${Math.abs(count)} days ago was`}
    </span>
   <span>{date.toDateString()}</span>
 </p>
 </div>
}

