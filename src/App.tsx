
import React from 'react';
import './App.css';

// Create a simplified app that doesn't rely on the complex structure
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bulletproof React Demo</h1>
        <p className="text-xl text-gray-600 mb-4">Welcome to the simplified demo app</p>
        <div className="mt-8 flex justify-center gap-4">
          <a 
            href="https://github.com/alan2207/bulletproof-react" 
            target="_blank" 
            rel="noreferrer"
            className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
