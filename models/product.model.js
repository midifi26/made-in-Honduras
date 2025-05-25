const { Pool } = require('pg');
const queries = require('../queries/queries.js');
const pool = require('../config/db_pgsql.js');

const getAllProducts = async (sortField = 'name', sortOrder = 'asc') => {
  let client, result;
  try {
    client = await pool.connect();
    const queryText = queries.getAllProducts(sortField, sortOrder);
    const data = await client.query(queryText);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (client) client.release();
  }
  return result;
};

const getProductByName = async (name) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getProductByName, [name]);
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
    const queryText = queries.getProductByPrices(sortField, sortOrder);
    const data = await client.query(queryText, [price]);
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (client) client.release();
  }
  return result;
};

const getProductByProvider = async (name_provider, sortField = 'price', sortOrder = 'asc') => {
  let client, result;
  try {
    client = await pool.connect();
    const queryText = queries.getProductByProvider(sortField, sortOrder);
    const data = await client.query(queryText, [name_provider]);
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (client) client.release()
  }
  return result;
};

const product = {
  getAllProducts,
  getProductByName,
  getProductByPrices,
  getProductByProvider
};

module.exports = product;
