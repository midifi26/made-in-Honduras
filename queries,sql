CREATE TABLE providers (
  id_provider SERIAL PRIMARY KEY,
  name_provider VARCHAR(100) NOT NULL,
  cif VARCHAR(20) NOT NULL,
  address TEXT
);

CREATE TABLE products (
  id_product SERIAL PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  relevance INTEGER NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  image VARCHAR(255),
  id_provider INTEGER,
  FOREIGN KEY (id_provider) REFERENCES providers(id_provider)
);

INSERT INTO providers(name_provider, cif, address) VALUES
('TAJADAS ALEJANDRA', 'A8965298I', 'Villa Argentina, El Porvenir, Atlantida'),
('Café de Honduras S.A.', 'B12345678', 'Colonia Palmira, Tegucigalpa'),
('Textiles La Ceiba', 'C87654321', 'Barrio La Isla, La Ceiba'),
('Miel Orgánica Ltda.', 'D23456789', 'Valle de Amarateca, Francisco Morazán'),
('Plásticos Eco', 'E98765432', 'Zona Industrial, San Pedro Sula');

INSERT INTO products(name, relevance, price, image, id_provider) VALUES
('Café Supremo', 4, 12.50, 'cafe_supremo.jpg', 2),
('Textil Algodón Premium', 3, 25.00, 'textil_algodon.jpg', 3),
('Miel Natural', 4.5, 18.75, 'miel_natural.jpg', 4),
('Bolsa Reutilizable Eco', 2, 5.99, 'bolsa_eco.jpg', 5);

--Todos los productos
SELECT * FROM productos;

--Producto por precio
SELECT a.id_product,
a.name,
a.relevance,
a.price,
a.image,
e.name_provider,
e.cif,
e.address
from products as a
inner join providers as e on a.id_provider = e.id_provider
WHERE a.price::text LIKE '5%';
