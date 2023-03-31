import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDeB3x0Pu4JJOLfKj7ckaCFDL3A62o7Wuo",
  authDomain: "telstar-f6387.firebaseapp.com",
  projectId: "telstar-f6387",
  storageBucket: "telstar-f6387.appspot.com",
  messagingSenderId: "390095909463",
  appId: "1:390095909463:web:2e7900a2d19b4fcb806912"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/*<React.StrictMode>*/}
    <App />
    {/*</React.StrictMode>*/}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
