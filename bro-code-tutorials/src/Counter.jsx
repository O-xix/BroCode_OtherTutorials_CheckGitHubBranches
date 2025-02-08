import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => resetCount()}>Reset</button>
    </div>
  );
}

export default Counter;