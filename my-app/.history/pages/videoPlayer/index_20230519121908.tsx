import React, { useState, useEffect } from 'react';
import { useGet } from 'restful-react';
import { useMovie } from '../../Providers/movies';
import { useRouter } from 'next/router';

interface Movie {
    title: string;
    duration: string;
    staring: string;
    category: string;
    id: string;
    imageLink: string | null;
    videoLink: string | null;
}

interface VideoPlayerProps {
    // Remove the movieId prop
}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
    const { getMovie, Movies } = useMovie();
    const router = useRouter();
    const movieId = router.query.id; // Get the movie ID from the query parameters

    const { refetch: getMovieById, data: movie } = useGet({ path: 'Movie/Get' });

    useEffect(() => {
        if (movieId) {
            // Fetch the movie using the movieId
            getMovieById({ queryParams: { id: movieId } });
        }
    }, [movieId, getMovieById]);

    return (
        <div>
            {movie && (
                <h1>ID: {movie.id}</h1>
            )}
        </div>
    );
};

export default VideoPlayer;
