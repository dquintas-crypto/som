---
title: ​🧰​ Utilidades varias 
---
# ​🧰​ Utilidades varias

## 1. `cls` 

Limpiar pantalla

Limpia todo el contenido mostrado en la ventana del símbolo del sistema.

```cmd
cls
```

> Deja la pantalla limpia sin borrar el historial de comandos.
## 2. `echo` 

Muestra texto en pantalla o controla si se muestran los comandos al ejecutarlos.

|Comando|Descripción|
|---|---|
|`echo Hola Mundo`|Muestra el texto "Hola Mundo"|
|`echo.`|Imprime una línea en blanco|
|`echo off`|Oculta los comandos en ejecución (usado en scripts .bat)|
|`echo on`|Vuelve a mostrar los comandos en ejecución|

**Ejemplo:**

```cmd
echo Bienvenido al sistema!
```

> Muestra un mensaje personalizado.
## 3. `pause` 

Detiene temporalmente la ejecución y muestra el mensaje “Presione una tecla para continuar…”.

```cmd
pause
```

> Útil en scripts para que el usuario lea mensajes antes de continuar.
## 4. `color` 

Permite modificar los colores de texto y fondo de la consola.

|Código|Color|
|---|---|
|0|Negro|
|1|Azul|
|2|Verde|
|4|Rojo|
|7|Blanco grisáceo|
|A|Verde claro|
|B|Azul claro|
|C|Rojo claro|
|F|Blanco brillante|

**Ejemplos:**

```cmd
color 0A
```

> Fondo negro, texto verde claro.

```cmd
color F4
```

> Fondo blanco, texto rojo.
## 5. `title` 

Cambia el texto mostrado en la barra superior de la ventana del símbolo del sistema.

```cmd
title Modo Administrador
```

> El título de la ventana cambiará a “Modo Administrador”.
## 6. `date` y `time` 

Mostrar o cambiar fecha y hora

|Comando|Descripción|
|---|---|
|`date`|Muestra la fecha actual y permite cambiarla|
|`time`|Muestra la hora actual y permite modificarla|

**Ejemplos:**

```cmd
date /t
time /t
```

> Muestra la fecha y hora actual sin pedir cambios.
## 7. `systeminfo` 

Muestra información detallada del sistema operativo, hardware, red, etc.

```cmd
systeminfo
```

> Muestra el nombre del equipo, versión de Windows, procesador, RAM, actualizaciones instaladas, etc.

```cmd
systeminfo | find "Host Name"
```

> Muestra únicamente el nombre del equipo.
## 8. `tasklist` y `taskkill` 

Ver y finalizar procesos

|Comando|Descripción|
|---|---|
|`tasklist`|Lista los procesos en ejecución|
|`tasklist /fi "imagename eq notepad.exe"`|Filtra los procesos por nombre|
|`taskkill /im notepad.exe /f`|Cierra el Bloc de notas (forzadamente)|

**Ejemplo combinado:**

```cmd
tasklist | find "chrome"
```

> Busca procesos de Chrome activos.
## 9. `chkdsk` 

Comprobar disco

Revisa el sistema de archivos y la integridad del disco.

|Comando|Descripción|
|---|---|
|`chkdsk C:`|Verifica el disco C: sin repararlo|
|`chkdsk C: /f`|Corrige errores en el disco|
|`chkdsk D: /r`|Busca sectores defectuosos y los repara|

**Ejemplo:**

```cmd
chkdsk C: /f /r
```

> Repara errores y sectores defectuosos del disco principal.
## 10. `sfc` 

Analiza y repara archivos del sistema de Windows dañados.

```cmd
sfc /scannow
```

> Escanea el sistema y reemplaza archivos dañados automáticamente.
## 11. `shutdown` 

Apagar o reiniciar el sistema

|Comando|Descripción|
|---|---|
|`shutdown /s /t 0`|Apaga el equipo inmediatamente|
|`shutdown /r /t 30`|Reinicia el equipo en 30 segundos|
|`shutdown /l`|Cierra la sesión actual|
|`shutdown /a`|Cancela un apagado programado|

**Ejemplo:**

```cmd
shutdown /s /t 60 /c "El equipo se apagará en 1 minuto."
```

> Programa un apagado con mensaje de advertencia.
## 12. `ver` y `hostname`

|Comando|Descripción|
|---|---|
|`ver`|Muestra la versión del sistema operativo|
|`hostname`|Muestra el nombre del equipo|

**Ejemplo combinado:**

```cmd
echo Equipo: %COMPUTERNAME%
ver
```

> Muestra el nombre del equipo y la versión de Windows.
## 13. `set` 

Permite ver o modificar variables de entorno del sistema.

|Comando|Descripción|
|---|---|
|`set`|Muestra todas las variables de entorno actuales|
|`set usuario=Dani`|Crea o modifica una variable temporal|
|`echo %usuario%`|Muestra el valor de la variable|

**Ejemplo:**

```cmd
set curso=SMR2
echo Bienvenido al curso %curso%
```

> Crea una variable y la muestra en pantalla.
## 14. `tree` y `assoc`

|Comando|Descripción|
|---|---|
|`tree`|Muestra la estructura de carpetas en forma de árbol|
|`tree /f`|Muestra también los archivos|
|`assoc`|Muestra asociaciones de extensiones de archivo|
|`assoc .txt`|Muestra o cambia el programa asociado a `.txt`|

**Ejemplo:**

```cmd
tree C:\Users\ /f > estructura.txt
```

> Guarda en un archivo de texto la estructura completa de carpetas y archivos del usuario.

## 💡 Consejos 

- Combina comandos con `&&` para ejecutar varios consecutivamente.
    
- Usa `>` o `>>` para redirigir la salida a un archivo.
    
- Ejecuta CMD como **Administrador** para usar comandos del sistema.
    
- `help <comando>` muestra la ayuda específica de cada uno.
    

---
