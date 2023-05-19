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
                    'repeat(auto-fill, minmax(20%, 200px))' /* Adjust the values to make the cards smaller */,
                gridGap: '20px',
                width: '50%',
                height: '50%',
                border: '1px solid black',
                position: 'absolute',
                bottom: 0,
                left: 0,
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
