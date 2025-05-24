const queries = {
    getAllProducts: (sortField, sortOrder) => `
    SELECT a.id_product,
           a.name,
           a.relevance,
           a.price,
           a.image,
           a.id_provider,
           e.name_provider,
           e.cif,
           e.address
    FROM products AS a
    JOIN providers AS e ON a.id_provider = e.id_provider
    ORDER BY ${sortField} ${sortOrder};
  `,
    getProductByName: `
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
    WHERE LOWER(a.name) LIKE LOWER('%' || $1 || '%');
  `,
}
module.exports = queries;