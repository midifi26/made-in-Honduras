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
('Campofresco', 'B12962678', 'Carretera a Tegucigalpa, Zona Industrial, San Pedro Sula'),
('Natura', 'C12962891', 'Colonia Palmira, Tegucigalpa'),
('Productos Diana', 'Q1296329', 'Zona Industrial, San Salvador'),
('Yummies', 'N1289629', 'Bulevar del Norte, San Pedro Sula'),
('Schilos', 'M1296375', 'Centro Comercial Los Proceres, Tegucigalpa'),
('Issima', 'k92038475', 'Avenida San Isidro, Tegucigalpa, Honduras'),
('Don Ramon', 'H83492017', 'Calle Principal #12, Barrio El Centro, San Pedro Sula, Honduras'),
('Gold Star', 'M74829105', 'Boulevard Morazán, Colonia Palmira, Tegucigalpa, Honduras');


INSERT INTO products(name, relevance, price, image, id_provider) VALUES
('Frijoles Rojos Volteados', 4, 2.75, 'https://mundofoods.com/15216280-large_default/frijoles-rojos-volteados-campofresco-400-gr.jpg', 1),
('Frijoles Rojos Volteados', 4, 2.75, 'https://mundofoods.com/15216466-home_default/frijoles-rojos-volteados-molidos-don-ramon-400-gr.jpg', 7),
('Frijoles Rojos De Seda', 4.5, 4.60, 'https://mundofoods.com/15216467-home_default/frijoles-rojo-de-seda-don-ramon-908-gr.jpg', 7),
('Gomitas Cereza', 4.6, 2.25, 'https://mundofoods.com/15216928-home_default/gomitas-diana-150-gr.jpg', 3),
('Harina de Maíz MASECA 2KG', 4, 10.90, 'https://mundofoods.com/15217084-home_default/comprar-harina-maseca-2-kg.jpg', 5),
('Néctar De Manzana', 4.6, 1.60, 'https://mundofoods.com/15217057-home_default/nectar-de-manzana-naturas-330-ml.jpg', 2),
('Néctar De Tamarindo', 4.1, 1.60, 'https://mundofoods.com/15217060-home_default/jugo-de-tamarindo-naturas-330-ml.jpg', 2),
('Néctar De Pera', 4.6, 1.60, 'https://mundofoods.com/15217058-home_default/nectar-de-pera-naturas-330-ml.jpg', 2),
('Néctar De Melocotón', 4.6, 1.60, 'https://mundofoods.com/15217059-home_default/nectar-de-melocoton-naturas-330-ml.jpg', 2),
('Néctar De Piña', 4.6, 1.95, 'https://mundofoods.com/15217052-home_default/nectar-de-pina-naturas-490-ml.jpg', 2),
('PALITOS DE MAIZ SABOR QUESO DIANA 131 GR', 4, 3.80, 'https://mundofoods.com/15216923-large_default/quesitos-diana-131-gr.jpg', 3),
('SNACK DE MAIZ CHINO PICANTE DIANA 144 GR', 3.20, 2.25, 'https://mundofoods.com/15216922-large_default/maiz-chino-picante-diana-144-gr.jpg', 3),
('ALBOROTO MAIZ SABOR CARAMEL.DIANA 200 GR', 4.3, 3.40, 'https://mundofoods.com/15216927-large_default/alboroto-diana-200-gr.jpg', 3),
('TAJADA.PLATA.CHILE-LIM.ZAMBOS YUMM.155 GR', 4.7, 3.95, 'https://mundofoods.com/15216363-large_default/zambos-honduras-chile-limon-yummies-155-gr.jpg', 4),
('YUQUITAS CHIPS YUC.ZAMBOS YUMMIES 140 GR', 4.2, 3.95, 'https://mundofoods.com/15216368-large_default/zambos-yuquitas-yummies-140-gr.jpg', 4),
('RANCHITAS PICANTES.QUESO YUMMIES 150 GR', 4.6, 3.20, 'https://mundofoods.com/15216367-large_default/ranchitas-nacho-yummies-150-gr.jpg', 4),
('Café Molido Hondureño Oro', 4.6, 6.20, 'https://mundofoods.com/15222880-home_default/cafe-oro-honduras-453-gr.jpg', 7),
('Salsa chile Extra', 4, 3.20, 'https://mundofoods.com/15222927-home_default/salsa-chile-picante-schilos-153-ml.jpg', 5),
('Salsa de Ajo y Perejil', 4.5, 3.75, 'https://mundofoods.com/15223139-home_default/salsa-de-ajo-perejil-don-ramon-330-ml.jpg', 7),
('Salsa de Tomate Ranchera', 4.2, 1.40, 'https://mundofoods.com/15223140-home_default/pica-pica-honduras-don-ramon-425-gr.jpg', 7),
('Sardinas Pica Pica', 3.9, 2.95, 'https://mundofoods.com/15217084-home_default/comprar-harina-maseca-2-kg.jpg', 7),
('Carammelos de Leche', 4.6, 2.85, 'https://mundofoods.com/15223607-home_default/caramelos-de-leche-diana-154-gr.jpg', 3),
('Chicle de Cereza Bubbaloo', 4.1, 0.20, 'https://mundofoods.com/15223843-home_default/chicle-de-cereza-bubbaloo-5-gr.jpg', 3),
('Achiote Molido', 4.1, 1.75, 'https://mundofoods.com/15223138-home_default/achiote-molido-onoto-don-ramon-70-gr.jpg', 7),
('Elotitos con Piquete', 4.6, 3.40, 'https://mundofoods.com/15223609-home_default/elotitos-con-piquete-diana-170-gr.jpg', 3),
('Elotitos con Limón', 4.6, 1.95, 'https://mundofoods.com/15223608-home_default/elotitos-con-limon-diana-183-gr.jpg', 3),
('Encurtido Lago de Yojoa', 4, 5.75, 'https://mundofoods.com/15223729-home_default/encurtido-hondureno-naturas-1-kg.jpg', 2),
('Fideos Chop Suey', 3.20, 1.85, 'https://mundofoods.com/15223142-home_default/fideos-chop-suey-don-ramon-227-gr.jpg', 7),
('Harina de Trigo Fortificada', 4.3, 3.40, 'https://walmarthn.vtexassets.com/arquivos/ids/271647/Harina-La-Rosa-De-Trigo-2-268-Kg-1-8961.jpg?v=638059485944630000', 1),
('Harina de Trigo', 4.7, 3.95, 'https://walmarthn.vtexassets.com/arquivos/ids/172014/Harinas-Gold-Star-Para-Baleadas-2270Gr-1-8825.jpg?v=637666371368230000', 1);

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
