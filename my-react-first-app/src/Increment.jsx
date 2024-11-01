import { useState } from "react";

function Increment() {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <>
        <h1>This is count value: {count}</h1>
        <button style={{ color: 'green' }} onClick={handleClick}>
          Increment
        </button>
      </>
    );
  }
  
  export default Increment;