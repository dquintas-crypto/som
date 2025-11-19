---
title: 🗂️ Navegación y directorios
---

# 🗂️ Navegación y directorios


## 1. `ls`

| Comando             | Descripción                                                          |
| ------------------- | -------------------------------------------------------------------- |
| `ls`                | Lista el contenido del directorio actual                             |
| `ls -l`             | Lista detallada: permisos, propietario, tamaño, fecha                |
| `ls -a`             | Muestra también archivos ocultos (los que empiezan por `.`)          |
| `ls -la`            | Lista detallada incluyendo archivos ocultos                          |
| `ls *.txt`          | Muestra solo archivos que coincidan con un patrón                    |
| `ls -lh`            | Lista con tamaños “legibles” para humanos (KB, MB, GB)               |
| `ls -R`             | Lista de forma recursiva en subdirectorios                           |
| `ls /etc`           | Lista contenido de una ruta concreta                                 |

**Ejemplos combinados:**

```bash
ls -lah /var/log
````

> Lista detallada, incluyendo ocultos, con tamaños legibles, dentro de `/var/log`.

```bash
ls -R /home/usuario > listado.txt
```

> Lista recursivamente el contenido del HOME y guarda la salida en `listado.txt`.

---

## 2. `cd`

| Comando      | Descripción                              |
| ------------ | ---------------------------------------- |
| `cd carpeta` | Entra en un directorio                   |
| `cd ..`      | Sube al directorio padre                 |
| `cd /etc`    | Va a una ruta absoluta                   |
| `cd ~`       | Va al directorio personal del usuario    |
| `cd -`       | Vuelve al directorio anterior            |
| `cd ../otra` | Ruta relativa desde el directorio actual |

**Ejemplos combinados:**

```bash
cd ~/Documentos/Proyectos
```

> Entra en *Documentos/Proyectos* dentro del HOME del usuario.

```bash
cd - 
```

> Cambia entre el directorio actual y el anterior.

---

## 3. `mkdir`

| Comando                 | Descripción                                  |
| ----------------------- | -------------------------------------------- |
| `mkdir nueva`           | Crea una carpeta llamada `nueva`             |
| `mkdir -p ruta/subruta` | Crea subcarpetas anidadas en un solo comando |
| `mkdir "Mi Carpeta"`    | Permite nombres con espacios usando comillas |

**Ejemplos combinados:**

```bash
mkdir -p /home/usuario/2025/Enero/Practicas
```

> Crea toda la estructura de carpetas en un solo paso.

```bash
mkdir "Proyectos Linux"
```

> Crea una carpeta cuyo nombre contiene espacios.

---

## 4. `rmdir` 

| Comando          | Descripción                                       |
| ---------------- | ------------------------------------------------- |
| `rmdir carpeta`  | Elimina carpeta vacía                             |
| `rm -r carpeta`  | Elimina carpeta con todo su contenido             |
| `rm -rf carpeta` | Elimina carpetas sin pedir confirmación (forzado) |

**Ejemplos combinados:**

```bash
rm -r ~/Descargas/Temporal
```

> Borra la carpeta y su contenido.

```bash
rm -rf /home/usuario/proyectos_antiguos
```

> Elimina toda la carpeta sin pedir confirmación.

---

## 5. `tree`

Muestra la estructura completa de carpetas en forma de árbol (puede requerir instalación: `sudo apt install tree`).

| Comando     | Descripción                                        |
| ----------- | -------------------------------------------------- |
| `tree`      | Muestra árbol de directorios del directorio actual |
| `tree -f`   | Incluye archivos en la vista                       |
| `tree -L 2` | Limita profundidad a 2 niveles                     |

**Ejemplos combinados:**

```bash
tree ~/Documentos -L 3
```

> Muestra la estructura de *Documentos* hasta 3 niveles.

```bash
tree -f
```

> Muestra el árbol incluyendo archivos.

---

## 6. Combinaciones

* Buscar archivos por extensión y guardar los resultados:

```bash
ls -R *.txt > listado_txt.txt
```

> Lista todos los `.txt` de la carpeta actual y subcarpetas.

* Buscar por nombre usando `find`:

```bash
find /var/log -name "*.log"
```

> Muestra todos los archivos `.log` dentro de `/var/log`.

* Buscar dentro del contenido de los archivos:

```bash
grep -r "error" .
```

> Busca la palabra **error** en todos los archivos del directorio actual.

---

## 💡 Consejos

* Usa **TAB** para autocompletar rutas:

```bash
cd Docu[TAB]
```

* Usa comillas para rutas con espacios:

```bash
cd "Mis Proyectos 2025"
```

* Para ver tamaños legibles:

```bash
ls -lh
```

* Para cambiar muy rápido entre dos carpetas:

```bash
cd -



