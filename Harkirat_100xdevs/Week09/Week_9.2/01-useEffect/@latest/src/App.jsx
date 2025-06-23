// Import the useState and useEffect hooks from the React library
import { useState, useEffect } from "react";

// Create a functional component called App to serve as the root component
function App() {
  // Create a state variable called 'counterVisible' and a setter function 'setCounterVisible' to update its value
  let [counterVisible, setCounterVisible] = useState(true);

  // Use the useEffect hook to run side effects in function components
  useEffect(() => {
    // Initialize a setInterval to toggle the 'counterVisible' state variable every 5 seconds (5000 ms)
    setInterval(() => {
      // Use the functional form of setCounterVisible to ensure we are working with the latest value of 'counterVisible'
      setCounterVisible((c) => !c);
    }, 5000);
  }, []); // Pass an empty dependency array to run this effect only once, when the component mounts

  return (
    <div>
      <h1>Conditional Rendering</h1>
      {/* Render the Counter component inside the App component */}
      {counterVisible && <Counter />}

      {/* Making sure that counter does not start from 0 when again mounted */}
      {/* 
      <div style={{visibility: counterVisible ? "visible" : "hidden"}}>
        <Counter ></Counter>
      </div> */
      // Clock is {counterVisible ? "ON" : "OFF"}
      // clock runs in background
      // clock runs only when counterVisible is true
      }

    </div>
  );
}

// Create a functional component called Counter to handle counting functionality
function Counter() {
  // Create a state variable called 'count' and a setter function 'setCount' to update its value
  const [count, setCount] = useState(0);

  console.log("Counter Rendered");

  // Use the useEffect hook to run side effects in function components
  useEffect(() => {
    // Initialize a setInterval to increment the 'count' state variable every second (1000 ms)
    let clock = setInterval(() => {
      // Use the functional form of setCount to ensure we are working with the latest value of 'count'
      setCount((count) => count + 1);

      // Log the current value of 'count'
      console.log("From inside setInterval");
    }, 1000);

    // Log a message when the component mounts
    console.log("Mounted");

    // Return a cleanup function to clear the interval when the component unmounts
    return function () {
      console.log("Unmounted");

      // Clear the interval - unmounting the component
      clearInterval(clock);
    };
  }, []); // Pass an empty dependency array to run this effect only once, when the component mounts
  // This logic will run when the component mounts and unmounts till the dependency array is empty

  // Return the JSX to render the current value of 'count' in an <h1> tag
  return (
    <div>
      {/* Display the current count value */}
      <h1>{count}</h1>
    </div>
  );
}

// Export the App component as the default export so it can be imported elsewhere
export default App;
