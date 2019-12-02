import React from 'react';
import '../css/libro.css';
import data from '../data/';
import { connect } from 'react-redux';

function readLibro(texto) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

function Libro({state}) {
  const libro = data.Libros[2];
  console.log(libro);
  return (
    <div className="libro">
      <header className="libro-header">
        <div className="col-12 text-center">
          <br></br>
          <h1>{libro.nombre} <button type="button" className="btn btn-primary btn-sm audio" onClick={(e) => readLibro(libro.text)}>Audio libro</button></h1>
          <hr></hr>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col"> <h6>Escritor : {libro.escritor}</h6></div>
            <div className="col"><h6>Genero : {libro.genero}</h6></div>
            <div className="col"><h6>Fecha : {libro.fecha}</h6></div>
          </div>
        </div>
        <hr></hr>
        <div className="container-fluid">
          <div className="row">
            <div className="col">  <h6>Descripcion : {libro.detalles}</h6></div>
          </div>
        </div>
        <div className="container-fluid ">
          <hr></hr>
          <div className="texto">
            <p className="text-justify">{libro.text}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Libro)