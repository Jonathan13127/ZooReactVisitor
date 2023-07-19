import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import "./index.css"
import Home from "./components/Home/Home";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar />
            <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="*" element={<NotFound/> }/>
            </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
