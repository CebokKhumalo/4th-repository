import React, { useEffect } from 'react';
import Link from 'next/link';
import { useMovie } from '../../Providers/movies';

interface Movie {
    title: string;
    duration: string;
    staring: string;
    category: string;
    id: string;
    imageLink: string;
    videolink: string;
}

const Dashboard = () => {
   /*const { data } = useGet({
       path: 'Movie/GetAll',
     });
     if (!data) {
         return <div>Loading...</div>;
     }*/
     const { getMovies, getMovie } = useMovie();

     getMovie();

     return (
         <div
            style={{
                 display: 'grid',
                 gridTemplateColumns: 'repeat(auto-fill, minmax(30%, 300px))',
                 gridGap: '20px',
             }}
         >
             {getMovies.map((movie: Movies) => (
                 <div
                     key={movie.id}
                     style={{
                         display: 'grid',
                         gridTemplateRows: 'max-content 200px 1fr',
                    }}
                 >
                     <h3>{movie.title}</h3>
                     <Link href="videoPlayer">
                         <img
                             src={movie.imageLink}
                             alt={movie.title}
                             style={{
                                 objectFit: 'cover',
                                 width: '100%',
                                 height: '100%',
                             }}
                         />
                    </Link>
//                 </div>
//             ))}
//         </div>
//     );
};

export default Dashboard;
