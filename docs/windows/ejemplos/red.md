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

> Muestra todas las direcciones IP y sus direcciones MAC asociadas en la red local.
 ## 7. `net` 

Utilidades de red y usuarios

|Comando|Descripción|
|---|---|
|`net user`|Muestra los usuarios locales|
|`net share`|Muestra los recursos compartidos|
|`net view`|Muestra los equipos visibles en la red|
|`net use`|Conecta o desconecta unidades de red|

**Ejemplos combinados:**

```cmd
net use Z: \\Servidor\Recursos /user:Alumno123
```

> Conecta la carpeta compartida `\\Servidor\Recursos` como unidad `Z:`.

```cmd
net view
```

> Muestra los equipos conectados en la red local.
 ## 8. `pathping`  

Combina `ping` y `tracert`
Muestra el recorrido y la latencia promedio de cada salto.

|Comando|Descripción|
|---|---|
|`pathping google.com`|Rastrea la ruta e informa de la pérdida de paquetes en cada salto|

**Ejemplo:**

```cmd
pathping 8.8.8.8
```

> Analiza la ruta hacia el DNS de Google e identifica dónde se pierden paquetes.
 ## 9. `netsh`  

Configuración avanzada de red
Herramienta de línea de comandos para configurar interfaces, cortafuegos, Wi-Fi, etc.

|Comando|Descripción|
|---|---|
|`netsh wlan show profiles`|Lista las redes Wi-Fi guardadas|
|`netsh wlan show profile "MiRed" key=clear`|Muestra la contraseña guardada de una red|
|`netsh int ip reset`|Restablece la configuración TCP/IP|
|`netsh advfirewall show allprofiles`|Muestra la configuración actual del firewall|

**Ejemplos combinados:**

```cmd
netsh wlan export profile folder=C:\wifi key=clear
```

> Exporta todas las redes Wi-Fi guardadas (incluyendo contraseñas) a un archivo XML en `C:\wifi`.

```cmd
netsh int ip reset
```

> Restablece el protocolo TCP/IP a su configuración predeterminada.
 ## 💡 Consejos útiles

- Usa `Ctrl + C` para detener comandos como `ping -t` o `pathping`.
    
- `ipconfig /flushdns` ayuda a resolver errores al acceder a páginas web.
    
- Combina `netstat` con `find` para buscar procesos o puertos específicos.
    
- `netsh` requiere permisos de administrador para la mayoría de configuraciones.
    
 