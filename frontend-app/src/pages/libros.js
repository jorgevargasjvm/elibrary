import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../css/libros.css';

const { useState, useEffect } = React;
function eliminar(id) {
  var eliminar = document.getElementById(id)

  if (id) {
    alert("campos llenos")
    axios.post('http://localhost:3000/api/delete_libro', { id })
      .then(function (response) {
        // handle success
        alert("deliminar un libro")
        eliminar.parentNode.removeChild(eliminar);
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

function ListaAdmin(libros, state) {
  console.log(state)
  var read_libros = libros.libros;

  if (Object.keys(read_libros).length !== 0) {

    return (
      <div className="lista-libros">
        <ul className="list-group">
          {Object.keys(read_libros).map((key, i) => (

            <li className="list-group-item d-flex justify-content-between align-items-center" key={key} id={key}>
              <span className="badge badge-primary badge-pill"><h6> {i + 1} </h6></span>
              <h5>Nombre : {read_libros[key].nombre} User:  {read_libros[key].email}</h5>
              <button type="button" className="btn btn-dark btn-sm" id="eliminar" onClick={() => eliminar(key)}>Eliminar</button>
              <button type="button" className="btn btn-dark btn-sm"><Link to={`/libro?id=${key}`}>Ver</Link></button>
            </li>
          ))}
        </ul>

      </div>
    );



  } else {
    console.log("no esta listo")
    return (
      <div className="lista-libros">
        <ul className="list-group">
          <h1>no esta listo</h1>
        </ul>

      </div>
    );
  }

}
function Lista(libros, state) {
  console.log(state)
  var read_libros = libros.libros;

  if (Object.keys(read_libros).length !== 0) {
    console.log("si esta listo")


    return (
      <div className="lista-libros">
        <ul className="list-group">
          {Object.keys(read_libros).map((key, i) => (

            <li className="list-group-item d-flex justify-content-between align-items-center" key={key}>
              <span className="badge badge-primary badge-pill"><h6> {i + 1} </h6></span>
              <h5>Nombre : {read_libros[key].nombre} User:  {read_libros[key].email}</h5>

              <button type="button" className="btn btn-dark btn-sm"><Link to={`/libro?id=${key}`}>Ver</Link></button>
            </li>
          ))}
        </ul>

      </div>
    );


  } else {
    console.log("no esta listo")
    return (
      <div className="lista-libros">
        <ul className="list-group">
          <h1>no esta listo</h1>
        </ul>

      </div>
    );
  }

}
function Libros({ state }) {
  const [count, setCount] = useState({});
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/api/read_libros');
      setCount(result.data);
      // console.log(result.data)
    };
    fetchData();

  }, []);
  console.log(state)
  if (state.rol === "User") {
    return (
      <div className="libros container-fluid">
        <header className="libros-header">
          <br></br>
          <h4>Lista de libros disponibles</h4>

          <Lista libros={count} state={state} />
        </header>

      </div>
    );
  }
  if (state.rol === "Admin") {
    return (
      <div className="libros container-fluid">
        <header className="libros-header">
          <br></br>
          <h4>Lista de libros disponibles</h4>

          <ListaAdmin libros={count} state={state} />
        </header>

      </div>
    );
  }

  return (
    <div className="lista-libros">
      <header className="libros-header">
        <div className="container">
          <h1>Tienes que logiarte</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Libros)