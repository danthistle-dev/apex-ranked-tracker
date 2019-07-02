import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Firebase from '../Firebase';
import Header from './Header';

import Home from '../views/Home';
import Login from '../views/Login/';
import SignUp from '../views/SignUp/'
import PrivateRoute from '../PrivateRoute';

class App extends React.Component {
  
  state = { loading: true, authenticated: false, user: null }

  componentWillMount() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return(
      <Router>
        <div className="ui container">
          <Header />
          <PrivateRoute 
            exact
            path="/"
            component={Home}
            authenticated={authenticated}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;