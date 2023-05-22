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
       
        </div>
    );
};

export default VideoPlayer;
