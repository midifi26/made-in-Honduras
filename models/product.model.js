const { Pool } = require('pg');
const queries = require('../queries/queries.js') 
const pool = require('../config/db_pgsql.js'); //Abre coneccion con BBDD
//const { getProduct } = require('../controllers/product.controller.js');


const getAllProducts = async (sortField = 'name', sortOrder = 'asc') => {
    let client, result;
    try {
        client = await pool.connect();
        const queryText = queries.getAllProducts(sortField, sortOrder); // Pasar los parámetros
        const data = await client.query(queryText);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (client) client.release();
    }
    return result;
}

const getProductByName = async (name) => {
  let client, result;
  try {
    client = await pool.connect();

    const query = `
      SELECT a.id_product,
             a.name,
             a.relevance,
             a.price,
             a.image,
             e.name_provider,
             e.cif,
             e.address
      FROM products AS a
      JOIN providers AS e ON a.id_provider = e.id_provider
      WHERE unaccent(a.name) ILIKE '%' || unaccent($1) || '%'
        OR unaccent(a.name) ILIKE '%' || $1 || '%'
      ORDER BY name ASC;
    `;

    const data = await client.query(query, [name]);
    result = data.rows;

  } catch (err) {
    console.error('Error en getProductsByName:', err);
    throw err;
  } finally {
    if (client) client.release();
  }
  return result;
};

const getProductByPrices = async (price, sortField = 'price', sortOrder = 'asc') => {
  let client, result;
  try {
    client = await pool.connect();
    const query = `
      SELECT a.id_product,
             a.name,
             a.relevance,
             a.price,
             a.image,
             e.name_provider,
             e.cif,
             e.address
      FROM products AS a
      INNER JOIN providers AS e ON a.id_provider = e.id_provider
      WHERE a.price::text LIKE '%' || $1 || '%'
      ORDER BY ${sortField} ${sortOrder}
    `;
    const data = await client.query(query, [price]);
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const product = {
    getAllProducts,
    getProductByName,
    getProductByPrices
}

module.exports = product;