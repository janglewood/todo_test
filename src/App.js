import React from 'react';
import UserListPage from './pages/UserListPage/UserListPage';
import { connect } from  'react-redux';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import Header from './components/Header/Header';
import { history } from './store/configureStore';
import UserPage from './pages/UserPage/UserPage';
import AddUserPage from './pages/AddUserPage/AddUserPage';
import { getProfileSaga } from './sagas/getProfilesSaga';
import { useSaga } from './hooks/useSaga';

function App({ users }) {
  useSaga(getProfileSaga);
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
                <Route
                    exact
                    path='/edit/user/:userId/'
                    render={(history) => <AddUserPage users={users} isEditing history={history} />} 
                />
            </Switch>
        </ConnectedRouter>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    // users: getAccordingProfiles(state),
    users: state.form.users,
  }
};

export default connect(mapStateToProps)(App);
