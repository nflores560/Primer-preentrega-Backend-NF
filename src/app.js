import express from 'express';
import productsRouter from './routes/productsRouter';
import cartsRouter from './routes/cartsRouter';


const app = express();
const ProductManager = require('./managers/ProductManager.js');

//parametros de config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.get('/products', (req, res) => {
    res.send(users);
});

app.listen(8080, () => console.log('server running on port 8080'));

