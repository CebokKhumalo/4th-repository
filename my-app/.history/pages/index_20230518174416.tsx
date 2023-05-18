import Link from 'next/link';
import React from 'react';
import Dashboard from '../components/Dashboard';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Next.js</h1>
            <Link href={<Dashboard />}>dashboard</Link>
        </div>
    );
};

export default Home;
