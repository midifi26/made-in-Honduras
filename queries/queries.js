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
    WHERE unaccent(a.name) ILIKE '%' || unaccent($1) || '%'
       OR unaccent(a.name) ILIKE '%' || $1 || '%'
    ORDER BY a.name ASC;
  `,

  getProductByPrices: (sortField, sortOrder) => `
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
    ORDER BY ${sortField} ${sortOrder};
`,
  getProductByProvider: (sortField, sortOrder) => `
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
    WHERE unaccent(e.name_provider) ILIKE '%' || unaccent($1) || '%'
       OR unaccent(e.name_provider) ILIKE '%' || $1 || '%'
    ORDER BY ${sortField} ${sortOrder};
  `
};

module.exports = queries;
