---
title: ​🧱​ Información del entorno# ​
---
🧱​ Información del entorno

## 1. `set` 

Listar variables de entorno

Muestra todas las variables de entorno actuales.

**Ejemplo:**

```cmd
set
```

> Lista todas las variables de entorno activas en la sesión actual.

**Filtrar variables específicas:**

```cmd
set path
```

> Muestra únicamente la variable PATH.
## 2. `echo %VARIABLE%` 

Consultar variable específica

Permite mostrar el valor de cualquier variable de entorno.

**Ejemplos:**

```cmd
echo %USERNAME%
```

> Muestra el nombre del usuario actual.

```cmd
echo %COMPUTERNAME%
```

> Muestra el nombre del equipo.

```cmd
echo %CD%
```

> Muestra la carpeta actual.
## 3. `systeminfo` 

Información completa del sistema

Muestra datos sobre hardware, OS, memoria y red.

**Ejemplo:**

```cmd
systeminfo
```

> Lista nombre del sistema, versión de Windows, memoria instalada, actualizaciones, etc.

**Filtrar información específica:**

```cmd
systeminfo | find "Procesador"
systeminfo | find "Memoria"
```

> Filtra la información sobre procesador o memoria.
## 4. `hostname` 

Nombre del equipo

Muestra únicamente el nombre del equipo.

```cmd
hostname
```

> Devuelve el nombre del host.
## 5. `whoami` 

Usuario actual y privilegios

|Comando|Descripción|
|---|---|
|`whoami`|Muestra el usuario actual|
|`whoami /groups`|Lista los grupos a los que pertenece el usuario|
|`whoami /priv`|Muestra los privilegios del usuario|

**Ejemplo:**

```cmd
whoami /groups
```

> Lista todos los grupos de seguridad asociados al usuario actual.
## 6. `ipconfig` y `getmac` 

Información de red

|Comando|Descripción|
|---|---|
|`ipconfig`|Muestra la configuración IP de las interfaces de red|
|`ipconfig /all`|Información completa incluyendo MAC, DHCP y DNS|
|`getmac`|Muestra las direcciones físicas (MAC) de las interfaces|

**Ejemplo:**

```cmd
ipconfig /all
getmac
```

> Muestra toda la información de red y las direcciones MAC.
## 7. `wmic` 

Información detallada del hardware

|Comando|Descripción|
|---|---|
|`wmic cpu get name`|Muestra el modelo de procesador|
|`wmic memorychip get capacity`|Muestra la memoria RAM instalada|
|`wmic bios get serialnumber`|Muestra el número de serie del BIOS|
|`wmic logicaldisk get name,size,freespace`|Muestra discos y espacio disponible|

**Ejemplo:**

```cmd
wmic os get caption,version
```

> Muestra el nombre y versión del sistema operativo.
## 8. `ver` y `winver` 

Versión de Windows

|Comando|Descripción|
|---|---|
|`ver`|Muestra la versión de Windows en CMD|
|`winver`|Abre ventana con versión completa de Windows|
## 9. `echo %PATH%` 

Rutas del sistema

Muestra todas las rutas donde Windows busca ejecutables.

```cmd
echo %PATH%
```

> Devuelve la lista de rutas separadas por `;`.
## 10. `setx` 

Consultar y establecer variables permanentes

`setx` permite establecer variables de entorno de forma permanente (persisten después de reiniciar).

**Ejemplo:**

```cmd
setx MI_VARIABLE "ValorPersistente"
setx PATH "%PATH%;C:\MiCarpeta"
```

> Crea una variable persistente y añade una carpeta al PATH.
## 11. `assoc` y `ftype` 

Asociaciones de archivos

|Comando|Descripción|
|---|---|
|`assoc`|Lista las asociaciones de extensiones con tipos de archivo|
|`assoc .txt`|Muestra qué programa abre archivos `.txt`|
|`ftype`|Muestra las aplicaciones asociadas a cada tipo de archivo|

**Ejemplo combinado:**

```cmd
assoc .bat
ftype batfile
```

> Muestra cómo se ejecutan los scripts `.bat`.
## 12. Combinación 

```cmd
@echo off
systeminfo > entorno.txt
echo Variables de entorno: >> entorno.txt
set >> entorno.txt
ipconfig /all >> entorno.txt
wmic cpu get name >> entorno.txt
```

> Genera un archivo `entorno.txt` con información completa del sistema, red, CPU y variables.
## 💡 Consejos 

- Usa CMD como **Administrador** para obtener información completa del sistema.
    
- Combina `systeminfo`, `wmic`, `ipconfig` y `set` para obtener informes detallados.
    
- `setx` permite crear variables permanentes que persisten tras reiniciar.
    
- Redirige la salida con `>` o `>>` para generar registros o informes.
    
