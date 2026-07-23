import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import AppRoutes from './routes/AppRoutes';
import { CursorFollower } from './components/ui/CursorFollower';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <ErrorBoundary>
            <div className="App">
              <CursorFollower />
              <AppRoutes />
            </div>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
