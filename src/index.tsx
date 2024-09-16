import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { PostHogProvider } from 'posthog-js/react';

import { App } from './components/App';
import './index.css';

const options = {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
};

const container = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(
  <PostHogProvider apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY} options={options}>
    <App />
  </PostHogProvider>,
);
