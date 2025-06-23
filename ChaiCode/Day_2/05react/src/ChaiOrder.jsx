import { useState } from "react";

export function ChaiCounter() {
  const [count, setCount] = useState(0);

  const serveChai = () => {
    setCount((prev ) => prev + 1);
  };

  return (
    <div>
      <h2>Chai Counter</h2>
      <p>You have served {count} cups of chai</p>
      <button onClick={serveChai}>Serve Chai</button>
      {/* OR */}
      {/* <button onClick={ () => setCount(prev => prev + 1) }>Serve Chai</button> */} 
      {/* Better build custom method like serveChai */}

      {/* {count} is a variable */}
      {/* {serveChai} is a function */}
    </div>
  );
}
