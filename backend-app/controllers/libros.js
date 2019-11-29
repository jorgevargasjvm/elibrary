
const admin = require('../firebase/firedase');
var db = admin.database();

//CRUD Libros
function readLibros(req, res){
    const libros = []

    const firebase = await db.ref('libros').once('value', (dataSnapshot)=>{
        libros = dataSnapshot.val();

        res.send(libros); 

    });

    

}

function createLibro(req, res){
    if(nombre && escritor && text && genero && detalles, && fecha){

        const libro = {
            nombre: req.body.nombre,
            escritor: req.body.escritor,
            text: req.body.text,
            genero: req.body.genero,
            detalles: req.body.detalles,
            fecha: req.body.fecha

        }
    
        const firebase = await db.ref('libros').once('value', (dataSnapshot)=>{
            db.ref('libros').push(libro);
            res.send("libro creado");
        });
    }
}

function readLibro(req, res){
    
    if(req.body.id && req.body.nombre){
        const firebase = await db.ref('libros').once('value', (dataSnapshot)=>{
            libros = dataSnapshot.val();
            for (const key in libros) {
                if(libros[key]._id == req.body.id && libros[key].nombre == req.body.nombre){
                    res.send( libros[key]); 
                }
                
            }
        });
        
    }
    
}


function updateLibro(req, res){
    if(req.body.id && req.body.nombre && req.body.escritor && req.body.text && req.body.genero && req.body.detalles){

        const libro = {
            nombre: req.body.nombre,
            escritor: req.body.escritor,
            text: req.body.text,
            genero: req.body.genero,
            detalles: req.body.detalles,
            fecha: req.body.fecha

        }
    
        const firebase = await db.ref('libros').once('value', (dataSnapshot)=>{
            libros = dataSnapshot.val();
            for (const key in libros) {
                if(libros[key]._id == req.body.id){
                    dataSnapshot.ref.child(key).set(libro);
                    res.send("libro actualizado");
                }
                
            }
        });
    }
    

}

function deleteLibro(req, res){
    if(req.body.id){
        const firebase = await db.ref('libros').once('value', (dataSnapshot)=>{
            for (const key in libros) {
                if(libros[key]._id == req.body.id){
                    dataSnapshot.ref.child(key).remove;
                    res.send("libro eliminado");
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