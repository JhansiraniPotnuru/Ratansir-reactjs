import React, { useRef } from 'react';

function App() {
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const resultRef = useRef(null);

  const handleAddition = () => {
    const num1 = parseFloat(num1Ref.current.value);
    const num2 = parseFloat(num2Ref.current.value);
    const sum = num1 + num2;
    resultRef.current.value = sum;
  }; 

  const handleSubtraction = () => {
    const num1 = parseFloat(num1Ref.current.value);
    const num2 = parseFloat(num2Ref.current.value); 
    const difference = num1 - num2;
    resultRef.current.value = difference;
  };

  const handleMultiplication = () => {
    const num1 = parseFloat(num1Ref.current.value);
    const num2 = parseFloat(num2Ref.current.value);
    const product = num1 * num2;
    resultRef.current.value = product;
  };

  const handleDivision = () => {
    const num1 = parseFloat(num1Ref.current.value);
    const num2 = parseFloat(num2Ref.current.value);
    if (num2 === 0) {
      resultRef.current.value = "Cannot divide by zero";
    } else {
      const quotient = num1 / num2;
      resultRef.current.value = quotient;
    }
  };

  return (
    <>
      <h2>Calculator</h2>
      <input ref={num1Ref} type="number" placeholder="Enter first number" />
      <input ref={num2Ref} type="number" placeholder="Enter second number" />
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <button onClick={handleMultiplication}>Multiply</button>
      <button onClick={handleDivision}>Divide</button>
      <input ref={resultRef} type="text" placeholder="Result" readOnly />
    </>
  );
}

export default App;
