---
title: ​🧮​ Variables y Scripts 
---

# ​🧮​ Variables y Scripts

## 1. `set` 

Definir y mostrar variables de entorno

|Comando|Descripción|
|---|---|
|`set`|Muestra todas las variables de entorno|
|`set VARIABLE=valor`|Crea o modifica una variable temporal|
|`echo %VARIABLE%`|Muestra el valor de una variable|
|`set /p VARIABLE=Ingrese valor:`|Solicita al usuario un valor para la variable|

**Ejemplo:**

```cmd
set curso=SMR
echo Bienvenido al curso %curso%
```

> Crea la variable `curso` y muestra un mensaje personalizado.


## 2. `echo` 

Mostrar mensajes en scripts

|Comando|Descripción|
|---|---|
|`echo Mensaje`|Muestra un mensaje en pantalla|
|`echo.`|Imprime una línea en blanco|
|`@echo off`|Oculta los comandos en scripts para que no se muestren|
|`echo on`|Vuelve a mostrar los comandos|

**Ejemplo en script:**

```cmd
@echo off
echo Iniciando script...
pause
echo Script finalizado.
```

> Script que muestra mensajes sin mostrar los comandos ejecutados.


## 3. `pause` 

Detiene temporalmente la ejecución de un script mostrando el mensaje "Presione una tecla para continuar...".

**Ejemplo:**

```cmd
@echo off
echo Proceso en curso...
pause
echo Continuando...
```

> Permite al usuario revisar información antes de continuar.


## 4. Redirección y Pipes 

Guardar o procesar salida

|Símbolo|Descripción|
|---|---|
|`>`|Redirige la salida a un archivo, reemplazando contenido|
|`>>`|Redirige la salida a un archivo, agregando contenido|
|`|`|

**Ejemplo combinado:**

```cmd
ipconfig /all > config.txt
netstat -an | find "LISTEN" >> config.txt
```

> Guarda información de red en un archivo y agrega las conexiones en escucha.


## 5. Condicionales y lógica básica

**Uso de `if` en scripts:**

```cmd
@echo off
set /p edad=Ingrese su edad:
if %edad% GEQ 18 (
    echo Eres mayor de edad.
) else (
    echo Eres menor de edad.
)
```

> Evalúa la edad ingresada y muestra un mensaje según condición.


## 6. Bucles — `for`

Permite iterar sobre archivos, variables o rangos.

|Comando|Descripción|
|---|---|
|`for %%i in (*.txt) do echo %%i`|Itera sobre todos los archivos `.txt` y los muestra|
|`for /L %%i in (1,1,5) do echo %%i`|Itera de 1 a 5 y muestra cada número|
|`for /F %%i in (lista.txt) do echo %%i`|Itera sobre líneas de un archivo|

**Ejemplo:**

```cmd
for %%f in (*.bat) do echo Archivo encontrado: %%f
```

> Muestra todos los scripts `.bat` en la carpeta actual.


## 7. `call` 

Llamar otros scripts

Permite ejecutar otro script desde un script principal y volver al original.

**Ejemplo:**

```cmd
@echo off
call script2.bat
echo Regresando al script principal
```

> Ejecuta `script2.bat` y luego continúa con el script principal.


## 8. `goto` y etiquetas 

Saltos dentro de scripts

Permite controlar el flujo de ejecución mediante etiquetas.

**Ejemplo:**

```cmd
@echo off
set /p opcion=Ingrese 1 o 2:
if %opcion%==1 goto OPCION1
if %opcion%==2 goto OPCION2
:OPCION1
echo Opción 1 seleccionada
goto FIN
:OPCION2
echo Opción 2 seleccionada
:FIN
echo Fin del script
```

> El script salta según la opción ingresada.


## 9. Variables especiales y argumentos

|Variable|Descripción|
|---|---|
|`%0`|Nombre del script|
|`%1, %2,...`|Argumentos pasados al script|
|`%CD%`|Carpeta actual|
|`%DATE%`|Fecha actual|
|`%TIME%`|Hora actual|
|`%USERNAME%`|Usuario actual|
|`%ERRORLEVEL%`|Código de salida del último comando|

**Ejemplo:**

```cmd
@echo off
echo Script: %0
echo Primer argumento: %1
echo Usuario: %USERNAME%
```

> Muestra información sobre el script y el usuario.


## 10. Ejemplo completo de script automatizado

```cmd
@echo off
set /p nombre=Ingrese su nombre:
echo Hola %nombre%, bienvenido!
set /p opcion=Desea ver la fecha y hora? (S/N):
if /I "%opcion%"=="S" (
    echo Fecha: %DATE%
    echo Hora: %TIME%
) else (
    echo No se mostrará fecha y hora.
)
pause
```

> Script interactivo que solicita información y realiza acciones según las respuestas.


## 💡 Consejos útiles

- Usa `@echo off` al inicio de tus scripts para limpiar la salida.
    
- Las variables definidas con `set` duran solo mientras dure la sesión del CMD.
    
- Combina `for`, `if`, `goto` y `call` para scripts más complejos.
    
- Prueba tus scripts en carpetas de prueba antes de aplicarlos a datos importantes.
    
