import React, { useState, useEffect } from 'react';
import { useGet } from 'restful-react';
import { useMovie } from '../../Providers/movies';

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
        </div>
    );
};

export default VideoPlayer;
