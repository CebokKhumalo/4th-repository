import React from 'react';
import Link from 'next/link';
import { useGet } from 'restful-react';

interface Movies {
    title: string;
    duration: string;
    staring: string;
    category: string;
    id: string;
    string: string;
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
        <div className="position-relative">
            <tbody>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Starring</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                </table>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {movies.map((movie: Movies) => (
                        <div key={movie.id} style={{ margin: '0 10px' }}>
                            <h3>{movie.title}</h3>
                            {/* Add other movie information here */}
                        </div>
                    ))}
                </div>
            </tbody>

            <video controls>
                <source src={movies.string} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h1>{movies.title}</h1>
        </div>
    );
};

export default App;
