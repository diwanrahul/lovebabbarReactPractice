import React, { useState, useRef, useEffect } from 'react';

function PreviousValueExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(); // Persist previous count value across renders

  useEffect(() => {
    prevCountRef.current = count; // Update previous value after each render
  }, [count]); // Run the effect when `count` changes

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousValueExample;
