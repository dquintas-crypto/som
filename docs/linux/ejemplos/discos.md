---
title: ​💾​ Disco y espacio
---

# ​💾​ Disco y espacio

## 1. `diskpart` 

Administración avanzada de discos

Herramienta poderosa para crear, eliminar, formatear y asignar letras de unidades.

**Ejemplo de uso básico:**

```cmd
diskpart
list disk
select disk 0
list volume
select volume 2
assign letter=E
exit
```

> Selecciona el disco 0, lista volúmenes, selecciona el volumen 2 y le asigna la letra E.

**Comandos clave dentro de Diskpart:**

- `list disk` — Lista todos los discos físicos.
    
- `select disk <n>` — Selecciona un disco.
    
- `list volume` — Lista todos los volúmenes.
    
- `select volume <n>` — Selecciona un volumen.
    
- `create partition primary size=5000` — Crea una partición primaria de 5000 MB.
    
- `format fs=ntfs quick` — Formatea la partición en NTFS rápidamente.
    
- `assign letter=F` — Asigna una letra de unidad.
    
- `delete partition` — Elimina la partición seleccionada.
    
## 2. `chkdsk` 

Comprobar y reparar discos

Verifica el sistema de archivos y corrige errores.

|Comando|Descripción|
|---|---|
|`chkdsk C:`|Verifica el disco C: sin repararlo|
|`chkdsk C: /f`|Corrige errores automáticamente|
|`chkdsk D: /r`|Repara sectores defectuosos y recupera información|
|`chkdsk E: /scan`|Escaneo en línea del disco|

**Ejemplo:**

```cmd
chkdsk C: /f /r
```

> Revisa y corrige errores del disco C:, recuperando información de sectores defectuosos.
## 3. `format` 

Formatear unidades

|Comando|Descripción|
|---|---|
|`format E: /FS:NTFS /Q`|Formatea la unidad E: en NTFS rápidamente|
|`format D: /FS:FAT32 /V:Datos`|Formatea D: en FAT32 y asigna etiqueta "Datos"|

**Ejemplo:**

```cmd
format F: /FS:NTFS /Q /V:Backup
```

> Formatea la unidad F: en NTFS rápidamente y le asigna el nombre "Backup".
## 4. `diskraid` 

Gestión de RAID (si disponible)

Permite consultar o configurar matrices RAID mediante CMD en sistemas compatibles.

|Comando|Descripción|
|---|---|
|`diskraid /status`|Muestra el estado de los arreglos RAID|
|`diskraid /list`|Lista los discos RAID disponibles|
|`diskraid /create ...`|Crea un nuevo arreglo RAID (requiere parámetros específicos)|

**Ejemplo:**

```cmd
diskraid /status
```

> Muestra información sobre la configuración y estado de los RAID.
## 5. `mountvol` 

Administrar puntos de montaje

Permite montar o desmontar volúmenes en carpetas.

|Comando|Descripción|
|---|---|
|`mountvol`|Lista todos los volúmenes y sus puntos de montaje|
|`mountvol X: /D`|Desmonta el volumen asignado a la letra X:|
|`mountvol X: \?\Volume{GUID}\`|Monta un volumen usando su GUID|

**Ejemplo:**

```cmd
mountvol E: /D
```

> Desmonta el volumen asignado a la unidad E:.
## 6. `fsutil` 

Utilidades avanzadas del sistema de archivos

Permite operaciones avanzadas con volúmenes y archivos.

|Comando|Descripción|
|---|---|
|`fsutil volume diskfree C:`|Muestra espacio libre y total en C:|
|`fsutil fsinfo drives`|Lista todas las unidades disponibles|
|`fsutil fsinfo ntfsinfo C:`|Muestra información NTFS de la unidad|
|`fsutil file createnew archivo.txt 1024`|Crea un archivo de 1024 bytes|

**Ejemplo:**

```cmd
fsutil volume diskfree D:
```

> Muestra el espacio libre y total en la unidad D:.
## 7. `wmic logicaldisk` 

Información de discos y volúmenes

Proporciona detalles del hardware y unidades de almacenamiento.

|Comando|Descripción|
|---|---|
|`wmic logicaldisk get name,size,freespace,filesystem`|Muestra letra, tamaño, espacio libre y sistema de archivos|
|`wmic diskdrive get model,serialnumber,size`|Muestra información física de los discos|

**Ejemplo:**

```cmd
wmic logicaldisk get name,size,freespace,filesystem
```

> Lista todas las unidades con su tamaño, espacio libre y tipo de sistema de archivos.
## 8. `mount` y `subst` 

Montar carpetas como unidades (subst)

`subst` permite asignar letras de unidad a carpetas.

|Comando|Descripción|
|---|---|
|`subst X: C:\Proyectos`|Asigna la letra X: a la carpeta C:\Proyectos|
|`subst X: /d`|Elimina la unidad virtual X:|

**Ejemplo:**

```cmd
subst Z: D:\Backup\2025
```

> Crea la unidad virtual Z: apuntando a la carpeta D:\Backup\2025.
## 9. `defrag` 

Desfragmentar discos

Optimiza la disposición de archivos en discos mecánicos.

|Comando|Descripción|
|---|---|
|`defrag C:`|Desfragmenta el disco C:|
|`defrag D: /U /V`|Desfragmenta mostrando progreso y estadísticas detalladas|
|`defrag E: /L`|Realiza un análisis sin modificar archivos|

**Ejemplo:**

```cmd
defrag C: /U /V
```

> Desfragmenta C: mostrando estadísticas y progreso en pantalla.
## 10. `compact` 

Comprimir archivos y carpetas NTFS

|Comando|Descripción|
|---|---|
|`compact /c archivo.txt`|Comprime un archivo|
|`compact /u archivo.txt`|Descomprime un archivo|
|`compact /s:C:\Carpeta /i /Q`|Comprime todos los archivos de la carpeta (modo silencioso)|

**Ejemplo:**

```cmd
compact /c /s:C:\Documentos /i /Q
```

> Comprime todos los archivos dentro de C:\Documentos de forma silenciosa.
## 💡 Consejos 

- Ejecuta CMD como **Administrador** para manipular discos y particiones.
    
- `diskpart`, `chkdsk`, `format` y `fsutil` son comandos **potentes**: usar con precaución.
    
- Para discos de gran capacidad, `defrag` y `fsutil` ayudan a optimizar el rendimiento.
    
- `wmic` y `mountvol` permiten obtener información detallada de hardware y puntos de montaje


[[​🖥️​ Comandos Windows (CMD)#💾 Discos y almacenamiento| 👈 volver]]

