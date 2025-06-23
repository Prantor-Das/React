// Importing the useState hook from React, which is used to add state to the functional component.
import { useState } from 'react';

// Importing the CSS file to style the App component.
import './App.css';

// Defining a functional component named 'App'.
function App() {

  // Declaring a state variable 'count' initialized to 0 and its setter function 'setCount' using the useState hook.
  const [count, setCount] = useState(0);
  // useState returns an array with two elements
  // count is a variable
  // setCount is a function
  // const [variable, function] = useState(defaultValue);
  // useState is a hook
  // We can change the value of the variable using the function

  // const value = useState(0);
  // // value is an array
  // // value[0] is the variable
  // // value[1] is the function

  // Defining a function that handles the button click event.
  function onClickHandler() {

    // Updating the state 'count' by incrementing its value by 1.
    setCount(count + 1);
  }

  return (
    // Defining the main container div element that holds the content of the App component.
    <div>

      {/* Displaying a heading with the text 'Counter App'. */}
      <h1>Counter App</h1>

      {/* A button element with an onClick event listener that triggers the onClickHandler function when clicked. */}
      <button onClick={onClickHandler}>

        {/* Displaying the current value of the 'count' state inside the button. */}
        Counter {count}
      </button>
    </div>

    // <div>
    //   <h1>Counter App</h1>
    //   <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    // </div>
  );
}

// Exporting the App component as the default export for use in other parts of the application.
export default App; 


//////////////////////////////////////////////////////////////////
// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   function onClickHandler() {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <button onClick={onClickHandler}>Counter {count}</button>
//     </div>
//   );
// }
//////////////////////////////////////////////////////////////////