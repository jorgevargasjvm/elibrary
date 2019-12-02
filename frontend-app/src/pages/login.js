import React from 'react';
import '../css/login.css';

import { connect } from 'react-redux';

function Login({state}) {
  return (
    <div className="login">
      <header className="login-header">
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-1">
              <h3>Sign in</h3>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email *" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Your Password *"  />
                </div>
                <div className="form-group">
                  <input type="submit" className="btnSubmit" />
                </div>

              </form>
            </div>
            <div className="col-md-6 login-form-2">
              <h3>Sign up</h3>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name *"  />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email *"  />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Your Password *"  />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Your Password *"  />
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text">Rol</label>
                    </div>
                    <select className="custom-select" id="login_rol">
                    <option value="DEFAULT"></option>
                      <option value="1">Admin</option>
                      <option value="2">User</option>
                      
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input type="submit" className="btnSubmit" value="Login" />
                </div>

              </form>
            </div>
          </div>
        </div>
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
