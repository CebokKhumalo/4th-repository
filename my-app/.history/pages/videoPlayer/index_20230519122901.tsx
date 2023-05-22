import React, { useState, useEffect } from 'react';
import { useGet } from 'restful-react';
import { useMovie } from '../../Providers/movies';
import { useRouter } from 'next/router';

const VideoPlayer: React.FC = () => {
    const { getMovie } = useMovie();
    const router = useRouter();
    const movieId = ; // Get the movie ID from the query parameters

    const {
        refetch: getMovieById,
        loading,
        data: movie,
    } = useGet({
        path: `Movie/Get/${movieId}`,
    });

    useEffect(() => {
        if (movieId) {
            // Fetch the movie using the movieId
            getMovieById();
        }
    }, [movieId, getMovieById]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!movie) {
        return <div>No movie found with the given ID</div>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Duration: {movie.duration}</p>
            <p>Starring: {movie.staring}</p>
            <p>Category: {movie.category}</p>
            <video controls>
                <source src={movie.videoLink} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
