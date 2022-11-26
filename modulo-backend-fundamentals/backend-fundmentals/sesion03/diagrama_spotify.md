**Géneros** (<u>id</u>, nombre)

**Canciones** (<u>id</u>, nombre, duracion, reproducciones, es_explicita, id_artista, id_album)

**Album** (<u>id</u>, nombre, fecha_lanzamiento)

**Usuarios** (<u>id</u>, genero, nombre_usuario, pais, telefono, nombre, ap_paterno, ap_materno, correo_electronico)

**Favoritos** (<u>id_usuario</u>, <u>id_cancion</u>)

**Artistas** (<u>id</u>, nombre, pais)

---

## Explicación de convertir un atributo multivaluado

Tabla de usuarios
| <u>id</u> | nombre |
|--- |--- |
| 1 | Juan |
| 2 | Pablo |
| 3 | Maria |

Tabla de telefonos
| <u>id_usuario</u> | <u>telefono</u> |
|-- | -- |
| 1 | 55480000 |
| 2 | 67380000 |
| 1 | 45390000 |
| 3 | 45390000 |

## Explicación de convertir Muchos a Muchos

Tabla de usuarios
| <u>id</u> | nombre |
|--- |--- |
| 1 | Juan |
| 2 | Pablo |
| 3 | Maria |

Tabla de canciones
| <u>id</u> | nombre |
|--- |--- |
| 500 | Neverita |
| 501 | Sopa de Caracol |
| 502 | Macarena |
| 503 | Impacto |
