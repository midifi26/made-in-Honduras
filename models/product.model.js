const { Pool } = require('pg');
const queries = require('../queries/queries.js');
const pool = require('../config/db_pgsql.js');

/**
 * Obtiene todos los productos, ordenados según campo y orden especificados (por defecto).
 * @param {string} [sortField='name'] - Campo por el cual ordenar (ej. 'name', 'price', 'relevance').
 * @param {string} [sortOrder='asc'] - Dirección del ordenamiento ('asc' o 'desc').
 * @returns {Promise<Array>} Lista de productos.
 */
const getAllProducts = async (sortField = 'name', sortOrder = 'asc', offset = 0, limit = 10) => {
  let client;
  try {
    client = await pool.connect();
    const queryText = queries.getAllProducts(sortField, sortOrder);
    const data = await client.query(queryText, [limit, offset]);
    return {
      products: data.rows,
      total: Number(data.rows[0]?.total_count) || data.rowCount 
    };
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    if (client) client.release();
  }
};

/**
 * Busca un producto por su ID.
 * @param {number|string} id - ID del producto.
 * @returns {Promise<Object|null>} Producto encontrado o null si no existe.
 */
const getProductById = async (id) => {
  let client;
  try {
    client = await pool.connect();
    //const queryText = 'SELECT * FROM products WHERE id_product = $1';
    const data = await client.query(queries.getProductById, [id]);
    return data.rows[0] || null;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (client) client.release();
  }
};

/**
 * Busca productos cuyo nombre coincida parcialmente con el parámetro dado.
 * @param {string} name - Texto para buscar en el nombre del producto.
 * @returns {Promise<Array>} Lista de productos coincidentes.
 */
const getProductByName = async (name) => {
  let client;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getProductByName, [name]);
    return {
      products: data.rows,
      total: Number(data.rows[0]?.total_count) || data.rowCount
    };
  } catch (err) {
    console.error('Error en getProductsByName:', err);
    throw err;
  } finally {
    if (client) client.release();
  }
};

/**
 * Busca productos cuyo precio coincida parcialmente con el parámetro dado y los ordena.
 * @param {string} price - Valor para buscar en el campo precio (puede ser texto).
 * @param {string} [sortField='price'] - Campo para ordenar.
 * @param {string} [sortOrder='asc'] - Dirección del orden ('asc' o 'desc').
 * @returns {Promise<Array>} Lista de productos.
 */
const getProductByPrices = async (price, sortField = 'price', sortOrder = 'asc') => {
  let client;
  try {
    client = await pool.connect();
    const queryText = queries.getProductByPrices(sortField, sortOrder);
    const data = await client.query(queryText, [price]);
    return {
      products: data.rows,
      total: Number(data.rows[0]?.total_count) || data.rowCount
    };
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (client) client.release();
  }
};

/**
 * Busca productos por nombre del proveedor y los ordena.
 * @param {string} name_provider - Texto para buscar en el nombre del proveedor.
 * @param {string} [sortField='price'] - Campo para ordenar.
 * @param {string} [sortOrder='asc'] - Dirección del orden ('asc' o 'desc').
 * @returns {Promise<Array>} Lista de productos.
 */
const getProductByProvider = async (name_provider, sortField = 'price', sortOrder = 'asc') => {
  let client;
  try {
    client = await pool.connect();
    const queryText = queries.getProductByProvider(sortField, sortOrder);
    const data = await client.query(queryText, [name_provider]);
    return {
      products: data.rows,
      total: Number(data.rows[0]?.total_count) || data.rowCount
    };
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (client) client.release();
  };
};


/**
 * Paginación de productos.
 * @param {number} [page=1] - Número de página (1 por defecto).
 * @param {number} [limit=10] - Cantidad de productos por página (10 por defecto).
 * @returns {Promise<Array>} Lista de productos paginados.
 */
const productPagination = async (page = 2, limit = 10) => {
  let client;
  const offset = (page - 1) * limit;
  try {
    client = await pool.connect();
    const queryText = queries.productPagination(offset, limit);
    const data = await client.query(queryText);
    return {
      products: data.rows,
      total: Number(data.rows[0]?.total_count) || data.rowCount
    };
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    if (client) client.release();
  };
};


const product = {
  getAllProducts,
  getProductById,
  getProductByName,
  getProductByPrices,
  getProductByProvider,
  productPagination
};

module.exports = product;
