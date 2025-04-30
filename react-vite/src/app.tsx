
import React from 'react';

// Simple app component that doesn't depend on MSW or testing modules
export const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Bulletproof React Application</h1>
        <p className="text-center text-gray-600">
          Welcome to your Bulletproof React application. This is a starting point for your project.
        </p>
      </div>
    </div>
  );
};

export default App;
