import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Footer from "./components/Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
reportWebVitals();