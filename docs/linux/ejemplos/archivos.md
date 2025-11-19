---
title: ​🗃️​ Gestión de archivos en Linux
---

# ​🗃️​ Gestión de Archivos



## 1. `cat`

| Comando          | Descripción                                             |
| ---------------- | ------------------------------------------------------- |
| `cat archivo`    | Muestra el contenido completo de un archivo             |
| `cat archivo1 archivo2` | Muestra el contenido de varios archivos seguidos |
| `cat > archivo`  | Crea un archivo y permite escribir en él                |
| `cat >> archivo` | Añade contenido al final del archivo                    |

**Ejemplos combinados:**

```bash
cat notas.txt
````

> Muestra todo el contenido del archivo `notas.txt`.

```bash
cat parte1.txt parte2.txt > completo.txt
```

> Une dos archivos y genera uno nuevo llamado `completo.txt`.

---

## 2. `touch`

| Comando         | Descripción                             |
| --------------- | --------------------------------------- |
| `touch archivo` | Crea un archivo vacío                   |
| `touch a b c`   | Crea varios archivos en un solo comando |

**Ejemplos combinados:**

```bash
touch informe.txt
```

> Crea un archivo vacío llamado `informe.txt`.

```bash
touch enero.txt febrero.txt marzo.txt
```

> Crea tres archivos a la vez.

---

## 3. `cp`

| Comando                   | Descripción                            |
| ------------------------- | -------------------------------------- |
| `cp origen destino`       | Copia un archivo                       |
| `cp archivo carpeta/`     | Copia un archivo dentro de una carpeta |
| `cp -r carpeta1 carpeta2` | Copia carpetas recursivamente          |
| `cp *.txt carpeta/`       | Copia todos los `.txt` a otra carpeta  |

**Ejemplos combinados:**

```bash
cp documento.txt /home/usuario/Backup/
```

> Copia `documento.txt` al directorio Backup.

```bash
cp -r /var/log /home/usuario/logs_copia
```

> Copia toda la carpeta `/var/log`.

---

## 4. `mv`

| Comando               | Descripción                          |
| --------------------- | ------------------------------------ |
| `mv origen destino`   | Mueve un archivo                     |
| `mv archivo carpeta/` | Mueve archivos dentro de una carpeta |
| `mv nombre1 nombre2`  | Renombra un archivo o carpeta        |

**Ejemplos combinados:**

```bash
mv datos.txt /home/usuario/Documentos
```

> Mueve `datos.txt` a Documentos.

```bash
mv informe.txt informe_final.txt
```

> Renombra un archivo.

---

## 5. `rm`

| Comando         | Descripción                                     |
| --------------- | ----------------------------------------------- |
| `rm archivo`    | Elimina un archivo                              |
| `rm *.txt`      | Elimina todos los archivos con extensión `.txt` |
| `rm -i archivo` | Elimina pidiendo confirmación                   |
| `rm -f archivo` | Elimina sin confirmar                           |

**Ejemplos combinados:**

```bash
rm notas.txt
```

> Elimina `notas.txt`.

```bash
rm -f temporal.log
```

> Elimina sin preguntar, incluso si está protegido.

---

## 6. `head` y `tail`

| Comando           | Descripción                          |
| ----------------- | ------------------------------------ |
| `head archivo`    | Muestra las primeras 10 líneas       |
| `head -n 20`      | Muestra las primeras 20 líneas       |
| `tail archivo`    | Muestra las últimas 10 líneas        |
| `tail -f archivo` | Muestra nuevas líneas en tiempo real |

**Ejemplos combinados:**

```bash
head -n 5 notas.txt
```

> Muestra las primeras 5 líneas de *notas.txt*.

```bash
tail -f /var/log/syslog
```

> Muestra el log del sistema en tiempo real.

---

## 7. `less`

| Comando        | Descripción                        |
| -------------- | ---------------------------------- |
| `less archivo` | Permite ver el archivo por páginas |
| `q`            | Salir de less                      |
| `/texto`       | Buscar texto dentro del archivo    |

**Ejemplos combinados:**

```bash
less manual.txt
```

> Permite leer *manual.txt* con desplazamiento.

---

## 8. Edición (`nano`, `vim`)

| Comando        | Descripción                    |
| -------------- | ------------------------------ |
| `nano archivo` | Abre editor simple en terminal |
| `vim archivo`  | Abre editor avanzado           |

**Ejemplos combinados:**

```bash
nano notas.txt
```

> Abre el archivo para editarlo.

---

## 9. Combinaciones

* Crear archivo, añadir texto y moverlo:

```bash
echo "Hola Linux" > saludo.txt && mv saludo.txt ~/Documentos
```

> Crea un archivo con texto y lo mueve a Documentos.

* Buscar archivos por nombre:

```bash
find . -name "*.log"
```

> Muestra todos los archivos `.log` en la carpeta actual y subcarpetas.

* Buscar texto dentro de archivos:

```bash
grep -r "error" /var/log
```

> Busca la palabra “error” en todos los logs.

---

## 💡 Consejos

* Para ver archivos ocultos:

```bash
ls -a
```

* Para crear varios archivos rápidamente:

```bash
touch {1..10}.txt
```

* Para protegerte al borrar:

```bash
rm -i archivo
```

> Siempre pide confirmación.

