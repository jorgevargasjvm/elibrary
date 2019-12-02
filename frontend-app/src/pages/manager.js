import React from 'react';
import { Link } from 'react-router-dom'
import '../css/manager.css';
import data from '../data/';

import { connect } from 'react-redux';


const axios = require('axios');

async function mis_libro(state) {
  // var email = document.getElementById("email_libro_crear").value;
  // alert(state.email);
  // axios.post('http://localhost:3000/api/read_libro', { email })
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })

}

async function crear_libro() {
  alert("crear un libro")
  var email = document.getElementById("email_libro_crear").value
  var nombre = document.getElementById("nombre_libro_crear").value
  var escritor = document.getElementById('escritor_libro_crear').value;
  var genero = document.getElementById('genero_libro_crear').value;
  var fecha = document.getElementById('fecha_libro_crear').value;
  var detalles = document.getElementById('detalles_libro_crear').value;
  var text = document.getElementById('text_libro_crear').value;

  if (nombre && escritor && genero && fecha && detalles && text && email) {
    alert("campos llenos")


    axios.post('http://localhost:3000/api/create_libro', { email, nombre, escritor, genero, fecha, detalles, text })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  else {
    alert("Tiene que llenar todos los campos")
  }
}
function actualizar_libro() {
  alert("actualizar un libro")
  var email = document.getElementById("email_libro_actualizar").value;
  var id = document.getElementById("id_libro_actualizar").value;
  var nombre = document.getElementById("nombre_libro_actualizar").value;
  var escritor = document.getElementById('escritor_libro_actualizar').value;
  var genero = document.getElementById('genero_libro_actualizar').value;
  var fecha = document.getElementById('fecha_libro_actualizar').value;
  var detalles = document.getElementById('detalles_libro_actualizar').value;
  var text = document.getElementById('text_libro_actualizar').value;
  if (id && nombre && escritor && genero && fecha && detalles && text && email) {
    alert("campos llenos")
    axios.post('http://localhost:3000/api/update_libro', {id, email, nombre, escritor, genero, fecha, detalles, text })
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  else {
    alert("Tiene que llenar todos los campos")
  }
}
function eliminar_libro() {
  alert("deliminar un libro")
  var id = document.getElementById("id_libro_eliminar").value;
  if (id) {
    alert("campos llenos")
    axios.post('http://localhost:3000/api/delete_libro', {id})
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  else {
    alert("Tiene que llenar todos los campos")
  }
}
function viewMenu(menu) {

  document.getElementById('mis_libros').style.display = 'none';
  document.getElementById('crear_libro').style.display = 'none';
  document.getElementById('actualizar_libro').style.display = 'none';
  document.getElementById('eliminar_libro').style.display = 'none';

  switch (menu) {
    case "mis_libros":
      document.getElementById('mis_libros').style.display = 'inline';
      break;
    case "crear_libro":
      document.getElementById('crear_libro').style.display = 'inline';
      break;
    case "actualizar_libro":
      document.getElementById('actualizar_libro').style.display = 'inline';
      break;
    case "eliminar_libro":
      document.getElementById('eliminar_libro').style.display = 'inline';
      break;
    default:
      document.getElementById('mis_libros').style.display = 'none';
      document.getElementById('crear_libro').crear_libro.style.display = 'none';
      document.getElementById('actualizar_libro').style.display = 'none';
      document.getElementById('eliminar_libro').style.display = 'none';
  }
}

function Menu({ outUser, state }) {
  // const user = data.User
  // console.log(user)
  return (
    <div className="row">
      <div className='menu container'>
        <div className='col-12'>
          <img src={state.image} alt="" />
        </div>

        <div className='col-12'>
          <h3>{state.nombre}</h3>
        </div>
        <div className='col-12'>
          <h4>{state.email}</h4>
        </div>
        <div className='col-12'>
          <hr></hr>
        </div>

        <div className='col-12'>
          <ul className="nav flex-column">
            <li className="nav-item">

              {/* <button type="button" className="btn btn-light" onClick={(e) => viewMenu('mis_libros')}>Mis libros</button> */}
            </li>
            <li className="nav-item">
              <br></br>
              <button type="button" className="btn btn-light" onClick={(e) => viewMenu('crear_libro')}>Crear libro</button>
            </li>
            <li className="nav-item">
              <br></br>
              <button type="button" className="btn btn-light" onClick={(e) => viewMenu('actualizar_libro')}>Actualizar libro</button>
            </li>
            <li className="nav-item">
              <br></br>
              <button type="button" className="btn btn-light" onClick={(e) => viewMenu('eliminar_libro')}>Eliminar libro</button>
            </li>
            <li className="nav-item">
              <br></br>
              <button type="button" className="btn btn-danger" onClick={(e) => outUser()}>Out</button>
            </li>
          </ul>
        </div>

        <div className='col-12'>
          <hr></hr>
        </div>

      </div>
    </div>

  );
}

function MisLibros({state}) {
  // console.log(libros)
  var d = mis_libro(state);
  console.log(d)
  // const lista = libros.libros.map((libro, key) =>
  //   <li className="list-group-item d-flex justify-content-between align-items-center" key={key.toString()}>
  //     <span className="badge badge-primary badge-pill"> {key + 1}</span>
  //     <h5>{libro.nombre}</h5>
  //     <button type="button" className="btn btn-dark btn-sm"><Link to="/libro">Ver</Link></button>
  //   </li>
  // );

  return (
    <div className="mis_libros container" id="mis_libros">
      <h2>Mis libros</h2>
      <ul className="list-group">
        
      </ul>

    </div>
  );
}

function CrearLibro() {

  return (
    <div className="container crear_libro" id="crear_libro">
      <h2>Crear libros</h2>

      <div>
        <div className="form-group">
          <label >Email</label>
          <input type="email" className="form-control" id="email_libro_crear" aria-describedby="Email" placeholder="Email" />
          <small className="form-text text-muted">El correo tiene que se valido</small>
        </div>
        <div className="form-group">
          <label >Nombre</label>
          <input type="email" className="form-control" id="nombre_libro_crear" aria-describedby="Nombre del Libro" placeholder="Nombre del Libro" />
          <small className="form-text text-muted">Recuerde que el nombre tiene que ser unico</small>
        </div>
        <div className="form-group">
          <label >Escritor</label>
          <input type="text" className="form-control" id="escritor_libro_crear" placeholder="Nombre del escritor" />
        </div>
        <div className="form-group">
          <label >Genero</label>
          <input type="text" className="form-control" id="genero_libro_crear" placeholder="El genero del libro" />
        </div>
        <div className="form-group">
          <label >Fecha</label>
          <input type="text" className="form-control" id="fecha_libro_crear" placeholder="Fecha de publicacion del libro" />
        </div>
        <div className="form-group">
          <label >Detalles</label>
          <textarea type="text" className="form-control" id="detalles_libro_crear" placeholder="Detalles sobre el libro" />
        </div>
        <div className="form-group">
          <label >Texto</label>
          <textarea rows="10" type="text" className="form-control" id="text_libro_crear" placeholder="Texto del libro" />
        </div>
        <button type="button" className="btn btn-dark btn-sm" onClick={() => crear_libro()}>Save</button>
      </div>
    </div>
  );
}

function ActualizarLibro() {

  return (
    <div className="actualizar_libro container" id="actualizar_libro">
      <h2>Actualizar libros</h2>
      <div>
        <div className="form-group">
          <label >ID</label>
          <input type="email" className="form-control" id="id_libro_actualizar" aria-describedby="ID del libro" placeholder="ID del libro" />
          <small id="emailHelp" className="form-text text-muted">Codigo del libro</small>
        </div>
        <div className="form-group">
          <label >Email</label>
          <input type="email" className="form-control" id="email_libro_actualizar" aria-describedby="Email" placeholder="Email" />
          <small id="emailHelp" className="form-text text-muted">El correo tiene que ser valido</small>
        </div>
        <div className="form-group">
          <label >Nombre</label>
          <input type="email" className="form-control" id="nombre_libro_actualizar" aria-describedby="Nombre del Libro" placeholder="Nombre del Libro" />

        </div>
        <div className="form-group">
          <label >Escritor</label>
          <input type="text" className="form-control" id="escritor_libro_actualizar" placeholder="Nombre del escritor" />
        </div>
        <div className="form-group">
          <label >Genero</label>
          <input type="text" className="form-control" id="genero_libro_actualizar" placeholder="El genero del libro" />
        </div>
        <div className="form-group">
          <label>Fecha</label>
          <input type="text" className="form-control" id="fecha_libro_actualizar" placeholder="Fecha de publicacion del libro" />
        </div>
        <div className="form-group">
          <label >Detalles</label>
          <textarea type="text" className="form-control" id="detalles_libro_actualizar" placeholder="Detalles sobre el libro" />
        </div>
        <div className="form-group">
          <label >Texto</label>
          <textarea rows="10" type="text" className="form-control" id="text_libro_actualizar" placeholder="Texto del libro" />
        </div>
        <button type="button" className="btn btn-dark btn-sm" onClick={() => actualizar_libro()}>Update</button>
      </div>
    </div>
  );
}

function EliminarLibro() {

  return (
    <div className="eliminar_libro container" id="eliminar_libro">
      <h2>Eliminar libros</h2>
      <form>
        <div className="form-group">
          <label >ID</label>
          <input type="email" className="form-control" id="id_libro_eliminar" aria-describedby="ID del libro" placeholder="ID del libro" />
          <small id="emailHelp" className="form-text text-muted">Codigo del libro</small>
        </div>


        <button type="button" className="btn btn-dark btn-sm" onClick={() => eliminar_libro()}>Delete</button>
      </form>
    </div>
  );
}

function Body({state}) {

  return (
    <div className="row">
      <div className="col-12">

        <MisLibros libros={data.Libros} state={state} />
        <CrearLibro />
        <ActualizarLibro />
        <EliminarLibro />

      </div>
    </div>

  )
}

function Manager({ state, outUser }) {
  console.log(state);
  if (state.rol === "Admin") {
    return (
      <div className="manager">
        <header className="manager-header">
          <div className="row">
            <div className="col-md-3">
              <Menu outUser={outUser} state={state} />
            </div>

            <div className="col-md-9">
              <Body state={state}/>
            </div>
          </div>

        </header>

      </div>
    );
  }
  else {
    return (
      <div className="manager">
        <header className="manager-header">
          <div className="container">
            <h1>Tiene que logiarte con una cuenta de Administrador</h1>
          </div>

        </header>

      </div>
    );
  }

}
const mapStateToProps = state => ({
  state: state
})
const mapDispatchToProps = dispatch => ({

  outUser() {
    dispatch({
      type: "LOGIN_OUT",
      payload: null
    })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Manager)
