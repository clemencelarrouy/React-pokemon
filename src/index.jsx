import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './reset.css';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
        </Routes>
   </BrowserRouter>, 
   document.getElementById('root')
);