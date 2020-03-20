import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/configureStore';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        {/* <PersistGate store={store} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
