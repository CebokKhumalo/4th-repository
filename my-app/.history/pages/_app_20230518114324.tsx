import { RestfulProvider } from 'restful-react';
import { MovieProvider } from '../Providers/movies';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    // Add any additional logic or providers here

    <MovieProvider>
        <RestfulProvider base="https://localhost:44311/api/services/app/">
            return <Component {...pageProps} />;
        </RestfulProvider>
    </MovieProvider>;
}

export default MyApp;
