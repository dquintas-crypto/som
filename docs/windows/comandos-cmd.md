---
title: ​🖥️​ Comandos Windows (CMD)
---

# ​🖥️​ Comandos Windows (CMD)

## 🗂️ Navegación y directorios

| Comando | Descripción                                         | Ejemplo                  |
| ------- | --------------------------------------------------- | ------------------------ |
| `dir`   | Lista los archivos y carpetas del directorio actual | `dir C:\Users`           |
| `cd`    | Cambia de directorio                                | `cd C:\Windows\System32` |
| `cd ..` | Sube un nivel en la jerarquía de carpetas           | `cd ..`                  |
| `mkdir` | Crea una nueva carpeta                              | `mkdir proyectos`        |
| `rmdir` | Elimina una carpeta vacía                           | `rmdir temp`             |
| `tree`  | Muestra la estructura de carpetas                   | `tree /f`                |

📒 [Ejemplos](./ejemplos/directorios.md)

 


## 🗃️​ Archivos

| Comando  | Descripción                                 | Ejemplo                          |
| -------- | ------------------------------------------- | -------------------------------- |
| `copy`   | Copia archivos de un lugar a otro           | `copy archivo.txt D:\backup`     |
| `move`   | Mueve archivos o carpetas                   | `move log.txt C:\Logs`           |
| `del`    | Elimina uno o varios archivos               | `del *.tmp`                      |
| `rename` | Cambia el nombre de un archivo              | `rename datos.txt datos_old.txt` |
| `type`   | Muestra el contenido de un archivo de texto | `type readme.txt`                |

📒 [Ejemplos](./ejemplos/archivos.md)

 ## 🌐 Red

| Comando    | Descripción                                              | Ejemplo               |
| ---------- | -------------------------------------------------------- | --------------------- |
| `ipconfig` | Muestra configuración de red                             | `ipconfig /all`       |
| `ping`     | Comprueba la conexión con una dirección IP o dominio     | `ping google.com`     |
| `tracert`  | Muestra la ruta que siguen los paquetes hasta un destino | `tracert google.com`  |
| `netstat`  | Muestra conexiones de red y puertos activos              | `netstat -an`         |
| `nslookup` | Consulta DNS de un dominio                               | `nslookup openai.com` |
| `arp`      | Muestra o modifica la tabla ARP                          | `arp -a`              |

📒 [Ejemplos](./ejemplos/red.md)

 ## ⚙️ Sistema y administración

| Comando | Descripción | Ejemplo |
|----------|--------------|----------|
| `systeminfo` | Muestra información detallada del sistema | `systeminfo` |
| `tasklist` | Lista los procesos en ejecución | `tasklist` |
| `taskkill` | Finaliza un proceso | `taskkill /im notepad.exe /f` |
| `shutdown` | Apaga o reinicia el equipo | `shutdown /r /t 0` |
| `chkdsk` | Verifica el estado del disco | `chkdsk C:` |
| `sfc /scannow` | Repara archivos del sistema | `sfc /scannow` |

📒 [Ejemplos](./ejemplos/administracion.md)

 ## 🧰 Utilidades varias

| Comando | Descripción                                | Ejemplo            |
| ------- | ------------------------------------------ | ------------------ |
| `cls`   | Limpia la pantalla                         | `cls`              |
| `help`  | Muestra ayuda general o de un comando      | `help dir`         |
| `echo`  | Muestra mensajes o activa/desactiva el eco | `echo Hola Mundo`  |
| `color` | Cambia el color del texto y fondo          | `color 0A`         |
| `title` | Cambia el título de la ventana             | `title Mi Consola` |
| `ver`   | Muestra la versión del sistema operativo   | `ver`              |

📒 [Ejemplos](./ejemplos/utilidades.md)

 ## 🔐 Usuarios y permisos

| Comando | Descripción | Ejemplo |
|----------|--------------|----------|
| `net user` | Muestra o gestiona usuarios locales | `net user Dani /add` |
| `net localgroup` | Gestiona grupos locales | `net localgroup administradores Dani /add` |
| `runas` | Ejecuta un programa como otro usuario | `runas /user:Administrador cmd` |

📒 [Ejemplos](./ejemplos/usuarios.md) 

## 💾 Discos y almacenamiento

| Comando | Descripción | Ejemplo |
|----------|--------------|----------|
| `diskpart` | Abre la herramienta de particionado de discos | `diskpart` |
| `label` | Cambia la etiqueta del volumen | `label C: SISTEMA` |
| `vol` | Muestra la etiqueta y número de serie del disco | `vol D:` |
| `format` | Formatea un disco | `format E:` |

📒 [Ejemplos](./ejemplos/discos.md)

 ## 🧮 Variables y scripts

| Comando | Descripción                                       | Ejemplo                          |
| ------- | ------------------------------------------------- | -------------------------------- |
| `set`   | Muestra o asigna variables de entorno             | `set PATH`                       |
| `setx`  | Asigna variables permanentes                      | `setx JAVA_HOME "C:\Java"`       |
| `if`    | Evalúa una condición                              | `if exist datos.txt echo Existe` |
| `for`   | Ejecuta un bucle                                  | `for %i in (*.txt) do echo %i`   |
| `call`  | Llama a otro script                               | `call otro.bat`                  |
| `pause` | Detiene la ejecución hasta que se pulse una tecla | `pause`                          |

📒 [Ejemplos](./ejemplos/scripts.md)

 ## 🧱 Información del entorno

| Comando | Descripción | Ejemplo |
|----------|--------------|----------|
| `path` | Muestra o define rutas de búsqueda | `path` |
| `hostname` | Muestra el nombre del equipo | `hostname` |
| `date` | Muestra o cambia la fecha del sistema | `date /t` |
| `time` | Muestra o cambia la hora | `time /t` |

📒 [Ejemplos](./ejemplos/entorno.md)
 

