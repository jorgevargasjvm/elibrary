let router = require('express').Router();

const userControllers = require('../controllers/users');
const librosControllers = require('../controllers/libros');

const auth = require('../auth/auth');



router.get('/', (req, res) => {
    docs = {
        'user':{
            'get': ['/api/get_user'],
            'post': ['/api/sign_up', '/api/sign_in', '/add_libro', 'remove_libro']
        },
        'libro':{
            'get': ['/api/read_libro:id', '/api/read_libros'],
            'post': ['/api/create_libro', '/api/update_libro', '/delete_libro']
        }
    }
    res.send(200, { docs })
});

//Users
router.get('/get_user', auth, userControllers.getUser);
router.post('/add_libro', auth, userControllers.addLibro);
router.post('/remove_libro', auth, userControllers.removeLibro);

//user login
router.post('/sign_up', userControllers.signUp);
router.post('/sign_in', userControllers.signIn);

// //CRUD libro
router.get('/read_libros', libroControllers.readLibros);

router.post('/create_libro', auth, librosControllers.createLibro);
router.get('/read_libro', librosControllers.readLibro);
router.post('/update_libro', auth, librosControllers.updateLibro);
router.post('/delete_libro', auth, librosControllers.deleteLibro);

module.exports = router;