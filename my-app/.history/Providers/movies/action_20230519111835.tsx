import React from 'react';
import { createAction } from 'redux-actions';
import { IMovies, IMovieStateContext } from './context';

export enum MovieActionEnum {
    getMoviesRequest = 'GET_MOVIES',
    getMovieIdRequest =""
}

export const getMoviesRequestAction = createAction<
    IMovieStateContext,
    IMovies[]
>(MovieActionEnum.getMoviesRequest, (Movies) => ({ Movies }));
