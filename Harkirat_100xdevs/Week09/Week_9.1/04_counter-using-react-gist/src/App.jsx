import React from 'react'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
    </div>
  )
}

/////////////////////////////////////////////////////////
// Define the button component 
function Button(props) {

  function onButtonClick() {
    props.setCount(count + 1);
  }

  // This is JS
  return React.createElement(
    'button',
    { onClick: onButtonClick },
    `Counter ${props.count}`
  );

  // Another way to write
  // This is JSX
  // return React.createElement(
  //   function onButtonClick() {
  //   props.setCount(props.count + 1);
  // }
  // return <button onClick={onButtonClick}>Counter {props.count}</button>
  // );
}
/////////////////////////////////////////////////////////


export default App