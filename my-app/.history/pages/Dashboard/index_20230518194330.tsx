import React, { useEffect } from 'react';
import Link from 'next/link';
import { useMovie } from '../../Providers/movies';

const Dashboard = () => {
    const { getMovies, getMovie } = useMovie();
    useEffect(() => {
        getMovie()
    }, []);

    return (
        <div>
            <h1>show me some love </h1>

            {getMovies.map(movie => (
                <p key={movie.id}>{movie.title}</p>
            ))}
        </div>
    
    )
};

export default Dashboard;
