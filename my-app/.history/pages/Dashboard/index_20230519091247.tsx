import React, { useEffect } from 'react';
import Link from 'next/link';
import { useMovie } from '../../Providers/movies';

const Dashboard = () => {
    const { getMovie, Movies } = useMovie();
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns:
                    'repeat(auto-fit, minmax(300px, 2fr))' /* Adjusted to fill the width */,
                gridGap: '20px',
                width: '90%' /* Adjust the width as needed */,
                height: '75%' /* Adjust the height as needed */,
                position: 'absolute' /* Position it absolutely */,
                bottom: 0 /* Align to the bottom */,
                left: 0 /* Align to the left */,
            }}
        >
            <div style={{ width: '100%' }}>
                {Movies.map((movie) => (
                    <div
                        key={movie.id}
                        style={{
                            display: 'grid',
                            gridTemplateRows: '200px 1fr 20%;',
                        }}
                    >
                        <h3>{movie.title}</h3>
                        <Link href="videoPlayer">
                            <img
                                src={movie.imageLink}
                                alt={movie.title}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
