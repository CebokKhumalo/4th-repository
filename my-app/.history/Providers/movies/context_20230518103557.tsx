import { createContext } from 'react';

export interface IMovies {
    title: string;
    duration: string;
    staring: string;
    category: string;
    id: string;
    imageLink: string;
    videolink: string;
}

export const INITIAL_STATE: IMovieStateContext = {};

export interface IMovieStateContext {
    readonly GetMovies?: IMovies;
}

export interface IMovieActionContext {
    getMovies?: (payload: IMovies) => void;
}
