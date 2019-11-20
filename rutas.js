const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    // res.send('hola mundo desde la ruta');
    res.render('dos.pug', {});
});s
router.get('/catalogo', function(req, res, next) {
    res.send('hola mundo desde la ruta uno');
});
router.get('/dos', function(req, res, next) {
    res.send('hola mundo desde la ruta dos');
});

module.exports = router;