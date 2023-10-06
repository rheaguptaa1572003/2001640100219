const generateFibonacciNumbers = (limit) => {
  const fibonacciNumbers = [0, 1];

  for (let i = 2; i <= limit; i++) {
    const nextFibonacciNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    if (nextFibonacciNumber > limit) break;
    fibonacciNumbers.push(nextFibonacciNumber);
  }

  return fibonacciNumbers;
};
const calculateUnion = (fibonacciNumbers, limit) => {
  const oddNumbers = [];
  for (let i = 1; i <= limit; i += 2) {
    oddNumbers.push(i);
  }

  // Calculate the union of Fibonacci numbers and odd numbers
  const union = new Set([...fibonacciNumbers, ...oddNumbers]);
  return Array.from(union).sort((a, b) => a - b);
};
import React, { useState } from 'react';

const FibonacciOddUnion = () => {
  const limit = 100; // Adjust the limit as needed

  // Generate Fibonacci numbers and calculate the union
  const fibonacciNumbers = generateFibonacciNumbers(limit);
  const unionNumbers = calculateUnion(fibonacciNumbers, limit);

  return (
    <div>
      <h1>Fibonacci and Odd Numbers Union</h1>
      <p>Union of Fibonacci and odd numbers up to {limit}:</p>
      <ul>
        {unionNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default FibonacciOddUnion;

