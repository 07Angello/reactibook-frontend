import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";
import { toast } from 'react-toastify';
import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async( dispatch ) => {
        const resp = await fetchWithoutToken( 'auth', { email, password }, 'POST');
        const { Data, Message, Token, OK } = await resp.json();

        if (!OK && Message && Message.length > 0 ) {
            toast.warn( Message );
        } else {
            localStorage.setItem('token', Token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            console.log(Data);

            dispatch( login({ 
                uid: Data._id,
                name: Data.name,
                profilePhoto: Data.profilePhoto,
                coverPhoto: Data.coverPhoto
            }) );

            toast.success( `Welcome ${ Data.name }!` );
        }
    }
}

export const startRegister = (email, password, name) => {
    return async( dispatch ) => {
        const resp = await fetchWithoutToken( 'auth/register', { email, password, name }, 'POST');
        const { Data, Message, Token, OK } = await resp.json();

        if (!OK && Message && Message.length > 0 ) {
            toast.warn( Message );
        } else {
            localStorage.setItem('token', Token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({ 
                uid: Data._id,
                name: Data.name,
                profilePhoto: Data.profilePhoto,
                coverPhoto: Data.coverPhoto
            }) );

            toast.success( `Welcome ${ Data.name }!` );
        }
    }
}

export const startChecking = () => {
    return async( dispatch ) => {
        const resp = await fetchWithToken( 'auth/renew-token', {} );
        const { Data, Message, Token, OK } = await resp.json();

        if (!OK && Message && Message.length > 0 ) {
            dispatch( checkingFinish() );
        } else {
            localStorage.setItem('token', Token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            console.log(Data);

            dispatch( login({ 
                uid: Data._id,
                name: Data.name,
                profilePhoto: Data.profilePhoto,
                coverPhoto: Data.coverPhoto
            }) );
        }
    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout });
