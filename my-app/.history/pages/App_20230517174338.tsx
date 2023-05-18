import React from 'react';
import Link from 'next/link';
import { useGet } from 'restful-react';

interface Movies {
    title: string;
    duration: string;
    staring: string;
    category: string;
    id: string;
    imageLink: string;
    videolink: string;
}

const App = () => {
    const { data } = useGet({
        path: 'Movie/GetAll',
    });
    if (!data) {
        return <div>Loading...</div>;
    }

    const movies = data.result;
    console.log(movies);

    console.log('movies: ', movies);
    console.log('@movies', movies);

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
                gridGap: '20px',
            }}
        >
            {movies.map((movie: Movies) => (
                <div
                    key={movie.id}
                    style={{ flexBasis: '25%', margin: '0 10px' }}
                >
                    <h3>{movie.title}</h3>
                    <Link href="videoPlayer">
                        <img
                            src={movie.imageLink}
                            alt={movie.title}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default App;