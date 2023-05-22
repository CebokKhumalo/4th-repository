import React, { useEffect } from 'react';
import { useGet } from 'restful-react';
import { useMovie } from '../../Providers/movies';
import { useRouter } from 'next/router';

const VideoPlayer: React.FC = () => {
    const { getMovie } = useMovie();
    const router = useRouter();
    const { id } = router.query;

    const { refetch: getMovieById, data: movie } = useGet({
        path: 'Movie/Get',
        queryParams: { id },
    });

    useEffect(() => {
        if (id) {
            getMovieById();
        }
    }, [id, getMovieById]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    //console.log(getMovieById);
    console.log(movie);
    console.log(movie.results.title);

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
