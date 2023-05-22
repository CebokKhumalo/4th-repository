import React, {
    FC,
    PropsWithChildren,
    useContext,
    useEffect,
    useReducer,
} from 'react';
import { MovieReducer } from './reducer';
import { useGet } from 'restful-react';

import {
    IMovies,
    INITIAL_STATE,
    MovieContext,
    MovieActionContext,
} from './context';
import { getMoviesRequestAction, getMovieIdRequestAction } from './action';

const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    const { data: moviesData, refetch: getMoviesHttp } = useGet({
        path: 'Movie/GetAll',
    });
    useEffect(() => {
        moviesData && dispatch(getMoviesRequestAction(moviesData.result));
    }, [moviesData, dispatch]);
    const getMovie = () => getMoviesHttp();

    const {refetch:getMovieById,error:movieByIDError,loading:isFetchingMovie,data:movie}=useGet({path:'api/services/app/Movie/Get'})

    useEffect(()=>{
      if(!isFetchingMovie && movie?.id){
          dispatch(FetchMovieRequestAction(movie?.result));        
        } else if(movieByIDError) {
          // Handle error response     
        }    
    },[movie,isFetchingMovie,movieByIDError])
  
    const fetchedMovie =  (movieId: string) => {
      getMovieById({queryParams:{id:movieId}})    
    };

    return (
        <MovieContext.Provider value={state}>
            <MovieActionContext.Provider
                value={{
                    getMovie,
                }}
            >
                {children}
            </MovieActionContext.Provider>
        </MovieContext.Provider>
    );
};

const useGetMovieState = () => {
    const context = useContext(MovieContext);

    if (!context) {
        throw new Error('no movies found');
    }
    return context;
};

const useGetMovieAction = () => {
    const context = useContext(MovieActionContext);

    if (context === undefined) {
        throw new Error('no movies found');
    }
    return context;
};

const useMovie = () => {
    return {
        ...useGetMovieState(),
        ...useGetMovieAction(),
    };
};

export { MovieProvider, useMovie };
