import React, { useState } from 'react';

const FibonacciAndOddNumbers = () => {
  const [fibonacciSeries, setFibonacciSeries] = useState([]);
  const [oddNumbers, setOddNumbers] = useState([]);
  const [count, setCount] = useState(10); 

  const generateFibonacciAndOddNumbers = () => {
    const fibonacci = [];
    const oddNums = [];
    let num1 = 0;
    let num2 = 1;

    for (let i = 1; i <= count; i++) {
      fibonacci.push(num1);
      if (num1 % 2 !== 0) {
        oddNums.push(num1);
      }
      const temp = num2;
      num2 = num1 + num2;
      num1 = temp;
    }

    setFibonacciSeries(fibonacci);
    setOddNumbers(oddNums);
  };

  return (
    <div>
      <button onClick={generateFibonacciAndOddNumbers}>Generate Fibonacci and Odd Numbers</button>

      <div>
        <h2>Fibonacci Series:</h2>
        <ul>
          {fibonacciSeries.map((num, index) => (
            <li key={`fib-${index}`}>{num}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Odd Numbers:</h2>
        <ul>
          {oddNumbers.map((num, index) => (
            <li key={`odd-${index}`}>{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FibonacciAndOddNumbers;
