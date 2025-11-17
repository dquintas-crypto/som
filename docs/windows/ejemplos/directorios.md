---
title: 🗂️ Navegación y directorios
---

# 🗂️ Navegación y directorios


## 1. `dir` 

| Comando            | Descripción                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `dir > output.txt` | Lista y guarda en output.txt la salida de dir                              |
| `dir /b`           | Lista en formato simple, solo nombres                                      |
| `dir /p`           | Pausa cada pantalla de resultados                                          |
| `dir *.exe`        | Muestra solo archivos con extensión `.exe                                  |
| `dir /os`          | Mostrar ordenados<br>(s-> tamaño, e -> extensión, d-> fecha)               |
| `dir /a`           | Mostrar todos los tipos de elmentos                                        |
| `dir /a:d`         | Muestra solo directorios<br>(d -> directorios, a -> archivos , h->ocultos) |
| `dir /s *.txt`     | Busca archivos `.txt` en la carpeta y subcarpetas                          |
| `dir /o:-d`        | Ordena por fecha, del más reciente al más antiguo                          |


**Ejemplos combinados:**

```cmd
dir C:\Windows\System32 *.dll /s /b > listado.txt
```

>Lista todos los archivos `.dll` dentro de System32 y sus subcarpetas, mostrando solo nombres y rutas y los guarda en el fichero listado.txt

```cmd
dir *.txt /p /o:-d
```

> Muestra todos los `.txt` del directorio actual, pausando la salida página por página y ordenando por fecha (más recientes primero).
 ## 2. `cd` 
| Comando            | Descripción                                                  |
| ------------------ | ------------------------------------------------------------ |
| `cd C:\Users\Dani` | Ir a la carpeta especificada                                 |
| `cd ..`            | Subir un nivel en la jerarquía                               |
| `cd\`              | Ir al directorio raíz del disco                              |
| `cd %HOMEPATH%`    | Ir a la carpeta de usuario actual usando variable de entorno |
 ## 3. `mkdir` 

| Comando                      | Descripción                               |
| ---------------------------- | ----------------------------------------- |
| `mkdir nueva_carpeta`        | Crea una carpeta llamada `nueva_carpeta`  |
| `mkdir Carpeta1\Subcarpeta1` | Crea carpetas anidadas en un solo comando |

**Ejemplos combinados:**

```cmd
mkdir C:\Proyectos\2025\Octubre
```

> Crea toda la estructura de carpetas en un solo paso.

```cmd
mkdir "C:\Proyectos con espacios\Prueba"
```

> Permite crear carpetas con espacios en el nombre usando comillas.
 ## 4. `rmdir` 

| Comando            | Descripción                                      |
| ------------------ | ------------------------------------------------ |
| `rmdir carpeta`    | Elimina carpeta vacía                            |
| `rmdir /s carpeta` | Elimina carpeta y todo su contenido              |
| `rmdir /q carpeta` | Elimina sin pedir confirmación (modo silencioso) |

**Ejemplos combinados:**

```cmd
rmdir /s /q C:\Proyectos\2023
```

> Borra la carpeta `2023` y todo su contenido sin pedir confirmación.

```cmd
rmdir temporal
```

> Elimina una carpeta vacía llamada `temporal`.
 ## 5. `tree` 

Muestra la estructura completa de carpetas en forma de árbol.

| Comando      | Descripción                                        |
| ------------ | -------------------------------------------------- |
| `tree`       | Muestra árbol de directorios del directorio actual |
| `tree /f`    | Muestra árbol incluyendo archivos                  |
| `tree fotos` | Muestra árbol de directorios del directorio fotos  |

**Ejemplos combinados:**

```cmd
tree C:\Proyectos /f 
```

> Muestra toda la estructura de `Proyectos` con archivos.

```cmd
tree /f
```

> Muestra el árbol de la carpeta actual incluyendo todos los archivos.
 ## 6. Combinaciones 

* Guardar lista de archivos en un archivo de texto:

```cmd
dir /s /b *.txt > listado_txt.txt
```

> Guarda la lista de todos los `.txt` en un archivo llamado `listado_txt.txt`.

* Filtrar resultados con `find`:

```cmd
dir /s /b *.log | find "error"
```

> Busca todas las líneas que contengan "error" en los nombres de archivos `.log`.
 ## 💡 Consejos 

* Usa **comillas** para rutas que contengan espacios:

```cmd
cd "C:\Program Files\Mi Carpeta"
```

* Para volver al directorio anterior rápidamente:

```cmd
cd -
```

> Nota: Este comando funciona en PowerShell, no en CMD puro.

* Combinaciones de `mkdir` y `cd` para crear y entrar en carpetas al instante:

```cmd
mkdir NuevosProyectos && cd NuevosProyectos
```

---
