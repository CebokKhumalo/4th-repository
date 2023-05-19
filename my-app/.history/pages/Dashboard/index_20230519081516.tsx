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
                gridTemplateColumns: 'repeat(auto-fill, minmax(20%, 200px))', /* Adjust the values to make the cards smaller */,
                gridGap: '20px',
                width: '50%' /* Adjust the width as needed */,
                height: '50%' /* Adjust the height as needed */,
                border: '1px solid black' /* Add a black border */,
                position: 'absolute' /* Position it absolutely */,
                bottom: 0 /* Align to the bottom */,
                left: 0 /* Align to the left */,
            }}
        >
            {Movies.map((movie) => (
                <div
                    key={movie.id}
                    style={{
                        display: 'grid',
                        gridTemplateRows: 'max-content 200px 1fr',
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
    );
};

export default Dashboard;
