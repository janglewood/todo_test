import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import App from './App';
import AddForm from './components/AddForm/AddForm';
import Header from './components/Header/Header';
import * as serviceWorker from './serviceWorker';
import store, { history } from './store/configureStore';
import { UserPage } from './components/UserPage/UserPage';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <App />} />
                <Route exact path="/form" component={AddForm} />
                <Route
                    exact
                    path='/user/:userId/'
                    render={(history) =>
                        <UserPage
                            history={history}
                            tasks={store.getState().form} 
                        />} 
                />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
