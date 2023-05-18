import React, { FC, PropsWithChildren, useContext, useEffect, useReducer } from 'react';
import { MovieReducer } from './reducer';
import { useGet } from 'restful-react';

import {
    IMovies,
    INITIAL_STATE,
    MovieContext,
    MovieActionContext,
} from './context';
import { getMoviesRequestAction } from './action';

const MovieProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    useEffect(() => {
        const getMovie = async () => {
            const { data } = await useGet({
                path: 'Movie/GetAll',
            });

            dispatch(getMoviesRequestAction(data.result));
        };

        getMovie();
    }, []);

    return (
        <MovieContext.Provider value={state}>
            <MovieActionContext.Provider value={{}}>
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
