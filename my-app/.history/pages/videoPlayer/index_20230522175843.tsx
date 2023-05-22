import React, { useState, useEffect } from 'react';
import { useGet } from 'restful-react';
import { useMovie } from '../../Providers/movies';
import { useRouter } from 'next/router';

const VideoPlayer: React.FC = () => {
    //const { getMovie } = useMovie();
    const router = useRouter();

    const [movieId, setMovieId] = useState<string>('');

    const filePath =
        'C:\\Users\\cebolempumelelo\\OneDrive - Boxfusion International\\Documents\\work\\Boxfusion\\movie-app-three\\videos for portal';
    const encodedFilePath = encodeURI(filePath.replace(/\\/g, '/'));

    console.log(encodedFilePath);

    //debugger;
    const {
        refetch: getMovieById,
        loading,
        data: movie,
    } = useGet({
        path: `services/app/Movie/Get?id=${movieId}`,
    });

    useEffect(() => {
        const queryMovieId = router.query.id as string;
        if (queryMovieId) {
            setMovieId(queryMovieId);
        }
    }, [router.query.id]);

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

    const movieDetails = movie.result;

    const extractYouTubeVideoId = (url) => {
        if (url) {
            const trailerId = url.replace('https://youtu.be/', '');
            return trailerId;
        }
        return null;
    };

    {
        showTrailer && trailerId && (
            <iframe
                src={`https://www.youtube.com/embed/${trailerId}`}
                allowFullScreen
            ></iframe>
        );
    }

    const trailerId = extractYouTubeVideoId(movieDetails.trailerURL);

    return (
        <>
            <h2>{movieDetails.title}</h2>
            <p>Duration: {movieDetails.duration}</p>
            <p>Starring: {movieDetails.staring}</p>
            <p>Category: {movieDetails.category}</p>

            <a href="https://www.youtube.com/watch?v=VFSXOva8QwM">
                Link to YouTube Video
            </a>

            <img
                src={movieDetails.imageLink}
                alt={movieDetails.title}
                style={{
                    objectFit: 'cover',
                    width: '25%',
                    flex: '1', // Allow the image to grow and fill available space
                }}
            />
        </>
    );
};

export default VideoPlayer;
