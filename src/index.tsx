import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ColorModeScript } from '@chakra-ui/react';

import { App } from './components/App';

import './index.css';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <>
    <ColorModeScript />
    <App />
  </>,
);
