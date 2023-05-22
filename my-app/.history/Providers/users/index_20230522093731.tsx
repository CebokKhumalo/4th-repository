import React, {
    FC,
    PropsWithChildren,
    useReducer,
    useContext,
    useState,
} from 'react';
import { UserReducer } from './reducer';
import {
    ILogin,
    INITIAL_STATE,
    IUser,
    UserActionContext,
    UserContext,
} from './context';
import {
    loginUserRequestAction,
    createUserRequestAction,
    logOutUserRequestAction,
    setCurrentUserRequestAction,
    getUserDetailsRequestAction,
} from './action';

import { message, notification } from 'antd';
// import { useRouter } from 'next/router';

const UserProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    // const{ push} = useRouter();

    const loginUser = async (payload: ILogin) => {
        const { data: moviesData, refetch: getMoviesHttp } = useGet({
            path: 'api/TokenAuth/Authenticate',
        });
       /* useEffect(() => {
            moviesData && dispatch(getMoviesRequestAction(moviesData.result));
        }, [moviesData, dispatch]);
        const getMovie = () => getMoviesHttp();*/

            if (response.ok) {
                const data = await response.json();

                notification.success({
                    message: 'Success',
                    description: 'Login successful',
                });
                dispatch(loginUserRequestAction(data));
                localStorage.setItem('token', data.result.accessToken);
                window.location.href = '/MoviesTable';
            } else {
                notification.error({
                    message: 'Error',
                    description: 'Invalid username or password',
                });
            }
        } catch (error) {
            // Remove token from local storage
            notification.error({
                message: 'Error',
                description: 'Login failed',
            });
        }
    };

    const createUser = async (userRegInfo: IUser) => {
        const token = localStorage.getItem('token');
        await fetch('https://localhost:44311/api/services/app/Person/Create', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer  ${token}`,
            },
            body: JSON.stringify(userRegInfo),
        }).then((res) => {
            res.json().then((data) => {
                dispatch(createUserRequestAction(userRegInfo));
                message.success('user registration successfull');
                window.location.href = '/login';
            });
        });
    };
    const getUserDetails = async (id: number) => {
        const token = localStorage.getItem('token');
        await fetch(
            `https://localhost:44311/api/services/app/Person/Get?id=${id}`,
            {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer  ${token}`,
                },
            }
        ).then((res) => {
            res.json().then((data) => {
                dispatch(getUserDetailsRequestAction(id));
                dispatch(setCurrentUserRequestAction(data.result));
            });
        });
    };
    const logOutUser = () => {
        dispatch(logOutUserRequestAction());
        localStorage.removeItem('token');
    };
    return (
        <UserContext.Provider value={state}>
            <UserActionContext.Provider
                value={{
                    loginUser,
                    createUser,
                    logOutUser,
                    getUserDetails,
                }}
            >
                {children}
            </UserActionContext.Provider>
        </UserContext.Provider>
    );
};
function useLoginState() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }
    return context;
}
function useLoginActions() {
    const context = useContext(UserActionContext);
    if (context === undefined) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }
    return context;
}
function useUser() {
    return {
        ...useLoginActions(),
        ...useLoginState(),
    };
}
export { UserProvider, useUser };
