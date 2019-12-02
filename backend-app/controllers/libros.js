
const admin = require('../firebase/fireconfig');
var db = admin.database();

//CRUD Libros

/**
 * @name readLibros
 * @description funcion que se encarga de buscar los libros existente en la DB
 */
async function readLibros(req, res) {

    const findLibros = await db.ref('elibros').once('value', (dataSnapshot) => {
        libros = dataSnapshot.val();
        return res.send(libros);
    });

}
/**
 * @name createLibro
 * @description funcion que se encarga de crear/cargar un en el sistema
 */

function createLibro(req, res) {
   
    const libro = {
        nombre: req.body.nombre,
        escritor: req.body.escritor,
        text: req.body.text,
        genero: req.body.genero,
        detalles: req.body.detalles,
        fecha: req.body.fecha

    }

    if (libro.nombre && libro.escritor && libro.text && libro.genero && libro.detalles && libro.fecha) {
        db.ref('elibros').push(libro);
        res.send("libro creado");
    }
}
/**
 * @name readLibro
 * @description funcion que se encarga de buscar un libro en especifico para que el usuario pueda leerlo
 */
async function readLibro(req, res) {
    const libroId = req.body.id;
    const libroName = req.body.nombre;

    if (libroId || libroName) {

        const findLibro = await db.ref('elibros').once('value', (dataSnapshot) => {
            libros = dataSnapshot.val();
            for (const key in libros) {
                if (key === libroId || libros[key].nombre === libroName) {
                    return res.send(libros[key]);
                }
            }
        });
    }

}

/**
 * @name updateLibro
 * @description busca y actualiza un libro existente. 
 */
async function updateLibro(req, res) {
    const libroId = req.body.id;
    const libro = {
        nombre: req.body.nombre,
        escritor: req.body.escritor,
        text: req.body.text,
        genero: req.body.genero,
        detalles: req.body.detalles,
        fecha: req.body.fecha

    }

    if (libro.nombre && libro.escritor && libro.text && libro.genero && libro.detalles && libroId) {
        const findLibro = await db.ref('elibros').once('value', (dataSnapshot) => {
            libros = dataSnapshot.val();
            for (const key in libros) {
                if (key === libroId) {
                    dataSnapshot.ref.child(key).set(libro);
                    res.send("libro actualizado");
                    return res.send(libro);
                }
            }
        });
    }
}
/**
 * @name deleteLibro
 * @description busca y elimina el libro seleccionado. 
 */

async function deleteLibro(req, res) {

    const libroId = req.body.id;
    if (libroId) {
        const findLibro = await db.ref('elibros').once('value', (dataSnapshot) => {
            libros = dataSnapshot.val();
            for (const key in libros) {
                if (key === libroId) {
                    dataSnapshot.ref.child(key).remove();
                    res.send("libro eliminado");
                    return res.send(libro);
                }
            }
        });
    }

}

module.exports = {
    readLibros,
    createLibro,
    readLibro,
    updateLibro,
    deleteLibro
}