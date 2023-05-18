import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Next.js</h1>
            <Link href={<Das}>dashboard</Link>
        </div>
    );
};

export default Home;
