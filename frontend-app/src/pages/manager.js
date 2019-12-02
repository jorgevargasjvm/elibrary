import React from 'react';
import { Link } from 'react-router-dom'
import '../css/manager.css';
import data from '../data/';

import { connect } from 'react-redux';

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

function Menu() {
  const user = data.User
  console.log(user)
  return (
    <div className="row">
      <div className='menu container'>
        <div className='col-12'>
          <img src="https://www.calculadoraconversor.com/wp-content/uploads/2016/09/matriz-inversa-2x2.jpg" alt=""  />
        </div>

        <div className='col-12'>
          <h5>User : {user.nombre}</h5>
        </div>
        <div className='col-12'>
          <h6>Email : {user.email}</h6>
        </div>
        <div className='col-12'>
          <hr></hr>
        </div>

        <div className='col-12'>
          <ul className="nav flex-column">
            <li className="nav-item">
             
              <button type="button" className="btn btn-light" onClick={(e) => viewMenu('mis_libros')}>Mis libros</button>
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
              <button type="button" className="btn btn-light" onClick={(e) => viewMenu('eliminar_libro')}>Deliminar libro</button>
            </li>
            <li className="nav-item">
              <br></br>
              <button type="button" className="btn btn-danger">Out</button>
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

function MisLibros(libros) {
  console.log(libros)
  const lista = libros.libros.map((libro, key) =>
    <li className="list-group-item d-flex justify-content-between align-items-center" key={key.toString()}>
      <span className="badge badge-primary badge-pill"> {key + 1}</span>
      <h5>{libro.nombre}</h5>
      <button type="button" className="btn btn-dark btn-sm"><Link to="/libro">Ver</Link></button>
    </li>
  );

  return (
    <div className="mis_libros container" id="mis_libros">
      <h2>Mis libros</h2>
      <ul className="list-group">
        {lista}
      </ul>

    </div>
  );
}

function CrearLibro() {

  return (
    <div className="container crear_libro" id="crear_libro">
      <h2>Crear libros</h2>

      <form>
        <div className="form-group">
          <label >Nombre</label>
          <input type="email" className="form-control" id="nombre_libro" aria-describedby="Nombre del Libro" placeholder="Nombre del Libro" />
          <small id="emailHelp" className="form-text text-muted">Recuerde que los nombre tiene que ser unicos</small>
        </div>
        <div className="form-group">
          <label >Escritor</label>
          <input type="text" className="form-control" id="text_libro" placeholder="Nombre del escritor" />
        </div>
        <div className="form-group">
          <label >Genero</label>
          <input type="text" className="form-control" id="genero_libro" placeholder="El genero del libro" />
        </div>
        <div className="form-group">
          <label >Fecha</label>
          <input type="text" className="form-control" id="fecha_libro" placeholder="Fecha de publicacion del libro" />
        </div>
        <div className="form-group">
          <label >Detalles</label>
          <textarea type="text" className="form-control" id="detalles_libro" placeholder="Detalles sobre el libro" />
        </div>
        <div className="form-group">
          <label >Texto</label>
          <textarea rows="10" type="text" className="form-control" id="text_libro" placeholder="Texto del libro" />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}

function ActualizarLibro() {

  return (
    <div className="actualizar_libro container" id="actualizar_libro">
      <h2>Actualizar libros</h2>
      <form>
        <div className="form-group">
          <label >ID</label>
          <input type="email" className="form-control" id="id_libro" aria-describedby="ID del libro" placeholder="ID del libro" />
          <small id="emailHelp" className="form-text text-muted">Codigo del libro</small>
        </div>
        <div className="form-group">
          <label >Nombre</label>
          <input type="email" className="form-control" id="nombre_libro" aria-describedby="Nombre del Libro" placeholder="Nombre del Libro" />

        </div>
        <div className="form-group">
          <label >Escritor</label>
          <input type="text" className="form-control" id="text_libro" placeholder="Nombre del escritor" />
        </div>
        <div className="form-group">
          <label >Genero</label>
          <input type="text" className="form-control" id="genero_libro" placeholder="El genero del libro" />
        </div>
        <div className="form-group">
          <label>Fecha</label>
          <input type="text" className="form-control" id="fecha_libro" placeholder="Fecha de publicacion del libro" />
        </div>
        <div className="form-group">
          <label >Detalles</label>
          <textarea type="text" className="form-control" id="detalles_libro" placeholder="Detalles sobre el libro" />
        </div>
        <div className="form-group">
          <label >Texto</label>
          <textarea rows="10" type="text" className="form-control" id="text_libro" placeholder="Texto del libro" />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
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
          <input type="email" className="form-control" id="id_libro" aria-describedby="ID del libro" placeholder="ID del libro" />
          <small id="emailHelp" className="form-text text-muted">Codigo del libro</small>
        </div>

        <button type="submit" className="btn btn-primary ">Delete</button>
      </form>
    </div>
  );
}

function Body() {

  return (
    <div className="row">
      <div className="col-12">

        <MisLibros libros={data.Libros} />
        <CrearLibro />
        <ActualizarLibro />
        <EliminarLibro />

      </div>
    </div>

  )
}

function Manager({state}) {
  return (
    <div className="manager">
      <header className="manager-header">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>

          <div className="col-md-9">
            <Body />
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

export default connect(mapStateToProps, mapDispatchToProps)(Manager)
