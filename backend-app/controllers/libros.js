
const admin = require('../firebase/fireconfig');
var db = admin.database();

//CRUD Libros
async function readLibros(req, res) {

    const findLibros = await db.ref('elibros').once('value', (dataSnapshot) => {
        libros = dataSnapshot.val();
        return res.send(libros);
    });

}

function createLibro(req, res) {
   
    const libro = {
        nombre: req.body.nombre,
        escritor: req.body.escritor,
        text: req.body.text,
        genero: req.body.genero,
        detalles: req.body.detalles,
        fecha: req.body.fecha,
        email: req.body.email

    }

    if (libro.nombre && libro.escritor && libro.text && libro.genero && libro.detalles && libro.fecha) {
        db.ref('elibros').push(libro);
        res.send("libro creado");
    }
}

async function readLibro(req, res) {
    const libroId = req.body.id;
    const libroName = req.body.nombre;
    const libroEmail = req.body.email;

    if (libroId || libroName || libroEmail) {

        const findLibro = await db.ref('elibros').once('value', (dataSnapshot) => {
            libros = dataSnapshot.val();
            for (const key in libros) {
                if (key === libroId) {
                    return res.send(libros[key]);
                }
                if(libros[key].nombre === libroName){
                    return res.send(libros[key]);
                }
                if(libros[key].email === libroEmail){
                    res.send(libros[key]);
                }
               
            }
            return res.send("Err");
        });
    }

}


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
                    
                }
            }
        });
    }
}

async function deleteLibro(req, res) {

    const libroId = req.body.id;
    const nombre = req.body.nombre;
    const email = req.body.email;

    
        const findLibro = await db.ref('elibros').once('value', (dataSnapshot) => {
            libros = dataSnapshot.val();
            for (const key in libros) {
                if (key === libroId) {
                    dataSnapshot.ref.child(key).remove();
                   return res.send("libro eliminado");
                }
                if (libros[key].nombre === nombre && libros[key].email === email) {
                    dataSnapshot.ref.child(key).remove();
                    
                   return res.send("libro eliminado");
                }
                
            }
        });
    

}

module.exports = {
    readLibros,
    createLibro,
    readLibro,
    updateLibro,
    deleteLibro
}