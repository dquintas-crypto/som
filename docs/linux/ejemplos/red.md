---
title: 🌐 Red
---


# 🌐 Comandos de red en Linux

## 1. `ip`

| Comando         | Descripción                                                        |
| --------------- | ------------------------------------------------------------------ |
| `ip a`          | Muestra todas las interfaces de red y sus direcciones IP           |
| `ip link`       | Muestra el estado de las interfaces                                |
| `ip route`      | Muestra la tabla de rutas                                          |
| `ip addr add`   | Añade una dirección IP a una interfaz                              |
| `ip addr del`   | Elimina una dirección IP                                           |

**Ejemplos combinados:**

```bash
ip a
````

> Muestra todas las interfaces y direcciones.

```bash
ip route
```

> Muestra la tabla de rutas del sistema.

---

## 2. `ping`

| Comando             | Descripción                       |
| ------------------- | --------------------------------- |
| `ping IP`           | Comprueba conectividad con una IP |
| `ping dominio`      | Comprueba conectividad por nombre |
| `ping -c 4 dominio` | Envía solo 4 paquetes             |

**Ejemplos combinados:**

```bash
ping google.com
```

> Comprueba si hay conexión con Google.

```bash
ping -c 4 8.8.8.8
```

> Envía 4 paquetes al DNS público de Google.

---

## 3. `curl` y `wget`

| Comando       | Descripción                                        |
| ------------- | -------------------------------------------------- |
| `curl url`    | Descarga o muestra contenido desde una URL         |
| `curl -O url` | Descarga un archivo manteniendo el nombre original |
| `wget url`    | Descarga archivos desde internet                   |
| `wget -r url` | Descarga de forma recursiva                        |

**Ejemplos combinados:**

```bash
curl https://example.com
```

> Muestra el HTML de la página.

```bash
wget https://example.com/archivo.zip
```

> Descarga el archivo directamente.

---

## 4. `ss` (Socket Statistics)

| Comando    | Descripción                                 |
| ---------- | ------------------------------------------- |
| `ss -tuln` | Muestra puertos abiertos                    |
| `ss -tnp`  | Muestra conexiones TCP y procesos asociados |
| `ss -l`    | Muestra puertos en escucha                  |

**Ejemplos combinados:**

```bash
ss -tuln
```

> Muestra puertos abiertos de TCP/UDP.

```bash
ss -tnp
```

> Muestra conexiones con su PID.

---

## 5. `nslookup` y `dig`

| Comando              | Descripción                         |
| -------------------- | ----------------------------------- |
| `nslookup dominio`   | Muestra la IP asociada a un dominio |
| `dig dominio`        | Información DNS detallada           |
| `dig +short dominio` | Resumen sencillo del registro DNS   |

**Ejemplos combinados:**

```bash
nslookup google.com
```

> Consulta DNS básica.

```bash
dig +short openai.com
```

> Muestra solo la IP asociada al dominio.

---

## 6. `traceroute`

| Comando            | Descripción                         |
| ------------------ | ----------------------------------- |
| `traceroute host`  | Muestra los saltos hasta un destino |
| `traceroute -I IP` | Usa ICMP en lugar de UDP            |

**Ejemplos combinados:**

```bash
traceroute 8.8.8.8
```

> Muestra la ruta completa hasta el servidor DNS de Google.

---

## 7. `netstat` 

| Comando          | Descripción                           |
| ---------------- | ------------------------------------- |
| `netstat -tulnp` | Puertos abiertos y procesos asociados |
| `netstat -r`     | Tabla de rutas                        |

**Ejemplos combinados:**

```bash
netstat -tulnp
```

> Muestra puertos y sus procesos.

---

## 8. `host`

| Comando              | Descripción                    |
| -------------------- | ------------------------------ |
| `host dominio`       | Consulta DNS simple            |
| `host -t MX dominio` | Consulta registros MX (correo) |

**Ejemplos combinados:**

```bash
host example.com
```

> Consulta DNS sencilla.

---

## 9. Combinaciones

* Ver qué procesos están usando un puerto:

```bash
ss -tulnp | grep 80
```

> Busca procesos escuchando en el puerto 80.

* Extraer solo direcciones IP de un dominio:

```bash
dig +short google.com
```

> Muestra solo la IP asociada al dominio.

* Mostrar solo tráfico activo:

```bash
ss -tp | grep ESTAB
```

> Muestra conexiones establecidas.

---

## 💡 Consejos

* Para comprobar conexión rápida:

```bash
ping -c 1 google.com
```

* Para mirar tu IP local:

```bash
ip a
```

* Para ver si un puerto está libre:

```bash
ss -tuln | grep 8080
```

* Para descargar páginas y analizarlas offline:

```bash
wget -r https://example.com
```

