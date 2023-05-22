import React, { useEffect } from 'react';
import Link from 'next/link';
import { useMovie } from '../../Providers/movies';

const Dashboard = () => {
    const { getMovie, Movies } = useMovie();

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {Movies.map((movie) => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <Link href={`/videoPlayer?id=${movie.id}`}>
                        <img
                            src={movie.imageLink}
                            alt={movie.title}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
