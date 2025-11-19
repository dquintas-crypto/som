---
title: ​📦​ Gestión de paquetes
---

# ​📦​ Gestión de paquetes


## 1. `apt update`

| Comando            | Descripción                                         |
| ------------------ | --------------------------------------------------- |
| `sudo apt update`  | Actualiza la lista de paquetes disponibles           |
| `sudo apt update -y` | Actualiza sin pedir confirmación                   |

**Ejemplos combinados:**

```bash
sudo apt update
````

> Refresca la lista de repositorios.


## 2. `apt upgrade`

| Comando                 | Descripción                            |
| ----------------------- | -------------------------------------- |
| `sudo apt upgrade`      | Actualiza paquetes instalados          |
| `sudo apt full-upgrade` | Actualiza y elimina paquetes obsoletos |
| `sudo apt upgrade -y`   | Actualiza sin preguntar                |

**Ejemplos combinados:**

```bash
sudo apt upgrade
```

> Actualiza todos los paquetes del sistema.

```bash
sudo apt full-upgrade
```

> Realiza una actualización más profunda, manejando dependencias.


## 3. `apt install`

| Comando                              | Descripción                               |
| ------------------------------------ | ----------------------------------------- |
| `sudo apt install paquete`           | Instala un paquete                        |
| `sudo apt install paquete1 paquete2` | Instala múltiples paquetes                |
| `apt show paquete`                   | Muestra información detallada del paquete |
| `apt search palabra`                 | Busca paquetes por nombre o descripción   |

**Ejemplos combinados:**

```bash
sudo apt install htop
```

> Instala el monitor de procesos *htop*.

```bash
apt search editor
```

> Busca paquetes relacionados con *editor*.


## 4. `apt remove` y `apt purge`

| Comando                   | Descripción                                       |
| ------------------------- | ------------------------------------------------- |
| `sudo apt remove paquete` | Elimina un paquete, pero mantiene configuraciones |
| `sudo apt purge paquete`  | Elimina paquete y sus archivos de configuración   |
| `sudo apt autoremove`     | Elimina dependencias que ya no se necesitan       |

**Ejemplos combinados:**

```bash
sudo apt remove firefox
```

> Elimina Firefox, manteniendo configuraciones.

```bash
sudo apt purge firefox
```

> Elimina Firefox y todas las configuraciones asociadas.

```bash
sudo apt autoremove
```

> Limpia dependencias no usadas.


## 5. `dpkg`

| Comando               | Descripción                             |
| --------------------- | --------------------------------------- |
| `dpkg -i archivo.deb` | Instala un paquete `.deb`               |
| `dpkg -r paquete`     | Elimina un paquete                      |
| `dpkg -l`             | Lista paquetes instalados               |
| `dpkg -L paquete`     | Muestra archivos que instala un paquete |

**Ejemplos combinados:**

```bash
sudo dpkg -i google-chrome.deb
```

> Instala Chrome desde un archivo `.deb`.

```bash
dpkg -L bash
```

> Muestra qué archivos pertenecen al paquete *bash*.


## 6. Limpieza del sistema

| Comando               | Descripción                        |
| --------------------- | ---------------------------------- |
| `sudo apt clean`      | Limpia paquetes descargados        |
| `sudo apt autoclean`  | Limpia paquetes obsoletos          |
| `sudo apt autoremove` | Elimina dependencias no necesarias |

**Ejemplos combinados:**

```bash
sudo apt clean
```

> Borra paquetes descargados que ya no se necesitan.


## 7. Repositorios

| Comando                                   | Descripción                           |
| ----------------------------------------- | ------------------------------------- |
| `cat /etc/apt/sources.list`               | Muestra los repositorios configurados |
| `sudo add-apt-repository ppa:repositorio` | Añade un repositorio PPA (Ubuntu)     |

**Ejemplos combinados:**

```bash
sudo add-apt-repository ppa:otto-kesselgulasch/gimp
```

> Añade un PPA para instalar una versión alternativa de GIMP.

## 8. Diagnóstico de paquetes

| Comando                 | Descripción                               |
| ----------------------- | ----------------------------------------- |
| `apt list --installed`  | Muestra paquetes instalados               |
| `apt list --upgradable` | Muestra paquetes que tienen actualización |
| `dpkg --audit`          | Muestra paquetes con problemas            |

**Ejemplos combinados:**

```bash
apt list --upgradable
```

> Comprueba qué paquetes pueden actualizarse.


## 💡 Consejos

* Actualizar sistema completo:

```bash
sudo apt update && sudo apt upgrade -y
```

* Buscar si un paquete está instalado:

```bash
dpkg -l | grep nombre
```

* Ver qué paquete instaló un comando:

```bash
dpkg -S /usr/bin/python3
```

* Instalar desde archivo `.deb` y arreglar dependencias:

```bash
sudo dpkg -i archivo.deb
sudo apt --fix-broken install
```

