import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'normalize.css';
// import { store } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/githack-GooseTrack-app">
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
