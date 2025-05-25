const validFields = ['name', 'price', 'relevance'];
const validOrders = ['asc', 'desc'];

function validateSortField(field) {
  return validFields.includes(field) ? field : 'name'; // Por defecto 'name'
}

function validateSortOrder(order) {
  return validOrders.includes(order) ? order : 'asc'; // Por defecto 'asc'
}

module.exports = {
  validFields,
  validOrders,
  validateSortField,
  validateSortOrder
};
