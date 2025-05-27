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
--Desabilita las tildes
CREATE EXTENSION IF NOT EXISTS unaccent;

INSERT INTO providers(name_provider, cif, address) VALUES
('TAJADAS ALEJANDRA', 'A8965298I', 'Villa Argentina, El Porvenir, Atlantida'),
('Café de Honduras S.A.', 'B12345678', 'Colonia Palmira, Tegucigalpa'),
('Textiles La Ceiba', 'C87654321', 'Barrio La Isla, La Ceiba'),
('Miel Orgánica Ltda.', 'D23456789', 'Valle de Amarateca, Francisco Morazán'),
('Plásticos Eco', 'E98765432', 'Zona Industrial, San Pedro Sula');

INSERT INTO providers(name_provider, cif, address) VALUES
('Campofresco', 'B12962678', 'Carretera a Tegucigalpa, Zona Industrial, San Pedro Sula'),
('Natura', 'C12962891', 'Colonia Palmira, Tegucigalpa'),
('Productos Diana', 'Q1296329', 'Zona Industrial, San Salvador'),
('Yummies', 'N1289629', 'Bulevar del Norte, San Pedro Sula'),
('Schilos', 'M1296375', 'Centro Comercial Los Proceres, Tegucigalpa');


INSERT INTO products(name, relevance, price, image, id_provider) VALUES
('Frijoles Rojos Volteados', 4, 2.75, 'https://mundofoods.com/15216280-large_default/frijoles-rojos-volteados-campofresco-400-gr.jpg', 6),
('Frijoles Rojos Volteados', 4, 2.75, 'https://mundofoods.com/15216466-home_default/frijoles-rojos-volteados-molidos-don-ramon-400-gr.jpg', 7),
('Frijoles Rojos De Seda', 4.5, 4.60, 'https://mundofoods.com/15216467-home_default/frijoles-rojo-de-seda-don-ramon-908-gr.jpg', 7),
('Gomitas Cereza', 4.6, 2.25, 'https://mundofoods.com/15216928-home_default/gomitas-diana-150-gr.jpg', 8),
('Harina de Maíz MASECA 2KG', 4, 10.90, 'https://mundofoods.com/15217084-home_default/comprar-harina-maseca-2-kg.jpg', 6),
('Néctar De Manzana', 4.6, 1.60, 'https://mundofoods.com/15217057-home_default/nectar-de-manzana-naturas-330-ml.jpg', 7),
('Néctar De Tamarindo', 4.1, 1.60, 'https://mundofoods.com/15217060-home_default/jugo-de-tamarindo-naturas-330-ml.jpg', 7),
('Néctar De Pera', 4.6, 1.60, 'https://mundofoods.com/15217058-home_default/nectar-de-pera-naturas-330-ml.jpg', 7),
('Néctar De Melocotón', 4.6, 1.60, 'https://mundofoods.com/15217059-home_default/nectar-de-melocoton-naturas-330-ml.jpg', 7),
('Néctar De Piña', 4.6, 1.95, 'https://mundofoods.com/15217052-home_default/nectar-de-pina-naturas-490-ml.jpg', 7),
('PALITOS DE MAIZ SABOR QUESO DIANA 131 GR', 4, 3.80, 'https://mundofoods.com/15216923-large_default/quesitos-diana-131-gr.jpg', 8),
('SNACK DE MAIZ CHINO PICANTE DIANA 144 GR', 3.20, 2.25, 'https://mundofoods.com/15216922-large_default/maiz-chino-picante-diana-144-gr.jpg', 8),
('ALBOROTO MAIZ SABOR CARAMEL.DIANA 200 GR', 4.3, 3.40, 'https://mundofoods.com/15216927-large_default/alboroto-diana-200-gr.jpg', 8),
('TAJADA.PLATA.CHILE-LIM.ZAMBOS YUMM.155 GR', 4.7, 3.95, 'https://mundofoods.com/15216363-large_default/zambos-honduras-chile-limon-yummies-155-gr.jpg', 9),
('YUQUITAS CHIPS YUC.ZAMBOS YUMMIES 140 GR', 4.2, 3.95, 'https://mundofoods.com/15216368-large_default/zambos-yuquitas-yummies-140-gr.jpg', 9),
('RANCHITAS PICANTES.QUESO YUMMIES 150 GR', 4.6, 3.20, 'https://mundofoods.com/15216367-large_default/ranchitas-nacho-yummies-150-gr.jpg', 9);

INSERT INTO products(name, relevance, price, image, id_provider) VALUES
('Café Supremo', 4, 12.50, 'cafe_supremo.jpg', 2),
('Textil Algodón Premium', 3, 25.00, 'textil_algodon.jpg', 3),
('Miel Natural', 4.5, 18.75, 'miel_natural.jpg', 4),
('Bolsa Reutilizable Eco', 2, 5.99, 'bolsa_eco.jpg', 5);


--Todos los productos
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
