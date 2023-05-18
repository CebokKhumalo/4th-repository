import React from 'react';
import { RestfulProvider } from 'restful-react';
import { AppProps } from 'next/app';
import { MovieProvider } from '../Providers/movies';
import '../styles/global.css';
import App from './App';

function MyApp(/*{ Component, pageProps }*/) {
    // Add any additional logic or providers here

    <RestfulProvider base="https://localhost:44311/api/services/app/">
        <MovieProvider>
            <App />
        </MovieProvider>
    </RestfulProvider>;
}

export default MyApp;
