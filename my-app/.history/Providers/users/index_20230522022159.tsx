import React, {
    FC,
    PropsWithChildren,
    useReducer,
    useContext,
    useState,
    useEffect,
} from 'react';
import { MoviesReducer } from './reducer';
import {
    INITIAL_STATE,
    IMovies,
    MovieActionContext,
    MovieContext,
} from './context';
import {
    getMoviesRequestAction,
    getMoviesIdRequestAction,
    deleteMoviesRequestAction,
    updateMoviesRequestAction,
    createtMoviesRequestAction,
} from './actions';
import { message } from 'antd';

const MoviesProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(MoviesReducer, INITIAL_STATE);

    const getMovie = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(
            'https://localhost:44311/api/services/app/Movie/GetAll',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            dispatch(getMoviesRequestAction(data.result));
            console.log('Fetch', data.result);
        } else if (response.status === 401) {
            // Unauthorized access
            message.error('Unauthorized access. Please log in again.');
            window.location.href = '/login';
        } else {
            // Other errors
            message.error('Failed to fetch movies.');
        }
    };

    const createMovie = async (movieRegInfo: IMovies) => {
        const token = localStorage.getItem('token');
        await fetch('https://localhost:44311/api/services/app/Movie/Create', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieRegInfo),
        }).then((res) => {
            res.json()
                .then((data) => {
                    dispatch(createtMoviesRequestAction(movieRegInfo));
                    message.success('movie registration successfull');
                })
                .catch((error) => {
                    message.error(
                        'movie was not registration successfull',
                        error
                    );
                });
        });
    };

    const getMovieId = async (id: number) => {
        const token = localStorage.getItem('token');
        const response = await fetch(
            `https://localhost:44311/api/services/app/Movie/Get/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            dispatch(getMoviesIdRequestAction(data));
        } else if (response.status === 401) {
            // Unauthorized access
            message.error('Unauthorized access. Please log in again.');
            window.location.href = '/login';
        } else {
            // Other errors
            message.error('Failed to fetch movie.');
        }
    };

    const deleteMovie = async (movieId: string) => {
        await fetch(
            `https://localhost:44311/api/services/app/Movie/Delete?Id=${movieId}`,
            {
                method: 'DELETE',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((res) => {
            res.json().then((data) => {
                dispatch(deleteMoviesRequestAction(movieId));
                message.success('Movie deleted successfully.');
            });
        });
    };

    const updateMovie = async (movie: IMovies) => {
        const token = localStorage.getItem('token');
        const response = await fetch(
            `https://localhost:44311/api/services/app/Movie/Update`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movie),
            }
        );

        if (response.ok) {
            dispatch(updateMoviesRequestAction(movie));
            message.success('Movie updated successfully.');
        } else if (response.status === 401) {
            // Unauthorized access
            message.error('Unauthorized access. Please log in again.');
            window.location.href = '/login';
        } else {
            // Other errors
            message.error('Failed to update movie.');
        }
    };

    return (
        <MovieContext.Provider value={state}>
            <MovieActionContext.Provider
                value={{
                    getMovie,
                    createMovie,
                    getMovieId,
                    deleteMovie,
                    updateMovie,
                }}
            >
                {children}
            </MovieActionContext.Provider>
        </MovieContext.Provider>
    );
};
function useMoviesState() {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }
    return context;
}

function useMoviesActions() {
    const context = useContext(MovieActionContext);
    if (context === undefined) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }
    return context;
}

function useMovies() {
    return {
        ...useMoviesActions(),
        ...useMoviesState(),
    };
}
export { MoviesProvider, useMovies };
