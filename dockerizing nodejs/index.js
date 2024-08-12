const express = require('express')
const PORT = process.env.PORT || 3000
require('dotenv').config()
const database = require("./connection");
const product_model = require('./product_model');
app.use(express())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const app = express()
database.connect();

app.get('/', (req, res) => {
    res.send('Hello,Hi bye bye World Harshit Yaduunnn!')
}
)

app.get('/products', async (req, res) => {
    try {
        const products = await product_model.find();
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const product = await product_model.findById(req.params.id);
        if (product === null) {
            return res.json({ message: "Product not found" });
        }
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}
)