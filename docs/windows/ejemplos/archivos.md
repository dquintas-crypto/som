---
title: ​🗃️​ Comandos para Archivos en Windows (CMD)
---

# ​🗃️​ Comandos para Archivos

## 1. `copy`

Copia uno o varios archivos a otra ubicación.

|Comando|Descripción|
|---|---|
|`copy origen destino`|Copia un archivo al destino indicado|
|`copy *.txt D:\Backup`|Copia todos los archivos `.txt` al directorio `D:\Backup`|
|`copy /v archivo.txt D:\`|Verifica que los archivos copiados son correctos|
|`copy /y archivo.txt D:\`|Sobrescribe archivos sin pedir confirmación|

**Ejemplos combinados:**

```cmd
copy C:\Users\Dani\documento.txt D:\Respaldo\ /y
```

> Copia el archivo `documento.txt` a `D:\Respaldo` y sobrescribe si ya existe.

```cmd
copy *.docx E:\Documentos\ /v
```

> Copia todos los archivos `.docx` y verifica los datos tras la copia.
 ## 2. `move` 

Mueve uno o varios archivos de una ubicación a otra.

|Comando|Descripción|
|---|---|
|`move archivo.txt D:\`|Mueve el archivo al destino indicado|
|`move *.jpg E:\Fotos`|Mueve todos los archivos `.jpg` a la carpeta `E:\Fotos`|
|`move /y`|Mueve y sobrescribe archivos sin preguntar|

**Ejemplos combinados:**

```cmd
move /y C:\Temp\*.log D:\Logs\
```

> Mueve todos los archivos `.log` desde `C:\Temp` a `D:\Logs` sin pedir confirmación.
 ## 3. `del` 

Elimina uno o varios archivos.

|Comando|Descripción|
|---|---|
|`del archivo.txt`|Elimina el archivo especificado|
|`del *.tmp`|Elimina todos los archivos con extensión `.tmp`|
|`del /q *.bak`|Elimina sin pedir confirmación|
|`del /s *.log`|Elimina archivos en el directorio y subcarpetas|

**Ejemplos combinados:**

```cmd
del /s /q C:\Temp\*.tmp
```

> Elimina todos los archivos temporales en la carpeta `Temp` y subcarpetas.

```cmd
del /q *.bak
```

> Elimina todos los archivos `.bak` sin pedir confirmación.
 ## 4. `rename` 

|Comando|Descripción|
|---|---|
|`rename archivo.txt archivo_viejo.txt`|Cambia el nombre del archivo|
|`rename *.txt *.bak`|Cambia la extensión de todos los archivos `.txt` a `.bak`|

**Ejemplos combinados:**

```cmd
rename C:\Datos\reporte.txt reporte_2025.txt
```

> Cambia el nombre del archivo `reporte.txt` a `reporte_2025.txt`.

```cmd
rename *.log *.txt
```

> Cambia la extensión de todos los `.log` a `.txt` en el directorio actual.
 ## 5. `type` 

Muestra el contenido de un archivo de texto directamente en la consola.

|Comando|Descripción|
|---|---|
|`type archivo.txt`|Muestra el contenido del archivo|
|`type archivo.txt|more`|

**Ejemplos combinados:**

```cmd
type C:\Logs\errores.txt | more
```

> Muestra el contenido del archivo `errores.txt` pausando la salida.
 ## 6. `attrib` 

Permite visualizar o cambiar atributos de archivos como solo lectura, oculto, etc.

|Comando|Descripción|
|---|---|
|`attrib`|Muestra los atributos de los archivos|
|`attrib +r archivo.txt`|Asigna el atributo de solo lectura|
|`attrib -h archivo.txt`|Quita el atributo de oculto|
|`attrib +h +s archivo.bat`|Marca el archivo como oculto y de sistema|

**Ejemplos combinados:**

```cmd
attrib +h +r C:\Config\datos.conf
```

> Hace que el archivo `datos.conf` sea oculto y de solo lectura.

```cmd
attrib -r *.txt
```

> Quita el atributo de solo lectura de todos los archivos `.txt` del directorio actual.
 ## 7. Combinaciones 

- Copiar el contenido de un archivo en otro:
    

```cmd
type notas.txt > copia_notas.txt
```

> Crea una copia exacta de `notas.txt` llamada `copia_notas.txt`.

- Añadir contenido de un archivo a otro:
    

```cmd
type log1.txt >> log_total.txt
```

> Añade el contenido de `log1.txt` al final de `log_total.txt`.
 ## 💡 Consejos 

- Usa `del /f` para forzar la eliminación de archivos de solo lectura.
    
- Siempre confirma antes de usar `/s` o `/q`, ya que eliminarán sin aviso.
    
- Combina `copy` o `move` con variables de entorno (como `%USERPROFILE%`) para rutas dinámicas.
    
 