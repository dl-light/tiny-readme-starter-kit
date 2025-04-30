
import { createRoot } from 'react-dom/client';
import '../react-vite/src/index.css';
import { App } from '../react-vite/src/app';

// Redirect to the react-vite app
createRoot(document.getElementById("root")!).render(<App />);
