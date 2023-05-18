import React, { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { MovieReducer } from './reducer';
import { useGet } from 'restful-react';

import {
    IMovies,
    INITIAL_STATE,
    MovieContext,
    MovieActionContext,
} from './context';
import { getMoviesRequestAction } from './action';

const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    const getMovies = async () => {
        const { data } = useGet({
            path: 'Movie/GetAll',
        });
    };

    return (
        <MovieContext.Provider value={state}>
            <MovieActionContext.Provider value={{ getMovies }}>
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
