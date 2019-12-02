import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import '../css/libros.css';
import data from '../data/';


function Lista(libros) {
  console.log(libros)
  const lista = libros.libros.map((libro, key) =>
    <li className="list-group-item d-flex justify-content-between align-items-center" key={key.toString()}>
      <span className="badge badge-primary badge-pill"><h6> {key + 1} </h6></span>
      <h5>{libro.nombre}</h5>
      <button type="button" className="btn btn-dark btn-sm"><Link to="/libro">Ver</Link></button>
    </li>
  );

  return (
    <div className="lista-libros">
      <ul className="list-group">
        {lista}
      </ul>

    </div>
  );
}

function Libros({state}) {
  return (
    <div className="libros container-fluid">
      <header className="libros-header">
        <br></br>
        <h4>Lista de libros disponibles</h4>
        
        <Lista libros={data.Libros} />
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