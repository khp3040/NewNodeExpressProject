const ProductRepository = require('./repository/productRepository');

const productRepository = new ProductRepository();

// productRepository.findAllProducts().then(data => console.log(data) );

/*
 productRepository.saveProduct({
     productId:8,
     productName:'Redme',
     price:45784,
     description:'RedmiNote'
 }).then(data =>
    console.log(data))   
*/

/*
productRepository.upadateProduct({
    productId: 8,
    // productName: 'Redme',
    price: 25784,
    // description: 'RedmiNote'
}).then(data => console.log(data));
*/

//productRepository.findAllProducts().then(data => console.log(data));

//productRepository.findAllProductsByName('Redme').then(data => console.log(data));

//productRepository.deleteProduct(8).then(data => console.log(data));