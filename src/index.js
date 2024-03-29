import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import '../src/fonts/Roboto/Roboto-Regular.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));


    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    {/* <App state={store.getState()}/> */}
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );