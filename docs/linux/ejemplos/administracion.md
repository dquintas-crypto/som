---
title: ​⚙️​ Sistema y administración
---

# ​⚙️​ Sistema y administración

## 1. `wmic`  

Interfaz de administración de Windows

Permite obtener información avanzada del sistema, hardware, software y configuraciones.

|Comando|Descripción|
|---|---|
|`wmic os get caption,version`|Muestra el nombre y versión del sistema operativo|
|`wmic cpu get name`|Muestra el modelo del procesador|
|`wmic bios get serialnumber`|Muestra el número de serie del BIOS|
|`wmic logicaldisk get name,size,freespace`|Muestra las unidades y espacio libre|

**Ejemplo:**

```cmd
wmic diskdrive get model,name,size
```

> Lista los discos duros instalados y su tamaño.
 ## 2. `sc`  

Administrar servicios del sistema

Permite crear, iniciar, detener o consultar servicios del sistema Windows.

|Comando|Descripción|
|---|---|
|`sc query`|Muestra todos los servicios y su estado|
|`sc stop wuauserv`|Detiene el servicio de actualizaciones de Windows|
|`sc start spooler`|Inicia el servicio de impresión|
|`sc config nombre_servicio start= disabled`|Deshabilita un servicio|

**Ejemplo:**

```cmd
sc query type= service state= all | find "RUNNING"
```

> Muestra todos los servicios actualmente en ejecución.
 ## 3. `net start` y `net stop` 

Control rápido de servicios

|Comando|Descripción|
|---|---|
|`net start`|Lista los servicios actualmente activos|
|`net start spooler`|Inicia el servicio de impresión|
|`net stop spooler`|Detiene el servicio de impresión|

**Ejemplo combinado:**

```cmd
net stop wuauserv && net start wuauserv
```

> Reinicia el servicio de actualizaciones de Windows.
 ## 4. `taskmgr`, `control`, y `compmgmt.msc`

Ejecutan herramientas gráficas del sistema desde CMD.

|Comando|Descripción|
|---|---|
|`taskmgr`|Abre el Administrador de tareas|
|`control`|Abre el Panel de control|
|`compmgmt.msc`|Abre la Consola de administración de equipos|
|`services.msc`|Abre el Administrador de servicios|
|`devmgmt.msc`|Abre el Administrador de dispositivos|

**Ejemplo:**

```cmd
control printers
```

> Abre directamente la ventana de impresoras y escáneres.
 ## 5. `gpupdate` y `gpresult` 

Políticas de grupo

Permiten actualizar o ver las políticas de grupo aplicadas al sistema o usuario.

|Comando|Descripción|
|---|---|
|`gpupdate /force`|Fuerza la actualización de todas las políticas de grupo|
|`gpresult /R`|Muestra las políticas aplicadas al usuario y equipo actual|
|`gpresult /H resultado.html`|Genera un informe HTML con las políticas aplicadas|

**Ejemplo:**

```cmd
gpresult /H C:\reportes\politicas.html
```

> Guarda un informe completo de políticas en formato HTML.
 ## 6. `shutdown` 

Control de energía y reinicio

|Comando|Descripción|
|---|---|
|`shutdown /s /t 0`|Apaga el sistema inmediatamente|
|`shutdown /r /t 60 /c "Reinicio programado"`|Reinicia en 1 minuto con mensaje|
|`shutdown /a`|Cancela un apagado o reinicio en curso|

**Ejemplo combinado:**

```cmd
shutdown /r /t 120 /c "Reinicio automático para mantenimiento"
```

> Programa un reinicio en 2 minutos con aviso.
 ## 7. `diskpart` 

Administración de discos

Herramienta avanzada para particionar, formatear y gestionar unidades.

**Comandos básicos dentro de `diskpart`:**

```cmd
diskpart
list disk
select disk 0
list volume
select volume 2
assign letter=E
exit
```

> Asigna una letra de unidad a una partición seleccionada.
 ## 8. `bcdedit` 

Editor del gestor de arranque

Permite modificar la configuración del arranque de Windows.

|Comando|Descripción|
|---|---|
|`bcdedit /enum`|Muestra las entradas de arranque|
|`bcdedit /set {current} description "Windows 11 Pro"`|Cambia el nombre de la entrada actual|
|`bcdedit /timeout 10`|Cambia el tiempo de espera del menú de arranque|

**Ejemplo:**

```cmd
bcdedit /set {bootmgr} displaybootmenu yes
```

> Habilita el menú de arranque al iniciar el sistema.
 ## 9. `powercfg` 

Configuración de energía

|Comando|Descripción|
|---|---|
|`powercfg /list`|Muestra los planes de energía disponibles|
|`powercfg /setactive GUID`|Activa un plan de energía concreto|
|`powercfg /hibernate on`|Activa la hibernación|
|`powercfg /energy`|Genera un informe de eficiencia energética|

**Ejemplo:**

```cmd
powercfg /energy /output C:\reportes\energia.html
```

> Crea un informe detallado del uso de energía del sistema.
 ## 10. `reg` 

Administración del registro de Windows

Permite consultar, crear o eliminar claves del registro.

|Comando|Descripción|
|---|---|
|`reg query HKLM\Software`|Consulta una clave del registro|
|`reg add HKCU\Software\MiApp /v Version /t REG_SZ /d 1.0`|Añade una clave nueva|
|`reg delete HKCU\Software\MiApp /f`|Elimina una clave|

**Ejemplo:**

```cmd
reg query HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
```

> Muestra parámetros avanzados de red almacenados en el registro.
 ## 11. `systeminfo` y `driverquery`

|Comando|Descripción|
|---|---|
|`systeminfo`|Muestra información detallada del sistema|
|`driverquery /v`|Lista todos los controladores instalados con detalles|
|`driverquery /fo csv > drivers.csv`|Exporta los controladores a un archivo CSV|

**Ejemplo:**

```cmd
driverquery /si
```

> Muestra información sobre los controladores firmados digitalmente.
 ## 12. `schtasks` 

Programar tareas

Permite crear, eliminar o listar tareas programadas.

|Comando|Descripción|
|---|---|
|`schtasks /query`|Muestra todas las tareas programadas|
|`schtasks /create /sc daily /tn "Backup" /tr "C:\backup.bat" /st 22:00`|Crea una tarea diaria|
|`schtasks /delete /tn "Backup" /f`|Elimina una tarea|

**Ejemplo:**

```cmd
schtasks /create /sc weekly /d MON /tn "Limpieza" /tr "C:\scripts\clean.bat" /st 09:00
```

> Programa una tarea semanal los lunes a las 9:00 a.m.
 ## 💡 Consejos 

- Ejecuta CMD como **Administrador** para usar herramientas de sistema.
    
- Usa `help <comando>` para obtener ayuda detallada.
    
- Los comandos `wmic`, `bcdedit`, `reg` y `powercfg` son **potentes y sensibles**: usa con precaución.
    
- Para scripts automáticos, combina varios comandos con `&&` o crea archivos `.bat`.
    
 