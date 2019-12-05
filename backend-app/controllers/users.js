'use strict'
// Cargamos los modelos para usarlos posteriormente

const service = require('../services');

const admin = require('../firebase/fireconfig');
const db = admin.database();
/**
 * @name isValidEmail
 * @description valida si el correo que le pasamos por parametro tiene un formato valido
 * @param {*} mail 
 */
function isValidEmail(mail) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}
/**
 * @name signUp
 * @description permite crear un usuario en el sistema y valida si este ya no esta creado.
 * @param {*} req 
 * @param {*} res 
 */
async function signUp(req, res) {
    var email = false;
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        rol: req.body.rol,
        image: req.body.image,
        libros_id: ["null"]
    };

    if (isValidEmail(user.email) === true) {
        if (user.name && user.password && user.rol) {
            const findEmail = await db.ref('users').once('value', (dataSnapshot) => {
                var users = dataSnapshot.val();
                for (const key in users) {
                    if (users[key].email === user.email) {
                        email = true;
                        break;
                    }
                }
            })
            if (email === false) {
                db.ref('users').push(user);
                res.send("usuario creado");
            } else {
                res.send("Ese correo ya esta registrado");
            }
        }
    } else {
        res.send("Correo no valido");
    }

}
/**
 * @name signIn
 * @description hacer login/iniciar session en el sistema. Valida si existe una cuenta creada con las credenciales 
 * introducidas
 * @param {*} req 
 * @param {*} res 
 */
async function signIn(req, res) {
    var login = false;
    var nombre = '';
    var email = '';
    var rol = '';
    var image = '';
    var libros_id;

    const user = {
        email: req.body.email,
        password: req.body.password,
    };
    if (user.email && user.password) {
        const findEmailPassword = await db.ref('users').once('value', (dataSnapshot) => {
            var users = dataSnapshot.val();
            for (const key in users) {
                if (users[key].email === user.email) {
                    if (users[key].password === user.password) {
                        login = true;
                        nombre = users[key].name;
                        email = users[key].email;
                        rol = users[key].rol;
                        image = users[key].image;
                        libros_id = users[key].libros_id;
                    }
                    break;
                }
            }
        })
        if (login === true) {
            //token
            return res.status(200).send({ token: service.createToken(user), nombre, email, rol, image, libros_id });
        } else {
            res.send("Error email y password");
        }
    } else {
        res.send("Error email o password");
    }
}

/**
 * @name addLibro
 * @description permite agregar un libro a un usuario. 
 * @param {*} req 
 * @param {*} res 
 */
async function addLibro(req, res) {
    var libroId = false;

    const id = req.body.id;
    const email = req.body.email;
    var myUser = {
        emai: '',
        image: '',
        name: '',
        password: '',
        rol: '',
        libros_id: []

    }

    if (id && email) {

        //buscar el id del libro para saber si es valido
        const findLibroId = await db.ref('elibros').once('value', (dataSnapshot) => {
            var elibros = dataSnapshot.val();
            for (const key in elibros) {
                if (key === id) {
                    libroId = true;
                    break;
                }
            }
        });
        if (libroId) {
            const findEmail = await db.ref('users').once('value', (dataSnapshot) => {
                var users = dataSnapshot.val();
                for (const key in users) {
                    if (users[key].email === email) {

                        myUser.email = users[key].email;
                        myUser.image = users[key].image;
                        myUser.name = users[key].name;
                        myUser.password = users[key].password;
                        myUser.rol = users[key].rol;
                        if (users[key].libros_id) {
                            myUser.libros_id = users[key].libros_id;
                        }
                       

                        for (const i = 0; i < myUser.libros_id.length - 1; i++) {
                            if (myUser.libros_id[i] === id) {
                                return res.send("Este libro fue agregado");
                            }
                        }
                        myUser.libros_id.push(id);

                        dataSnapshot.ref.child(key).set(myUser);
                        return res.send("Libro agregado");
                    }
                }

            })
        }
        else {
            res.send("Error email y libro_id");
        }
    }
    else {
        res.send("Error email o libro_id");
    }


}

/**
 * @name removeLibro
 * @description elimina un libro a un usuario. 
 * @param {*} req 
 * @param {*} res 
 */
async function removeLibro(req, res) {
    var libroId = false;

    const id = req.body.id;
    const email = req.body.email;
    var myUser = {
        emai: '',
        image: '',
        name: '',
        password: '',
        rol: '',
        libros_id: []

    }

    if (id && email) {

       
            const findEmail = await db.ref('users').once('value', (dataSnapshot) => {
                var users = dataSnapshot.val();
                for (const key in users) {
                    if (users[key].email === email) {

                        myUser.email = users[key].email;
                        myUser.image = users[key].image;
                        myUser.name = users[key].name;
                        myUser.password = users[key].password;
                        myUser.rol = users[key].rol;
                        if (users[key].libros_id) {
                            myUser.libros_id = users[key].libros_id;
                        }
                       

                        for (const i = 0; i < myUser.libros_id.length; i++) {
                            if (myUser.libros_id[i] === id) {
                                myUser.libros_id.splice(i, 1);
                                res.send("se encontro el libro a eliminar");
                                break;
                            }
                        }
                        
                        if(myUser.libros_id.length == 0){
                            myUser.libros_id.push('null');
                        }
                        dataSnapshot.ref.child(key).set(myUser);
                        return res.send("Libro eliminado");
                    }
                }

            })
        }
        else {
            res.send("Error email y libro_id");
        }
   

}

module.exports = {
    signUp,
    signIn,
    addLibro,
    removeLibro
}