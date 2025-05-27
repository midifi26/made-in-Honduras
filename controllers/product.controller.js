const productModel = require("../models/product.model.js");
const { validateSortField, validateSortOrder } = require('../utils/validate.js');

/**
 * Controlador para obtener productos según filtros opcionales y ordenar resultados.
 * 
 * Lee los parámetros de consulta (query) de la solicitud HTTP:
 * - name: para buscar productos por nombre (búsqueda parcial e insensible a acentos).
 * - price: para buscar productos por precio.
 * - name_provider: para buscar productos por nombre de proveedor.
 * - sortField: campo para ordenar resultados (name, price o relevance).
 * - sortOrder: orden ascendente ('asc') o descendente ('desc').
 * - page: número de página para paginación (por defecto 1).
 * - limit: número de productos por página (por defecto 10).
 * 
 * * Si no se proporciona ningún filtro, devuelve todos los productos.
 * Usa funciones de modelo para obtener datos según filtro.
 * Valida los parámetros de ordenación y usa valores por defecto si no son válidos.
 * 
 * Envía una respuesta JSON con la lista de productos obtenidos o un error en caso de fallo.
 * @async
 * @function getProduct
 * @param {import('express').Request} req - Objeto de petición HTTP.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * 
 * @returns {Promise<void>} Respuesta HTTP con código 200 y lista de productos, o código 500 con mensaje de error.
 * @throws {Error} Si ocurre un error al obtener los productos, se captura y se envía un mensaje de error en la respuesta.
 */

 const getProduct = async (req, res) => {
  try {
    const { name, price, name_provider, sortField, sortOrder, page, limit } = req.query;
    console.log('Parámetros recibidos:', { name, price, name_provider, sortField, sortOrder, page, limit });

    const validField = validateSortField(sortField);
    const validOrder = validateSortOrder(sortOrder);

    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 10;
    const offset = (pageNumber - 1) * limitNumber;

    let products;

    if (name) {
      products = await productModel.getProductByName(name, validField, validOrder, offset, limitNumber);
    } else if (price) {
      products = await productModel.getProductByPrices(price, validField, validOrder, offset, limitNumber);
    } else if (name_provider) {
      products = await productModel.getProductByProvider(name_provider, validField, validOrder, offset, limitNumber);
    } else {
      products = await productModel.getAllProducts(validField, validOrder, offset, limitNumber);
    }
    const totalPages = Math.ceil(products.total / limitNumber);

    res.status(200).json({
      products: products.products,
      total: products.total,
      totalPages,
      currentPage: pageNumber
    });
  } catch (error) {
    console.error('Error en getProduct:', error);
    res.status(500).json({ error: error.message });
  }
};
/**
 * Controlador para obtener un producto por su nombre.
 * 
 * Busca un producto en la base de datos por su nombre (insensible a acentos y mayúsculas).
 * Si se encuentra, devuelve el producto; si no, devuelve un error 404.
 * 
 * @async
 * @function getProductByName
 * @param {import('express').Request} req - Objeto de petición HTTP.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * 
 * @returns {Promise<void>} Respuesta HTTP con código 200 y el producto encontrado, o código 404 si no se encuentra.
 */
const getProductByName = async (req, res) => {
  try {
    const { name } = req.params;
    const product = await productModel.getProductByName(name);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error('Error en getProductById:', error);
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getProduct,
  getProductByName
};

