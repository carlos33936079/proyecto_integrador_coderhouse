import React from 'react';
import Header from './Header';
import Main from './Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { UserContextProvider } from './context/UserContext';
import Footer from './Footer';

function App() {
    return (
        <UserContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <Header />
                    <Main/>
                    <Footer/>
                    <ToastContainer />
                </BrowserRouter>
            </CartContextProvider>
        </UserContextProvider> 
    );
}

export default App;
