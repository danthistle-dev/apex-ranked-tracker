import React from 'react';

const SignUpView = ({ onSubmit }) => {
  return (
    <div className="ui container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20vh' }}>
      <div className="ui inverted segment">
      <h2 className="ui dividing header">Sign up</h2>
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
        <button className="ui submit button" type="submit">Sign Up</button>
      </form>
    </div>
    </div>
    
  );
};

export default SignUpView;