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
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between', // Adjust alignment as needed
                gap: '20px',
                width: '90%', // Adjust the width as needed
                height: '65%', // Adjust the height as needed
                position: 'absolute', // Position it absolutely
                bottom: 0, // Align to the bottom
                left: 0, // Align to the left
            }}
        >
            {Movies.map((movie) => (
                <div
                    key={movie.id}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '25%',
                        minHeight: '50px', // Set minimum height for the container
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
                                flex: '1', // Allow the image to grow and fill available space
                            }}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
