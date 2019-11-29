import React from 'react';
import '../css/manager.css';

import { connect } from 'react-redux';

function Manager() {
  return (
    <div className="manager">
      <header className="manager-header">
       <h1>manager</h1>
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
