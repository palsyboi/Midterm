import React, { useState } from 'react';

export default function Home() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (!inputValue.trim()) {
      alert('Please enter a value.');
      return;
    }
    setStack([...stack, inputValue]);
    setInputValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return;
    }
    const updatedStack = stack.slice(0, stack.length - 1);
    setStack(updatedStack);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">STACK</h1>
      <div className="flex mb-4 items-center">
        <input
          type="text" // Changed to 'text' to allow letters
          className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 mr-4"
          placeholder="Enter a value (number or text)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handlePush}
        >
          Push
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
          onClick={handlePop}
          disabled={stack.length === 0}
        >
          Pop
        </button>
      </div>
      <div className="border border-gray-300 rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">Stack Content:</h2>
        {stack.length === 0 ? (
          <p className="text-gray-500">Empty</p>
        ) : (
          <ul>
            {stack.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}