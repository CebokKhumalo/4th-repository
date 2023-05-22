import React, { useState, useEffect } from 'react';
import { useGet } from 'restful-react';
import { useMovie } from '../../Providers/movies';

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
    movieId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ movieId }) => {
    const { getMovie, Movies } = useMovie();
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {/* <h2>{movie.title}</h2>
            <p>Duration: {movie.duration}</p>
            <p>Starring: {movie.staring}</p>
            <p>Category: {movie.category}</p>
            <video controls>
                <source src={movie.videoLink} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <p {Movies.}></p>
        </div>
    );
};

export default VideoPlayer;
