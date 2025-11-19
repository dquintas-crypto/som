---
title: ​⚙️​ Procesos y sistemas
---

# ​⚙️​ Procesos y sistemas

## 1. `ps`

| Comando           | Descripción                                       |
| ----------------- | ------------------------------------------------- |
| `ps`              | Muestra procesos del usuario actual               |
| `ps -e`           | Muestra todos los procesos del sistema            |
| `ps -f`           | Muestra formato completo                          |
| `ps aux`          | Lista detallada de todos los procesos             |
| `ps aux | grep nombre` | Filtra procesos por nombre                   |

**Ejemplos combinados:**

```bash
ps aux | grep firefox
````

> Busca procesos cuyo nombre contenga "firefox".

```bash
ps -ef
```

> Muestra procesos con árbol de jerarquías.



## 2. `top` y `htop`

| Comando | Descripción                     |
| ------- | ------------------------------- |
| `top`   | Muestra procesos en tiempo real |
| `htop`  | Similar a top pero más visual   |

**Ejemplos combinados:**

```bash
top
```

> Vista dinámica de procesos.

```bash
htop
```

> Vista avanzada (si está instalado).



## 3. `kill`

| Comando        | Descripción                              |
| -------------- | ---------------------------------------- |
| `kill PID`     | Envía señal SIGTERM para detener proceso |
| `kill -9 PID`  | Fuerza detención (SIGKILL)               |
| `kill -15 PID` | Finaliza de forma elegante               |

**Ejemplos combinados:**

```bash
kill 2310
```

> Envía señal de parada a ese PID.

```bash
kill -9 4500
```

> Fuerza la detención del proceso 4500.



## 4. `pkill` y `killall`

| Comando          | Descripción                            |
| ---------------- | -------------------------------------- |
| `pkill nombre`   | Mata procesos por nombre               |
| `killall nombre` | Mata todos los procesos con ese nombre |

**Ejemplos combinados:**

```bash
pkill firefox
```

> Cierra todos los procesos llamados *firefox*.

```bash
killall python3
```

> Detiene todos los procesos python3.



## 5. `jobs`, `fg`, `bg`

| Comando    | Descripción                              |
| ---------- | ---------------------------------------- |
| `jobs`     | Muestra procesos en segundo plano        |
| `fg %n`    | Trae al primer plano un proceso detenido |
| `bg %n`    | Envía el proceso al segundo plano        |
| `Ctrl + Z` | Detiene temporalmente el proceso actual  |

**Ejemplos combinados:**

```bash
sleep 100 &
```

> Ejecuta un proceso en segundo plano.

```bash
fg %1
```

> Trae al foreground el proceso nº1.



## 6. `systemctl` 

| Comando                               | Descripción                   |
| ------------------------------------- | ----------------------------- |
| `systemctl status servicio`           | Estado del servicio           |
| `systemctl start servicio`            | Inicia un servicio            |
| `systemctl stop servicio`             | Detiene un servicio           |
| `systemctl restart servicio`          | Reinicia un servicio          |
| `systemctl enable servicio`           | Habilita inicio automático    |
| `systemctl disable servicio`          | Deshabilita inicio automático |
| `systemctl list-units --type=service` | Lista servicios cargados      |

**Ejemplos combinados:**

```bash
systemctl status ssh
```

> Muestra estado del servicio SSH.

```bash
systemctl restart apache2
```

> Reinicia el servidor web Apache.


## 7. `uptime`, `who`, `hostname`

| Comando       | Descripción                                  |
| ------------- | -------------------------------------------- |
| `uptime`      | Tiempo encendido, usuarios conectados, carga |
| `who`         | Usuarios conectados                          |
| `hostname`    | Nombre del equipo                            |
| `hostname -I` | IP del sistema                               |

**Ejemplos combinados:**

```bash
uptime
```

> Muestra los últimos 1, 5 y 15 minutos de carga.


## 8. Uso de memoria y CPU

| Comando   | Descripción                       |
| --------- | --------------------------------- |
| `free -h` | Uso de memoria en formato legible |
| `vmstat`  | Estadísticas de memoria y CPU     |
| `mpstat`  | Uso detallado por CPU             |

**Ejemplos combinados:**

```bash
free -h
```

> Muestra RAM total, usada y libre.


## 9. Uso de disco

| Comando          | Descripción                  |
| ---------------- | ---------------------------- |
| `df -h`          | Uso de disco por particiones |
| `du -sh carpeta` | Tamaño total de una carpeta  |
| `lsblk`          | Lista discos y particiones   |

**Ejemplos combinados:**

```bash
du -sh /var/log
```

> Muestra el tamaño total de `/var/log`.



## 10. Combinaciones

* Ver los 10 procesos que más CPU consumen:

```bash
ps aux --sort=-%cpu | head
```

* Ver los 10 que más memoria consumen:

```bash
ps aux --sort=-%mem | head
```

* Reiniciar servicios si están caídos:

```bash
systemctl is-active apache2 || systemctl restart apache2
```

> Reinicia apache solo si está detenido.

---

## 💡 Consejos

* Detener un proceso que se ha quedado colgado:

```bash
kill -9 PID
```

* Ver solo servicios fallidos:

```bash
systemctl --failed
```

* Ver procesos como árbol:

```bash
ps axjf
```

* Ver cuántos núcleos tiene la CPU:

```bash
nproc
```


