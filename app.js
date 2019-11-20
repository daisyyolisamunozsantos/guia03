
const productos = [
    {
        id: 1,
        nombre: 'producto 1',
        precio: 28.00,
        detalles: 'Lorem ipsum',
        categoria: 'cat1',
        imagen: '/public/productos/a.jpg'
    },
    {
        id: 2,
        nombre: 'producto 2',
        precio: 28.00,
        detalles: 'Lorem ipsum',
        categoria: 'cat1',
        imagen: '/public/productos/a.jpg'
    },
    {
        id: 3,
        nombre: 'producto 3',
        precio: 28.00,
        detalles: 'Lorem ipsum',
        categoria: 'cat1',
        imagen: '/public/productos/a.jpg'
    }
]
//rutas
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    // res.send('hola mundo desde la ruta');
    res.render('main.layout.pug', {});
});
module.exports = router;