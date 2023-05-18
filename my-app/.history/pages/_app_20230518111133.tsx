import { MovieProvider } from '../Providers/movies';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    // Add any additional logic or providers here
    <MovieProvider>
        return <Component {...pageProps} />;
    </MovieProvider>;
}

export default MyApp;
