import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import en from 'javascript-time-ago/locale/en';
import TimeAgo from 'javascript-time-ago';
import { Box } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import SNiCTheme from './theme';
import MainMenu from './components/navigation/MainMenu';
import ContextProviders from './contexts/ContextProviders';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

TimeAgo.addDefaultLocale(en);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ContextProviders>
          <SNiCTheme>
            <MainMenu>
              <Box>
                <img
                  src="/lines/menu-hor.svg"
                  alt=""
                  style={{
                    position: 'absolute',
                    top: '6rem',
                    left: '-2rem',
                    width: '100%',
                    height: '95px',
                    padding: '0',
                    margin: '0',

                    zIndex: '-1',
                  }}
                />
              </Box>
              <Box>
                <img
                  src="/lines/back-ver.svg"
                  alt=""
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '75vw',
                    height: '100vh',
                    width: 'auto',

                    overflowY: 'hidden',
                    zIndex: '-1',
                  }}
                />
              </Box>
              <Router />
            </MainMenu>
          </SNiCTheme>
        </ContextProviders>
      </LocalizationProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
