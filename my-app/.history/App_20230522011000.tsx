// import React from 'react';
// import Link from 'next/link';
// import { useGet } from 'restful-react';

// interface Movies {
//     title: string;
//     duration: string;
//     staring: string;
//     category: string;
//     id: string;
//     imageLink: string;
//     videolink: string;
// }

// const App = () => {
//     const { data } = useGet({
//         path: 'Movie/GetAll',
//     });
//     if (!data) {
//         return <div>Loading...</div>;
//     }

//     const movies = data.result;
//     console.log(movies);

//     console.log('movies: ', movies);
//     console.log('@movies', movies);

//     return (
//         <div
//             style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fill, minmax(30%, 300px))',
//                 gridGap: '20px',
//             }}
//         >
//             {movies.map((movie: Movies) => (
//                 <div
//                     key={movie.id}
//                     style={{
//                         display: 'grid',
//                         gridTemplateRows: 'max-content 200px 1fr',
//                     }}
//                 >
//                     <h3>{movie.title}</h3>
//                     <Link href="videoPlayer">
//                         <img
//                             src={movie.imageLink}
//                             alt={movie.title}
//                             style={{
//                                 objectFit: 'cover',
//                                 width: '100%',
//                                 height: '100%',
//                             }}
//                         />
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default App;
// // import { useGet } from 'restful-react';

// // interface Movies {
// //     title: string;
// //     duration: string;
// //     staring: string;
// //     category: string;
// //     id: string;
// //     videolink: string;
// // }

// // const Dashboard = () => {
// //     const { data } = useGet({
// //         path: 'Movie/GetAll',
// //     });
// //     if (!data) {
// //         return <div>Loading... {console.log(data)}</div>;
// //     }

// //     const movies = data.result;
// //     console.log(movies);

// //     console.log('movies: ', movies);
// //     console.log('@movies', movies);

// //     return (
// //         <div>
// //             <tbody>
// //                 <table>
// //                     <thead>
// //                         <tr>
// //                             <th>Title</th>
// //                             <th>Duration</th>
// //                             <th>Starring</th>
// //                             <th>Category</th>
// //                         </tr>
// //                     </thead>
// //                 </table>
// //                 <video controls>
// //                     <source src={movies.videoLink} type="video/mp4" />
// //                     Your browser does not support the video tag.
// //                 </video>
// //                 <h1>{movies.title}</h1>

// //                 {movies.map((movie: Movies) => (
// //                     <tr key={movie.id}>
// //                         <td>{movie.title}</td>
// //                         <td>{movie.duration}</td>
// //                         <td>{movie.staring}</td>
// //                         <td>{movie.category}</td>
// //                     </tr>
// //                 ))}
// //             </tbody>
// //         </div>
// //     );
// // };

// // export default Dashboard;
