import React, { useEffect } from 'react';
import { useGet } from 'restful-react';
import { useMovie } from '../../Providers/movies';
import { useRouter } from 'next/router';
import { getMovieIdRequestAction } from '../../Providers/movies/action';
import { useDispatch } from 're';

const dispatch = useDispatch();

const VideoPlayer: React.FC = () => {
    const { getMovieById, movieByIDError, isFetchingMovie, movie } = useMovie();
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isFetchingMovie && movie?.id) {
            dispatch(getMovieIdRequestAction(movie?.result));
        } else if (movieByIDError) {
            // Handle error response
        }
    }, [movie, isFetchingMovie, movieByIDError, dispatch]);

    useEffect(() => {
        if (id) {
            getMovieById(id);
        }
    }, [id, getMovieById]);

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
