import React, { FC, useContext, useEffect, useReducer } from 'react';
import { UserReducer } from './reducer';
import {
    ILogin,
    INITIAL_STATE,
    IUser,
    IUserStateContext,
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
import { usePost, useGet } from 'restful-react';
import { Action } from 'redux-actions';

const UserProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

    const { mutate: loginUser } = usePost({
        path: 'api/TokenAuth/Authenticate',
        onSuccess: (data) => {
            notification.success({
                message: 'Success',
                description: 'Login successful',
            });
            dispatch(loginUserRequestAction(data));
            localStorage.setItem('token', data.result.accessToken);
            window.location.href = '/dashboard';
        },
        onError: () => {
            notification.error({
                message: 'Error',
                description: 'Invalid username or password',
            });
        },
    });

    const { mutate: createUser } = usePost({
        path: 'api/services/app/Person/Create',
        onSuccess: (data) => {
            dispatch(createUserRequestAction(userRegInfo));
            message.success('user registration successful');
            window.location.href = '/login';
        },
    });

    const { data: userDetailsData, loading: userDetailsLoading } = useGet({
        path: `api/services/app/Person/Get?id=${id}`,
    });

    useEffect(() => {
        if (userDetailsData) {
            dispatch(getUserDetailsRequestAction(id));
            dispatch(setCurrentUserRequestAction(userDetailsData.result));
        }
    }, [userDetailsData]);

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
function dispatch(arg: Action<IUserStateContext>) {
    throw new Error('Function not implemented.');
}
