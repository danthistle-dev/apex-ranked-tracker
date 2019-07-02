import React from 'react';
import { withRouter } from 'react-router';
import Firebase from '../../Firebase';

import Login from './Login';

class LoginContainer extends React.Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await Firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <Login onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(LoginContainer);