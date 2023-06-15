import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import './index.css';
import 'normalize.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading="" persistor={persistor}>
            <BrowserRouter basename="/githack-GooseTrack-app">
              <StyledTourProvider steps={steps}>
                <App />
              </StyledTourProvider>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);
