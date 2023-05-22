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
import { Action } from 'redux-actions';
import { useGet } from 'restful-react';
// import { useRouter } from 'next/router';

const UserProvider = ({ }) => {
   


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
    function dispatch(arg0: Action<IUserStateContext>) {
        throw new Error('Function not implemented.');
    }

