//CommonJS syntax: const express = require('express');
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.listen(PORT || 5000, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));

app.get("/", (request, response) => (response.send("The server is running.")));

/* Fetch all products */
app.get("/api/products", (request, response) => (
    response.json(products)
));

/* Fetch a specific product */
app.get("/api/products/:id", (request, response) => {
    let productId = request.params.id;
    let product = products.find( p => p._id == productId);
    response.json(product);
})