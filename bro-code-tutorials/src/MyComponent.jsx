import React, {useState} from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
        //In a way count += 1;
        // But this way, count will be updated only at the end of the function, so putting multiple setCount() function calls just adds, for example, 1 to 0. Do it again, and it adds 1 to 0, again.
        setCount(count + 1);
        setCount(count + 1);

        //UPDATE count
    }

    function decrement() {
        setCount(count - 1);   
    }

    function reset() {
        setCount(0);
    }  

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}

export default MyComponent;