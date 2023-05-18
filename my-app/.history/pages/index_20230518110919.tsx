import Link from 'next/link';
import Layout from '../components/Layout';
import { RestfulProvider } from 'restful-react';
import App from './App';
import { MovieProvider } from '../Providers/movies';

const IndexPage = () => (
    <RestfulProvider base="https://localhost:44311/api/services/app/">
        <MovieProvider>
            <App />
        </MovieProvider>
    </RestfulProvider>
);

export default IndexPage;
