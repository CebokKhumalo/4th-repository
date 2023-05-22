import React, { useState, useEffect } from 'react';
import { useGet } from 'restful-react';

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
    const [movie, setMovie] = useState<Movie | null>(null);

    const { data } = useGet({
        path: `Movie/Get?id=${movieId}`,
    });

    useEffect(() => {
        if (data && data.result.length > 0) {
            setMovie(data.result[0]);
        }
    }, [data]);

    if (!movie) {
        return <div>Loading...</div>;
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
