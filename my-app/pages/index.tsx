import Link from 'next/link';
import Layout from '../components/Layout';
import { RestfulProvider } from 'restful-react';
import App from './App';

const IndexPage = () => (
    <RestfulProvider base="https://localhost:44311/api/services/app/">
        <App />
    </RestfulProvider>
);

export default IndexPage;
