import React from 'react';
import Header from './Header';
import Main from './Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Header />
                <Main/>
                <ToastContainer />
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
