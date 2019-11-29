import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css';

import Login from './pages/login';
import Libros from './pages/libros';
import Manager from './pages/manager';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/login"><h4>Login</h4></Link>
            </li>
            <li className="nav-item">
              <Link to="/libros"><h4>Libros</h4></Link>
            </li>
            <li className="nav-item">
              <Link to="/manager"><h4>Manager</h4></Link>
            </li>
          </ul>

          <Route path="/login" component={Login} />
          <Route path="/libros" component={Libros} />
          <Route path="/manager" component={Manager} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
