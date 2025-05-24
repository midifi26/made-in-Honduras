const { Pool } = require('pg');
const queries = require('../queries/queries.js') 
const pool = require('../config/db_pgsql.js'); //Abre coneccion con BBDD


const getAllProducts = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllProducts)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const getProductByPrices = async (price) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getProductByPrices, [price])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const product = {
    getAllProducts,
    getProductByPrices
}

module.exports = product;