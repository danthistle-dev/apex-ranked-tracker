import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onSubmit }) => {
  return (
    <div className="ui container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20vh' }}>
      <div className="ui inverted segment">
      <h2 className="ui dividing header">Log in</h2>
      <form className="ui inverted form" onSubmit={onSubmit}>
        <div className="field">
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
        </div>
        <div className="field">
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
        </div>        
        <button className="ui submit button" type="submit">Log in</button>
        <Link to="/signup">Or sign up</Link>
      </form>
      </div>
      
    </div>
  );
}

export default Login;

/*
  <div 
    style={{ marginTop: '150px' }}
  > 
    <StyledFirebaseAuth 
      uiConfig={uiConfig} 
      firebaseAuth={Firebase.auth()}
    /> 
  </div>

  const uiConfig = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      Firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      Firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    tosUrl: '<your-tos-url>',
    privacyPolicyUrl: function() {
      window.location.assign('<your-privacy-policy-url>');
    }
  };
*/