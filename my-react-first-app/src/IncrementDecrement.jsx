import { useState } from "react";

function IncrementDecrement() {
    const [count, setCount] = useState(0);
  
    // Increment
    const increment = () => {
      setCount(count + 1);
    };
  
    // Decrement
    const decrement = () => {
      setCount(count - 1);
    };
  
    return (
      <>
        <h1>This is count value: {count}</h1>
        <button style={{ color: 'blue' }} onClick={increment}>Increment</button>
        <button style={{ color: 'blue' }} onClick={decrement}>Decrement</button>
      </>
    );
  }
export default IncrementDecrement;
  