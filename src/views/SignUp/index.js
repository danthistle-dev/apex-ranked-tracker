import React, { Component } from "react";
import { withRouter } from "react-router";
import Firebase from "../../Firebase";

import SignUp from "./SignUp";

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await Firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUp onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);