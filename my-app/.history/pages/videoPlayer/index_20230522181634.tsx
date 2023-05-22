import React, { useState, useEffect } from 'react';
import { useGet } from 'restful-react';
import { Typography } from 'antd';
import { useMovie } from '../../Providers/movies';
import { useRouter } from 'next/router';
const { Title } = Typography;

const VideoPlayer: React.FC = () => {
    //const { getMovie } = useMovie();
    const router = useRouter();

    const [movieId, setMovieId] = useState<string>('');

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

    return (
        <>
            <Title
                style={{
                    textAlign: 'center',
                }}
            >
                {movieDetails.title}
            </Title>
            <div style={{ textAlign: 'center' }}>
                <h3>Duration:</h3>
                <p>{movieDetails.duration}</p>

                <h3 style={{ marginTop: '20px' }}>Starring:</h3>
                <p>{movieDetails.staring}</p>

                <h3 style={{ marginTop: '20px' }}>Category:</h3>
                <p>{movieDetails.category}</p>
            </div>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VFSXOva8QwM"
                frameBorder="0"
                allowFullScreen
            ></iframe>

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
