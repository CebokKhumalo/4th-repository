import React, { useState } from 'react';
import { useGet } from 'restful-react';

interface Movies {
    title: string;
    duration: string;
    staring: string;
    category: string;
    id: string;
    videolink: string;
}

const videoPlayer = (movies: Movies) => {
    const [viewMovie, setViewMovie] = useState<Movies>();

    const { data } = useGet({
        path: `https://localhost:44311/api/services/app/Movie/Get?id=${movies.id}`,
    });
    if (!data) {
        return <div>Loading... {console.log(data)}</div>;
    }

    const viewedMovie = data.result.idw;
    console.log(viewedMovie);
    return (
        <div>
            {' '}
            <video controls>
                <source type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default videoPlayer;
