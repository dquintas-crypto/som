---
title: 🌐 Red
---

# 🌐 Red

## 1. `ipconfig` 

Muestra información sobre la configuración IP del sistema.

| Comando              | Descripción                                          |
| -------------------- | ---------------------------------------------------- |
| `ipconfig`           | Muestra la configuración básica de red               |
| `ipconfig /all`      | Muestra información detallada (MAC, DNS, DHCP, etc.) |
| `ipconfig /release`  | Libera la dirección IP obtenida por DHCP             |
| `ipconfig /renew`    | Solicita una nueva dirección IP al servidor DHCP     |
| `ipconfig /flushdns` | Limpia la caché de DNS local                         |

**Ejemplos combinados:**

```cmd
ipconfig /all
```

> Muestra toda la información de red detallada de cada adaptador.

```cmd
ipconfig /flushdns
```

> Limpia la caché DNS, útil cuando hay problemas de resolución de nombres.
 ## 2. `ping` 

Envía paquetes ICMP a un destino para comprobar si hay respuesta.

| Comando                 | Descripción                                                  |
| ----------------------- | ------------------------------------------------------------ |
| `ping google.com`       | Envía 4 paquetes a `google.com`                              |
| `ping 8.8.8.8`          | Comprueba conexión directa por IP                            |
| `ping -t google.com`    | Envía pings continuos hasta que se interrumpa con `Ctrl + C` |
| `ping -n 10 google.com` | Envía 10 paquetes                                            |

**Ejemplos combinados:**

```cmd
ping -n 5 1.1.1.1
```

> Envía 5 paquetes a la IP de Cloudflare (`1.1.1.1`).

```cmd
ping -t google.com
```

> Realiza pings continuos a Google para comprobar la estabilidad de la conexión.
 ## 3. `tracert` 

Muestra los saltos que siguen los paquetes hasta llegar al destino.

| Comando                 | Descripción                                                |
| ----------------------- | ---------------------------------------------------------- |
| `tracert google.com`    | Muestra la ruta de red hasta `google.com`                  |
| `tracert -d google.com` | No resuelve nombres de host, solo muestra IPs (más rápido) |

**Ejemplo:**

```cmd
tracert -d openai.com
```

> Rastrea la ruta hacia `openai.com` mostrando únicamente direcciones IP.
 ## 4. `netstat` 

Muestra información sobre conexiones TCP/UDP y puertos en uso.

| Comando       | Descripción                                          |
| ------------- | ---------------------------------------------------- |
| `netstat`     | Muestra conexiones activas                           |
| `netstat -a`  | Muestra todas las conexiones y puertos en escucha    |
| `netstat -n`  | Muestra direcciones IP en formato numérico           |
| `netstat -o`  | Incluye el PID del proceso que usa la conexión       |
| `netstat -an` | Combinación común: muestra todo, en formato numérico |

**Ejemplos combinados:**

```cmd
netstat -an | find "LISTEN"
```

> Muestra únicamente las conexiones en estado de escucha.

```cmd
netstat -ano > conexiones.txt
```

> Guarda todas las conexiones y puertos activos en un archivo de texto.
 ## 5. `nslookup` 

Consulta información DNS sobre un dominio o dirección IP.

| Comando                       | Descripción                                    |
| ----------------------------- | ---------------------------------------------- |
| `nslookup google.com`         | Muestra la IP asociada a un dominio            |
| `nslookup 8.8.8.8`            | Muestra el dominio asociado a una IP (inversa) |
| `nslookup -type=MX gmail.com` | Muestra los registros de correo (MX)           |

**Ejemplos combinados:**

```cmd
nslookup -type=TXT openai.com
```

> Consulta los registros TXT del dominio (por ejemplo, claves SPF o verificación de dominio).
 ## 6. `arp` 

Tabla ARP (asociaciones IP ↔ MAC)

| Comando                                 | Descripción                    |
| --------------------------------------- | ------------------------------ |
| `arp -a`                                | Muestra la tabla ARP actual    |
| `arp -d *`                              | Elimina todas las entradas ARP |
| `arp -s 192.168.1.50 00-AA-BB-CC-DD-EE` | Añade una entrada ARP manual   |

**Ejemplos:**

```cmd
arp -a
```

 ## 💡 Consejos útiles

- Usa `Ctrl + C` para detener comandos como `ping -t`.
    
- `ipconfig /flushdns` ayuda a resolver errores al acceder a páginas web.
    
- Combina `netstat` con `find` para buscar procesos o puertos específicos.
    
    
 