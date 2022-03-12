import React from 'react';
import Header from './Header';
import Main from './Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Main/>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
