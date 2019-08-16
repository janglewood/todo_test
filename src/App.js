import React from 'react';
import UserListPage from './pages/UserListPage/UserListPage';
import { connect } from  'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import Header from './components/Header/Header';
import { history } from './store/configureStore';
import UserPage from './pages/UserPage/UserPage';
import AddUserPage from './pages/AddUserPage/AddUserPage';

function App({ users }) {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <UserListPage users={users} />} />
                <Route exact path="/form" component={AddUserPage} />
                <Route
                    exact
                    path='/user/:userId/'
                    render={(history) =>
                        <UserPage
                            history={history}
                            users={users} 
                        />} 
                />
            </Switch>
        </ConnectedRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.form.users,
    router: state.router,
  }
};

export default connect(mapStateToProps)(App);
