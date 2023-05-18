import React from 'react';
import { useGet } from 'restful-react';

const videoPlayer = () => {
    const {data} = useGet({
       path: `https://localhost:44311/api/services/app/Movie/Get?id=${}`
    })

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
