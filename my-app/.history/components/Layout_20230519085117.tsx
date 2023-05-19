import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <style>{`
        nav a {
            text-decoration: none;
            font-size: 30px;
            padding: 5px 10px;
            color: black;
        }

        nav a:hover {
            color: pink;
        }
    `}</style>
        </Head>
        <header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div>
                <img
                    src="/Grim Moviies.png"
                    alt="Logo"
                    style={{ width: '50px', height: '50px' }}
                />
            </div>
            <nav>
                <Link href="/dashbord">Home</Link> <Link href="#">Genres</Link>{' '}
                <Link href="#">Movies</Link> <Link href="#">Upcoming</Link>
            </nav>
            {children}
        </header>
    </div>
);

export default Layout;
