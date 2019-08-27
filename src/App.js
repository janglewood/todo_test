import React from 'react';
import UserListPage from './pages/UserListPage/UserListPage';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import Header from './components/Header/Header';
import { history } from './store/configureStore';
import UserPage from './pages/UserPage/UserPage';
import AddUserPage from './pages/AddUserPage/AddUserPage';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={UserListPage} />
          <Route exact path="/form" component={AddUserPage} />
          <Route exact path='/user/:userId/' component={UserPage} />
          <Route exact path='/edit/user/:userId/' render={(history) => <AddUserPage isEditing history={history} />} />
          <Route exact path='/register' component={AuthPage} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
}


export default App;
