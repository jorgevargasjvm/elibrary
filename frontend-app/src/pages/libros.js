import React from 'react';
import '../css/libros.css';

import { connect } from 'react-redux';

function Libros() {
  return (
    <div className="libros">
      <header className="libros-header">
       <h1>Libros</h1>
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