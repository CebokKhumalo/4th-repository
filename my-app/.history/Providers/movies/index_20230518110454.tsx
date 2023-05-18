import React from 'react';
import { MovieReducer } from './reducer';
import {
    IMovies,
    INITIAL_STATE,
    MovieContext,
    MovieActionContext,
} from './context';
import { getMoviesRequestAction } from './action';

const MovieProvider = () => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);
};

export { MovieProvider };
