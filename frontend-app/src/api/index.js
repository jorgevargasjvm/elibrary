const axios = require('axios');
 

function loginIn(email, password){
  axios.post('http://localhost:3000/api/sign_in', {email, password})
  .then(function (response) {
 
    alert(`welcome : ${response.data.nombre}`);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
}


function addLibro(email, password){
  axios.post('http://localhost:3000/api/add_libro')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
}

function removeLibro(email, password){
  axios.post('http://localhost:3000/api/remove_libro')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
}

// API Libros
function readLibros(email, password){
  axios.get('http://localhost:3000/api/read_libros')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
}

function readLibro(id, nobmre){
  axios.post('http://localhost:3000/api/read_libro')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
}

function createLibro(id, docs){
  axios.post('http://localhost:3000/api/create_libro')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
}

function updateLibro(id, docs){
  axios.post('http://localhost:3000/api/update_libro')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
}

function deleteLibro(id, nombre){
  axios.post('http://localhost:3000/api/delete_libro')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
}

