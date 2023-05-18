import React, { useContext, useReducer } from 'react';
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

const MovieProvider = () => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    const Movies = () => {
        const { data } = useGet({
            path: 'Movie/GetAll',
        });
        if (!data) {
            return <div>Loading...</div>;
        }
    };
};

const useGetMovieState = () => {
    const context = useContext(MovieContext);

    if (!context) {
        throw new error('no movies found');
    } else return context;
};

export { MovieProvider };
