const productos = [
  {
      id: 1,
      nombre: 'producto 1',
      precio: 28.30,
      detalles: 'Lorem ipsum',
      categoria: 'cat1',
      imagen: '/public/productos/a.jpg'
  },
  {
      id: 2,
      nombre: 'producto 2',
      precio: 28.30,
      detalles: 'Lorem ipsum',
      categoria: 'cat1',
      imagen: '/public/productos/a.jpg'
  },
  {
      id: 3,
      nombre: 'producto 3',
      precio: 28.30,
      detalles: 'Lorem ipsum',
      categoria: 'cat1',
      imagen: '/public/productos/a.jpg'
  }
]

const express = require('express');
// const rutas = require('./rutas');
const app = express();

app.set('view engine', 'pug');

app.use('/public', express.static('./public'));

app.get('/', function(req, res, next) {
  // res.send('hola mundo');
  //res.render('home.pug', {});
  res.render('home.pug', {});
});

app.get('/catalogo', function(req, res, next) {
  res.render('catalogo.pug', {productos});
});
app.get('/producto/:id', function(req, res, next) {

  if (req.params.id<=10 && req.params.id>=0) 
    {
        res.render('detalle-producto.pug',{productos,id:req.params.id});
    }
    else
    {
        res.render('error.pug',{});
        console.log('lalalla'); 
    }
});

app.get('/**', function(req, res, next) {
  // res.send('hola mundo');
  //res.render('home.pug', {});
  res.render('error.pug', {});
});
// app.use('/miruta', rutas);


app.listen(777,function(){
  console.log('iniciando server');
})