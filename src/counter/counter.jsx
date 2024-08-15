
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => (
    setCount(count + 1)
  )
  const decrement = () => (
    setCount(count - 1)
  )

  const multiply = (numbersOfMultiply) => {
    setCount(count * numbersOfMultiply);
  };

  return (
    <div>
      <h1 className='btn'>Counter: {count}</h1>
      <button className='btn' onClick={increment}>+</button>
      <button className='btn' onClick={decrement}>-</button>
      <div>
        <button className='btn' onClick={() => multiply(2)}>Multiply by 2</button>
        <button className='btn' onClick={() => multiply(4)}>Multiply by 4</button>
        <button className='btn' onClick={() => multiply(8)}>Multiply by 8</button>
      </div>
    </div>
  );
};

export default Counter;
