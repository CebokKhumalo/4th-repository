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

const videoPlayer = () => {
    const [viewMovie, setViewMovie] = useState<Movie>();

    const { data } = useGet({
        path: `https://localhost:44311/api/services/app/Movie/Get?id=`,
    });
    if (!data) {
        return <div>Loading... {console.log(data)}</div>;
    }

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
