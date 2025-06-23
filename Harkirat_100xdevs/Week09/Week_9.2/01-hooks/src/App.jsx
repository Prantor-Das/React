import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <h1>
        <b>Counter Application</b>
        <Counter></Counter>
      </h1>
    </div>
  );
}

// function IncreaseCount(){
//   console.log("Increase Count");
// }
// Usually need to define this function inside the component itself

// Mounting, Updating, Unmounting, Re-rendering
function Counter() {
  // function IncreaseCount(){
  //   document.getElementById("text").innerHTML = parseInt(document.getElementById("text").innerHTML) + 1
  //   // It is one of the approach(raw DOM manipulation) to increase the count
  //   // But not preferred when using react
  //   // as we are changing DOM by ourself

  //// We should use useState hook(using state variable)
  // }

  const [count, setCount] = useState(0);
  // setCount is a function
  // count is a variable

  // Hooks are used to add state to the functional component

  // Hooking into the lifecycle events of react


  // We use useEffect hook to hook into the lifecycle events of react
  // Mounting, Updating, Unmounting
  // The logic that we want to run when the component mounts
  // I will wrap it inside useEffect
  // useEffect(function(){},[])
  // [] is a dependency array

  // Guard our setInversal from rendering on every re-render
  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1); // uses latest value
    }, 1000);
  },[]);
  // useEffect(callback, [dependencies])
  // [] - no dependencies
  // if dependencies are not provided, then the callback will be called on every render
  // if dependencies are provided, then the callback will be called only when the dependencies change


  // function AICount() {
  //   setInterval(() => {
  //     setCount((prevCount) => prevCount + 1); // uses latest value
  //   }, 1000);
  // }

  // Not done DOM manipulation ourself
  function IncreaseCount() {
    setCount(count + 1);
  }
  function DecreaseCount() {
    setCount(count - 1);
  }
  function ResetCount() {
    setCount(0);
  }

  // Component re-renders when state changes
  return (
    <div>
      {/* <h1 id="text">0</h1> */}
      <h1 id="text">{count}</h1>
      {/* Does not re-render raw variable in react. Renders only state variable */}
      {/* React only re-renders when state changes */}
      <button onClick={IncreaseCount}>Increase Count</button>
      {/* <button onClick={AICount}>Auto-Increase Count</button> */}
      <button onClick={DecreaseCount}>Decrease Count</button>
      <button onClick={ResetCount}>Reset Count</button>
    </div>
  );
}

export default App;

////////////////////////////////////////////////
// Cleaned code.................................
// import { useState } from "react";
// function App() {
//   return (
//     <div>
//       <h1>
//         <b>Counter Application</b>
//         <Counter></Counter>
//       </h1>
//     </div>
//   );
// }
// function Counter(){
//   const [count, setCount] = useState(0);

//   function IncreaseCount(){
//     setCount(count + 1);
//   }
//   function DecreaseCount(){
//     setCount(count - 1);
//   }
//   function ResetCount(){
//     setCount(0);
//   }

//   return (
//     <div>
//       <h1 id="text">{count}</h1>
//       <button onClick={IncreaseCount}>Increase Count</button>
//       <button onClick={DecreaseCount}>Decrease Count</button>
//       <button onClick={ResetCount}>Reset Count</button>
//     </div>
//   );
// }

// export default App;
