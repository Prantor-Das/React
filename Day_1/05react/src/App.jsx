import { useState, useEffect } from "react";

export function App() {
  const [message, setMessage] = useState("Loading...");
  // [variable, function] and the function is used to update the variable
  // useState(defaultValue)

  useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to load"));
  }, []);
  // useEffect(callback, [dependencies]) - runs the callback when the dependencies change
  // Here callback is also known as clean up function
  // initialize the state then mount the component, then update the state, 
  // then unmount and again initialize. 
  // Process is called life cycle. For react it is called component life cycle
  // useEffect( () => () => {
  //
  //   return ()
  // }, [])

  
  // setMessage("Loaded"); // overwrite the state

  // const [message, setMessage] = useState(1);

  // setMessage(callback);
  // setMessage( () => {} );

  // setMessage(prev => prev + 1);
  // setMessage(prev => prev + 1); // wrong way but only way
  // setMessage(prev => prev + 1); // wrong way but only way


  return (
    <div>
      <h1>Welcome to chaicode</h1>
      <p>Serving hot chai with react</p>
      <h2>{message}</h2>
    </div>
  );
}
