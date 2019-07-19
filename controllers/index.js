
const items = [
  {id: 1, nombre: 'Producto 1'},
  {id: 2, nombre: 'Producto 2'},
  {id: 3, nombre: 'Producto 3'},
  {id: 4, nombre: 'Producto 4'},

];


const index = (req, res) => {
  res.render('index', {
    title: 'Mi primer proyecto en node con express'
  });
}

const holaMundo = (req, res) => {
  res.end('Hola mundo!');
}

const productos = (req, res, next) => {
  res.render('productos', {
    title: 'Lista de productos',
    items: items
  })
}

const nuevoProducto = (req, res, next) => {
  console.log(req.body);
  const { itemNuevo } = req.body;
  items.push({
    id: items.length + 1,
    nombre: itemNuevo
  });
  res.redirect('/productos');
}

module.exports = {
  index,
  holaMundo,
  productos,
  nuevoProducto
}
