import { useState, useEffect } from "react";

// useEffect, Cleanup and Dependency Array
function Practice() {
  const [count, setCount] = useState(0);

  ////////////////////////////////////////////////////////////////////
  // Change tab logic
  //   const [currentTab, setCurrentTab] = useState("Notifications");

  //   useEffect(() => {
  //     // connect to the current tab's backend server
  //     return () => {
  //       // disconnect from the last tab's backend server
  //     };
  //   }, [currentTab]);
  ////////////////////////////////////////////////////////////////////

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useEffect, Cleanup and Dependency Array - Practice</h1>
      <Counter count={count} />
      <br />
      {/* Passing props */}
      <button onClick={increase}> Practice Inc.</button>
    </div>
  );
}

// mounting, re-rendering and unmounting
function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // mounting
    console.log("Mounted");

    // cleanup logic
    // first cleanup is called when the component unmounts
    // then mounting is called
    return () => {
      // unmounting
      console.log("Unmounting");
    };
  }, []);

  // useEffect is called when count changes
  useEffect(
    function () {
      console.log("Count has changed");
    },
    [props.count]
  );

  return <div>Counter {props.count}</div>;
}

export default Practice;
