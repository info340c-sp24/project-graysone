import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/oswald";
import './Components/style.css'; 
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyCpoo3xZcYg8g4hhpL7Anx-go_KxZ6zjGE",
  authDomain: "hike-helper-91e73.firebaseapp.com",
  databaseURL: "https://hike-helper-91e73-default-rtdb.firebaseio.com",
  projectId: "hike-helper-91e73",
  storageBucket: "hike-helper-91e73.appspot.com",
  messagingSenderId: "607864889181",
  appId: "1:607864889181:web:31d3b694a799ba8a6e52b4"
};

export const app = initializeApp(firebaseConfig);

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);