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
        g
    </div>
    )
};

export default Dashboard;
