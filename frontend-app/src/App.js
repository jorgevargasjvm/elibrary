import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css';

import Welcome from './pages/welcome';
import Login from './pages/login';
import Libros from './pages/libros';
import Manager from './pages/manager';
import Libro from './pages/libro';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       

          <ul className="nav justify-content-end navbar navbar-dark bg-dark">
          <li className="nav-item">
              <div className="navbar-brand">
                <Link to="/"><h5></h5></Link>
              </div>
              
            </li>
            <li className="nav-item">
              <div className="navbar-brand">
                <Link to="/login"><h5>Login</h5></Link>
              </div>
              
            </li>
            <li className="nav-item">
            <div className="navbar-brand">
              <Link to="/libros"><h5>Libros</h5></Link>
              </div>
            </li>
            <li className="nav-item">
            <div className="navbar-brand">
              <Link to="/manager"><h5>Manager</h5></Link>
              </div>
            </li>
          </ul>
          <Route  exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/libros" component={Libros} />
          <Route path="/manager" component={Manager} />
          <Route path="/libro" component={Libro} />
       
      </BrowserRouter>
    </Provider>
  );
}

export default App;
