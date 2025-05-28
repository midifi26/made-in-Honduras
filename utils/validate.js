const validFields = ['name', 'price', 'relevance'];
const validOrders = ['asc', 'desc'];


/**
 * Valida que el campo de ordenación sea uno permitido.
 * @param {string} field - Nombre del campo para ordenar.
 * @returns {string} El campo si es válido, o 'name' por defecto.
 */
function validateSortField(field) {
  return validFields.includes(field) ? field : 'name'; // Por defecto 'name'
}

/**
 * Valida que la dirección de ordenación sea 'asc' o 'desc'.
 * @param {string} order - Dirección de orden (ascendente o descendente).
 * @returns {string} La dirección si es válida, o 'asc' por defecto.
 */
function validateSortOrder(order) {
  return validOrders.includes(order) ? order : 'asc'; // Por defecto 'asc'
}

module.exports = {
  validFields,
  validOrders,
  validateSortField,
  validateSortOrder
};
