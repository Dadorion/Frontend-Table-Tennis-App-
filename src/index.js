import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import StoreContext from './StoreContex';


const root = ReactDOM.createRoot(document.getElementById('root'));

function rerenderEntireTree(state) {
    // debugger;
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider
                // value={store}
                >
                    <App store={store} />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
}
);
// store.subscribe(rerenderEntireTree);