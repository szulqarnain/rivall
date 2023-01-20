import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './main.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/auth/context';
const googleId = "921892354743-59ubteoe1c1ek2uqhm7ng0k2nmu2ebkf.apps.googleusercontent.com"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <AuthProvider>
  <GoogleOAuthProvider clientId={googleId}>
    <App />
    </GoogleOAuthProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
