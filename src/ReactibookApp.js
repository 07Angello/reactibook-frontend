import React from 'react'
import { Provider } from 'react-redux';

import { store } from './redux/store/store';
import { AppRouter } from './routes/AppRouter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ReactibookApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
            <ToastContainer
                position="top-right"
                newestOnTop={ true }
                autoClose={ 4500 }
            />
        </Provider>
    )
}
