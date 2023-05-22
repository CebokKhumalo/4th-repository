import React from 'react';
import { createAction } from 'redux-actions';
import { IMovies, IMovieStateContext } from './context';

export enum MovieActionEnum {
    getMoviesRequest = 'GET_MOVIES',
    getMovieIdRequest = 'GET_ONE_MOVIES',
}

export const getMoviesRequestAction = createAction<
    IMovieStateContext,
    IMovies[]
>(MovieActionEnum.getMoviesRequest, (Movies) => ({ Movies }));

export const getMovieIdRequest = createAction<IMovieStateContext,IMovies>(MovieActionEnum.getMovieIdRequest)