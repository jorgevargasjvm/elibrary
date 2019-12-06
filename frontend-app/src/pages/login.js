import React from 'react';
import { useHistory } from "react-router-dom";
import '../css/login.css';
import { connect } from 'react-redux';

const axios = require('axios');

function loginIn(inUser) {
  console.log("login in function");
  var email = document.getElementById('email-i').value;
  var password = document.getElementById('password-i').value;

  if (email !== '' && password !== '') {
    //axios API users
  // 
    axios.post('http://localhost:3000/api/sign_in', { email, password })
      .then(function (response) {

        var docs = response.data;
        inUser({ email: docs.email, image: docs.image, nombre: docs.nombre, rol: docs.rol, token: docs.token });
        alert(`Welcome ${docs.nombre} !!!`);

      })
      .catch(function (error) {
        // handle error
        alert("Error email y password");
      })
  } else {
    if (email === '') {
      alert("llene email");
    }
    if (password === '') {
      alert("llene passwrod");
    }
  }

}
function loginUp() {
  var loginUp = true;
  console.log("login up function")
  var name = document.getElementById('name-u').value;
  var email = document.getElementById('email-u').value;
  var password = document.getElementById('password-1-u').value;
  var password_2 = document.getElementById('password-2-u').value;
  var e = document.getElementById("rol-u");
  var rol = e.options[e.selectedIndex].value;
  var image = document.getElementById('image-u').value;
 
  if (name === "") {
    alert('coloque un nombre');
    loginUp = false;
  }
  if (email === "") {
    alert('coloque un email');
    loginUp = false;
  }
  if (password !== password_2) {
    alert('password son diferentes');
    loginUp = false;
  }
  if (password === "" || password_2 === "") {
    alert('coloque un password');
    loginUp = false;
  }
  if (rol === "DEFAULT") {
    alert('selecciones un rol (User o Admin)');
    loginUp = false;
  }

  if (loginUp) {
    axios.post('http://localhost:3000/api/sign_up', {name, email, password, rol, image})
      .then(function (response) {
        // handle success
        alert(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }


}
function Login({ state, inUser }) {
  
  
  return (
    <div className="login">

      <header className="login-header">
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-1">
              <h3>Sign in</h3>
              <div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email *" id="email-i" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Your Password *" id="password-i" />
                </div>
                <div className="form-group">
                  <button className="btn btn-dark" onClick={() => loginIn(inUser)} >Entrar</button>
                </div>

              </div>
            </div>
            <div className="col-md-6 login-form-2">
              <h3>Sign up</h3>
              <div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name *" id="name-u" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email *" id="email-u" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Your Password *" id="password-1-u" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Your Password *" id="password-2-u" />
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text">Rol</label>
                    </div>
                    <select className="custom-select" id="rol-u">
                      <option value="DEFAULT"></option>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>

                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Url image" id="image-u" />
                </div>
                <div className="form-group">
                  <button className="btn btn-dark" onClick={() => loginUp()} >Registrar</button>
                </div>

              </div>
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

  inUser(user) {
    dispatch({
      type: "LOGIN_IN",
      payload: user
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
