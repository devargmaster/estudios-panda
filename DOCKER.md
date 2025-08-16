# Estudios Panda - Despliegue Docker

## 🐳 Configuración Docker para VPS

Este proyecto incluye configuración completa de Docker para despliegue en VPS con nginx proxy reverso y SSL automático.

### 📋 Prerrequisitos

- Docker y Docker Compose instalados en el VPS
- Nginx-proxy y Let's Encrypt companion configurados
- Dominio apuntando al VPS

### 🚀 Despliegue Rápido

1. **Clonar el repositorio:**
```bash
git clone https://github.com/devargmaster/estudios-panda.git
cd estudios-panda
git checkout dev
```

2. **Configurar variables de entorno:**
```bash
# Editar docker-compose.prod.yml
nano docker-compose.prod.yml

# Cambiar:
# - VIRTUAL_HOST=estudios-panda.tu-dominio.com
# - LETSENCRYPT_HOST=estudios-panda.tu-dominio.com  
# - LETSENCRYPT_EMAIL=tu-email@dominio.com
```

3. **Ejecutar despliegue:**
```bash
./deploy.sh
```

### 🔧 Configuración Manual

#### Desarrollo Local
```bash
# Construir y ejecutar
docker-compose up --build

# Acceder en http://localhost:3000
```

#### Producción con nginx-proxy
```bash
# Asegurarse que nginx-proxy esté ejecutándose
docker network create nginx-proxy

# Desplegar aplicación
docker-compose -f docker-compose.prod.yml up -d
```

### 🌐 Configuración de nginx-proxy (en tu VPS)

Si no tienes nginx-proxy configurado, aquí está la configuración básica:

```yaml
# docker-compose-proxy.yml
version: '3.8'

services:
  nginx-proxy:
    image: nginxproxy/nginx-proxy
    container_name: nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - nginx-certs:/etc/nginx/certs
      - nginx-vhost:/etc/nginx/vhost.d
      - nginx-html:/usr/share/nginx/html
    restart: unless-stopped
    networks:
      - nginx-proxy

  letsencrypt:
    image: nginxproxy/acme-companion
    container_name: nginx-proxy-acme
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - nginx-certs:/etc/nginx/certs
      - nginx-vhost:/etc/nginx/vhost.d
      - nginx-html:/usr/share/nginx/html
      - nginx-acme:/etc/acme.sh
    environment:
      - NGINX_PROXY_CONTAINER=nginx-proxy
    restart: unless-stopped
    networks:
      - nginx-proxy

networks:
  nginx-proxy:
    external: true

volumes:
  nginx-certs:
  nginx-vhost:
  nginx-html:
  nginx-acme:
```

### 📊 Monitoreo y Logs

```bash
# Ver logs en tiempo real
docker logs -f estudios-panda-app

# Verificar estado
docker ps | grep estudios-panda

# Health check manual
curl -f http://localhost:3000/health

# Ejecutar comando dentro del contenedor
docker exec -it estudios-panda-app sh
```

### 🔒 Configuración SSL

El SSL se configura automáticamente con Let's Encrypt cuando usas nginx-proxy. Solo asegúrate de:

1. El dominio apunta correctamente al VPS
2. Los puertos 80 y 443 están abiertos
3. VIRTUAL_HOST y LETSENCRYPT_HOST están configurados correctamente

### 🛠️ Solución de Problemas

#### Problema: Contenedor no inicia
```bash
# Ver logs detallados
docker logs estudios-panda-app

# Verificar configuración
docker-compose -f docker-compose.prod.yml config
```

#### Problema: SSL no funciona
```bash
# Verificar certificados
docker exec nginx-proxy-acme ls -la /etc/nginx/certs/

# Ver logs de Let's Encrypt
docker logs nginx-proxy-acme
```

#### Problema: Aplicación no responde
```bash
# Verificar health check
docker exec estudios-panda-app wget --spider http://localhost/health

# Verificar nginx
docker exec estudios-panda-app nginx -t
```

### 🔄 Actualización

Para actualizar la aplicación:

```bash
git pull origin dev
./deploy.sh
```

### 📁 Estructura de Archivos Docker

```
.
├── Dockerfile              # Imagen principal de la app
├── docker-compose.yml      # Desarrollo local
├── docker-compose.prod.yml # Producción con nginx-proxy
├── nginx.conf              # Configuración de nginx
├── .dockerignore           # Archivos excluidos del build
├── deploy.sh               # Script de despliegue
└── DOCKER.md              # Esta documentación
```

### 🎯 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| VIRTUAL_HOST | Dominio para nginx-proxy | estudios-panda.com |
| VIRTUAL_PORT | Puerto interno | 80 |
| LETSENCRYPT_HOST | Dominio para SSL | estudios-panda.com |
| LETSENCRYPT_EMAIL | Email para Let's Encrypt | admin@estudios-panda.com |

### 🚀 Optimizaciones de Producción

- ✅ Multi-stage build para imagen optimizada
- ✅ Nginx con compresión gzip
- ✅ Cache headers para assets estáticos
- ✅ Health checks configurados
- ✅ Security headers incluidos
- ✅ Logs estructurados
- ✅ Reinicio automático de contenedores
