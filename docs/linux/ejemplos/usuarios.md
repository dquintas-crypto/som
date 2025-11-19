---
title: ​🔐​ Permisos y propietarios
---

# ​🔐​ Permisos y propietarios



## 1. `chmod`

| Comando                | Descripción                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| `chmod 755 archivo`    | Cambia permisos usando notación octal                             |
| `chmod u+x archivo`    | Añade permiso de ejecución al propietario                          |
| `chmod g-w archivo`    | Quita permiso de escritura al grupo                               |
| `chmod o-r archivo`    | Quita permiso de lectura a otros                                  |
| `chmod u=rwx,g=rx,o=r` | Establece permisos específicos por usuario, grupo y otros         |
| `chmod -R 755 carpeta` | Cambia permisos de forma recursiva                                |

**Ejemplos combinados:**

```bash
chmod 644 documento.txt
````

> Permisos: propietario puede leer y escribir; grupo y otros solo leer.

```bash
chmod -R 700 ~/Privado
```

> Solo el usuario puede acceder a la carpeta *Privado*.

---

## 2. `chown`

| Comando                       | Descripción                           |
| ----------------------------- | ------------------------------------- |
| `chown usuario archivo`       | Cambia el propietario                 |
| `chown usuario:grupo archivo` | Cambia propietario y grupo            |
| `chown -R usuario carpeta`    | Cambia propietario de forma recursiva |

**Ejemplos combinados:**

```bash
chown dani informe.txt
```

> El archivo ahora pertenece al usuario *dani*.

```bash
chown dani:profesores /var/www
```

> Cambia propietario y grupo simultáneamente.

---

## 3. `chgrp`

| Comando               | Descripción                      |
| --------------------- | -------------------------------- |
| `chgrp grupo archivo` | Cambia solo el grupo del archivo |
| `chgrp -R grupo dir`  | Cambia grupo de forma recursiva  |

**Ejemplos combinados:**

```bash
chgrp alumnos tarea1.txt
```

> Asigna el archivo al grupo *alumnos*.

---

## 4. Tipos de permisos

| Permiso | Significado       | Aplicable a            |
| ------- | ----------------- | ---------------------- |
| `r`     | Leer              | Archivos y directorios |
| `w`     | Escribir          | Archivos y directorios |
| `x`     | Ejecutar / Entrar | Archivos y directorios |

**Estructura típica de permisos:**

```
-rwxr-xr--
```

Significa:

* **Usuario**: rwx
* **Grupo**: r-x
* **Otros**: r--

---

## 5. Notación octal

| Número | Permiso |
| ------ | ------- |
| `7`    | rwx     |
| `6`    | rw-     |
| `5`    | r-x     |
| `4`    | r--     |
| `3`    | -wx     |
| `2`    | -w-     |
| `1`    | --x     |
| `0`    | ---     |

**Ejemplos:**

### `chmod 755 archivo`

```
propietario: rwx
grupo:      r-x
otros:      r-x
```

### `chmod 644 archivo`

```
propietario: rw-
grupo:      r--
otros:      r--
```

---

## 6. Permisos especiales

| Permiso | Nombre | Descripción                                               |
| ------- | ------ | --------------------------------------------------------- |
| `s`     | SUID   | Ejecuta un archivo con permisos del propietario           |
| `s`     | SGID   | Ejecuta con permisos del grupo / fuerza herencia de grupo |
| `t`     | Sticky | Solo el propietario puede borrar el archivo               |

### 6.1 SUID

```bash
chmod u+s archivo
```

### 6.2 SGID

```bash
chmod g+s carpeta
```

### 6.3 Sticky bit

Muy usado en `/tmp`.

```bash
chmod +t carpeta
```

---

## 7. Combinaciones

* Cambiar permisos y propietario:

```bash
chmod 600 secreto.txt && chown dani secreto.txt
```

> Solo dani puede leer o modificar el archivo.

* Dar permisos de ejecución a varios scripts:

```bash
chmod +x *.sh
```

> Vuelve ejecutables todos los archivos `.sh`.

* Asegurar que una carpeta compartida mantenga el grupo:

```bash
chmod 2775 /compartida
```

> Aplica SGID para que todos los archivos creados hereden el grupo.

---

## 💡 Consejos

* Para ver permisos de forma clara:

```bash
ls -l
```

* Para dar permiso de ejecución rápidamente:

```bash
chmod +x script.sh
```

* Para carpetas compartidas en equipo:

```bash
chmod g+s carpeta
```

* Para proteger archivos importantes:

```bash
chmod 400 archivo
```

> Solo lectura para el propietario (ideal para claves SSH).


