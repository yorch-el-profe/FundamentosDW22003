-- INSERT INTO tabla VALUES (valor1, valor2, valor3, etc...)
-- INSERT INTO tabla (campo1, campo2) VALUES (valor1, valor)

INSERT INTO generos VALUES (100, 'Rock & Roll');
INSERT INTO generos VALUES (101, 'Bachata');
INSERT INTO generos VALUES (102, 'Cumbia');

INSERT INTO album VALUES (200, 'Led Zeppelin', '1969-01-12');

INSERT INTO usuarios VALUES (300, 'marcelo123', 'marcelo@gmail.com', 'México', '55229800', 'Marcelo', 'Frías', NULL, NULL);

INSERT INTO artistas VALUES (400, 'Led Zeppelin', 'Londres');

INSERT INTO canciones VALUES (500, 'Immigrant Song', 2, NULL, NULL, 100, 400, 200);
INSERT INTO canciones VALUES (501, 'Black Dog', 3, NULL, NULL, 100, 400, 200);

INSERT INTO favoritos VALUES (300, 500);
INSERT INTO favoritos VALUES (300, 501);