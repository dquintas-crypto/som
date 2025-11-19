---
title: ​💾​ Disco y espacio
---

# ​💾​ Disco y espacio


## 1. `df`

| Comando       | Descripción                                      |
| ------------- | ------------------------------------------------ |
| `df -h`       | Muestra el espacio libre/ocupado en formato legible |
| `df -T`       | Muestra el tipo de sistema de archivos           |
| `df -h /ruta` | Información de una partición específica          |

**Ejemplos combinados:**

```bash
df -h
````

> Muestra el uso de todas las particiones montadas.

```bash
df -h /home
```

> Muestra solo el uso de `/home`.

## 2. `du`

| Comando          | Descripción                                       |
| ---------------- | ------------------------------------------------- |
| `du -sh carpeta` | Tamaño total de una carpeta                       |
| `du -h carpeta`  | Tamaños detallados de subcarpetas                 |
| `du -sh *`       | Tamaño de todo lo que hay en el directorio actual |

**Ejemplos combinados:**

```bash
du -sh /var/log
```

> Tamaño total de la carpeta `/var/log`.

```bash
du -sh *
```

> Tamaño de todas las carpetas del directorio actual.


## 3. `lsblk`

| Comando    | Descripción                          |
| ---------- | ------------------------------------ |
| `lsblk`    | Lista discos y particiones           |
| `lsblk -f` | Muestra sistemas de archivos y UUID  |
| `lsblk -m` | Muestra permisos de cada dispositivo |

**Ejemplos combinados:**

```bash
lsblk -f
```

> Lista discos con sistemas de archivos y UUID.


## 4. `blkid`

| Comando           | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `blkid`           | Información de UUID y tipo de cada partición |
| `blkid /dev/sda1` | Detalles de una partición específica         |

**Ejemplos combinados:**

```bash
blkid
```

> Muestra todas las particiones con sus UUID.


## 5. Montaje (`mount` / `umount`)

| Comando                      | Descripción                |
| ---------------------------- | -------------------------- |
| `mount`                      | Lista particiones montadas |
| `mount /dev/sdX1 /mnt`       | Monta una partición        |
| `mount -o ro /dev/sdX1 /mnt` | Monta en modo solo lectura |
| `umount /mnt`                | Desmonta una partición     |

**Ejemplos combinados:**

```bash
sudo mount /dev/sdb1 /mnt
```

> Monta la partición en `/mnt`.

```bash
sudo umount /mnt
```

> Desmonta la partición.


## 6. Particionado (`fdisk`, `parted`)

| Comando               | Descripción                             |
| --------------------- | --------------------------------------- |
| `sudo fdisk -l`       | Lista discos y particiones              |
| `sudo fdisk /dev/sdX` | Modifica particiones (modo interactivo) |
| `sudo parted -l`      | Lista particiones                       |

**Ejemplos combinados:**

```bash
sudo fdisk -l
```

> Lista todos los discos detectados.


## 7. Información SMART (`smartctl`)

*(Instalar: `sudo apt install smartmontools`)*

| Comando                     | Descripción                |
| --------------------------- | -------------------------- |
| `sudo smartctl -a /dev/sdX` | Información completa SMART |
| `sudo smartctl -H /dev/sdX` | Estado de salud del disco  |

**Ejemplos combinados:**

```bash
sudo smartctl -H /dev/sda
```

> Verifica si el disco está en buen estado.


## 8. Limpieza del sistema

| Comando                              | Descripción                       |
| ------------------------------------ | --------------------------------- |
| `sudo apt autoremove`                | Elimina dependencias no usadas    |
| `sudo apt clean`                     | Limpia el caché de paquetes       |
| `sudo journalctl --vacuum-size=100M` | Reduce tamaño de logs del sistema |

**Ejemplos combinados:**

```bash
sudo journalctl --vacuum-size=200M
```

> Reduce los logs a un máximo de 200 MB.

## 9. `ncdu` (analizador visual de espacio)

*(Instalar: `sudo apt install ncdu`)*

| Comando | Descripción                          |
| ------- | ------------------------------------ |
| `ncdu`  | Analiza uso de disco de forma visual |

**Ejemplos combinados:**

```bash
ncdu /
```

> Analiza el uso de la raíz del sistema.


## 10. Combinaciones

* Mostrar las 10 carpetas más grandes:

```bash
du -sh * | sort -hr | head
```

* Buscar archivos de más de 500 MB:

```bash
find / -size +500M
```

* Ver tamaño de logs en tiempo real:

```bash
watch -n 2 "du -sh /var/log"
```


## 💡 Consejos

* Ver discos:

```bash
lsblk
```

* Ver particiones montadas:

```bash
mount | grep sd
```

* Reducir logs antiguos:

```bash
sudo journalctl --vacuum-time=3d
```

> Elimina logs con más de 3 días.

