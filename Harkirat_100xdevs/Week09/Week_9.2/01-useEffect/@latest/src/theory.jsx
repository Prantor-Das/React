// // Error in code
// import { useState, useEffect } from "react";

// // Conditional rendering
// // Random render
// // Based on certain condition render a component
// function App() {
//   // let counterVisible = true;
//   // let random = Math.random() < 0.5 ? true : false;

//   // if (random) {
//   //   counterVisible = false;
//   // }

//   const [counterVisible, setCounterVisible] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setCounterVisible(function (c) {
//         return !c;
//       });
//     }, 5000);
//   }, []);

//   return (
//     <div>
//       <h1>useEffect</h1>
//       <h1>T1</h1>
//       {counterVisible ? <Counter></Counter> : null}
//       <h1>T2</h1>
//       {counterVisible && <Counter></Counter>}
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   console.log("counter");

//   // not used clearInterval

//   useEffect(() => {
//     console.log("Outside setInterval");
//     let clock = setInterval(() => {

//       console.log("Inside setInterval");
//       console.log("Mounted");

//       setCount((count) => count + 1);
//     }, 1000);
//     // useEffect returns a function that will be called
//     // when the component is mounted for the first time
//     // and when the component is unmounted

//     clearInterval(clock);
//   }, []);

//   // setInterval(() => {
//   //   setCount((count) => count + 1);
//   // }, 1000);
//   // console.log("mounted");
//   // will not re-render untill the dependency array changes

//   return (
//     <div>
//       <h1 id="text">{count}</h1>
//     </div>
//   );
// }

// export default App;

// Fixed code
import { useState, useEffect } from "react";

function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounterVisible((c) => !c);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>useEffect</h1>
      <h1>T1</h1>
      {counterVisible ? <Counter /> : null}
      <h1>T2</h1>
      {counterVisible && <Counter />}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Runs when the component mounts
    const clock = setInterval(() => { // Creates a clock
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    // Runs when the component is unmounted
    return () => clearInterval(clock); // Stops the clock
  }, []);

  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  );
}

export default App;