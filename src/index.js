import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'normalize.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading="" persistor={persistor}>
          <BrowserRouter basename="/githack-GooseTrack-app">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
