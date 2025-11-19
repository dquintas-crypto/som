---
title: 🐧 Comandos básicos de Linux
---

# 🐧 Comandos básicos de Linux

## 📁 Navegación por directorios

| Comando     | Descripción                                             |
| ----------- | ------------------------------------------------------- |
| `pwd`       | Muestra la ruta del directorio actual.                  |
| `ls`        | Lista los archivos y carpetas del directorio.           |
| `ls -l`     | Lista detallada (permisos, propietario, tamaño, fecha). |
| `ls -a`     | Lista incluyendo archivos ocultos.                      |
| `cd nombre` | Entra en un directorio.                                 |
| `cd ..`     | Sube al directorio padre.                               |
| `cd /ruta`  | Va a un directorio concreto.                            |
| `cd ~`      | Va al directorio personal del usuario.                  |

📒 [Ejemplos](./ejemplos/directorios.md)

## 🗃️ Gestión de archivos y directorios

| Comando                | Descripción                         |
| ---------------------- | ----------------------------------- |
| `mkdir nombre`         | Crea un directorio.                 |
| `mkdir -p ruta/ruta`   | Crea directorios anidados.          |
| `touch archivo`        | Crea un archivo vacío.              |
| `cp origen destino`    | Copia un archivo.                   |
| `cp -r origen destino` | Copia un directorio.                |
| `mv origen destino`    | Mueve o renombra.                   |
| `rm archivo`           | Borra un archivo.                   |
| `rm -r directorio`     | Borra un directorio y su contenido. |

📒 [Ejemplos](./ejemplos/archivos.md)

## 📄 Visualización de archivos

| Comando           | Descripción                                             |
| ----------------- | ------------------------------------------------------- |
| `cat archivo`     | Muestra el contenido del archivo.                       |
| `less archivo`    | Muestra el contenido por páginas (salida paginada).     |
| `head archivo`    | Primeras 10 líneas.                                     |
| `tail archivo`    | Últimas 10 líneas.                                      |
| `tail -f archivo` | Muestra en tiempo real lo que se escribe en el archivo. |

📒 [Ejemplos](./ejemplos/archivos.md)

## 🔒 Permisos y propietarios

| Comando                       | Descripción                                |
| ----------------------------- | ------------------------------------------ |
| `chmod 755 archivo`           | Cambia permisos (notación octal).          |
| `chmod u+x archivo`           | Añade permiso de ejecución al propietario. |
| `chown usuario archivo`       | Cambia el propietario.                     |
| `chown usuario:grupo archivo` | Cambia propietario y grupo.                |

📒 [Ejemplos](./ejemplos/usuarios.md)

## ⚙️ Procesos y sistema

| Comando           | Descripción                                      |
| ----------------- | ------------------------------------------------ |
| `ps`              | Muestra procesos del usuario.                    |
| `ps aux`          | Muestra todos los procesos.                      |
| `top`             | Vista dinámica de procesos.                      |
| `htop`            | Igual que top pero mejorado (si está instalado). |
| `kill PID`        | Mata un proceso por su PID.                      |
| `sudo comando`    | Ejecuta un comando como administrador.           |
| `shutdown -h now` | Apaga el sistema.                                |
| `reboot`          | Reinicia la máquina.                             |

📒 [Ejemplos](./ejemplos/administracion.md)

## 🌐 Red

| Comando           | Descripción                          |
| ----------------- | ------------------------------------ |
| `ip a`            | Muestra interfaces y direcciones IP. |
| `ping google.com` | Comprueba conectividad.              |
| `curl url`        | Descarga contenido de una URL.       |
| `wget url`        | Descarga archivos desde internet.    |
| `ss -tulpn`       | Ver puertos y servicios activos.     |

📒 [Ejemplos](./ejemplos/red.md)

## 📦 Gestión de paquetes 

| Comando                    | Descripción                           |
| -------------------------- | ------------------------------------- |
| `sudo apt update`          | Actualiza la información de paquetes. |
| `sudo apt upgrade`         | Actualiza paquetes instalados.        |
| `sudo apt install paquete` | Instala un paquete.                   |
| `sudo apt remove paquete`  | Elimina un paquete.                   |
| `sudo apt autoremove`      | Limpia paquetes innecesarios.         |


📒 [Ejemplos](./ejemplos/paquetes.md)

## 📝 Edición de archivos

| Comando        | Descripción                       |
| -------------- | --------------------------------- |
| `nano archivo` | Editor de texto sencillo.         |
| `vim archivo`  | Editor de texto avanzado.         |
| `code .`       | Abre VS Code (si está instalado). |



## 🔍 Búsqueda

| Comando                    | Descripción                       |
| -------------------------- | --------------------------------- |
| `find /ruta -name archivo` | Busca archivos por nombre.        |
| `grep texto archivo`       | Busca texto dentro de un archivo. |
| `grep -r texto directorio` | Búsqueda recursiva.               |



## 📦 Discos y espacio

| Comando          | Descripción                         |
| ---------------- | ----------------------------------- |
| `df -h`          | Muestra el uso de espacio en disco. |
| `du -sh carpeta` | Tamaño de una carpeta.              |
| `lsblk`          | Lista discos y particiones.         |
