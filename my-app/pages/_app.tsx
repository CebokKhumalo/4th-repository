import React from 'react';
import { RestfulProvider } from 'restful-react';
import { AppProps } from 'next/app';
import { MovieProvider } from '../Providers/movies';

function MyApp({ Component, pageProps }: AppProps) {
    // Add any additional logic or providers here
    return (
        <RestfulProvider base="https://localhost:44311/api/services/app/">
            <MovieProvider>
                <Component {...pageProps} />
            </MovieProvider>
        </RestfulProvider>
    );
}

export default MyApp;
