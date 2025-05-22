const queries = {
    getAllProducts:`SELECT * FROM PRODUCTS`,
    getProductByPrice:`
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
  WHERE a.price::text LIKE $1`,

}
module.exports = queries;