---
title: ​🔐​ Permisos y propietarios
---

# ​🔐​ Permisos y propietarios


## 1. `net user` 

Administrar usuarios locales

Permite crear, modificar o eliminar cuentas de usuario.

|Comando|Descripción|
|---|---|
|`net user`|Muestra todos los usuarios locales del sistema|
|`net user nombre_usuario`|Muestra información detallada de un usuario|
|`net user nombre_usuario contraseña /add`|Crea un nuevo usuario con contraseña|
|`net user nombre_usuario /delete`|Elimina un usuario|
|`net user nombre_usuario /active:no`|Desactiva una cuenta de usuario|
|`net user nombre_usuario /active:yes`|Reactiva una cuenta deshabilitada|

**Ejemplos:**

```cmd
net user alumno123 Contraseña123 /add
net user alumno123 /active:no
```

> Crea un nuevo usuario y luego lo desactiva temporalmente.
## 2. `net localgroup` 

Administrar grupos locales

Permite ver, crear o modificar grupos locales en el sistema.

|Comando|Descripción|
|---|---|
|`net localgroup`|Muestra todos los grupos locales disponibles|
|`net localgroup Administradores`|Muestra los miembros del grupo Administradores|
|`net localgroup Profesores /add`|Crea un nuevo grupo llamado Profesores|
|`net localgroup Profesores alumno123 /add`|Añade un usuario al grupo|
|`net localgroup Profesores alumno123 /delete`|Quita un usuario del grupo|
|`net localgroup Profesores /delete`|Elimina el grupo|

**Ejemplo combinado:**

```cmd
net localgroup Soporte /add
net localgroup Soporte tecnico1 /add
```

> Crea el grupo **Soporte** y agrega al usuario **tecnico1**.
## 3. `whoami` 

Identificar el usuario actual

Muestra información del usuario actual que ejecuta la consola.

|Comando|Descripción|
|---|---|
|`whoami`|Muestra el nombre del usuario actual|
|`whoami /groups`|Lista los grupos a los que pertenece el usuario|
|`whoami /priv`|Muestra los privilegios del usuario|

**Ejemplo:**

```cmd
whoami /groups
```

> Muestra todos los grupos de seguridad asociados al usuario actual.
## 4. `net accounts` 

Configuración de contraseñas y políticas

Permite ajustar políticas de seguridad y contraseñas del sistema local.

|Comando|Descripción|
|---|---|
|`net accounts`|Muestra la configuración actual de contraseñas|
|`net accounts /minpwlen:8`|Establece una longitud mínima de contraseña de 8 caracteres|
|`net accounts /maxpwage:30`|Obliga a cambiar la contraseña cada 30 días|
|`net accounts /lockoutthreshold:3`|Bloquea una cuenta tras 3 intentos fallidos|

**Ejemplo combinado:**

```cmd
net accounts /minpwlen:8 /maxpwage:60 /lockoutthreshold:5
```

> Configura políticas básicas de seguridad de contraseñas.
## 5. `icacls` 

Permisos y control de acceso

Permite ver, modificar o restaurar permisos NTFS en archivos y carpetas.

|Comando|Descripción|
|---|---|
|`icacls C:\carpeta`|Muestra los permisos de la carpeta|
|`icacls C:\carpeta /grant Usuario:F`|Concede permiso **Total (Full control)** a un usuario|
|`icacls C:\carpeta /grant Usuario:R`|Concede permiso **Solo lectura**|
|`icacls C:\carpeta /remove Usuario`|Elimina los permisos del usuario|
|`icacls C:\carpeta /inheritance:r`|Desactiva la herencia de permisos|
|`icacls C:\carpeta /save permisos.txt /t`|Guarda permisos de forma recursiva|
|`icacls C:\ /restore permisos.txt`|Restaura permisos desde un archivo|

**Ejemplos combinados:**

```cmd
icacls C:\Proyectos /grant alumno123:M /t
```

> Da al usuario **alumno123** permisos de **modificación** en todos los subdirectorios de `C:\Proyectos`.

```cmd
icacls D:\Compartido /grant Todos:R
```

> Da acceso de **solo lectura** a todos los usuarios.
## 6. `runas` 

Permite ejecutar programas o comandos con las credenciales de otro usuario.

|Comando|Descripción|
|---|---|
|`runas /user:Administrador cmd`|Abre una consola como Administrador|
|`runas /user:profesor notepad.exe`|Abre el Bloc de notas con otro usuario|

**Ejemplo:**

```cmd
runas /user:Administrador "mmc compmgmt.msc"
```

> Abre la consola de administración de equipos con privilegios de administrador.
## 7. `net session` y `net share` 

Recursos compartidos y sesiones

|Comando|Descripción|
|---|---|
|`net session`|Muestra las sesiones de red activas|
|`net share`|Muestra las carpetas compartidas del equipo|
|`net share Datos=C:\Datos`|Crea un recurso compartido llamado _Datos_|
|`net share Datos /delete`|Deja de compartir la carpeta _Datos_|

**Ejemplo combinado:**

```cmd
net share Recursos=C:\Recursos /grant:Usuarios,READ
```

> Crea un recurso compartido con permisos de lectura para todos los usuarios.
## 8. `net group` 

Grupos en dominios (usado con Active Directory)

_Solo disponible en equipos unidos a un dominio._

|Comando|Descripción|
|---|---|
|`net group`|Lista los grupos del dominio actual|
|`net group Profesores /domain`|Muestra miembros del grupo Profesores en el dominio|
|`net group Profesores alumno123 /add /domain`|Añade un usuario al grupo en el dominio|

**Ejemplo:**

```cmd
net group Alumnos /domain
```

> Lista los usuarios pertenecientes al grupo _Alumnos_ en el dominio.
## 9. `dsquery` y `dsadd` 

Administración avanzada de usuarios (solo dominio)

|Comando|Descripción|
|---|---|
|`dsquery user -name alumno*`|Busca usuarios cuyo nombre empiece por _alumno_|
|`dsadd user "CN=Alumno1,OU=Usuarios,DC=centro,DC=local" -pwd P@ssword1`|Crea un usuario en el dominio|

**Ejemplo:**

```cmd
dsquery user -samid profesor1
```

> Busca un usuario específico dentro del dominio.
## 💡 Consejos

- Ejecuta CMD como **Administrador** para usar la mayoría de comandos de usuarios y permisos.
    
- `whoami /priv` ayuda a verificar los privilegios antes de ejecutar cambios.
    
- Usa `icacls /save` antes de modificar permisos para poder restaurarlos.
    
- Para dominios, usa `net group`, `dsquery` y `dsadd`.
    
