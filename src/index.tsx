import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, MantineProvider } from '@mantine/core';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css'

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);

  // Create a client
  const queryClient = new QueryClient()
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>

        <MantineProvider theme={theme} defaultColorScheme="dark">
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
