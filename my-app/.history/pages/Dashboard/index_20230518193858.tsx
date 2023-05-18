import React, { useEffect } from 'react';
import Link from 'next/link';
import { useMovie } from '../../Providers/movies';


const Dashboard = () => {

     const { getMovies, getMovie } = useMovie();
useEffect(()=>{
    getMovie();
},[])

    

     return (
        <div>
            <h1>show me some love </h1>
        </div>
        //  <div
        //     style={{
        //          display: 'grid',
        //          gridTemplateColumns: 'repeat(auto-fill, minmax(30%, 300px))',
        //          gridGap: '20px',
        //      }}
        //  >
        //      {getMovies.map((movie) => (
        //          <div
        //              key={movie.id}
        //              style={{
        //                  display: 'grid',
        //                  gridTemplateRows: 'max-content 200px 1fr',
        //             }}
        //          >
        //              <h3>{movie.title}</h3>
        //              <Link href="videoPlayer">
        //                  <img
        //                      src={movie.imageLink}
        //                      alt={movie.title}
        //                      style={{
        //                          objectFit: 'cover',
        //                          width: '100%',
        //                          height: '100%',
        //                      }}
        //                  />
        //             </Link>
        //          </div>
        //      ))}
        //  </div>
     //);
}

export default Dashboard;
