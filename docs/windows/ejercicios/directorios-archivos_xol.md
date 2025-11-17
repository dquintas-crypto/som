# 🧠 Ejercicios Prácticos — Comandos CMD ✅ (Soluciones)

## 🗂️ 1. Navegación y Directorios

| Objetivo | Comando |
|-----------|----------|
| Mostrar el contenido de la carpeta actual | `dir` |
| Mostrar solo los nombres de archivos sin detalles | `dir /b` |
| Mostrar el contenido de una carpeta grande, deteniendo cada pantalla | `dir /p` |
| Mostrar solo los archivos `.exe` del directorio actual | `dir *.exe` |
| Mostrar el contenido ordenado por fecha (más recientes primero) | `dir /o:-d` |
| Ver todos los elementos, incluidos ocultos y de sistema | `dir /a` |
| Mostrar solo las carpetas (no archivos) | `dir /a:d` |
| Buscar archivos `.txt` en la carpeta actual y subcarpetas | `dir /s *.txt` |
| Crear una carpeta llamada `Proyectos2025` | `mkdir Proyectos2025` |
| Crear una carpeta llamada `Informes` dentro de `Proyectos2025` en un solo comando | `mkdir Proyectos2025\Informes` |
| Ir a la carpeta `C:\Users` | `cd C:\Users` |
| Volver al nivel anterior | `cd ..` |
| Ir al directorio raíz | `cd\` |
| Eliminar la carpeta `temporal` | `rmdir temporal` |
| Eliminar la carpeta `C:\Proyectos\2023` y todo su contenido sin confirmación | `rmdir /s /q C:\Proyectos\2023` |
| Mostrar la estructura de carpetas completa de `C:\Proyectos` incluyendo archivos | `tree C:\Proyectos /f` |
| Mostrar la estructura de carpetas del directorio actual en forma de árbol | `tree /f` |

---

## 🗃️ 2. Archivos

| Objetivo | Comando |
|-----------|----------|
| Copiar el archivo `informe.txt` desde `C:\Datos` a `D:\Backup` | `copy C:\Datos\informe.txt D:\Backup` |
| Copiar todos los archivos `.docx` a la carpeta `E:\Documentos` verificando la copia | `copy *.docx E:\Documentos /v` |
| Copiar todos los `.txt` de la carpeta actual al directorio `D:\Textos` sin pedir confirmación | `copy /y *.txt D:\Textos` |
| Mover todos los archivos `.jpg` desde `C:\Fotos` a `E:\Imagenes` | `move *.jpg E:\Imagenes` |
| Mover todos los archivos `.log` desde `C:\Temp` a `D:\Logs` sin pedir confirmación | `move /y C:\Temp\*.log D:\Logs` |
| Eliminar todos los archivos con extensión `.tmp` de `C:\Temp` y sus subcarpetas | `del /s C:\Temp\*.tmp` |
| Eliminar todos los archivos `.bak` sin pedir confirmación | `del /q *.bak` |
| Cambiar el nombre de `reporte.txt` a `reporte_2025.txt` | `rename reporte.txt reporte_2025.txt` |
| Cambiar la extensión de todos los `.log` a `.txt` | `rename *.log *.txt` |
| Mostrar el contenido del archivo `errores.txt` pausando la salida | `type errores.txt | more` |
| Asignar el atributo de solo lectura a `datos.conf` | `attrib +r datos.conf` |
| Quitar el atributo de oculto al archivo `manual.pdf` | `attrib -h manual.pdf` |
| Crear una copia exacta de `notas.txt` llamada `copia_notas.txt` | `type notas.txt > copia_notas.txt` |
| Añadir el contenido de `log1.txt` al final de `log_total.txt` | `type log1.txt >> log_total.txt` |

---

## 💪 3. Retos combinados (Solución orientativa)

1. **Crea una carpeta llamada `EjerciciosCMD` en tu escritorio, entra en ella y dentro crea otra llamada `Pruebas`.**
   ```cmd
   cd %USERPROFILE%\Desktop
   mkdir EjerciciosCMD && cd EjerciciosCMD && mkdir Pruebas && cd Pruebas
