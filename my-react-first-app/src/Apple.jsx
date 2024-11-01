import { useState } from "react";

function Apple() {
  const [apple, setApple] = useState(0);

  return (
    <>
      <h1>Number of Apples: {apple}</h1>
      {apple === 0 ? (
        <p>No apples left</p>
      ) : (
        <p>Great! You have some apples</p>
      )}
      <button onClick={() => setApple(apple + 1)}>Add 1 apple</button>
      <button onClick={() => setApple(apple > 0 && apple - 1 )}>
        Remove apple
      </button>
      <button onClick={() => setApple(0)}>Reset</button>
    </>
  );
}

export default Apple;