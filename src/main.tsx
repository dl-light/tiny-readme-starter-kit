
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { App } from './app';

const enableMocking = async () => {
  if (import.meta.env.DEV) {
    try {
      const { worker } = await import('./testing/mocks/browser');
      // Initialize the MSW worker only in development
      return worker.start({ onUnhandledRequest: 'bypass' });
    } catch (error) {
      console.error('Error starting MSW worker:', error);
    }
  }
  return Promise.resolve();
};

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

// Start the app only after we've (maybe) initialized MSW
enableMocking().then(() => {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
