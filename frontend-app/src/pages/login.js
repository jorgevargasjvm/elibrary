import React from 'react';
import '../css/login.css';

import { connect } from 'react-redux';

function Login() {
  return (
    <div className="login">
      <header className="login-header">
       <h1>login</h1>
      </header>

    </div>
  );
}

const mapStateToProps = state => ({
  state: state
})
const mapDispatchToProps = dispatch => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
