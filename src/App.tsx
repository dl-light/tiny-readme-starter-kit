
import React from 'react';
import './App.css';
import { AppProvider } from './react-vite/src/app/provider';
import { AppRouter } from './react-vite/src/app/router';

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
