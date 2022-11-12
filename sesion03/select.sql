-- SELECT campos FROM tabla => Todos los registros
-- SELECT campos FROM tabla WHERE condicion => Los registros que cumplan la condicion
-- Si se quieren obtener todos los campos de una tabla entonces se usa *

-- Obtener todos los generos
SELECT * FROM generos;

-- Obtener el nombre de todas las canciones
SELECT nombre FROM canciones;

-- Obtener las canciones con duración mayor o igual a 3 minutos
SELECT * FROM canciones WHERE duracion >= 3;

-- Obtener los albumes lanzados a partir del años 1960
SELECT * FROM album WHERE fecha_lanzamiento > '1960-01-01';

-- Obtener el correo electronico y el nombre de usuario del ID 300
-- En SQL = es lo mismo que == en otros lenguajes de programación
SELECT nombre_usuario, correo_electronico FROM usuarios WHERE id = 300;

-- Obtener el nombre de las canciones que toca Led Zeppelin
SELECT nombre FROM canciones WHERE id_artista = 400;

-- Obtener el nombre de las canciones que le gustan al usuario 300
SELECT nombre FROM canciones WHERE id = 500 OR id = 501; -- ❌

SELECT nombre 
FROM favoritos f JOIN canciones c ON c.id = f.id_cancion 
WHERE id_usuario = 300;

-- Obtener los generos que toca Led Zeppelin
SELECT DISTINCT(g.nombre)
FROM artistas a
  JOIN canciones c ON c.id_artista = a.id
  JOIN generos g ON c.id_genero = g.id
WHERE a.id = 400;