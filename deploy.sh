#!/bin/bash

# Script de despliegue para VPS
# deploy.sh

set -e

echo "🐼 Iniciando despliegue de Estudios Panda..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuración
DOMAIN="estudios-panda.tu-dominio.com"
EMAIL="tu-email@dominio.com"
CONTAINER_NAME="estudios-panda-app"

echo -e "${YELLOW}📦 Construyendo imagen Docker...${NC}"
docker-compose -f docker-compose.prod.yml build

echo -e "${YELLOW}🔄 Deteniendo contenedor anterior si existe...${NC}"
docker-compose -f docker-compose.prod.yml down || true

echo -e "${YELLOW}🚀 Iniciando nueva versión...${NC}"
docker-compose -f docker-compose.prod.yml up -d

echo -e "${YELLOW}⏳ Esperando que la aplicación esté lista...${NC}"
sleep 30

echo -e "${YELLOW}🔍 Verificando estado del contenedor...${NC}"
if docker ps | grep -q $CONTAINER_NAME; then
    echo -e "${GREEN}✅ Contenedor ejecutándose correctamente${NC}"
else
    echo -e "${RED}❌ Error: El contenedor no está ejecutándose${NC}"
    docker logs $CONTAINER_NAME
    exit 1
fi

echo -e "${YELLOW}🩺 Verificando health check...${NC}"
if docker exec $CONTAINER_NAME wget --no-verbose --tries=1 --spider http://localhost/health; then
    echo -e "${GREEN}✅ Health check exitoso${NC}"
else
    echo -e "${RED}❌ Error: Health check falló${NC}"
    exit 1
fi

echo -e "${YELLOW}🧹 Limpiando imágenes no utilizadas...${NC}"
docker image prune -f

echo -e "${GREEN}🎉 ¡Despliegue completado exitosamente!${NC}"
echo -e "${GREEN}🌐 Aplicación disponible en: https://${DOMAIN}${NC}"

# Mostrar logs recientes
echo -e "${YELLOW}📋 Últimos logs:${NC}"
docker logs --tail 20 $CONTAINER_NAME
