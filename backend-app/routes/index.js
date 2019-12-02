const router = require('express').Router();

const userControllers = require('../controllers/users');
const librosControllers = require('../controllers/libros');

const auth = require('../auth/auth');


router.get('/', (req, res) => {
    docs = {
        'user':{
            'get': [],
            'post': ['/api/sign_up', '/api/sign_in', '/api/add_libro', '/api/remove_libro']
        },
        'libro':{
            'get': ['/api/read_libros'],
            'post': ['/api/read_libro', , '/api/create_libro', '/api/update_libro', '/api/delete_libro']
        }
    }
    res.send(200, { docs })
});

// //Users

router.post('/add_libro',  userControllers.addLibro);
router.post('/remove_libro',  userControllers.removeLibro);

// //user login
router.post('/sign_up', userControllers.signUp);
router.post('/sign_in', userControllers.signIn);

// // //CRUD libro
router.get('/read_libros', librosControllers.readLibros);

router.post('/create_libro', librosControllers.createLibro);
router.post('/read_libro', librosControllers.readLibro);
router.post('/update_libro', librosControllers.updateLibro);
router.post('/delete_libro', librosControllers.deleteLibro);

module.exports = router;