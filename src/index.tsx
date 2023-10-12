import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/App';
import './index.css';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(<App />);
