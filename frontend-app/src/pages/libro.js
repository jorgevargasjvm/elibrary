import React from 'react';
import axios from 'axios';
import '../css/libro.css';
import { connect } from 'react-redux';

const { useState, useEffect } = React;

function readLibro(texto) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

function Libro({ state }) {
  var libro_id = window.location.search.split('=')[1];

  const [count, setCount] = useState({});
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    const fetchData = async () => {
      const result = await axios.post('http://localhost:3000/api/read_libro', { id: libro_id, nombre: "" });
      setCount(result.data);
      console.log(result.data)
    };
    fetchData();

  }, []);

 
    if (Object.keys(count).length !== 0) {
      console.log('si')
      return (
        <div className="libro">
          <header className="libro-header">
            <div className="col-12 text-center">
              <br></br>
              <h1>{count.nombre} <button type="button" className="btn btn-primary btn-sm audio" onClick={(e) => readLibro(count.text)}>Audio libro</button></h1>
              <hr></hr>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col"> <h6>Escritor : {count.escritor}</h6></div>
                <div className="col"><h6>Genero : {count.genero}</h6></div>
                <div className="col"><h6>Fecha : {count.fecha}</h6></div>
              </div>
            </div>
            <hr></hr>
            <div className="container-fluid">
              <div className="row">
                <div className="col">  <h6>Descripcion : {count.detalles}</h6></div>
              </div>
            </div>
            <div className="container-fluid ">
              <hr></hr>
              <div className="texto">
                <p className="text-justify">{count.text}</p>
              </div>
            </div>
          </header>
        </div>
      );
    }
    else {
      console.log('no')
      return (
        <div className="libro">
          <header className="libro-header">
            <h1>Libro no encontrado</h1>
          </header>
        </div>
      );
    }




}


const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(Libro)