/*
  Tipos de datos disponibles en SQLite

  INTEGER, REAL, TEXT (VARCHAR), DATE, BOOLEAN, etc.
*/

/*
  PRIMARY KEY => Se define 1 solo campo como llave primaria

  PRIMARY KEY (campo1, campo2, ...)
*/

/*
  Restricciones
  Sin restricciones (vacio) => El atributo es opcional
  NOT NULL => El atributo es obligatorio y no se puede asignar NULL
  UNIQUE => El atributo tiene valores únicos
  DEFAULT(valor) => Se le asigna un valor por defecto al crear un registro

  En SQL el valor NULL significa "vacío".

  PRIMARY KEY por defecto es NOT NULL y UNIQUE
*/

/*
  Llaves foráneas (FK)

  Una llave foránea es una llave primaria de otra tabla. Estas llaves nos van ayudar a
  mantener la "INTEGRIDAD" de la información.

  Especificar una llave foránea

  1. El tipo de la llave foranea tiene que ser el mismo que la llave original
  2. Poner restricciones
  3. Ligar el FK con el PK:

    FOREIGN KEY (campo foreaneo) REFENCES tabla original (campo original)
*/

CREATE TABLE generos (
  id INTEGER PRIMARY KEY,
  nombre VARCHAR(20) NOT NULL
);

CREATE TABLE album (
  id INTEGER PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  fecha_lanzamiento DATE NOT NULL
);

CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY,
  nombre_usuario VARCHAR(20) NOT NULL UNIQUE,
  correo_electronico VARCHAR(50) NOT NULL UNIQUE,
  pais VARCHAR(20) NOT NULL,
  telefono VARCHAR(12) NOT NULL UNIQUE,
  nombre VARCHAR(25) NOT NULL,
  ap_paterno VARCHAR(25) NOT NULL,
  ap_materno VARCHAR(25),
  genero VARCHAR(1)
);

CREATE TABLE artistas (
  id INTEGER PRIMARY KEY,
  nombre VARCHAR(25) NOT NULL,
  pais VARCHAR(20) NOT NULL
);

CREATE TABLE canciones (
  id INTEGER PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  duracion INTEGER NOT NULL,
  reproducciones INTEGER DEFAULT(0),
  es_explicita BOOLEAN DEFAULT(0),
  id_genero INTEGER NOT NULL, -- FK
  id_artista INTEGER NOT NULL, -- FK
  id_album INTEGER NOT NULL, -- FK
  FOREIGN KEY (id_artista) REFERENCES artistas(id),
  FOREIGN KEY (id_album) REFERENCES album(id),
  FOREIGN KEY (id_genero) REFERENCES generos(id)
);

CREATE TABLE favoritos (
  id_usuario INTEGER NOT NULL, -- FK
  id_cancion INTEGER NOT NULL, -- FK
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
  FOREIGN KEY (id_cancion) REFERENCES canciones(id),
  PRIMARY KEY (id_usuario, id_cancion)
); 