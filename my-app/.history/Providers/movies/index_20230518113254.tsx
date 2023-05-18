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
import { error } from 'console';

const MovieProvider: FC<PropsWithChildren> = () => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    const ShowMovies = (payload: IMovies) => {
        const { data } = useGet({
            path: 'Movie/GetAll',
        });
        if (!data) {
            return <div>Loading...</div>;
        }

        dispatch(getMoviesRequestAction(data));
        console.log(data.result);
    };

    return (
        <MovieContext.Provider value={state}>
            <MovieActionContext.Provider value={{ ShowMovies }}>
                {children}
            </MovieActionContext.Provider>
        </MovieContext.Provider>
    );
};

const useGetMovieState = () => {
    const context = useContext(MovieContext);

    if (!context) {
        throw new error('no movies found');
    }
    return context;
};

const useGetMovieAction = () => {
    const context = useContext(MovieActionContext);

    if (context === undefined) {
        throw new error('no movies found');
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
